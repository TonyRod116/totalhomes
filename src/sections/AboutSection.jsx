const bulletPoints = [
  { text: 'Te asesoramos incluso desde antes que decidas elegirnos, para que comiences con total tranquilidad.', bold: ['Te asesoramos'] },
  { text: 'Realmente te escuchamos y te guiamos con las últimas tendencias, para plasmar en papel la casa de tus sueños.', bold: ['te escuchamos', 'te guiamos con las últimas tendencias'] },
  { text: 'Respetamos y nos responsabilizamos por el plazo de entrega.', bold: ['Respetamos', 'plazo de entrega'] },
  { text: 'Construimos tu casa con los mejores acabados y los máximos estándares de calidad, tal como si fuera la nuestra.', bold: ['mejores acabados', 'calidad'] },
  { text: 'Nos preocupamos por la eficiencia energética, mejorará tu confort, te ahorrará dinero cada año y cuidaremos del planeta.', bold: ['eficiencia energética'] },
]

function AboutSection() {
  return (
    <section id="confianza" className="bg-slate-50">
      <div className="grid lg:grid-cols-2 lg:items-stretch">
        <div
          className="relative order-2 lg:order-1 min-h-[400px] lg:h-auto w-full"
          style={{
            backgroundImage: `url(https://www.totalhomes.es/wp-content/uploads/2021/07/Imagen1-1024x810.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <img
            src="https://www.totalhomes.es/wp-content/uploads/2021/07/Imagen1-1024x810.jpg"
            alt="Equipo Total Homes trabajando"
            className="sr-only"
          />
        </div>
        <div className="space-y-6 order-1 lg:order-2 py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto lg:mx-0">
          <div>
            <h2 className="text-4xl font-bold text-slate-900">
              Construye tu hogar sabiendo que estás en buenas manos
            </h2>
            <div className="mt-4 h-[2px] w-20 bg-[#b79b3c]"></div>
          </div>
          <p className="text-lg text-slate-600 leading-relaxed">
            Mereces disfrutar de cada momento del proceso. Por eso, además de diseñar y
            construir tu casa, <strong>hacemos equipo contigo</strong>:
          </p>
          <ul className="space-y-3">
            {bulletPoints.map((item, index) => {
              let text = item.text
              item.bold.forEach((boldText) => {
                text = text.replace(
                  new RegExp(`(${boldText})`, 'gi'),
                  '<strong>$1</strong>'
                )
              })
              return (
                <li key={index} className="flex items-start gap-3 text-slate-700">
                  <span className="text-[#b79b3c] font-bold">✓</span>
                  <span dangerouslySetInnerHTML={{ __html: text }} />
                </li>
              )
            })}
          </ul>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="https://www.totalhomes.es/contacto/"
              className="bg-[#b79b3c] hover:bg-[#9e8430] text-white px-8 py-3 text-xs tracking-[0.3em] uppercase font-semibold"
            >
              Asesórate gratis
            </a>
            <a
              href="https://www.totalhomes.es/sobre-nosotros/"
              className="border border-[#b79b3c] text-[#b79b3c] px-8 py-3 text-xs tracking-[0.3em] uppercase font-semibold hover:border-[#9e8430] hover:text-[#9e8430]"
            >
              Sobre nosotros
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

