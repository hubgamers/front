import axiosCustom from '@/services/axiosCustom.js'

export default {
  getAdminColumns() {
    return axiosCustom.get("/admin/teamRoster/columns");
  },
  getColumns() {
    return axiosCustom.get("/teamRoster/columns");
  },
  getAllMyTeams() {
    return axiosCustom.get("/teamRoster/my-teams");
  },
  countAllTeams() {
    return axiosCustom.get("/teamRoster/count-all");
  },
  getAllPublicTeams () {
    return axiosCustom.get("/teamRoster/all-public");
  },
  getAllTeamsByName(name) {
    return axiosCustom.get(`/teamRoster/all/name/${name}`);
  },
  getTeamByName(name) {
    return axiosCustom.get(`/teamRoster/name/${name}`);
  },
  getTeamById(id) {
    return axiosCustom.get(`/teamRoster/id/${id}`);
  },
  create(team) {
    return axiosCustom.post("/teamRoster/create", team);
  },
  updateTeam(team) {
    return axiosCustom.put("/teamRoster/update", team);
  },
  deleteTeam(id) {
    return axiosCustom.delete(`/teamRoster/delete/${id}`);
  }
}