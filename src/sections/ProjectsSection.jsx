const projectCards = [
  {
    title: 'Proyecto Sant Cugat',
    badge: '5 Hab. | 360 m²',
    description:
      'Magnífica casa de cinco dormitorios y un salón protagonista con su fuerte iluminación exterior.',
    image: 'https://www.totalhomes.es/wp-content/uploads/2021/07/Vista-1-768x446.jpg',
  },
  {
    title: 'Diseño Creta',
    badge: '2 Hab. | 194 m²',
    description:
      'Impactante casa que integra la cocina al salón/comedor formando un espacio lujoso, amplio y cómodo.',
    image: 'https://www.totalhomes.es/wp-content/uploads/2020/03/C17-B-Exterior-1-768x506.jpg',
  },
  {
    title: 'Diseño Seychelles',
    badge: '4 Hab. | 350 m²',
    description:
      'Lujosa casa de tres dormitorios dobles y una impresionante cocina con terrazas y zona chill-out.',
    image: 'https://www.totalhomes.es/wp-content/uploads/2019/06/Seychelles-768x479.jpg',
  },
]

function ProjectsSection() {
  return (
    <section id="disenos" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Y estos son algunos de nuestros proyectos y diseños
          </h2>
          <p className="text-slate-500 mt-3">
            Tú también puedes disfrutar de vivir en tu casa 5 estrellas, cada día.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {projectCards.map((project) => (
            <article key={project.title} className="bg-white shadow-lg">
              <div className="relative">
                <img src={project.image} alt={project.title} className="w-full h-56 object-cover" loading="lazy" />
                <div className="absolute top-4 right-4 bg-white/90 text-xs tracking-wide px-3 py-1 uppercase font-semibold">
                  {project.badge}
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-semibold text-slate-900">{project.title}</h3>
                <p className="text-slate-600 leading-relaxed">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center">
          <a
            href="http://www.totalhomes.es/obra-nueva/#proyectos"
            className="inline-flex bg-amber-500 text-white px-8 py-3 text-xs tracking-[0.3em] uppercase font-semibold hover:bg-amber-600 transition-colors"
          >
            Ver más diseños
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection

