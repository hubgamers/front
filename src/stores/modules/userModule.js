import userService from '@/services/userService.js'

const state = () => ({
  userColumns: [],
  users: [],
  user: null
});

const getters = {
  getUserColumns(state) {
    return state.userColumns;
  },
  getUsers(state) {
    return state.users;
  },
  getUser(state) {
    return state.user;
  }
};

const mutations = {
  updateUserColumns(state, columns) {
    state.userColumns = columns;
  },
  updateUserList(state, users) {
    state.users = users;
  },
  updateUser(state, user) {
    state.user = user;
  }
};

const actions = {
  getUserColumns(context) {
    return new Promise((resolve, reject) => {
      userService.getColumns()
      .then((response) => {
        resolve(response.data.data);
        context.commit('updateUserColumns', response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  getAllUsers(context) {
    return new Promise((resolve, reject) => {
      userService.getAllUsers()
      .then((response) => {
        context.commit('updateUserList', response.data.data);
        resolve(response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  getUserByUsername(context, username) {
    return new Promise((resolve, reject) => {
      userService.getUserByUsername(username)
      .then((response) => {
        resolve(response.data.data);
        context.commit('updateUser', response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  getUserById(context, id) {
    return new Promise((resolve, reject) => {
      userService.getUserById(id)
      .then((response) => {
        resolve(response.data.data);
        context.commit('updateUser', response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  uploadAvatar(context, { file }) {
    return new Promise((resolve, reject) => {
      userService.uploadAvatar(file)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  createUser(context, user) {
    return new Promise((resolve, reject) => {
      userService.createUser(user)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  updateUser(context, user) {
    return new Promise((resolve, reject) => {
      userService.updateUser(user)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  deleteUser(context, id) {
    return new Promise((resolve, reject) => {
      userService.deleteUser(id)
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
