import { createRouter, createWebHistory } from 'vue-router';
import authModule from './authModule';
import subscriptionModule from './subscriptionModule';
import structureModule from './structureModule';
import playersModule from './playersModule';
import tournamentModule from './tournamentModule';
import scrimModule from './scrimModule';
import adminUserModule from './adminUserModule';
import adminTournamentModule from './adminTournamentModule';
import adminStructureModule from './adminStructureModule';
import adminPlayerModule from './adminPlayerModule';
import adminTagModule from './adminTagModule';
import adminBoFormatModule from './adminBoFormatModule';
import adminPlatformModule from './adminPlatformModule';
import adminTierModule from './adminTierModule';
import adminGameModule from './adminGameModule';
import adminInvitationModule from './adminInvitationModule';

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
  ...authModule,
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/dashboard/Dashboard.vue')  // Assurez-vous que ce chemin est correct
  },
  ...subscriptionModule,
  {
    path: '/dashboard/profile',
    name: 'Profile',
    component: () => import('@/views/dashboard/Profile.vue')
  },
  ...structureModule,
  ...playersModule,
  ...tournamentModule,
  ...scrimModule,
  ...adminUserModule,
  ...adminTournamentModule,
  ...adminStructureModule,
  ...adminPlayerModule,
  ...adminTagModule,
  ...adminBoFormatModule,
  ...adminPlatformModule,
  ...adminTierModule,
  ...adminGameModule,
  ...adminInvitationModule
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),  // Utiliser process.env.BASE_URL
  routes
});

export default router;
