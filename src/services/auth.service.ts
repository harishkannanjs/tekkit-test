import { apiService } from './api.service'
import { API_ENDPOINTS } from '@/constants/api'
import type { User } from '@/types/user.types'

interface AuthResponse {
  user: User
  token: string
}

class AuthService {
  async login(email: string, password: string): Promise<AuthResponse> {
    return apiService.post<AuthResponse>(API_ENDPOINTS.AUTH.LOGIN, { email, password })
  }

  async register(name: string, email: string, password: string): Promise<AuthResponse> {
    return apiService.post<AuthResponse>(API_ENDPOINTS.AUTH.REGISTER, { name, email, password })
  }

  async logout(): Promise<void> {
    return apiService.post(API_ENDPOINTS.AUTH.LOGOUT)
  }

  async getCurrentUser(): Promise<User> {
    return apiService.get<User>(API_ENDPOINTS.AUTH.ME)
  }

  async refreshToken(): Promise<{ token: string }> {
    return apiService.post(API_ENDPOINTS.AUTH.REFRESH)
  }
}

export const authService = new AuthService()
