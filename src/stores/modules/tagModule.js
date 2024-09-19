import tagService from '@/services/tagService.js'

const state = () => ({
  tags: [],
  tagsColumns: []
});

const getters = {
  getTags(state) {
    return state.tags;
  },
  getTagColumns(state) {
    return state.tagsColumns;
  }
};

const mutations = {
  updateTags(state, tags) {
    state.tags = tags;
  },
  updateTagsColumns(state, tagsColumns) {
    state.tagsColumns = tagsColumns;
  }
};

const actions = {
  getAllTags(context) {
    return new Promise((resolve, reject) => {
      tagService.getAllTags()
      .then((response) => {
        resolve(response.data.data);
        context.commit('updateTags', response.data.data);
      })
      .catch((error) => {
        reject(error);
      });
    });
  },
  getTagColumns({ commit }) {
    return new Promise((resolve, reject) => {
      tagService.getColumns()
      .then((response) => {
        commit('updateTagsColumns', response.data.data);
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
