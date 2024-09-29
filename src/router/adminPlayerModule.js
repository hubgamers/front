export default [
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
]