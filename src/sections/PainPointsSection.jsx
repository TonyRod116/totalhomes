const painPoints = [
  'Falta de transparencia',
  'Incertidumbre en cada paso',
  'Pagar de más por tu propia casa',
  'Terminar con una casa que no era la que querías',
]

function PainPointsSection() {
  return (
    <section
      id="problemas"
      className="py-28 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <p className="tracking-[0.5em] text-[0.65rem] uppercase text-slate-400">
            Total Homes
          </p>
          <h2 className="text-[2.4rem] font-bold text-slate-900 leading-snug">
            Hacer realidad tu hogar debería ser simple
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            No hay nada como la sensación de diseñar y construir tu propio hogar.
            Pero, sin un profesional de confianza a tu lado, el proceso puede ser
            complejo y resultar en experiencias que nadie quiere vivir.
          </p>
          <a
            href="https://www.totalhomes.es/contacto/"
            className="inline-flex bg-[#b79b3c] hover:bg-[#9e8430] text-white uppercase tracking-[0.3em] text-[0.65rem] font-semibold px-10 py-3"
          >
            Contactar
          </a>
        </div>
        <div className="space-y-4">
          {painPoints.map((point) => (
            <div
              key={point}
              className="flex items-center gap-5 border border-slate-200 px-5 py-4"
            >
              <div className="w-10 h-10 rounded-full bg-[#f5e6bf] text-[#b28c26] flex items-center justify-center text-lg font-bold">
                ✕
              </div>
              <p className="text-lg font-semibold text-slate-900">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PainPointsSection

