function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-40 pointer-events-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 flex items-center justify-between">
        <a
          href="#inicio"
          aria-label="Total Homes"
          className="pointer-events-auto bg-white/10 backdrop-blur-md px-4 py-2 shadow-[0_6px_14px_rgba(0,0,0,0.15)]"
        >
          <img
            src="https://www.totalhomes.es/wp-content/uploads/2019/09/logo-final-265x43.png"
            alt="Total Homes logo"
            className="h-10 w-auto"
            loading="lazy"
          />
        </a>
        <a
          href="https://www.totalhomes.es/contacto/"
          className="pointer-events-auto bg-[#b79b3c] hover:bg-[#9e8430] text-white uppercase tracking-[0.35em] text-[0.75rem] font-normal px-5 py-2 shadow-[0_10px_25px_rgba(0,0,0,0.25)] transition-colors"
        >
          Contactar
        </a>
      </div>
    </header>
  )
}

export default Header

