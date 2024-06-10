import axiosCustom from '@/services/axiosCustom.js'

export default {
  login (login, password) {
    return axiosCustom.post("/auth/login", { login, password }).then((response) => {
      if (response.status === 200) {
        console.info('jwtToken', response.data);
        localStorage.setItem('jwtToken', response.data.data.jwtToken);
        localStorage.setItem('userId', response.data.data.userId);
      }
    });
  },
  register (username, email, password) {
    return axiosCustom.post("/auth/register", { username, email, password });
  }
}
