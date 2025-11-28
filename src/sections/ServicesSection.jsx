const servicesContent = [
  {
    title: 'Obra Nueva',
    description:
      'Diseñamos y construimos tu casa de alto standing desde cero y de forma personalizada. Nos aseguramos de usar los materiales con mayor calidad, para que sientas el confort de tu hogar cada día.',
    link: 'https://www.totalhomes.es/obra-nueva/',
    image: 'https://www.totalhomes.es/wp-content/uploads/2021/07/Vista-1-scaled.jpg',
  },
  {
    title: 'Reformas Integrales',
    description:
      'Deja tu casa en nuestras manos. Nuestros expertos diseñarán y devolverán la vida a tu hogar. Te asesoraremos hasta conseguir la casa de tus sueños.',
    link: 'https://www.totalhomes.es/reformas-integrales/',
    image: 'https://www.totalhomes.es/wp-content/uploads/2021/07/20210630_135447000_iOS.jpg',
  },
]

function ServicesSection() {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-12 lg:items-stretch">
        <div className="space-y-6 lg:h-[90%] lg:flex lg:flex-col lg:justify-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900">Nuestros servicios</h2>
            <div className="mt-4 h-[2px] w-20 bg-[#b79b3c]"></div>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Desde asesorarte, hasta pulir el último detalle de tu hogar, contamos con la
            experiencia y las habilidades necesarias para hacer realidad la casa que
            siempre imaginaste.
          </p>
          <a
            href="https://www.totalhomes.es/contacto/"
            className="hidden lg:inline-flex bg-[#b79b3c] hover:bg-[#9e8430] text-white px-8 py-3 text-xs tracking-[0.3em] uppercase font-semibold transition-colors"
          >
            Haz realidad tu hogar
          </a>
        </div>

        {servicesContent.map((service) => (
          <div key={service.title} className="flex flex-col shadow-[0_10px_25px_rgba(0,0,0,0.15)]">
            <a href={service.link} className="flip-card group flex-1">
              <div className="flip-card-inner">
                <div
                  className="flip-card-front"
                  style={{
                    backgroundImage: `url(${service.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '100%',
                  }}
                />
                <div className="flip-card-back bg-[#b79b3c] p-8 flex flex-col justify-center text-left">
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-white leading-relaxed">{service.description}</p>
                </div>
              </div>
            </a>
            <div className="mt-10 text-center flex flex-col items-center justify-center pb-8">
              <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
              <div className="mt-4 h-[2px] w-20 bg-[#b79b3c]"></div>
            </div>
          </div>
        ))}
      </div>
      <div className="lg:hidden text-center mt-8">
        <a
          href="https://www.totalhomes.es/contacto/"
          className="inline-flex bg-[#b79b3c] hover:bg-[#9e8430] text-white px-8 py-3 text-xs tracking-[0.3em] uppercase font-semibold transition-colors"
        >
          Pide tu presupuesto
        </a>
      </div>
    </section>
  )
}

export default ServicesSection

