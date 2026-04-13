import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPhone(phone: string): string {
  return phone.replace(/(\d{5})(\d{3})(\d{3})/, '$1 $2 $3')
}

export function buildWhatsAppUrl(whatsapp: string, message: string): string {
  return `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`
}

export function buildServiceWhatsAppMessage(serviceName: string): string {
  return `Hi BlueSky Construction, I'd like to get a quote for ${serviceName}. Please let me know your availability.`
}
