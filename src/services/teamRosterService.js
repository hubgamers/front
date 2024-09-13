import axiosCustom from '@/services/axiosCustom.js'

export default {
  getAdminColumns() {
    return axiosCustom.get("/admin/teamRoster/columns");
  },
  getColumns() {
    return axiosCustom.get("/teamRoster/columns");
  },
  getAllTeamRostersByTeamId(teamId) {
    return axiosCustom.get(`/teamRoster/team/${teamId}`);
  },
  countAllStructures() {
    return axiosCustom.get("/teamRoster/count-all");
  },
  getAllPublicStructures () {
    return axiosCustom.get("/teamRoster/all-public");
  },
  getAllStructuresByName(name) {
    return axiosCustom.get(`/teamRoster/all/name/${name}`);
  },
  getStructureByName(name) {
    return axiosCustom.get(`/teamRoster/name/${name}`);
  },
  getStructureById(id) {
    return axiosCustom.get(`/teamRoster/id/${id}`);
  },
  getTeamRosterByPlayerId(playerId) {
    return axiosCustom.get(`/teamRoster/player/${playerId}`);
  },
  create(team) {
    return axiosCustom.post("/teamRoster/create", team);
  },
  updateStructure(team) {
    return axiosCustom.put("/teamRoster/update", team);
  },
  deleteStructure(id) {
    return axiosCustom.delete(`/teamRoster/delete/${id}`);
  }
}