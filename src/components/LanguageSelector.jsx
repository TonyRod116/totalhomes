import { useState } from 'react'

function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 bg-white shadow-lg px-4 py-2 rounded border border-slate-200 hover:shadow-xl transition-shadow"
          aria-label="Selector de idioma"
        >
          <img
            src="https://www.totalhomes.es/wp-content/plugins/translatepress-multilingual/assets/images/flags/es_ES.png"
            alt="Español"
            className="w-[18px] h-[12px]"
            loading="lazy"
          />
          <span className="text-sm font-medium text-slate-900">ES</span>
        </button>

        {isOpen && (
          <div className="absolute bottom-full right-0 mb-2 bg-white shadow-lg rounded border border-slate-200 overflow-hidden min-w-[120px]">
            <a
              href="https://www.totalhomes.es/en/"
              className="flex items-center gap-2 px-4 py-2 hover:bg-slate-50 transition-colors"
            >
              <img
                src="https://www.totalhomes.es/wp-content/plugins/translatepress-multilingual/assets/images/flags/en_US.png"
                alt="English"
                className="w-[18px] h-[12px]"
                loading="lazy"
              />
              <span className="text-sm font-medium text-slate-900">EN</span>
            </a>
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 px-4 py-2 bg-slate-50 hover:bg-slate-100 transition-colors w-full"
            >
              <img
                src="https://www.totalhomes.es/wp-content/plugins/translatepress-multilingual/assets/images/flags/es_ES.png"
                alt="Español"
                className="w-[18px] h-[12px]"
                loading="lazy"
              />
              <span className="text-sm font-medium text-slate-900">ES</span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default LanguageSelector

