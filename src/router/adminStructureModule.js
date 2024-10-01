export default [
    {
        path: '/admin/structure',
        name: 'StructureList',
        component: () => import('@/views/admin/Structure.vue')
      },
      {
        path: '/admin/structure/edit/:id',
        name: 'AdminStructureEdit',
        component: () => import('@/views/admin/Structure.vue')
      },
      {
        path: '/admin/structure/view/:id',
        name: 'StructureView',
        component: () => import('@/views/admin/Structure.vue')
      },
]