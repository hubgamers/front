export default [
    {
        path: '/admin/tag',
        name: 'TagList',
        component: () => import('@/views/admin/Tag.vue')
      },
      {
        path: '/admin/tag/edit/:id',
        name: 'TagEdit',
        component: () => import('@/views/admin/Tag.vue')
      },
      {
        path: '/admin/tag/view/:id',
        name: 'TagView',
        component: () => import('@/views/admin/Tag.vue')
      },
]