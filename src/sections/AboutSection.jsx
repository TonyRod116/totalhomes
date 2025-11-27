const bulletPoints = [
  'Te asesoramos desde el primer minuto para que comiences con tranquilidad.',
  'Escuchamos tus ideas y te guiamos con las últimas tendencias.',
  'Respetamos y nos responsabilizamos por los plazos de entrega.',
  'Seleccionamos los mejores acabados y estándares de calidad.',
  'Nos preocupamos por la eficiencia energética y el confort.',
]

function AboutSection() {
  return (
    <section id="confianza" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative h-96 order-2 lg:order-1">
          <img
            src="https://www.totalhomes.es/wp-content/uploads/2021/07/Imagen1-1024x810.jpg"
            alt="Equipo Total Homes trabajando"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-6 order-1 lg:order-2">
          <p className="tracking-[0.5em] text-xs uppercase text-slate-500">
            total homes
          </p>
          <h2 className="text-4xl font-bold text-slate-900">
            Construye tu hogar sabiendo que estás en buenas manos
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Mereces disfrutar de cada momento del proceso. Por eso, además de diseñar y
            construir tu casa, hacemos equipo contigo:
          </p>
          <ul className="space-y-3">
            {bulletPoints.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-700">
                <span className="text-amber-500 font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="https://www.totalhomes.es/contacto/"
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 text-xs tracking-[0.3em] uppercase font-semibold"
            >
              Asesórate gratis
            </a>
            <a
              href="https://www.totalhomes.es/sobre-nosotros/"
              className="border border-slate-300 px-8 py-3 text-xs tracking-[0.3em] uppercase font-semibold hover:border-slate-500"
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

