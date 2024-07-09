import axiosCustom from '@/services/axiosCustom.js'

export default {
  getColumns() {
    return axiosCustom.get("/game/columns");
  },
  getAllGames () {
    return axiosCustom.get("/game/all");
  }
}