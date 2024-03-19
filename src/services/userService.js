import axiosCustom from '@/services/axiosCustom.js'

export default {
  getAdminColumns() {
    return axiosCustom.get("/admin/user/columns");
  },
  getColumns() {
    return axiosCustom.get("/user/columns");
  },
  getAllUsers () {
    return axiosCustom.get("/user/all");
  },
  getUserByUsername(username) {
    return axiosCustom.get(`/user/username/${username}`);
  },
  getUserById(id) {
    return axiosCustom.get(`/user/id/${id}`);
  },
  createUser(user) {
    return axiosCustom.post("/user/create", user);
  },
  updateUser(user) {
    return axiosCustom.put("/user/update", user);
  },
  deleteUser(id) {
    return axiosCustom.delete(`/user/delete/${id}`);
  }
}
