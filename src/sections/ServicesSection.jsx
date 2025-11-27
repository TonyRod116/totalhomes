const servicesContent = [
  {
    title: 'Obra Nueva',
    description:
      'Diseñamos y construimos tu casa de alto standing desde cero y de forma personalizada. Usamos materiales de máxima calidad para que sientas el confort de tu hogar cada día.',
    link: 'https://www.totalhomes.es/obra-nueva/',
  },
  {
    title: 'Reformas Integrales',
    description:
      'Transformamos viviendas con proyectos integrales que optimizan espacios, mejoran la habitabilidad y elevan la elegancia de cada estancia.',
    link: 'https://www.totalhomes.es/reformas-integrales/',
  },
]

function ServicesSection() {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-8">
        <div className="space-y-6">
          <p className="tracking-[0.5em] text-xs uppercase text-slate-500">
            total homes
          </p>
          <h2 className="text-4xl font-bold text-slate-900">Nuestros servicios</h2>
          <p className="text-slate-600 leading-relaxed">
            Desde asesorarte, hasta pulir el último detalle de tu hogar, contamos con la
            experiencia y las habilidades necesarias para hacer realidad la casa que
            siempre imaginaste.
          </p>
          <a
            href="https://www.totalhomes.es/contacto/"
            className="hidden lg:inline-flex bg-amber-500 text-white px-8 py-3 text-xs tracking-[0.3em] uppercase font-semibold hover:bg-amber-600 transition-colors"
          >
            Haz realidad tu hogar
          </a>
        </div>

        {servicesContent.map((service) => (
          <a
            key={service.title}
            href={service.link}
            className="border border-slate-100 p-6 lg:p-8 hover:-translate-y-2 hover:shadow-2xl transition-all bg-slate-50"
          >
            <p className="tracking-[0.4em] text-xs uppercase text-slate-400 mb-4">
              {service.title}
            </p>
            <h3 className="text-3xl font-semibold text-slate-900 mb-4">{service.title}</h3>
            <div className="w-12 h-[2px] bg-slate-300 mb-6" />
            <p className="text-slate-600 leading-relaxed">{service.description}</p>
          </a>
        ))}
      </div>
      <div className="lg:hidden text-center mt-8">
        <a
          href="https://www.totalhomes.es/contacto/"
          className="inline-flex bg-amber-500 text-white px-8 py-3 text-xs tracking-[0.3em] uppercase font-semibold hover:bg-amber-600 transition-colors"
        >
          Pide tu presupuesto
        </a>
      </div>
    </section>
  )
}

export default ServicesSection

