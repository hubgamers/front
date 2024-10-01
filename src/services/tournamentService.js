import axiosCustom from '@/services/axiosCustom.js'

export default {
  getAdminColumns() {
    return axiosCustom.get("/admin/tournament/columns");
  },
  getColumns() {
    return axiosCustom.get("/tournament/columns");
  },
  getMyTournaments() {
    return axiosCustom.get("/tournament/my-tournaments");
  },
  countAllTournaments() {
    return axiosCustom.get("/tournament/count-all");
  },
  getAllTournaments () {
    return axiosCustom.get("/tournament/all");
  },
  getTournamentById(id) {
    return axiosCustom.get(`/tournament/id/${id}`);
  },
  getTournamentByName(name) {
    return axiosCustom.get(`/tournament/name/${name}`);
  },
  createTournament(tournament) {
    return axiosCustom.post("/tournament/create", tournament);
  },
  addParticipant(tournamentId, participant) {
    return axiosCustom.post(`/tournament/addParticipant/${tournamentId}`, JSON.stringify(participant));
  },
  uploadTournamentBanner(structureId, file) {
    let formData = new FormData();
    formData.append("file", file);
    return axiosCustom.post("/tournament/banner/upload/" + structureId, formData);
  },
  uploadTournamentLogo(structureId, file) {
    let formData = new FormData();
    formData.append("file", file);
    return axiosCustom.post("/tournament/logo/upload/" + structureId, formData);
  },
  updateTournament(tournament) {
    return axiosCustom.put("/tournament/update", tournament);
  },
  deleteTournament(id) {
    return axiosCustom.delete(`/tournament/delete/${id}`);
  }
}