import axiosCustom from '@/services/axiosCustom.js'

export default {
  getAllUsers () {
    return axiosCustom.get("/admin/user/all");
  }
}
