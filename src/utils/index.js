import { CONTACT_INFO } from '../constants'

export const openWhatsApp = (carName) => {
  const message = `Hello! I'm interested in renting the ${carName} from DriveFlow Dubai. Can you provide more details about pricing and availability?`
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')
}

export const openPhone = (phoneNumber = CONTACT_INFO.phone) => {
  window.open(`tel:${phoneNumber}`, '_self')
}

export const formatPhoneNumber = (phone) => {
  return phone.replace(/\s/g, '')
}
