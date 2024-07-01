import { createStore } from 'vuex';
import authService from '@/services/authService.js'
import userService from '@/services/userService.js'
import playerService from '@/services/playerService.js'
import teamService from '@/services/teamService.js'
import tournamentService from '@/services/tournamentService.js'
import invitationService from '@/services/invitationService.js'
import stripeService from '@/services/stripeService.js'

export default createStore({
  state() {
    return {
      count: 0,
      userColumns: [],
      users: [],
      user: null,
      playerColumns: [],
      players: [],
      player: null,
      teamColumns: [],
      myTeams: [],
      teams: [],
      team: null,
      tournamentColumns: [],
      myTournaments: [],
      tournaments: [],
      tournament: null,
      invitations: [],
      invitationsByTeam: [],
      invitationsByPlayer: [],
      invitation: null,
      invitationColumns: [],
      stripeProduct: null
    };
  },
  getters: {
    getUserColumns(state) {
      return state.userColumns;
    },
    getUsers(state) {
      return state.users;
    },
    getUser(state) {
      return state.user;
    },
    getPlayerColumns(state) {
      return state.playerColumns;
    },
    getPlayers(state) {
      return state.players;
    },
    getPlayer(state) {
      return state.player;
    },
    getTeamColumns(state) {
      return state.teamColumns;
    },
    getMyTeams(state) {
      return state.myTeams;
    },
    getTeams(state) {
      return state.teams;
    },
    getTeam(state) {
      return state.team;
    },
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
    },
    getInvitations(state) {
      return state.invitations;
    },
    getInvitationsByTeamId(state) {
      return state.invitationsByTeam;
    },
    getInvitationsByPlayerId(state) {
      return state.invitationsByPlayer;
    },
    getInvitation(state) {
      return state.invitation;
    },
    getInvitationColumns(state) {
      return state.invitationColumns;
    },
    getStripeProduct(state) {
      return state.stripeProduct;
    }
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    updateUserColumns(state, columns) {
      state.userColumns = columns;
    },
    updateUserList(state, users) {
      state.users = users;
    },
    updateUser(state, user) {
      state.user = user;
    },
    updatePlayerColumns(state, columns) {
      state.playerColumns = columns;
    },
    updatePlayerList(state, players) {
      state.players = players;
    },
    updatePlayer(state, player) {
      state.player = player;
    },
    updateTeamColumns(state, columns) {
      state.teamColumns = columns;
    },
    updateMyTeams(state, teams) {
      state.myTeams = teams;
    },
    updateTeamList(state, teams) {
      state.teams = teams;
    },
    updateTeam(state, team) {
      state.team = team;
    },
    updateTournamentColumns(state, columns) {
      state.tournamentColumns = columns;
    },
    updateMyTournaments(state, teams) {
      state.myTournaments = teams;
    },
    updateTournamentList(state, tournaments) {
      state.tournaments = tournaments;
    },
    updateTournament(state, tournament) {
      state.tournament = tournament;
    },
    updateInvitations(state, invitations) {
      state.invitations = invitations;
    },
    updateInvitationsByTeam(state, invitations) {
      state.invitationsByTeam = invitations;
    },
    updateInvitationsByPlayer(state, invitations) {
      state.invitationsByPlayer = invitations;
    },
    updateInvitation(state, invitation) {
      state.invitation = invitation;
    },
    updateInvitationColumns(state, columns) {
      state.invitationColumns = columns;
    },
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
              console.info('jwtToken', response.data);
              localStorage.setItem('jwtToken', response.data.data.jwtToken);
              localStorage.setItem('userId', response.data.data.userId);
            }
            resolve(response.data.data);
          })
          .catch((error) => {
            reject(error.response.data.error);
          })
      })
    },
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
    },
    getPlayerColumns(context) {
      return new Promise((resolve, reject) => {
        playerService.getColumns()
          .then((response) => {
            resolve(response.data.data);
            context.commit('updatePlayerColumns', response.data.data);
          })
          .catch((error) => {
            reject(error.response.data.error);
          });
      });
    },
    getAllPlayers(context) {
      return new Promise((resolve, reject) => {
        playerService.getAllPlayers()
          .then((response) => {
            resolve(response.data.data);
            context.commit('updatePlayerList', response.data.data);
          })
          .catch((error) => {
            reject(error.response.data.error);
          });
      });
    },
    getPlayerByUsername(context, username) {
      return new Promise((resolve, reject) => {
        playerService.getPlayerByUsername(username)
          .then((response) => {
            resolve(response.data.data);
            context.commit('updatePlayer', response.data.data);
          })
          .catch((error) => {
            reject(error.response.data.error);
          });
      });
    },
    getPlayerById(context, id) {
      return new Promise((resolve, reject) => {
        playerService.getPlayerById(id)
          .then((response) => {
            resolve(response.data.data);
            context.commit('updatePlayer', response.data.data);
          })
          .catch((error) => {
            reject(error.response.data.error);
          });
      });
    },
    getPlayerByUserId(context, userId) {
      return new Promise((resolve, reject) => {
        playerService.getPlayerByUserId(userId)
          .then((response) => {
            resolve(response.data.data);
            context.commit('updatePlayer', response.data.data);
          })
          .catch((error) => {
            reject(error.response.data.error);
          });
      });
    },
    createPlayer(context, player) {
      return new Promise((resolve, reject) => {
        playerService.createPlayer(player)
          .then((response) => {
            resolve(response.data.data);
          })
          .catch((error) => {
            reject(error.response.data.error);
          });
      });
    },
    updatePlayer(context, player) {
      return new Promise((resolve, reject) => {
        playerService.updatePlayer(player)
          .then((response) => {
            resolve(response.data.data);
          })
          .catch((error) => {
            reject(error.response.data.error);
          });
      });
    },
    deletePlayer(context, id) {
      return new Promise((resolve, reject) => {
        playerService.deletePlayer(id)
          .then((response) => {
            resolve(response.data.data);
          })
          .catch((error) => {
            reject(error.response.data.error);
          });
      });
    },
    getTeamColumns(context) {
      return new Promise((resolve, reject) => {
        teamService.getColumns()
          .then((response) => {
            resolve(response.data.data);
            context.commit('updateTeamColumns', response.data.data);
          })
          .catch((error) => {
            reject(error.response.data.error);
          });
      });
    },
    getAllMyTeams(context) {
      return new Promise((resolve, reject) => {
        teamService.getAllMyTeams()
          .then((response) => {
            resolve(response.data.data);
            context.commit('updateMyTeams', response.data.data);
          })
          .catch((error) => {
            reject(error.response.data.error);
          });
      });
    },
    getAllPublicTeams(context) {
      return new Promise((resolve, reject) => {
        teamService.getAllPublicTeams()
          .then((response) => {
            resolve(response.data.data);
            context.commit('updateTeamList', response.data.data);
          })
          .catch((error) => {
            reject(error.response.data.error);
          });
      });
    },
    getAllTeamsByName(context, name) {
      return new Promise((resolve, reject) => {
        teamService.getAllTeamsByName(name)
          .then((response) => {
            resolve(response.data.data);
            context.commit('updateTeamList', response.data.data);
          })
          .catch((error) => {
            reject(error.response.data.error);
          });
      });
    },
    getTeamByName(context, name) {
      return new Promise((resolve, reject) => {
        teamService.getTeamByName(name)
          .then((response) => {
            resolve(response.data.data);
            context.commit('updateTeam', response.data.data);
          })
          .catch((error) => {
            reject(error.response.data.error);
          });
      });
    },
    getTeamById(context, id) {
      return new Promise((resolve, reject) => {
        teamService.getTeamById(id)
          .then((response) => {
            resolve(response.data.data);
            context.commit('updateTeam', response.data.data);
          })
          .catch((error) => {
            reject(error.response.data.error);
          });
      });
    },
    createTeam(context, team) {
      return new Promise((resolve, reject) => {
        teamService.createTeam(team)
          .then((response) => {
            resolve(response.data.data);
          })
          .catch((error) => {
            reject(error.response.data.error);
          });
      });
    },
    uploadTeamBanner(context, { teamId, file }) {
      return new Promise((resolve, reject) => {
        teamService.uploadTeamBanner(teamId, file)
          .then((response) => {
            resolve(response.data.data);
          })
          .catch((error) => {
            reject(error.response.data.error);
          });
      });
    },
    uploadTeamLogo(context, { teamId, file }) {
      return new Promise((resolve, reject) => {
        teamService.uploadTeamLogo(teamId, file)
          .then((response) => {
            resolve(response.data.data);
          })
          .catch((error) => {
            reject(error.response.data.error);
          });
      });
    },
    updateTeam(context, team) {
      return new Promise((resolve, reject) => {
        teamService.updateTeam(team)
          .then((response) => {
            resolve(response.data.data);
          })
          .catch((error) => {
            reject(error.response.data.error);
          });
      });
    },
    deleteTeam(context, id) {
      return new Promise((resolve, reject) => {
        teamService.deleteTeam(id)
          .then((response) => {
            resolve(response.data.data);
          })
          .catch((error) => {
            reject(error.response.data.error);
          });
      });
    },
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
    },
    getAllInvitations(context) {
      return new Promise((resolve, reject) => {
        invitationService.getAllInvitations()
          .then((response) => {
            resolve(response.data.data);
            context.commit('updateInvitations', response.data.data);
          })
          .catch((error) => {
            reject(error.response.data.error);
          });
      });
    },
    getInvitationColumns(context) {
      return new Promise((resolve, reject) => {
        invitationService.getColumns()
          .then((response) => {
            resolve(response.data.data);
            context.commit('updateInvitationColumns', response.data.data);
          })
          .catch((error) => {
            reject(error.response.data.error);
          });
      });
    },
    getInvitationById(context, id) {
      return new Promise((resolve, reject) => {
        invitationService.getInvitationById(id)
          .then((response) => {
            resolve(response.data.data);
            context.commit('updateInvitation', response.data.data);
          })
          .catch((error) => {
            reject(error.response.data.error);
          });
      });
    },
    getAllInvitationsByTeamId(context, teamId) {
      return new Promise((resolve, reject) => {
        invitationService.getAllInvitationsByTeamId(teamId)
          .then((response) => {
            resolve(response.data.data);
            context.commit('updateInvitationsByTeam', response.data.data);
          })
          .catch((error) => {
            reject(error.response.data.error);
          });
      });
    },
    getAllInvitationsbyPlayerId(context, playerId) {
      return new Promise((resolve, reject) => {
        invitationService.getAllInvitationsByPlayerId(playerId)
          .then((response) => {
            resolve(response.data.data);
            context.commit('updateInvitationsByPlayer', response.data.data);
          })
          .catch((error) => {
            reject(error.response.data.error);
          });
      })
    },
    getAllJoinInvitationByTeamId(context, teamId) {
      return new Promise((resolve, reject) => {
        invitationService.getAllJoinInvitationByTeamId(teamId)
          .then((response) => {
            resolve(response.data.data);
            context.commit('updateInvitations', response.data.data);
          })
          .catch((error) => {
            reject(error.response.data.error);
          });
      });
    },
    getAllRecruitPlayerInvitationByTeamId(context, teamId) {
      return new Promise((resolve, reject) => {
        invitationService.getAllRecruitPlayerInvitationByTeamId(teamId)
          .then((response) => {
            resolve(response.data.data);
            context.commit('updateInvitations', response.data.data);
          })
          .catch((error) => {
            reject(error.response.data.error);
          });
      });
    },
    createInvitation(context, invitation) {
      return new Promise((resolve, reject) => {
        invitationService.createInvitation(invitation)
          .then((response) => {
            resolve(response.data.data);
          })
          .catch((error) => {
            reject(error.response.data.error);
          });
      });
    },
    acceptInvitation(context, invitationId) {
      return new Promise((resolve, reject) => {
        invitationService.acceptInvitation(invitationId)
          .then((response) => {
            resolve(response.data.data);
          })
          .catch((error) => {
            reject(error.response.data.error);
          });
      });
    },
    declineInvitation(context, invitationId) {
      return new Promise((resolve, reject) => {
        invitationService.declineInvitation(invitationId)
          .then((response) => {
            resolve(response.data.data);
          })
          .catch((error) => {
            reject(error.response.data.error);
          });
      });
    },
    updateInvitation(context, invitation) {
      return new Promise((resolve, reject) => {
        invitationService.updateInvitation(invitation)
          .then((response) => {
            resolve(response.data.data);
          })
          .catch((error) => {
            reject(error.response.data.error);
          });
      });
    },
    deleteInvitation(context, id) {
      return new Promise((resolve, reject) => {
        invitationService.deleteInvitation(id)
          .then((response) => {
            resolve(response.data.data);
          })
          .catch((error) => {
            reject(error.response.data.error);
          });
      });
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
    }
  }
});
