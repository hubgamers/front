export default [
    {
        path: '/admin/platform',
        name: 'PlatformList',
        component: () => import('@/views/admin/Platform.vue')
      },
      {
        path: '/admin/platform/edit/:id',
        name: 'PlatformEdit',
        component: () => import('@/views/admin/Platform.vue')
      },
      {
        path: '/admin/platform/view/:id',
        name: 'PlatformView',
        component: () => import('@/views/admin/Platform.vue')
      },
]