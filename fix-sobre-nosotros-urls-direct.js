import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔧 Corrigiendo URLs en sobre-nosotros.html (enfoque directo)...');

// Leer el archivo
const filePath = path.join(__dirname, 'sobre-nosotros.html');
let html = fs.readFileSync(filePath, 'utf8');

console.log('📄 Archivo leído, procesando URLs...');

// Función para procesar URLs correctamente
function processHtml(html) {
  console.log('🔧 Procesando HTML...');
  
  // Reemplazar todas las variaciones problemáticas de wp-content
  html = html.replace(/\.+\.*\.*\.*\.*\/wp-content\//g, './wp-content/');
  html = html.replace(/\.+\.*\.*\.*\.*\/wp-includes\//g, './wp-includes/');
  
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

// Procesar el HTML
html = processHtml(html);

// Escribir el archivo corregido
fs.writeFileSync(filePath, html);

console.log('✅ URLs corregidas en sobre-nosotros.html');
console.log('🎯 El archivo ahora debería funcionar correctamente');
