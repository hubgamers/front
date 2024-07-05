import tagService from '@/services/tagService.js'

const state = () => ({
  tags: []
});

const getters = {
  getTags(state) {
    return state.tags;
  }
};

const mutations = {
  updateTags(state, tags) {
    state.tags = tags;
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
  }
};

export default {
  namespaced: false,
  state,
  getters,
  mutations,
  actions
};
