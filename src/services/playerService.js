import axiosCustom from '@/services/axiosCustom.js'

export default {
  getAdminColumns() {
    return axiosCustom.get("/admin/player/columns");
  },
  getColumns() {
    return axiosCustom.get("/player/columns");
  },
  getAllPlayers () {
    return axiosCustom.get("/player/all");
  },
  getPlayerByUsername(username) {
    return axiosCustom.get(`/player/username/${username}`);
  },
  getPlayerById(id) {
    return axiosCustom.get(`/player/id/${id}`);
  },
  createPlayer(player) {
    return axiosCustom.post("/player/create", player);
  },
  updatePlayer(player) {
    return axiosCustom.put("/player/update", player);
  },
  deletePlayer(id) {
    return axiosCustom.delete(`/player/delete/${id}`);
  }
}