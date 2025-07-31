export interface User {
  id: string;
  email: string;
  fullName: string;
  role: 'Admin' | 'Seller' | 'Buyer';
  createdAt: string;
}

export interface AuthResponse {
  token: string;
  expiresAt: string;
  user: User;
}

export interface RegisterRequest {
  email: string;
  password: string;
  fullName: string;
  role: 'Admin' | 'Seller' | 'Buyer';
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface ApiResponse<T> {
  data?: T;
  message?: string;
  errors?: any;
} 