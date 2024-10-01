export default [
    {
        path: '/admin/tier',
        name: 'TierList',
        component: () => import('@/views/admin/Tier.vue')
      },
      {
        path: '/admin/tier/edit/:id',
        name: 'TierEdit',
        component: () => import('@/views/admin/Tier.vue')
      },
      {
        path: '/admin/tier/view/:id',
        name: 'TierView',
        component: () => import('@/views/admin/Tier.vue')
      },
]