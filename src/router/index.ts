import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/views/dashboard/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/vitrine/Home.vue')
    },
    {
      path: '/features',
      name: 'Features',
      component: () => import('@/views/vitrine/Features.vue')
    },
    {
      path: '/pricing',
      name: 'Pricing',
      component: () => import('@/views/vitrine/Pricing.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/vitrine/About.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('@/views/vitrine/Contact.vue')
    },
    {
      path: '/teams',
      name: 'Teams',
      component: () => import('@/views/teams/PublicTeams.vue')
    },
    {
      path: '/players',
      name: 'Players',
      component: () => import('@/views/vitrine/SearchPlayers.vue')
    },
    {
      path: '/auth/login',
      name: 'Login',
      component: () => import('@/views/Auth.vue')
    },
    {
      path: '/auth/register',
      name: 'Register',
      component: () => import('@/views/Auth.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/dashboard/subscriptions',
      name: 'SubscriptionsDashboard',
      component: () => import('@/views/dashboard/subscriptions/Subscriptions.vue')
    },
    {
      path: '/dashboard/profile',
      name: 'Profile',
      component: () => import('@/views/dashboard/Profile.vue')
    },
    {
      path: '/dashboard/teams',
      name: 'MyTeams',
      component: () => import('@/views/dashboard/teams/Teams.vue')
    },
    {
      path: '/dashboard/teams/create',
      name: 'CreateTeam',
      component: () => import('@/views/dashboard/teams/TeamEdit.vue')
    },
    {
      path: '/dashboard/teams/edit/:id',
      name: 'EditTeam',
      component: () => import('@/views/dashboard/teams/TeamEdit.vue')
    },
    {
      path: '/dashboard/teams/:id',
      name: 'TeamDetail',
      component: () => import('@/views/dashboard/teams/TeamDetail.vue')
    },
    {
      path: '/dashboard/players',
      name: 'Players',
      component: () => import('@/views/dashboard/players/Players.vue')
    },
    {
      path: '/dashboard/tournaments',
      name: 'MyTournaments',
      component: () => import('@/views/dashboard/tournaments/Tournaments.vue')
    },
    {
      path: '/dashboard/tournaments/create',
      name: 'CreateTournament',
      component: () => import('@/views/dashboard/tournaments/TournamentEdit.vue')
    },
    {
      path: '/dashboard/tournaments/edit/:id',
      name: 'EditTournament',
      component: () => import('@/views/dashboard/tournaments/TournamentEdit.vue')
    },
    {
      path: '/dashboard/tournaments/:id',
      name: 'TournamentDetail',
      component: () => import('@/views/dashboard/tournaments/TournamentDetail.vue')
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
    }
  ]
})

export default router
