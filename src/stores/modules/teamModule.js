import teamService from '@/services/teamService.js'

const state = () => ({
  teamColumns: [],
  myTeams: [],
  teams: [],
  team: null,
});

const getters = {
  getTeamColumns(state) {
    return state.teamColumns;
  },
  getMyTeams(state) {
    return state.myTeams;
  },
  getTeams(state) {
    return state.teams;
  },
  getTeam(state) {
    return state.team;
  }
};

const mutations = {
  updateTeamColumns(state, columns) {
    state.teamColumns = columns;
  },
  updateMyTeams(state, teams) {
    state.myTeams = teams;
  },
  updateTeamList(state, teams) {
    state.teams = teams;
  },
  updateTeam(state, team) {
    state.team = team;
  }
};

const actions = {
  resetTeam({ commit }) {
    commit('updateTeam', null);
  },
  getTeamColumns({ commit }) {
    return new Promise((resolve, reject) => {
      teamService.getColumns()
      .then((response) => {
        resolve(response.data.data);
        commit('updateTeamColumns', response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  getAllMyTeams({ commit }) {
    return new Promise((resolve, reject) => {
      teamService.getAllMyTeams()
      .then((response) => {
        resolve(response.data.data);
        commit('updateMyTeams', response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  getAllPublicTeams({ commit }) {
    return new Promise((resolve, reject) => {
      teamService.getAllPublicTeams()
      .then((response) => {
        resolve(response.data.data);
        commit('updateTeamList', response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  getAllTeamsByName({ commit }, name) {
    return new Promise((resolve, reject) => {
      teamService.getAllTeamsByName(name)
      .then((response) => {
        resolve(response.data.data);
        commit('updateTeamList', response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  getTeamByName({ commit }, name) {
    return new Promise((resolve, reject) => {
      teamService.getTeamByName(name)
      .then((response) => {
        resolve(response.data.data);
        commit('updateTeam', response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  getTeamById({ commit }, id) {
    return new Promise((resolve, reject) => {
      teamService.getTeamById(id)
      .then((response) => {
        resolve(response.data.data);
        commit('updateTeam', response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  createTeam({ commit }, team) {
    return new Promise((resolve, reject) => {
      teamService.createTeam(team)
      .then((response) => {
        resolve(response.data.data);
        commit('updateTeam', response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  uploadTeamBanner({ commit }, payload) {
    return new Promise((resolve, reject) => {
      teamService.uploadTeamBanner(payload.teamId, payload.file)
      .then((response) => {
        resolve(response.data.data);
        commit('updateTeam', response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  uploadTeamLogo({ commit }, payload) {
    return new Promise((resolve, reject) => {
      teamService.uploadTeamLogo(payload.teamId, payload.file)
      .then((response) => {
        resolve(response.data.data);
        commit('updateTeam', response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  updateTeam({ commit }, team) {
    return new Promise((resolve, reject) => {
      teamService.updateTeam(team)
      .then((response) => {
        resolve(response.data.data);
        commit('updateTeam', response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  deleteTeam(id) {
    return new Promise((resolve, reject) => {
      teamService.deleteTeam(id)
      .then((response) => {
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
