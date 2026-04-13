'use client'

import { useState, useEffect } from 'react'
import { SITE_CONFIG } from '@/data/siteConfig'
import { buildWhatsAppUrl, cn } from '@/lib/utils'

const HOURS_TABLE = [
  { label: 'Mon – Fri', value: '8am – 6pm', open: true },
  { label: 'Saturday', value: '8am – 4pm', open: true },
  { label: 'Sunday', value: 'Closed', open: false },
]

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasAutoOpened, setHasAutoOpened] = useState(false)
  const [visible, setVisible] = useState(false)

  const url = buildWhatsAppUrl(
    SITE_CONFIG.whatsapp,
    SITE_CONFIG.whatsappDefaultMessage
  )

  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), 800)
    return () => clearTimeout(showTimer)
  }, [])

  useEffect(() => {
    if (hasAutoOpened) return
    const openTimer = setTimeout(() => {
      setIsOpen(true)
      setHasAutoOpened(true)
    }, 4000)
    return () => clearTimeout(openTimer)
  }, [hasAutoOpened])

  return (
    <div
      className={cn(
        // On mobile: push up from bottom CTA bar (pb-20 for the sticky bar height)
        'fixed bottom-20 right-4 sm:bottom-6 sm:right-5 z-50 flex flex-col items-end gap-3',
        'transition-opacity duration-500',
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
    >
      {/* ── Chat popup panel ── */}
      <div
        className={cn(
          // Full-width modal on mobile, fixed-width on desktop
          'w-[calc(100vw-2rem)] max-w-[320px] rounded-2xl overflow-hidden shadow-2xl',
          'transition-all duration-300 origin-bottom-right',
          isOpen
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 translate-y-3 pointer-events-none'
        )}
        aria-hidden={!isOpen}
        role="dialog"
        aria-label="WhatsApp chat"
      >
        {/* Header */}
        <div className="bg-[#075e54] px-4 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* BS logo block */}
            <div className="w-11 h-11 rounded-full bg-brand-blue flex items-center justify-center flex-shrink-0 border-2 border-white/20">
              <span className="text-white font-display font-bold text-sm">BS</span>
            </div>
            <div>
              <p className="text-white font-bold text-sm leading-tight">BlueSky Construction</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse-soft flex-shrink-0"
                  aria-hidden="true"
                />
                <p className="text-white/75 text-xs">Usually replies quickly</p>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white/60 hover:text-white transition-colors p-1 rounded"
            aria-label="Close chat"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Chat body */}
        <div
          className="px-4 py-5 space-y-3"
          style={{
            backgroundColor: '#e5ddd5',
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' opacity='0.06'%3E%3Ccircle cx='10' cy='10' r='6' fill='%23000'/%3E%3Crect x='30' y='5' width='12' height='12' rx='2' fill='%23000'/%3E%3Ccircle cx='65' cy='20' r='5' fill='%23000'/%3E%3Crect x='5' y='40' width='10' height='10' rx='1' fill='%23000'/%3E%3Ccircle cx='45' cy='50' r='8' fill='%23000'/%3E%3Crect x='60' y='55' width='14' height='14' rx='3' fill='%23000'/%3E%3Ccircle cx='20' cy='68' r='5' fill='%23000'/%3E%3C/svg%3E")`,
          }}
        >
          {/* Message bubble 1 */}
          <div className="relative max-w-[88%]">
            <div
              className="absolute -left-[6px] top-0"
              style={{ width: 0, height: 0, borderTop: '0px solid transparent', borderRight: '7px solid white', borderBottom: '7px solid transparent' }}
              aria-hidden="true"
            />
            <div className="bg-white rounded-lg rounded-tl-none px-3.5 py-2.5 shadow-sm">
              <p className="text-[#111b21] text-sm leading-snug">
                👋 Ready to improve your home?
              </p>
            </div>
          </div>

          {/* Message bubble 2 */}
          <div className="relative max-w-[88%]">
            <div className="bg-white rounded-lg px-3.5 py-2.5 shadow-sm">
              <p className="text-[#111b21] text-sm leading-snug">
                Message us on WhatsApp for a free, no-obligation quote.
              </p>
              <p className="text-[#999] text-[10px] mt-1.5 text-right">a few seconds ago</p>
            </div>
          </div>

          {/* Opening hours mini-table */}
          <div className="bg-white rounded-lg px-3.5 py-3 shadow-sm">
            <p className="text-[#075e54] text-xs font-bold mb-2 tracking-wide uppercase">Opening Hours</p>
            <div className="space-y-1.5">
              {HOURS_TABLE.map(({ label, value, open }) => (
                <div key={label} className="flex justify-between items-center">
                  <span className="text-[#555] text-xs">{label}</span>
                  <span className={`text-xs font-semibold ${open ? 'text-[#111b21]' : 'text-[#aaa]'}`}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Open WhatsApp CTA */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2.5 w-full py-4 bg-[#25D366] text-white font-bold text-sm tracking-wide hover:bg-[#1ebe5d] transition-colors"
          onClick={() => setIsOpen(false)}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
          </svg>
          Open WhatsApp
        </a>
      </div>

      {/* ── Floating WhatsApp button ── */}
      <button
        onClick={() => setIsOpen((o) => !o)}
        aria-label={isOpen ? 'Close WhatsApp chat' : 'Chat with us on WhatsApp'}
        aria-expanded={isOpen}
        className="relative w-14 h-14 rounded-full bg-[#25D366] text-white shadow-elevated flex items-center justify-center hover:scale-105 active:scale-95 transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      >
        {isOpen ? (
          <svg className="w-6 h-6 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <>
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-60" aria-hidden="true" />
            <svg className="w-7 h-7 relative" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
            </svg>
          </>
        )}
      </button>
    </div>
  )
}
