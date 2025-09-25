import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as cheerio from 'cheerio';
import UserAgent from 'user-agents';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TARGET_URL = 'https://www.totalhomes.es/sobre-nosotros/';
const OUTPUT_DIR = __dirname;
const userAgent = new UserAgent();

console.log('🚀 Iniciando scraping completo de sobre-nosotros...');
console.log('🎯 URL objetivo:', TARGET_URL);

// Función para descargar un archivo
async function downloadFile(url, filePath) {
  try {
    const response = await axios.get(url, {
      headers: {
        'User-Agent': userAgent.toString(),
        'Accept': '*/*',
        'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
      },
      timeout: 30000,
      maxRedirects: 5,
    });

    // Crear directorio si no existe
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(filePath, response.data);
    console.log(`✅ Descargado: ${url} -> ${filePath}`);
    return true;
  } catch (error) {
    console.log(`❌ Error descargando ${url}: ${error.message}`);
    return false;
  }
}

// Función para procesar URLs
function processUrl(url) {
  if (!url) return null;
  
  // Convertir URL relativa a absoluta
  if (url.startsWith('//')) {
    return 'https:' + url;
  }
  if (url.startsWith('/')) {
    return 'https://www.totalhomes.es' + url;
  }
  if (url.startsWith('http')) {
    return url;
  }
  return 'https://www.totalhomes.es/' + url;
}

// Función para obtener ruta local del archivo
function getLocalPath(url, baseUrl = 'https://www.totalhomes.es') {
  try {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;
    
    // Remover parámetros de query
    const cleanPath = pathname.split('?')[0];
    
    // Si es un archivo, mantener la extensión
    if (path.extname(cleanPath)) {
      return cleanPath;
    }
    
    // Si es un directorio, agregar index.html
    return cleanPath.endsWith('/') ? cleanPath + 'index.html' : cleanPath + '/index.html';
  } catch (error) {
    console.log(`Error procesando URL: ${url}`);
    return '/sobre-nosotros.html';
  }
}

// Función para procesar HTML y hacer URLs relativas
function processHtml(html) {
  console.log('🔧 Procesando HTML...');
  
  // Reemplazar URLs absolutas por relativas
  html = html.replace(/https?:\/\/www\.totalhomes\.es\//g, './');
  html = html.replace(/https?:\/\/totalhomes\.es\//g, './');
  
  // Reemplazar rutas de WordPress
  html = html.replace(/\/wp-content\//g, './wp-content/');
  html = html.replace(/\/wp-includes\//g, './wp-includes/');
  
  // Reemplazar rutas específicas de assets
  html = html.replace(/\/wp-content\/themes\//g, './wp-content/themes/');
  html = html.replace(/\/wp-content\/plugins\//g, './wp-content/plugins/');
  html = html.replace(/\/wp-content\/uploads\//g, './wp-content/uploads/');
  
  return html;
}

// Función principal de scraping
async function scrapeSobreNosotros() {
  console.log('🚀 Iniciando scraping completo de sobre-nosotros...');
  
  const downloadedUrls = new Set();
  const failedUrls = new Set();
  
  // Descargar página sobre-nosotros
  console.log('📄 Descargando página sobre-nosotros...');
  const mainResponse = await axios.get(TARGET_URL, {
    headers: {
      'User-Agent': userAgent.toString(),
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8',
      'Accept-Encoding': 'gzip, deflate, br',
      'Connection': 'keep-alive',
      'Upgrade-Insecure-Requests': '1',
    },
    timeout: 30000,
  });

  const $ = cheerio.load(mainResponse.data);
  
  // Procesar HTML para hacer URLs relativas
  let processedHtml = processHtml(mainResponse.data);
  
  // Guardar HTML procesado
  const mainHtmlPath = path.join(OUTPUT_DIR, 'sobre-nosotros.html');
  fs.writeFileSync(mainHtmlPath, processedHtml);
  console.log(`✅ HTML sobre-nosotros guardado: ${mainHtmlPath}`);

  // Extraer y descargar todos los recursos
  const resources = new Set();
  
  // CSS
  $('link[rel="stylesheet"]').each((i, el) => {
    const href = $(el).attr('href');
    if (href) {
      const fullUrl = processUrl(href);
      if (fullUrl) resources.add(fullUrl);
    }
  });
  
  // JavaScript
  $('script[src]').each((i, el) => {
    const src = $(el).attr('src');
    if (src) {
      const fullUrl = processUrl(src);
      if (fullUrl) resources.add(fullUrl);
    }
  });
  
  // Imágenes
  $('img[src]').each((i, el) => {
    const src = $(el).attr('src');
    if (src) {
      const fullUrl = processUrl(src);
      if (fullUrl) resources.add(fullUrl);
    }
  });
  
  // Fuentes
  $('link[href*=".woff"], link[href*=".woff2"], link[href*=".ttf"], link[href*=".eot"]').each((i, el) => {
    const href = $(el).attr('href');
    if (href) {
      const fullUrl = processUrl(href);
      if (fullUrl) resources.add(fullUrl);
    }
  });
  
  // Buscar fuentes en CSS
  const cssText = mainResponse.data;
  const fontRegex = /url\(['"]?([^'")]+\.(woff2?|ttf|eot|svg))['"]?\)/gi;
  let match;
  while ((match = fontRegex.exec(cssText)) !== null) {
    const fontUrl = processUrl(match[1]);
    if (fontUrl) resources.add(fontUrl);
  }

  console.log(`📦 Encontrados ${resources.size} recursos para descargar`);

  // Descargar recursos en lotes
  const resourceArray = Array.from(resources);
  const batchSize = 10;
  
  for (let i = 0; i < resourceArray.length; i += batchSize) {
    const batch = resourceArray.slice(i, i + batchSize);
    console.log(`📥 Procesando lote ${Math.floor(i/batchSize) + 1}/${Math.ceil(resourceArray.length/batchSize)}`);
    
    await Promise.all(batch.map(async (url) => {
      if (downloadedUrls.has(url)) return;
      
      const localPath = getLocalPath(url);
      const fullPath = path.join(OUTPUT_DIR, localPath);
      
      const success = await downloadFile(url, fullPath);
      if (success) {
        downloadedUrls.add(url);
      } else {
        failedUrls.add(url);
      }
    }));
    
    // Pausa entre lotes para no sobrecargar el servidor
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  // Generar reporte
  console.log('\n📊 REPORTE DE SCRAPING:');
  console.log(`✅ Recursos descargados: ${downloadedUrls.size}`);
  console.log(`❌ Recursos fallidos: ${failedUrls.size}`);
  console.log(`📁 Archivo principal: ${mainHtmlPath}`);
  
  if (failedUrls.size > 0) {
    console.log('\n❌ URLs que fallaron:');
    Array.from(failedUrls).slice(0, 10).forEach(url => console.log(`  - ${url}`));
    if (failedUrls.size > 10) {
      console.log(`  ... y ${failedUrls.size - 10} más`);
    }
  }

  // Guardar reporte
  const report = {
    targetUrl: TARGET_URL,
    totalResources: resources.size,
    downloaded: downloadedUrls.size,
    failed: failedUrls.size,
    downloadedUrls: Array.from(downloadedUrls),
    failedUrls: Array.from(failedUrls),
    timestamp: new Date().toISOString()
  };
  
  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'sobre-nosotros-scraping-report.json'),
    JSON.stringify(report, null, 2)
  );
  
  console.log('\n🎉 Scraping de sobre-nosotros completado!');
  console.log(`🌐 Archivo guardado: ${mainHtmlPath}`);
}

// Ejecutar scraping
scrapeSobreNosotros().catch(console.error);
