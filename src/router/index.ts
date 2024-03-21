import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/views/dashboard/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/teams',
      name: 'Teams',
      component: () => import('@/views/teams/PublicTeams.vue')
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
      path: '/dashboard/profile',
      name: 'Profile',
      component: () => import('@/views/dashboard/Profile.vue')
    },
    {
      path: '/dashboard/my-teams',
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
      path: '/dashboard/my-tournaments',
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
    }
  ]
})

export default router
