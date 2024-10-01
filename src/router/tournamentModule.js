export default [
  {
    path: '/dashboard/tournaments',
    name: 'Tournaments',
    component: () => import('@/views/dashboard/tournaments/Tournaments.vue'),
    meta: {
      title: 'Tous les tournois - HubGamers',
      description: 'Parcourez la liste de tous les tournois sur HubGamers. Découvrez les compétitions en cours et à venir.'
    }
  },
  {
    path: '/dashboard/my-tournaments',
    name: 'MyTournaments',
    component: () => import('@/views/dashboard/tournaments/MyTournaments.vue'),
    meta: {
      title: 'Mes tournois - HubGamers',
      description: 'Gérez et suivez vos tournois sur HubGamers. Organisez et suivez vos compétitions en un seul endroit.'
    }
  },
  {
    path: '/dashboard/tournaments/create',
    name: 'CreateTournament',
    component: () => import('@/views/dashboard/tournaments/TournamentEdit.vue'),
    meta: {
      title: 'Créer un tournoi - HubGamers',
      description: 'Créez un nouveau tournoi sur HubGamers. Choisissez les équipes, configurez les règles et commencez la compétition.'
    }
  },
  {
    path: '/dashboard/tournaments/edit/:id',
    name: 'EditTournament',
    component: () => import('@/views/dashboard/tournaments/TournamentEdit.vue'),
    meta: {
      title: 'Modifier un tournoi - HubGamers',
      description: 'Modifiez les détails de votre tournoi sur HubGamers. Ajustez les équipes, les dates et les règles pour vos compétitions.'
    }
  },
  {
    path: '/dashboard/tournaments/:id',
    name: 'TournamentDetail',
    component: () => import('@/views/dashboard/tournaments/TournamentDetail.vue'),
    meta: {
      title: 'Détails du tournoi - HubGamers',
      description: 'Consultez les détails du tournoi sur HubGamers. Suivez les résultats, les équipes et l\'avancement de la compétition.'
    }
  }
];
