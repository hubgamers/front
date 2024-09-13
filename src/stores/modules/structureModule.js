import structureService from '@/services/structureService.js'

const state = () => ({
  structureColumns: [],
  myStructures: [],
  structures: [],
  structure: null,
});

const getters = {
  getStructureColumns(state) {
    return state.structureColumns;
  },
  getMyStructures(state) {
    return state.myStructures;
  },
  getStructures(state) {
    return state.structures;
  },
  getStructure(state) {
    return state.structure;
  }
};

const mutations = {
  updateStructureColumns(state, columns) {
    state.structureColumns = columns;
  },
  updatemyStructures(state, structures) {
    state.myStructures = structures;
  },
  updateStructureList(state, structures) {
    state.structures = structures;
  },
  updateStructure(state, structure) {
    state.structure = structure;
  }
};

const actions = {
  resetStructure({ commit }) {
    commit('updateStructure', null);
  },
  getStructureColumns({ commit }) {
    return new Promise((resolve, reject) => {
      structureService.getColumns()
      .then((response) => {
        resolve(response.data.data);
        commit('updateStructureColumns', response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  getAllStructures({ commit }) {
    return new Promise((resolve, reject) => {
      structureService.getAllStructures()
      .then((response) => {
        resolve(response.data.data);
        commit('updateStructureList', response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  getAllMyStructures({ commit }) {
    return new Promise((resolve, reject) => {
      structureService.getAllMyStructures()
      .then((response) => {
        resolve(response.data.data);
        commit('updatemyStructures', response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  getAllPublicStructures({ commit }) {
    return new Promise((resolve, reject) => {
      structureService.getAllPublicStructures()
      .then((response) => {
        resolve(response.data.data);
        commit('updateStructureList', response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  getAllStructuresByName({ commit }, name) {
    return new Promise((resolve, reject) => {
      structureService.getAllStructuresByName(name)
      .then((response) => {
        resolve(response.data.data);
        commit('updateStructureList', response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  getStructureByName({ commit }, name) {
    return new Promise((resolve, reject) => {
      structureService.getStructureByName(name)
      .then((response) => {
        resolve(response.data.data);
        commit('updateStructure', response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  getStructureById({ commit }, id) {
    return new Promise((resolve, reject) => {
      structureService.getStructureById(id)
      .then((response) => {
        resolve(response.data.data);
        commit('updateStructure', response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  createStructure({ commit }, team) {
    return new Promise((resolve, reject) => {
      structureService.createStructure(team)
      .then((response) => {
        resolve(response.data.data);
        commit('updateStructure', response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  uploadStructureBanner({ commit }, payload) {
    return new Promise((resolve, reject) => {
      structureService.uploadStructureBanner(payload.structureId, payload.file)
      .then((response) => {
        resolve(response.data.data);
        commit('updateStructure', response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  uploadStructureLogo({ commit }, payload) {
    return new Promise((resolve, reject) => {
      structureService.uploadStructureLogo(payload.structureId, payload.file)
      .then((response) => {
        resolve(response.data.data);
        commit('updateStructure', response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  updateStructure({ commit }, team) {
    return new Promise((resolve, reject) => {
      structureService.updateStructure(team)
      .then((response) => {
        resolve(response.data.data);
        commit('updateStructure', response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  deleteStructure(id) {
    return new Promise((resolve, reject) => {
      structureService.deleteStructure(id)
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
