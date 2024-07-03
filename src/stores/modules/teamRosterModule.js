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
  updateTeamRosters(state, teamRosters) {
    state.teamRosters = teamRosters;
  },
  updateTeamRosterColumns(state, teamRosterColumns) {
    state.teamRosterColumns = teamRosterColumns;
  },
  updateTeamRoster(state, teamRoster) {
    state.teamRoster = teamRoster;
  }
};

const actions = {
  getAllTeamRosters({ commit }) {
    return new Promise((resolve, reject) => {
      teamRosterService.getAllMyTeams()
      .then((response) => {
        commit('updateTeamRosters', response.data.data);
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
  }
};

export default {
  namespaced: false,
  state,
  getters,
  mutations,
  actions
};
