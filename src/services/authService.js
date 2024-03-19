import axiosCustom from '@/services/axiosCustom.js'

export default {
  login (login, password) {
    return axiosCustom.post("/auth/login", { login, password }).then((response) => {
      if (response.status === 200) {
        localStorage.setItem('jwtToken', response.data.data.jwtToken);
      }
    });
  }
}
