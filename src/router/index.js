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
    component: () => import('@/views/vitrine/Home.vue'),
    meta: {
      title: 'Se connecter à HubGamers',
      description: "HubGamers est la plateforme ultime pour créer et gérer des structures de gaming. Formez des équipes pour vos jeux et plateformes préférés, organisez des tournois, et défiez d'autres équipes dans un environnement compétitif et social"
    }
  },
  ...authModule,
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/dashboard/Dashboard.vue'),
    meta: {
      title: 'Tableau de bord',
      description: 'Gérez vos structures, équipes, tournois et défis depuis le tableau de bord HubGamers. Suivez vos performances et connectez-vous avec la communauté gaming.'
    }
  },
  ...subscriptionModule,
  {
    path: '/dashboard/profile',
    name: 'Profile',
    component: () => import('@/views/dashboard/Profile.vue'),
    meta: {
      title: 'Profil',
      description: 'Modifiez votre profil. Créez votre structure esportive et recrutez des joueurs pour vos tournois et matchs amicaux.'
    }
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
