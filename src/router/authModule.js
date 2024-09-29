export default [
    {
        path: '/auth/login',
        name: 'Login',
        component: () => import('@/views/Auth.vue')
    },
    {
        path: '/auth/register',
        name: 'Register',
        component: () => import('@/views/Auth.vue')
    }
  ];
  