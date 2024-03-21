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
  addParticipant(tournamentId, participant) {
    return axiosCustom.post(`/tournament/addParticipant/${tournamentId}`, JSON.stringify(participant));
  },
  uploadTournamentBanner(teamId, file) {
    let formData = new FormData();
    formData.append("file", file);
    return axiosCustom.post("/tournament/banner/upload/" + teamId, formData);
  },
  uploadTournamentLogo(teamId, file) {
    let formData = new FormData();
    formData.append("file", file);
    return axiosCustom.post("/tournament/logo/upload/" + teamId, formData);
  },
  updateTournament(tournament) {
    return axiosCustom.put("/tournament/update", tournament);
  },
  deleteTournament(id) {
    return axiosCustom.delete(`/tournament/delete/${id}`);
  }
}