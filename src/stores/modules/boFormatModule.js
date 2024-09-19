import boFormatService from "@/services/boFormatService";

const state = () => ({
  boFormats: [],
  boFormatsColumns: []
});

const getters = {
  getBoFormats(state) {
    return state.boFormats;
  },
  getBoFormatColumns(state) {
    return state.boFormatsColumns;
  }
};

const mutations = {
  updateBoFormats(state, boFormats) {
    state.boFormats = boFormats;
  },
  updateBoFormatsColumns(state, boFormatsColumns) {
    state.boFormatsColumns = boFormatsColumns;
  }
};

const actions = {
  getAllBoFormats(context) {
    return new Promise((resolve, reject) => {
      boFormatService.getAllBoFormats()
      .then((response) => {
        resolve(response.data.data);
        context.commit('updateBoFormats', response.data.data);
      })
      .catch((error) => {
        reject(error);
      });
    });
  },
  getBoFormatColumns({ commit }) {
    return new Promise((resolve, reject) => {
      boFormatService.getColumns()
      .then((response) => {
        commit('updateBoFormatsColumns', response.data.data);
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
