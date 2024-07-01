import axiosCustom from '@/services/axiosCustom.js'

export default {
  login (login, password) {
    return axiosCustom.post("/auth/login", { login, password });
  },
  register (username, email, password) {
    return axiosCustom.post("/auth/register", { username, email, password });
  }
}
