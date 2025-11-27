const steps = [
  {
    number: '1',
    title: 'Asesórate',
    description:
      'Agenda una cita gratuita y resuelve tus dudas. Descubre el paso a paso y los plazos necesarios para hacer realidad tu hogar.',
  },
  {
    number: '2',
    title: 'Diseñamos tu hogar',
    description:
      'Trabajamos contigo para encontrar el estilo que más te guste y plasmamos en planos la casa de tus sueños.',
  },
  {
    number: '3',
    title: '¡Comienza la construcción!',
    description:
      'Apruebas el proyecto y nos ponemos manos a la obra. Cada vez falta menos para tu nuevo hogar.',
  },
]

function StepsSection() {
  return (
    <section id="proceso" className="py-24 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <p className="tracking-[0.5em] text-xs uppercase text-white/60">
              paso a paso
            </p>
            <h2 className="text-4xl font-bold mt-4">
              Tres pasos para tener el hogar de tus sueños
            </h2>
            <p className="text-white/70 mt-2">Válido para Barcelona y alrededores</p>
          </div>
          <a
            href="https://www.totalhomes.es/contacto/"
            className="inline-flex bg-amber-500 text-white px-8 py-3 text-xs tracking-[0.3em] uppercase font-semibold hover:bg-amber-400 transition-colors"
          >
            Pide tu cita
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="bg-white/5 border border-white/10 p-6 space-y-4">
              <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-lg font-semibold">
                {step.number}
              </div>
              <h3 className="text-2xl font-semibold">{step.title}</h3>
              <p className="text-white/70 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StepsSection

