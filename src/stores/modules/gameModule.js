import gameService from '@/services/gameService.js'

const state = () => ({
  games: []
});

const getters = {
  getGames(state) {
    return state.games;
  }
};

const mutations = {
  updateGames(state, games) {
    state.games = games;
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
  }
};

export default {
  namespaced: false,
  state,
  getters,
  mutations,
  actions
};
