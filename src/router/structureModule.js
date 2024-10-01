export default [
    {
        path: '/dashboard/structures',
        name: 'Structures',
        component: () => import('@/views/dashboard/structures/Structures.vue')
      },
      {
        path: '/dashboard/my-structures',
        name: 'MyStructures',
        component: () => import('@/views/dashboard/structures/MyStructures.vue')
      },
      {
        path: '/dashboard/structures/create',
        name: 'CreateStructure',
        component: () => import('@/views/dashboard/structures/StructureEdit.vue')
      },
      {
        path: '/dashboard/structures/edit/:id',
        name: 'StructureEdit',
        component: () => import('@/views/dashboard/structures/StructureEdit.vue')
      },
      {
        path: '/dashboard/structures/:id',
        name: 'StructureDetail',
        component: () => import('@/views/dashboard/structures/StructureDetail.vue')
      }
]