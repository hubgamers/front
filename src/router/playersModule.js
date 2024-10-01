export default [
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
]