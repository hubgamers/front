// store/modules/team.js
import teamRosterService from '@/services/teamRosterService.js';

const state = () => ({
  teamRosters: [],
  teamRosterColumns: [],
  teamRoster: {}
});

const getters = {
  getTeamRosters(state) {
    return state.teamRosters;
  },
  getTeamRosterColumns(state) {
    return state.teamRosterColumns;
  },
  getTeamRoster(state) {
    return state.teamRoster;
  }
};

const mutations = {
  updateStructureRosters(state, teamRosters) {
    state.teamRosters = teamRosters;
  },
  updateStructureRosterColumns(state, teamRosterColumns) {
    state.teamRosterColumns = teamRosterColumns;
  },
  updateStructureRoster(state, teamRoster) {
    state.teamRoster = teamRoster;
  }
};

const actions = {
  getAllTeamRostersByTeamId({ commit }, teamId) {
    return new Promise((resolve, reject) => {
      teamRosterService.getAllTeamRostersByTeamId(teamId)
      .then((response) => {
        commit('updateStructureRosters', response.data.data);
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
        commit('updateStructureRosterColumns', response.data.data);
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
        commit('updateStructureRoster', response.data.data);
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
        commit('updateStructureRosters', response.data.data);
        resolve(response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  createStructureRoster({ commit }, teamRoster) {
    return new Promise((resolve, reject) => {
      teamRosterService.create(teamRoster)
      .then((response) => {
        commit('updateStructureRoster', response.data.data);
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
