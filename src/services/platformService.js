import axiosCustom from '@/services/axiosCustom.js'

export default {
  getColumns() {
    return axiosCustom.get("/platform/columns");
  },
  getAllPlatforms () {
    return axiosCustom.get("/platform/all");
  }
}