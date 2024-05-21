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
  getAllInvitationsByPlayerId (playerId) {
    return axiosCustom.get(`/invitation/allByPlayerId/${playerId}`);
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
  acceptInvitation(invitationId) {
    return axiosCustom.post(`/invitation/accept/${invitationId}`);
  },
  declineInvitation(invitationId) {
    return axiosCustom.post(`/invitation/decline/${invitationId}`);
  },
  updateInvitation(invitation) {
    return axiosCustom.put("/invitation/update", invitation);
  },
  deleteInvitation(id) {
    return axiosCustom.delete(`/invitation/delete/${id}`);
  }
}