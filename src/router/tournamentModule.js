export default [
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
]