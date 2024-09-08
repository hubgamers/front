import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/vitrine/Home.vue')
  },
  {
    path: '/features',
    name: 'Features',
    component: () => import('@/views/vitrine/Features.vue')
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: () => import('@/views/vitrine/Pricing.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/vitrine/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/vitrine/Contact.vue')
  },
  {
    path: '/teams',
    name: 'Teams',
    component: () => import('@/views/teams/PublicTeams.vue')
  },
  {
    path: '/players',
    name: 'Players',
    component: () => import('@/views/vitrine/SearchPlayers.vue')
  },
  {
    path: '/legals',
    name: 'Legals',
    component: () => import('@/views/vitrine/Legals.vue')
  },
  {
    path: '/cgu',
    name: 'CGU',
    component: () => import('@/views/vitrine/CGU.vue')
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: () => import('@/views/Auth.vue')
  },
  {
    path: '/auth/register',
    name: 'Register',
    component: () => import('@/views/Auth.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/dashboard/Dashboard.vue')  // Assurez-vous que ce chemin est correct
  },
  {
    path: '/dashboard/subscriptions',
    name: 'SubscriptionsDashboard',
    component: () => import('@/views/dashboard/subscriptions/Subscriptions.vue')
  },
  {
    path: '/dashboard/profile',
    name: 'Profile',
    component: () => import('@/views/dashboard/Profile.vue')
  },
  {
    path: '/dashboard/teams',
    name: 'MyTeams',
    component: () => import('@/views/dashboard/teams/Teams.vue')
  },
  {
    path: '/dashboard/teams/create',
    name: 'CreateTeam',
    component: () => import('@/views/dashboard/teams/TeamEdit.vue')
  },
  {
    path: '/dashboard/teams/edit/:id',
    name: 'EditTeam',
    component: () => import('@/views/dashboard/teams/TeamEdit.vue')
  },
  {
    path: '/dashboard/teams/:id',
    name: 'TeamDetail',
    component: () => import('@/views/dashboard/teams/TeamDetail.vue')
  },
  {
    path: '/dashboard/players',
    name: 'Players',
    component: () => import('@/views/dashboard/players/Players.vue')
  },
  {
    path: '/dashboard/players/:id',
    name: 'PlayerDetail',
    component: () => import('@/views/dashboard/players/PlayerDetail.vue')
  },
  {
    path: '/dashboard/tournaments',
    name: 'MyTournaments',
    component: () => import('@/views/dashboard/tournaments/Tournaments.vue')
  },
  {
    path: '/dashboard/tournaments/create',
    name: 'CreateTournament',
    component: () => import('@/views/dashboard/tournaments/TournamentEdit.vue')
  },
  {
    path: '/dashboard/tournaments/edit/:id',
    name: 'EditTournament',
    component: () => import('@/views/dashboard/tournaments/TournamentEdit.vue')
  },
  {
    path: '/dashboard/tournaments/:id',
    name: 'TournamentDetail',
    component: () => import('@/views/dashboard/tournaments/TournamentDetail.vue')
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('@/views/checkout/Checkout.vue')
  },
  {
    path: '/checkout/success',
    name: 'CheckoutSuccess',
    component: () => import('@/views/checkout/CheckoutSuccess.vue')
  },
  {
    path: '/checkout/cancel',
    name: 'CheckoutCancel',
    component: () => import('@/views/checkout/CheckoutCancel.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/views/admin/Admin.vue')
  },
  {
    path: '/admin/user',
    name: 'UserList',
    component: () => import('@/views/admin/User.vue')
  },
  {
    path: '/admin/user/edit/:id',
    name: 'UserEdit',
    component: () => import('@/views/admin/User.vue')
  },
  {
    path: '/admin/user/view/:id',
    name: 'UserView',
    component: () => import('@/views/admin/User.vue')
  },
  {
    path: '/admin/tournament',
    name: 'TournamentList',
    component: () => import('@/views/admin/Tournament.vue')
  },
  {
    path: '/admin/tournament/edit/:id',
    name: 'TournamentEdit',
    component: () => import('@/views/admin/Tournament.vue')
  },
  {
    path: '/admin/tournament/view/:id',
    name: 'TournamentView',
    component: () => import('@/views/admin/Tournament.vue')
  },
  {
    path: '/admin/team',
    name: 'TeamList',
    component: () => import('@/views/admin/Team.vue')
  },
  {
    path: '/admin/team/edit/:id',
    name: 'TeamEdit',
    component: () => import('@/views/admin/Team.vue')
  },
  {
    path: '/admin/team/view/:id',
    name: 'TeamView',
    component: () => import('@/views/admin/Team.vue')
  },
  {
    path: '/admin/player',
    name: 'PlayerList',
    component: () => import('@/views/admin/Player.vue')
  },
  {
    path: '/admin/player/edit/:id',
    name: 'PlayerEdit',
    component: () => import('@/views/admin/Player.vue')
  },
  {
    path: '/admin/player/view/:id',
    name: 'PlayerView',
    component: () => import('@/views/admin/Player.vue')
  },
  {
    path: '/admin/tag',
    name: 'TagList',
    component: () => import('@/views/admin/Tag.vue')
  },
  {
    path: '/admin/tag/edit/:id',
    name: 'TagEdit',
    component: () => import('@/views/admin/Tag.vue')
  },
  {
    path: '/admin/tag/view/:id',
    name: 'TagView',
    component: () => import('@/views/admin/Tag.vue')
  },
  {
    path: '/admin/invitation',
    name: 'InvitationList',
    component: () => import('@/views/admin/Invitation.vue')
  },
  {
    path: '/admin/invitation/edit/:id',
    name: 'InvitationEdit',
    component: () => import('@/views/admin/Invitation.vue')
  },
  {
    path: '/admin/invitation/view/:id',
    name: 'InvitationView',
    component: () => import('@/views/admin/Invitation.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),  // Utiliser process.env.BASE_URL
  routes
});

export default router;
