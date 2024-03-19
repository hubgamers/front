import axiosCustom from '@/services/axiosCustom.js'

export default {
  getColumns() {
    return axiosCustom.get("/admin/team/columns");
  },
  getAllTeams () {
    return axiosCustom.get("/admin/team/all");
  },
  getTeamByName(name) {
    return axiosCustom.get(`/admin/team/name/${name}`);
  },
  getTeamById(id) {
    return axiosCustom.get(`/admin/team/id/${id}`);
  },
  createTeam(team) {
    return axiosCustom.post("/admin/team/create", team);
  },
  updateTeam(team) {
    return axiosCustom.put("/admin/team/update", team);
  },
  deleteTeam(id) {
    return axiosCustom.delete(`/admin/team/delete/${id}`);
  }
}