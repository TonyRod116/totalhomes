const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/totalhomes.es/' },
  { label: 'Facebook', href: 'https://www.facebook.com/totalhomes.es' },
  { label: 'Houzz', href: 'https://www.houzz.es/profesionales/empresas-de-diseno-y-construccion/total-homes-pfvwes-pf~1991383376' },
]

const servicesLinks = [
  { label: 'Obra nueva', href: 'https://www.totalhomes.es/obra-nueva/' },
  { label: 'Reformas integrales', href: 'https://www.totalhomes.es/reformas-integrales/' },
  { label: 'Acabados', href: 'https://www.totalhomes.es/acabados/' },
  { label: 'Asesoramiento gratis', href: 'https://www.totalhomes.es/lp5-asesoramiento-gratuito/' },
]

const companyLinks = [
  { label: 'Sobre nosotros', href: 'https://www.totalhomes.es/sobre-nosotros/' },
  { label: 'Contacto', href: 'https://www.totalhomes.es/contacto/' },
]

function Footer() {
  return (
    <footer id="footer" className="bg-slate-900 text-white mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <img
              src="https://www.totalhomes.es/wp-content/uploads/2020/07/total-homes-casas-eficientes.png"
              alt="Total Homes"
              className="h-10 w-auto"
              loading="lazy"
            />
            <p className="text-slate-300 leading-relaxed">
              C/ Rosselló, 77, bajos. 08029 Barcelona
              <br />
              +34 938 314 774 | +34 636 373 207
              <br />
              info@totalhomes.es
            </p>
            <div className="flex gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 border border-white/20 text-xs tracking-widest uppercase hover:border-amber-400 hover:text-amber-400 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-[0.3em] text-amber-400 mb-4">
              Servicios
            </h3>
            <ul className="space-y-3 text-slate-300">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-amber-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-[0.3em] text-amber-400 mb-4">
              Empresa
            </h3>
            <ul className="space-y-3 text-slate-300">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-amber-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} TotalHomes | Made by Claudio Schwindt</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="https://www.totalhomes.es/privacidad/" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">
              Política de privacidad
            </a>
            <span className="text-white/30">|</span>
            <a href="https://www.totalhomes.es/aviso-legal/" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">
              Aviso legal
            </a>
            <span className="text-white/30">|</span>
            <a href="https://www.totalhomes.es/politica-de-cookies/" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">
              Política de cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

