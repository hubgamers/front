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
    path: '/structures',
    name: 'Structures',
    component: () => import('@/views/structures/PublicStructures.vue')
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
    path: '/dashboard/my-subscription',
    name: 'MySubscriptionDashboard',
    component: () => import('@/views/dashboard/subscriptions/MySubscription.vue')
  },
  {
    path: '/dashboard/profile',
    name: 'Profile',
    component: () => import('@/views/dashboard/Profile.vue')
  },
  {
    path: '/dashboard/structures',
    name: 'Structures',
    component: () => import('@/views/dashboard/structures/Structures.vue')
  },
  {
    path: '/dashboard/my-structures',
    name: 'MyStructures',
    component: () => import('@/views/dashboard/structures/MyStructures.vue')
  },
  {
    path: '/dashboard/structures/create',
    name: 'CreateStructure',
    component: () => import('@/views/dashboard/structures/StructureEdit.vue')
  },
  {
    path: '/dashboard/structures/edit/:id',
    name: 'StructureEdit',
    component: () => import('@/views/dashboard/structures/StructureEdit.vue')
  },
  {
    path: '/dashboard/structures/:id',
    name: 'StructureDetail',
    component: () => import('@/views/dashboard/structures/StructureDetail.vue')
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
    name: 'Tournaments',
    component: () => import('@/views/dashboard/tournaments/Tournaments.vue')
  },
  {
    path: '/dashboard/my-tournaments',
    name: 'MyTournaments',
    component: () => import('@/views/dashboard/tournaments/MyTournaments.vue')
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
    path: '/admin/structure',
    name: 'StructureList',
    component: () => import('@/views/admin/Structure.vue')
  },
  {
    path: '/admin/structure/edit/:id',
    name: 'StructureEdit',
    component: () => import('@/views/admin/Structure.vue')
  },
  {
    path: '/admin/structure/view/:id',
    name: 'StructureView',
    component: () => import('@/views/admin/Structure.vue')
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
    path: '/admin/bo-format',
    name: 'BoFormatList',
    component: () => import('@/views/admin/BoFormat.vue')
  },
  {
    path: '/admin/bo-format/edit/:id',
    name: 'BoFormatEdit',
    component: () => import('@/views/admin/BoFormat.vue')
  },
  {
    path: '/admin/bo-format/view/:id',
    name: 'BoFormatView',
    component: () => import('@/views/admin/BoFormat.vue')
  },
  {
    path: '/admin/platform',
    name: 'PlatformList',
    component: () => import('@/views/admin/Platform.vue')
  },
  {
    path: '/admin/platform/edit/:id',
    name: 'PlatformEdit',
    component: () => import('@/views/admin/Platform.vue')
  },
  {
    path: '/admin/platform/view/:id',
    name: 'PlatformView',
    component: () => import('@/views/admin/Platform.vue')
  },
  {
    path: '/admin/tier',
    name: 'TierList',
    component: () => import('@/views/admin/Tier.vue')
  },
  {
    path: '/admin/tier/edit/:id',
    name: 'TierEdit',
    component: () => import('@/views/admin/Tier.vue')
  },
  {
    path: '/admin/tier/view/:id',
    name: 'TierView',
    component: () => import('@/views/admin/Tier.vue')
  },
  {
    path: '/admin/game',
    name: 'GameList',
    component: () => import('@/views/admin/Game.vue')
  },
  {
    path: '/admin/game/edit/:id',
    name: 'GameEdit',
    component: () => import('@/views/admin/Game.vue')
  },
  {
    path: '/admin/game/view/:id',
    name: 'GameView',
    component: () => import('@/views/admin/Game.vue')
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
