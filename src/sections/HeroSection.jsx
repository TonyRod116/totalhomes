import { useEffect, useState } from 'react'

const heroBackground =
  'https://www.totalhomes.es/wp-content/uploads/2025/04/IMG_2766-HDR-scaled.jpg'

function HeroSection() {
  const [parallaxOffset, setParallaxOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setParallaxOffset(window.scrollY * 0.5)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      id="inicio"
      className="relative min-h-[65vh] lg:min-h-[70vh] flex items-center pt-32 pb-16 overflow-hidden"
    >
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 10%',
          transform: `translate3d(0, ${parallaxOffset}px, 0)`,
          height: '140%',
          top: '-20%',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(14,20,34,0.15), rgba(14,20,34,0.5))`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-black/2 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-6">
        <h1 className="text-[2.7777777777778rem] md:text-[2.7777777777778rem] font-[700] leading-[1.4em]">
          Es momento de construir el hogar que siempre has imaginado
        </h1>
        <p className="text-base md:text-lg max-w-3xl mx-auto text-white/85 leading-relaxed">
          Diseñamos y construimos tu hogar en el área de Barcelona.
          <br />
          Relájate y disfruta del proceso.
        </p>
        <a
          href="https://www.totalhomes.es/contacto/"
          className="inline-flex bg-[#b79b3c] hover:bg-[#9e8430] transition-colors text-white px-6 py-2 uppercase tracking-[0.35em] text-[0.75rem] font-normal"
        >
          ¡Empecemos!
        </a>
      </div>
    </section>
  )
}

export default HeroSection

