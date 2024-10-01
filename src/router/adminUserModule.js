export default [
    {
        path: '/admin',
        name: 'Admin',
        component: () => import('@/views/admin/Admin.vue')
      },
      {
        path: '/admin/user',
        name: 'UserList',
        component: () => import('@/views/admin/User.vue')
      },
      {
        path: '/admin/user/edit/:id',
        name: 'UserEdit',
        component: () => import('@/views/admin/User.vue')
      },
      {
        path: '/admin/user/view/:id',
        name: 'UserView',
        component: () => import('@/views/admin/User.vue')
      },
]