export default [
  {
    path: '/dashboard/players',
    name: 'Players',
    component: () => import('@/views/dashboard/players/Players.vue'),
    meta: {
      title: 'Tous les joueurs - HubGamers',
      description: 'Explorez la liste complète des joueurs sur HubGamers. Recherchez et gérez les joueurs associés à vos structures et équipes.'
    }
  },
  {
    path: '/dashboard/players/:id',
    name: 'PlayerDetail',
    component: () => import('@/views/dashboard/players/PlayerDetail.vue'),
    meta: {
      title: 'Détails du joueur - HubGamers',
      description: 'Consultez les informations détaillées d\'un joueur sur HubGamers. Suivez ses performances et son engagement dans les différentes équipes.'
    }
  }
];
