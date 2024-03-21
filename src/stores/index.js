import { createStore } from 'vuex';
import authService from '@/services/authService.js'
import userService from '@/services/userService.js'
import playerService from '@/services/playerService.js'
import teamService from '@/services/teamService.js'
import tournamentService from '@/services/tournamentService.js'
import invitationService from '@/services/invitationService.js'

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
      teams: [],
      team: null,
      tournamentColumns: [],
      tournaments: [],
      tournament: null,
      invitations: [],
      invitation: null,
      invitationColumns: []
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
    getTeams(state) {
      return state.teams;
    },
    getTeam(state) {
      return state.team;
    },
    getTournamentColumns(state) {
      return state.tournamentColumns;
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
    getInvitation(state) {
      return state.invitation;
    },
    getInvitationColumns(state) {
      return state.invitationColumns;
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
    updateTeamList(state, teams) {
      state.teams = teams;
    },
    updateTeam(state, team) {
      state.team = team;
    },
    updateTournamentColumns(state, columns) {
      state.tournamentColumns = columns;
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
    updateInvitation(state, invitation) {
      state.invitation = invitation;
    },
    updateInvitationColumns(state, columns) {
      state.invitationColumns = columns;
    }
  },
  actions: {
    increment(context) {
      context.commit('increment');
    },
    login(context, { login, password }) {
      return authService.login(login, password);
    },
    getUserColumns(context) {
      return new Promise((resolve, reject) => {
        userService.getColumns()
          .then((response) => {
            resolve(response.data.data);
            context.commit('updateUserColumns', response.data.data);
          })
          .catch((error) => {
            reject(error);
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
            reject(error);
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
            reject(error);
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
            reject(error);
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
            reject(error);
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
            reject(error);
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
            reject(error);
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
            reject(error);
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
            reject(error);
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
            reject(error);
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
            reject(error);
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
            reject(error);
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
            reject(error);
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
            reject(error);
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
            reject(error);
          });
      });
    },
    getAllTeams(context) {
      return new Promise((resolve, reject) => {
        teamService.getAllTeams()
          .then((response) => {
            resolve(response.data.data);
            context.commit('updateTeamList', response.data.data);
          })
          .catch((error) => {
            reject(error);
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
            reject(error);
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
            reject(error);
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
            reject(error);
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
            reject(error);
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
            reject(error);
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
            reject(error);
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
            reject(error);
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
            reject(error);
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
            reject(error);
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
            reject(error);
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
            reject(error);
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
            reject(error);
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
            reject(error);
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
            reject(error);
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
            reject(error);
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
            reject(error);
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
            reject(error);
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
            reject(error);
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
            reject(error);
          });
      });
    },
    getAllInvitationsByTeamId(context, teamId) {
      return new Promise((resolve, reject) => {
        invitationService.getAllInvitationsByTeamId(teamId)
          .then((response) => {
            resolve(response.data.data);
            context.commit('updateInvitations', response.data.data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    getAllJoinInvitationByTeamId(context, teamId) {
      return new Promise((resolve, reject) => {
        invitationService.getAllJoinInvitationByTeamId(teamId)
          .then((response) => {
            resolve(response.data.data);
            context.commit('updateInvitations', response.data.data);
          })
          .catch((error) => {
            reject(error);
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
            reject(error);
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
            reject(error);
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
            reject(error);
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
            reject(error);
          });
      });
    }
  }
});
