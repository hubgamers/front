export default [
    {
        path: '/dashboard/scrims',
        name: 'Scrims',
        component: () => import('@/views/dashboard/scrims/Scrims.vue')
      },
      {
        path: '/dashboard/my-scrims',
        name: 'MyScrims',
        component: () => import('@/views/dashboard/scrims/MyScrims.vue')
      },
      {
        path: '/dashboard/scrims/create',
        name: 'CreateScrim',
        component: () => import('@/views/dashboard/scrims/ScrimEdit.vue')
      },
      {
        path: '/dashboard/scrims/edit/:id',
        name: 'EditScrim',
        component: () => import('@/views/dashboard/scrims/ScrimEdit.vue')
      },
      {
        path: '/dashboard/scrims/:id',
        name: 'ScrimDetail',
        component: () => import('@/views/dashboard/scrims/ScrimDetail.vue')
      },
]