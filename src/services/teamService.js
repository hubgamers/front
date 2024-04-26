import axiosCustom from '@/services/axiosCustom.js'

export default {
  getAdminColumns() {
    return axiosCustom.get("/admin/team/columns");
  },
  getColumns() {
    return axiosCustom.get("/team/columns");
  },
  getAllMyTeams() {
    return axiosCustom.get("/team/my-teams");
  },
  getAllTeams () {
    return axiosCustom.get("/team/all");
  },
  getAllTeamsByName(name) {
    return axiosCustom.get(`/team/all/name/${name}`);
  },
  getTeamByName(name) {
    return axiosCustom.get(`/team/name/${name}`);
  },
  getTeamById(id) {
    return axiosCustom.get(`/team/id/${id}`);
  },
  createTeam(team) {
    return axiosCustom.post("/team/create", team);
  },
  uploadTeamBanner(teamId, file) {
    let formData = new FormData();
    formData.append("file", file);
    return axiosCustom.post("/team/banner/upload/" + teamId, formData);
  },
  uploadTeamLogo(teamId, file) {
    let formData = new FormData();
    formData.append("file", file);
    return axiosCustom.post("/team/logo/upload/" + teamId, formData);
  },
  updateTeam(team) {
    return axiosCustom.put("/team/update", team);
  },
  deleteTeam(id) {
    return axiosCustom.delete(`/team/delete/${id}`);
  }
}