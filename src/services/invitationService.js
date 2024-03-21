import axiosCustom from '@/services/axiosCustom.js'

export default {
  getAdminColumns() {
    return axiosCustom.get("/admin/invitation/columns");
  },
  getColumns() {
    return axiosCustom.get("/invitation/columns");
  },
  getAllInvitations () {
    return axiosCustom.get("/invitation/all");
  },
  getAllInvitationsByTeamId (teamId) {
    return axiosCustom.get(`/invitation/allByTeamId/${teamId}`);
  },
  getAllJoinInvitationByTeamId (teamId) {
    return axiosCustom.get(`/invitation/allJoinByTeamId/${teamId}`);
  },
  getAllRecruitPlayerInvitationByTeamId (teamId) {
    return axiosCustom.get(`/invitation/allRecruitPlayerByTeamId/${teamId}`);
  },
  getInvitationById(id) {
    return axiosCustom.get(`/invitation/id/${id}`);
  },
  createInvitation(invitation) {
    return axiosCustom.post("/invitation/create", invitation);
  },
  updateInvitation(invitation) {
    return axiosCustom.put("/invitation/update", invitation);
  },
  deleteInvitation(id) {
    return axiosCustom.delete(`/invitation/delete/${id}`);
  }
}