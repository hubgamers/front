import { createStore } from 'vuex';
import authService from '@/services/authService.js'
import stripeService from '@/services/stripeService.js'
import teamRosterModule from '@/stores/modules/teamRosterModule.js'
import structureModule from '@/stores/modules/structureModule.js'
import gameModule from '@/stores/modules/gameModule.js'
import playerModule from '@/stores/modules/playerModule.js'
import userModule from '@/stores/modules/userModule.js'
import tournamentModule from '@/stores/modules/tournamentModule.js'
import tagModule from '@/stores/modules/tagModule.js'
import invitationModule from '@/stores/modules/invitationModule.js'
import tierModule from './modules/tierModule';
import boFormatModule from './modules/boFormatModule';
import platformModule from './modules/platformModule';
import scrimModule from './modules/scrimModule';

export default createStore({
  state() {
    return {
      stripeProduct: null
    };
  },
  getters: {
    getStripeProduct(state) {
      return state.stripeProduct;
    }
  },
  mutations: {
    updateStripeProduct(state, product) {
      state.stripeProduct = product;
    }
  },
  actions: {
    increment(context) {
      context.commit('increment');
    },
    register(context, {username, email, password}) {
      return new Promise((resolve, reject) => {
        authService.register(username, email, password)
          .then((response) => {
            resolve(response.data.data);
          })
          .catch((error) => {
            reject(error.response.data.error);
          })
      })
    },
    login(context, { login, password }) {
      return new Promise((resolve, reject) => {
        authService.login(login, password)
          .then((response) => {
            if (response.status === 200) {
              localStorage.setItem('roles', response.data.data.roles);
              localStorage.setItem('jwtToken', response.data.data.jwtToken);
              localStorage.setItem('userId', response.data.data.userId);
              resolve(response.data.data);
            } else if (response.status === 401) {
              reject(response);
            }
          })
          .catch((error) => {
            reject(error.response);
          })
      })
    },
    createCheckoutSession(context, lookupKey) {
      return new Promise((resolve, reject) => {
        stripeService.createCheckoutSession(lookupKey)
          .then((response) => {
            resolve(response.data.data);
          })
          .catch((error) => {
            reject(error.response.data.error);
          });
      });
    },
    createPortalSession(context, sessionId) {
      return new Promise((resolve, reject) => {
        stripeService.createPortalSession(sessionId)
          .then((response) => {
            resolve(response.data.data);
          })
          .catch((error) => {
            reject(error.response.data.error);
          });
      });
    },
    getProductByUser(context) {
      return new Promise((resolve, reject) => {
        stripeService.getProductByUser()
          .then((response) => {
            resolve(response.data.data);
            context.commit('updateStripeProduct', response.data.data);
          })
          .catch((error) => {
            reject(error.response.data.error);
          });
      });
    },
    
  },
  modules: {
    gameModule,
    invitationModule,
    playerModule,
    tagModule,
    structureModule,
    teamRosterModule,
    tournamentModule,
    userModule,
    tierModule,
    boFormatModule,
    platformModule,
    scrimModule
  }
});
