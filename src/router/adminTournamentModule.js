export default [
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
]