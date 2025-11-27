const pillars = [
  { title: 'Diseño y asesoramiento personalizado' },
  { title: 'Obras nuevas y reformas integrales' },
  { title: 'Gestión total de la construcción' },
  { title: 'Garantía de plazos y de calidad' },
]

function ValuePropsSection() {
  return (
    <section id="pilares" className="-mt-12 relative z-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white shadow-[0_18px_40px_rgba(15,23,42,0.18)] rounded-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center overflow-hidden">
        {pillars.map((pillar, index) => {
          const isLast = index === pillars.length - 1
          return (
            <div
              key={pillar.title}
              className="relative p-6 flex flex-col items-center gap-3 text-[0.65rem] tracking-[0.28em] font-semibold text-slate-900"
            >
              <span>{pillar.title}</span>

              {!isLast && (
                <>
                  <span className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-10 w-[2px] bg-[#c7a948]" />
                </>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ValuePropsSection

