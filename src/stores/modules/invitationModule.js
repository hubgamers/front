import invitationService from '@/services/invitationService.js'

const state = () => ({
  invitations: [],
  invitationsByTeam: [],
  invitationsByPlayer: [],
  invitation: null,
  invitationColumns: []
});

const getters = {
  getInvitations(state) {
    return state.invitations;
  },
  getInvitationsByTeamId(state) {
    return state.invitationsByTeam;
  },
  getInvitationsByPlayerId(state) {
    return state.invitationsByPlayer;
  },
  getInvitation(state) {
    return state.invitation;
  },
  getInvitationColumns(state) {
    return state.invitationColumns;
  }
};

const mutations = {
  updateInvitations(state, invitations) {
    state.invitations = invitations;
  },
  updateInvitationsByTeam(state, invitations) {
    state.invitationsByTeam = invitations;
  },
  updateInvitationsByPlayer(state, invitations) {
    state.invitationsByPlayer = invitations;
  },
  updateInvitation(state, invitation) {
    state.invitation = invitation;
  },
  updateInvitationColumns(state, columns) {
    state.invitationColumns = columns;
  }
};

const actions = {
  getAllInvitations(context) {
    return new Promise((resolve, reject) => {
      invitationService.getAllInvitations()
      .then((response) => {
        resolve(response.data.data);
        context.commit('updateInvitations', response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  getInvitationColumns(context) {
    return new Promise((resolve, reject) => {
      invitationService.getColumns()
      .then((response) => {
        resolve(response.data.data);
        context.commit('updateInvitationColumns', response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  getInvitationById(context, id) {
    return new Promise((resolve, reject) => {
      invitationService.getInvitationById(id)
      .then((response) => {
        resolve(response.data.data);
        context.commit('updateInvitation', response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  getAllInvitationsByStructureId(context, structureId) {
    return new Promise((resolve, reject) => {
      invitationService.getAllInvitationsByStructureId(structureId)
      .then((response) => {
        resolve(response.data.data);
        context.commit('updateInvitationsByTeam', response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  getAllInvitationsbyPlayerId(context, playerId) {
    return new Promise((resolve, reject) => {
      invitationService.getAllInvitationsByPlayerId(playerId)
      .then((response) => {
        resolve(response.data.data);
        context.commit('updateInvitationsByPlayer', response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    })
  },
  getAllJoinInvitationByStructureId(context, structureId) {
    return new Promise((resolve, reject) => {
      invitationService.getAllJoinInvitationByStructureId(structureId)
      .then((response) => {
        resolve(response.data.data);
        context.commit('updateInvitations', response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  getAllRecruitPlayerInvitationByStructureId(context, structureId) {
    return new Promise((resolve, reject) => {
      invitationService.getAllRecruitPlayerInvitationByStructureId(structureId)
      .then((response) => {
        resolve(response.data.data);
        context.commit('updateInvitations', response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  createInvitation(context, invitation) {
    return new Promise((resolve, reject) => {
      invitationService.createInvitation(invitation)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  acceptInvitation(context, invitationId) {
    return new Promise((resolve, reject) => {
      invitationService.acceptInvitation(invitationId)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  declineInvitation(context, invitationId) {
    return new Promise((resolve, reject) => {
      invitationService.declineInvitation(invitationId)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  updateInvitation(context, invitation) {
    return new Promise((resolve, reject) => {
      invitationService.updateInvitation(invitation)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  deleteInvitation(context, id) {
    return new Promise((resolve, reject) => {
      invitationService.deleteInvitation(id)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  }
};

export default {
  namespaced: false,
  state,
  getters,
  mutations,
  actions
};
