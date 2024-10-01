export default [
    {
        path: '/dashboard/subscriptions',
        name: 'SubscriptionsDashboard',
        component: () => import('@/views/dashboard/subscriptions/Subscriptions.vue')
    },
    {
        path: '/dashboard/my-subscription',
        name: 'MySubscriptionDashboard',
        component: () => import('@/views/dashboard/subscriptions/MySubscription.vue')
    },
    {
        path: '/checkout',
        name: 'Checkout',
        component: () => import('@/views/checkout/Checkout.vue')
      },
      {
        path: '/checkout/success',
        name: 'CheckoutSuccess',
        component: () => import('@/views/checkout/CheckoutSuccess.vue')
      },
      {
        path: '/checkout/cancel',
        name: 'CheckoutCancel',
        component: () => import('@/views/checkout/CheckoutCancel.vue')
      },
]