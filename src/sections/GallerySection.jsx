const galleryImages = [
  { src: 'https://www.totalhomes.es/wp-content/uploads/2025/04/IMG_2766-HDR-scaled.jpg', alt: 'Residencia moderna 1' },
  { src: 'https://www.totalhomes.es/wp-content/uploads/2025/04/IMG_2776-HDR-scaled.jpg', alt: 'Residencia moderna 2' },
  { src: 'https://www.totalhomes.es/wp-content/uploads/2025/01/168755517_2148925991905189_7351775272871168852_n_17877562967200414.jpg', alt: 'Detalle interior 1' },
  { src: 'https://www.totalhomes.es/wp-content/uploads/2025/01/251158214_612387496559337_4503979597741940012_n_18024637921325773.jpg', alt: 'Detalle interior 2' },
  { src: 'https://www.totalhomes.es/wp-content/uploads/2021/12/019_MGL9176-scaled.jpg', alt: 'Piscina exterior' },
  { src: 'https://www.totalhomes.es/wp-content/uploads/2021/12/025_MGL9195-scaled.jpg', alt: 'Salón abierto' },
  { src: 'https://www.totalhomes.es/wp-content/uploads/2021/12/029_MGL9257-scaled.jpg', alt: 'Fachada contemporánea' },
  { src: 'https://www.totalhomes.es/wp-content/uploads/2021/12/032_MGL9286-scaled.jpg', alt: 'Dormitorio luminoso' },
  { src: 'https://www.totalhomes.es/wp-content/uploads/2025/04/IMG_2801-HDR-scaled.jpg', alt: 'Vista interior 3' },
  { src: 'https://www.totalhomes.es/wp-content/uploads/2025/04/IMG_2811-HDR-scaled.jpg', alt: 'Cocina integral' },
  { src: 'https://www.totalhomes.es/wp-content/uploads/2021/12/Rector-16.jpg', alt: 'Zona chill-out' },
  { src: 'https://www.totalhomes.es/wp-content/uploads/2021/07/008_MGL9052.webp', alt: 'Estancia minimalista' },
]

function GallerySection() {
  return (
    <section id="galeria" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center">
          <p className="tracking-[0.5em] text-xs uppercase text-slate-500">
            proyectos
          </p>
          <h2 className="text-4xl font-bold text-slate-900 mt-4">
            Estas son algunas casas que hemos construido
          </h2>
        </div>
        <div className="overflow-x-auto pb-4">
          <div className="grid grid-flow-col auto-cols-[240px] sm:auto-cols-[320px] gap-6">
            {galleryImages.map((image) => (
              <figure key={image.src} className="relative h-64">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GallerySection

