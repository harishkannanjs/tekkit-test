export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function isValidPassword(password: string): boolean {
  return password.length >= 8
}

export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^\+?[1-9]\d{1,14}$/
  return phoneRegex.test(phone.replace(/[\s-]/g, ''))
}

export function isNotEmpty(value: string | undefined | null): boolean {
  return value !== undefined && value !== null && value.trim() !== ''
}

export function isValidUrl(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

export interface ValidationResult {
  isValid: boolean
  errors: string[]
}

export function validateLoginForm(email: string, password: string): ValidationResult {
  const errors: string[] = []
  
  if (!isNotEmpty(email)) errors.push('Email is required')
  else if (!isValidEmail(email)) errors.push('Invalid email format')
  
  if (!isNotEmpty(password)) errors.push('Password is required')
  else if (!isValidPassword(password)) errors.push('Password must be at least 8 characters')
  
  return { isValid: errors.length === 0, errors }
}
