function QualitySection() {
  return (
    <section id="garantia" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-slate-200 grid md:grid-cols-[auto,1fr] items-center gap-8 p-8">
          <div className="flex justify-center">
            <img
              src="https://www.totalhomes.es/wp-content/uploads/2021/07/Logo-calidad-2.png"
              alt="Garantía de calidad Total Homes"
              className="w-28 h-28 object-contain"
              loading="lazy"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">Garantía de calidad y plazos</h2>
            <p className="text-slate-600 leading-relaxed">
              Respetamos tu inversión y agradecemos tu confianza. En obra nueva, firmamos un
              contrato que nos responsabiliza del tiempo de entrega y de las calidades y acabados.
              Queremos que estés tranquilo al tomar la decisión: tú sólo deberías disfrutar de este
              proceso.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QualitySection

