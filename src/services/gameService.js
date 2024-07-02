import axiosCustom from '@/services/axiosCustom.js'

export default {
  getColumns() {
    return axiosCustom.get("/games/columns");
  },
  getAllGames () {
    return axiosCustom.get("/games/all");
  }
}