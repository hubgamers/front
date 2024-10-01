export default [
    {
        path: '/admin/bo-format',
        name: 'BoFormatList',
        component: () => import('@/views/admin/BoFormat.vue')
      },
      {
        path: '/admin/bo-format/edit/:id',
        name: 'BoFormatEdit',
        component: () => import('@/views/admin/BoFormat.vue')
      },
      {
        path: '/admin/bo-format/view/:id',
        name: 'BoFormatView',
        component: () => import('@/views/admin/BoFormat.vue')
      },
]