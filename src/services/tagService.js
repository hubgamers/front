import axiosCustom from '@/services/axiosCustom.js'

export default {
  getColumns() {
    return axiosCustom.get("/tag/columns");
  },
  getAllTags () {
    return axiosCustom.get("/tag/all");
  }
}