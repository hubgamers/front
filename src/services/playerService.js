import axiosCustom from '@/services/axiosCustom.js'

export default {
  getColumns() {
    return axiosCustom.get("/admin/player/columns");
  },
  getAllPlayers () {
    return axiosCustom.get("/admin/player/all");
  },
  getPlayerByUsername(username) {
    return axiosCustom.get(`/admin/player/username/${username}`);
  },
  getPlayerById(id) {
    return axiosCustom.get(`/admin/player/id/${id}`);
  },
  createPlayer(player) {
    return axiosCustom.post("/admin/player/create", player);
  },
  updatePlayer(player) {
    return axiosCustom.put("/admin/player/update", player);
  },
  deletePlayer(id) {
    return axiosCustom.delete(`/admin/player/delete/${id}`);
  }
}