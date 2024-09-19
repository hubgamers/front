import axiosCustom from '@/services/axiosCustom.js'

export default {
  getColumns() {
    return axiosCustom.get("/bo-format/columns");
  },
  getAllBoFormats () {
    return axiosCustom.get("/bo-format/all");
  }
}