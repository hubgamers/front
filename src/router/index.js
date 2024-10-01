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
      title: 'Accueil',
      description: "HubGamers est la plateforme ultime pour créer et gérer des structures de gaming. Formez des équipes pour vos jeux et plateformes préférés, organisez des tournois, et défiez d'autres équipes dans un environnement compétitif et social"
    }
  },
  {
    path: '/features',
    name: 'Features',
    component: () => import('@/views/vitrine/Features.vue'),
    meta: {
      title: 'Fonctionnalités - HubGamers',
      description: 'Explorez les fonctionnalités puissantes de HubGamers, la plateforme idéale pour créer des structures de gaming, organiser des tournois et affronter des équipes adverses.'
    }
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: () => import('@/views/vitrine/Pricing.vue'),
    meta: {
      title: 'Tarifs - HubGamers',
      description: 'Découvrez nos plans tarifaires flexibles et adaptés pour toutes les structures de gaming sur HubGamers. Choisissez l\'offre qui correspond à vos besoins.'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/vitrine/About.vue'),
    meta: {
      title: 'À propos - HubGamers',
      description: 'Apprenez-en plus sur l\'équipe passionnée derrière HubGamers et notre mission de révolutionner la gestion de structures et d\'équipes dans le monde du gaming.'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/vitrine/Contact.vue'),
    meta: {
      title: 'Contact - HubGamers',
      description: 'Besoin d\'aide ou de plus d\'informations ? Contactez l\'équipe de HubGamers et obtenez des réponses rapides à toutes vos questions.'
    }
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
    component: () => import('@/views/vitrine/Legals.vue'),
    meta: {
      title: 'Mentions légales'
    }
  },
  {
    path: '/cgu',
    name: 'CGU',
    component: () => import('@/views/vitrine/CGU.vue'),
    meta: {
      title: 'Conditions générales d\'utilisation'
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
