import scrimService from "@/services/scrimService";

const state = () => ({
  scrims: [],
  myScrims: [],
  scrim: null,
  scrimsColumns: []
});

const getters = {
  getScrims(state) {
    return state.scrims;
  },
  getMyScrims(state) {
    return state.myScrims;
  },
  getScrim(state) {
    return state.scrim;
  },
  getScrimsColumns(state) {
    return state.scrimsColumns;
  }
};

const mutations = {
  updateScrims(state, scrims) {
    state.scrims = scrims;
  },
  updateMyScrims(state, scrims) {
    state.myScrims = scrims;
  },
  updateScrim(state, scrim) {
    state.scrim = scrim;
  },
  updateScrimsColumns(state, scrimsColumns) {
    state.scrimsColumns = scrimsColumns;
  }
};

const actions = {
  getAllScrims(context) {
    return new Promise((resolve, reject) => {
      scrimService.getAllScrims()
      .then((response) => {
        resolve(response.data.data);
        context.commit('updateScrims', response.data.data);
      })
      .catch((error) => {
        reject(error);
      });
    });
  },
  getMyScrims(context) {
    return new Promise((resolve, reject) => {
      scrimService.getMyScrims()
      .then((response) => {
        resolve(response.data.data);
        context.commit('updateMyScrims', response.data.data);
      })
      .catch((error) => {
        reject(error);
      });
    });
  },
  getScrimsColumns({ commit }) {
    return new Promise((resolve, reject) => {
      scrimService.getColumns()
      .then((response) => {
        commit('updateScrimsColumns', response.data.data);
        resolve(response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  createScrim({ commit }, scrim) {
    return new Promise((resolve, reject) => {
      scrimService.createScrim(scrim)
      .then((response) => {
        resolve(response.data.data);
        commit('updateScrim', response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  getScrimById({ commit }, id) {
    return new Promise((resolve, reject) => {
      scrimService.getScrimById(id)
      .then((response) => {
        resolve(response.data.data);
        commit('updateScrim', response.data.data);
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
