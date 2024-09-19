import axiosCustom from '@/services/axiosCustom.js'

export default {
  getColumns() {
    return axiosCustom.get("/tier/columns");
  },
  getAllTiers () {
    return axiosCustom.get("/tier/all");
  }
}