export default [
    {
        path: '/admin/invitation',
        name: 'InvitationList',
        component: () => import('@/views/admin/Invitation.vue')
      },
      {
        path: '/admin/invitation/edit/:id',
        name: 'InvitationEdit',
        component: () => import('@/views/admin/Invitation.vue')
      },
      {
        path: '/admin/invitation/view/:id',
        name: 'InvitationView',
        component: () => import('@/views/admin/Invitation.vue')
      }
]