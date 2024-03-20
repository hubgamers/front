import axiosCustom from '@/services/axiosCustom.js'

export default {
  getAdminColumns() {
    return axiosCustom.get("/admin/tournament/columns");
  },
  getColumns() {
    return axiosCustom.get("/tournament/columns");
  },
  getAllTournaments () {
    return axiosCustom.get("/tournament/all");
  },
  getTournamentById(id) {
    return axiosCustom.get(`/tournament/id/${id}`);
  },
  createTournament(tournament) {
    return axiosCustom.post("/tournament/create", tournament);
  },
  updateTournament(tournament) {
    return axiosCustom.put("/tournament/update", tournament);
  },
  deleteTournament(id) {
    return axiosCustom.delete(`/tournament/delete/${id}`);
  }
}