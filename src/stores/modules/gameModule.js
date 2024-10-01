import gameService from '@/services/gameService.js'

const state = () => ({
  games: [],
  gameColumns: [],
});

const getters = {
  getGames(state) {
    return state.games;
  },
  getGameColumns(state) {
    return state.gameColumns;
  }
};

const mutations = {
  updateGames(state, games) {
    state.games = games;
  },
  updateGameColumns(state, gameColumns) {
    state.gameColumns = gameColumns;
  }
};

const actions = {
  getAllGames(context) {
    return new Promise((resolve, reject) => {
      gameService.getAllGames()
      .then((response) => {
        resolve(response.data.data);
        context.commit('updateGames', response.data.data);
      })
      .catch((error) => {
        reject(error);
      });
    });
  },
  getGameColumns({ commit }) {
    return new Promise((resolve, reject) => {
      gameService.getColumns()
      .then((response) => {
        commit('updateGameColumns', response.data.data);
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
