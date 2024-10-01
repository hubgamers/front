import tierService from "@/services/tierService";

const state = () => ({
  tiers: [],
  tiersColumns: []
});

const getters = {
  getTiers(state) {
    return state.tiers;
  },
  getTierColumns(state) {
    return state.tiersColumns;
  }
};

const mutations = {
  updateTiers(state, tiers) {
    state.tiers = tiers;
  },
  updateTiersColumns(state, tiersColumns) {
    state.tiersColumns = tiersColumns;
  }
};

const actions = {
  getAllTiers(context) {
    return new Promise((resolve, reject) => {
      tierService.getAllTiers()
      .then((response) => {
        resolve(response.data.data);
        context.commit('updateTiers', response.data.data);
      })
      .catch((error) => {
        reject(error);
      });
    });
  },
  getTiersColumns({ commit }) {
    return new Promise((resolve, reject) => {
      tierService.getColumns()
      .then((response) => {
        commit('updateTiersColumns', response.data.data);
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
