import axiosCustom from '@/services/axiosCustom.js'

export default {
  getColumns() {
    return axiosCustom.get("/admin/user/columns");
  },
  getAllUsers () {
    return axiosCustom.get("/admin/user/all");
  },
  getUserByUsername(username) {
    return axiosCustom.get(`/admin/user/username/${username}`);
  },
  getUserById(id) {
    return axiosCustom.get(`/admin/user/id/${id}`);
  },
  createUser(user) {
    return axiosCustom.post("/admin/user/create", user);
  },
  updateUser(user) {
    return axiosCustom.put("/admin/user/update", user);
  },
  deleteUser(id) {
    return axiosCustom.delete(`/admin/user/delete/${id}`);
  }
}
