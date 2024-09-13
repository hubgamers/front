import tournamentService from '@/services/tournamentService.js'

const state = () => ({
  tournamentColumns: [],
  myTournaments: [],
  tournaments: [],
  tournament: null
});

const getters = {
  getTournamentColumns(state) {
    return state.tournamentColumns;
  },
  getMyTournaments(state) {
    return state.myTournaments;
  },
  getTournaments(state) {
    return state.tournaments;
  },
  getTournament(state) {
    return state.tournament;
  }
};

const mutations = {
  updateTournamentColumns(state, columns) {
    state.tournamentColumns = columns;
  },
  updateMyTournaments(state, structures) {
    state.myTournaments = structures;
  },
  updateTournamentList(state, tournaments) {
    state.tournaments = tournaments;
  },
  updateTournament(state, tournament) {
    state.tournament = tournament;
  }
};

const actions = {
  getTournamentColumns(context) {
    return new Promise((resolve, reject) => {
      tournamentService.getColumns()
      .then((response) => {
        resolve(response.data.data);
        context.commit('updateTournamentColumns', response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  getMyTournaments(context) {
    return new Promise((resolve, reject) => {
      tournamentService.getMyTournaments()
      .then((response) => {
        resolve(response.data.data);
        context.commit('updateMyTournaments', response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  getAllTournaments(context) {
    return new Promise((resolve, reject) => {
      tournamentService.getAllTournaments()
      .then((response) => {
        resolve(response.data.data);
        context.commit('updateTournamentList', response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  // getTournamentByName(context, name) {
  //   return new Promise((resolve, reject) => {
  //     tournamentService.getTournamentByName(name)
  //       .then((response) => {
  //         resolve(response.data.data);
  //         context.commit('updateTournament', response.data.data);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   });
  // },
  getTournamentById(context, id) {
    return new Promise((resolve, reject) => {
      tournamentService.getTournamentById(id)
      .then((response) => {
        resolve(response.data.data);
        context.commit('updateTournament', response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  getTournamentByName(context, name) {
    return new Promise((resolve, reject) => {
      tournamentService.getTournamentByName(name)
      .then((response) => {
        resolve(response.data.data);
        context.commit('updateTournament', response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  createTournament(context, tournament) {
    return new Promise((resolve, reject) => {
      tournamentService.createTournament(tournament)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  addParticipant(context, { tournamentId, participant }) {
    return new Promise((resolve, reject) => {
      tournamentService.addParticipant(tournamentId, participant)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  uploadTournamentBanner(context, { teamId, file }) {
    return new Promise((resolve, reject) => {
      tournamentService.uploadTournamentBanner(teamId, file)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  uploadTournamentLogo(context, { teamId, file }) {
    return new Promise((resolve, reject) => {
      tournamentService.uploadTournamentLogo(teamId, file)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  updateTournament(context, tournament) {
    return new Promise((resolve, reject) => {
      tournamentService.updateTournament(tournament)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((error) => {
        reject(error.response.data.error);
      });
    });
  },
  deleteTournament(context, id) {
    return new Promise((resolve, reject) => {
      tournamentService.deleteTournament(id)
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
