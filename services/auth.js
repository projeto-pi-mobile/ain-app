export const getToken = () => localStorage.getItem('ain-token')
export const login = (token) => localStorage.setItem('ain-token', token)
export const logout = () => localStorage.removeItem('ain-token')
export const isAuthenticated = () => localStorage.getItem('ain-token') !== null