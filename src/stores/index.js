import { createStore } from 'vuex';
import authService from '@/services/authService.js'
import userService from '@/services/userService.js'

export default createStore({
  state() {
    return {
      count: 0,
      users: []
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    updateUserList(state, users) {
      state.users = users;
    }
  },
  actions: {
    increment(context) {
      context.commit('increment');
    },
    login(context, { login, password }) {
      return authService.login(login, password);
    },
    getAllUsers(context) {
      return userService.getAllUsers().then((response) => {
        context.commit('updateUserList', response.data);
      });
    }
  }
});
