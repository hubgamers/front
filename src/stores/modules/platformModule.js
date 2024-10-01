import platformService from "@/services/platformService";

const state = () => ({
  platforms: [],
  platformColumns: []
});

const getters = {
  getPlatforms(state) {
    return state.platforms;
  },
  getPlatformColumns(state) {
    return state.platformColumns;
  }
};

const mutations = {
  updatePlatforms(state, platforms) {
    state.platforms = platforms;
  },
  updatePlatformColumns(state, platformColumns) {
    state.platformColumns = platformColumns;
  }
};

const actions = {
  getAllPlatforms(context) {
    return new Promise((resolve, reject) => {
      platformService.getAllPlatforms()
      .then((response) => {
        resolve(response.data.data);
        context.commit('updatePlatforms', response.data.data);
      })
      .catch((error) => {
        reject(error);
      });
    });
  },
  getPlatformColumns({ commit }) {
    return new Promise((resolve, reject) => {
      platformService.getColumns()
      .then((response) => {
        commit('updatePlatformColumns', response.data.data);
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
