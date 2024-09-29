export default [
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
]