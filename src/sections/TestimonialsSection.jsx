const testimonials = [
  {
    name: 'Yolanda',
    location: 'Sitges',
    quote:
      'Total Homes es una empresa con profesionales excelentes. Son serios, cumplen los plazos y los materiales son de buena calidad. Tienen precios muy competitivos y, lo más importante, siempre te atienden y responden.',
  },
  {
    name: 'Jordi',
    location: 'Sitges',
    quote:
      'Tony, su gerente, es un gran profesional que nos ayudó a salir de una pesadilla. No dudéis en contratar a Total Homes: tienen excelentes profesionales y un trato humano excepcional.',
  },
  {
    name: 'Sergi',
    location: 'Badalona',
    quote:
      'Profesionalidad y confianza es lo que hemos encontrado en Total Homes. Tony estuvo en todo momento a nuestro lado para asegurarse de que todo iba según nuestro gusto. Los acabados son espectaculares.',
  },
]

function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center">
          <p className="tracking-[0.5em] text-xs uppercase text-slate-500">
            testimonios
          </p>
          <h2 className="text-4xl font-bold text-slate-900 mt-4">
            Lo que dicen nuestros clientes
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="border border-slate-200 p-6 space-y-6">
              <p className="text-slate-600 italic leading-relaxed">“{testimonial.quote}”</p>
              <div>
                <p className="font-semibold text-slate-900">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

