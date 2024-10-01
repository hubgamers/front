import teamRosterService from '@/services/teamRosterService.js';

const state = () => ({
  teamRosters: [],
  myTeamRosters: [],
  teamRosterColumns: [],
  teamRoster: {}
});

const getters = {
  getTeamRosters(state) {
    return state.teamRosters;
  },
  getMyTeamRosters(state) {
    return state.myTeamRosters;
  },
  getTeamRosterColumns(state) {
    return state.teamRosterColumns;
  },
  getTeamRoster(state) {
    return state.teamRoster;
  }
};

const mutations = {
  updateTeamRosters(state, teamRosters) {
    state.teamRosters = teamRosters;
  },
  updateMyTeamRosters(state, myTeamRosters) {
    state.myTeamRosters = myTeamRosters;
  },
  updateTeamRosterColumns(state, teamRosterColumns) {
    state.teamRosterColumns = teamRosterColumns;
  },
  updateTeamRoster(state, teamRoster) {
    state.teamRoster = teamRoster;
  }
};

const actions = {
  getAllPublicTeamRosters({ commit }) {
    return new Promise((resolve, reject) => {
      teamRosterService.getAllPublicTeamRosters()
      .then((response) => {
        commit('updateTeamRosters', response.data.data);
        resolve(response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  getAllTeamRostersByStructureId({ commit }, structureId) {
    return new Promise((resolve, reject) => {
      teamRosterService.getAllTeamRostersByStructureId(structureId)
      .then((response) => {
        commit('updateTeamRosters', response.data.data);
        resolve(response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  getMyTeamRostersByStructureId({ commit }, structureId) {
    return new Promise((resolve, reject) => {
      teamRosterService.getAllTeamRostersByStructureId(structureId)
      .then((response) => {
        commit('updateMyTeamRosters', response.data.data);
        resolve(response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  getAllMyTeamRosters({ commit }) {
    return new Promise((resolve, reject) => {
      teamRosterService.getAllMyTeamRosters()
      .then((response) => {
        commit('updateMyTeamRosters', response.data.data);
        resolve(response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  getTeamRosterColumns({ commit }) {
    return new Promise((resolve, reject) => {
      teamRosterService.getColumns()
      .then((response) => {
        commit('updateTeamRosterColumns', response.data.data);
        resolve(response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  getTeamRosterById({ commit }, teamRosterId) {
    return new Promise((resolve, reject) => {
      teamRosterService.getStructureById(teamRosterId)
      .then((response) => {
        commit('updateTeamRoster', response.data.data);
        resolve(response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  getTeamRosterByNameAndStructureId({ commit }, payload) {
    return new Promise((resolve, reject) => {
      teamRosterService.getTeamRosterByNameAndStructureId(payload.teamRosterName, payload.structureId)
      .then((response) => {
        commit('updateTeamRoster', response.data.data);
        resolve(response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  getTeamRosterByPlayerId({ commit }, playerId) {
    return new Promise((resolve, reject) => {
      teamRosterService.getTeamRosterByPlayerId(playerId)
      .then((response) => {
        commit('updateTeamRoster', response.data.data);
        resolve(response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  createTeamRoster({ commit }, teamRoster) {
    return new Promise((resolve, reject) => {
      teamRosterService.create(teamRoster)
      .then((response) => {
        commit('updateTeamRoster', response.data.data);
        resolve(response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  updateTeamRoster({ commit }, teamRoster) {
    return new Promise((resolve, reject) => {
      teamRosterService.update(teamRoster)
      .then((response) => {
        commit('updateTeamRoster', response.data.data);
        resolve(response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
};

export default {
  namespaced: false,
  state,
  getters,
  mutations,
  actions
};
