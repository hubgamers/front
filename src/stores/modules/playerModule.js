import playerService from '@/services/playerService.js'

const state = () => ({
  playerColumns: [],
  players: [],
  player: null
});

const getters = {
  getPlayerColumns(state) {
    return state.playerColumns;
  },
  getPlayers(state) {
    return state.players;
  },
  getPlayer(state) {
    return state.player;
  }
};

const mutations = {
  updatePlayerColumns(state, columns) {
    state.playerColumns = columns;
  },
  updatePlayerList(state, players) {
    state.players = players;
  },
  updatePlayer(state, player) {
    state.player = player;
  }
};

const actions = {
  getPlayerColumns(context) {
    return new Promise((resolve, reject) => {
      playerService.getColumns()
      .then((response) => {
        resolve(response.data.data);
        context.commit('updatePlayerColumns', response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  getAllPlayers(context) {
    return new Promise((resolve, reject) => {
      playerService.getAllPlayers()
      .then((response) => {
        resolve(response.data.data);
        context.commit('updatePlayerList', response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  getAllPlayersLikeByName(context, name) {
    return new Promise((resolve, reject) => {
      playerService.getAllPlayersLikeByName(name)
      .then((response) => {
        resolve(response.data.data);
        context.commit('updatePlayerList', response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  getPlayerByUsername(context, username) {
    return new Promise((resolve, reject) => {
      playerService.getPlayerByUsername(username)
      .then((response) => {
        resolve(response.data.data);
        context.commit('updatePlayer', response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  getPlayerById(context, id) {
    return new Promise((resolve, reject) => {
      playerService.getPlayerById(id)
      .then((response) => {
        resolve(response.data.data);
        context.commit('updatePlayer', response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  getPlayerByUserId(context, userId) {
    return new Promise((resolve, reject) => {
      playerService.getPlayerByUserId(userId)
      .then((response) => {
        resolve(response.data.data);
        context.commit('updatePlayer', response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  createPlayer(context, player) {
    return new Promise((resolve, reject) => {
      playerService.createPlayer(player)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  updatePlayer(context, player) {
    return new Promise((resolve, reject) => {
      playerService.updatePlayer(player)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  deletePlayer(context, id) {
    return new Promise((resolve, reject) => {
      playerService.deletePlayer(id)
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
