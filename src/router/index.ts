import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('@/views/Profile.vue')
    },
    {
      path: '/my-teams',
      name: 'MyTeams',
      component: () => import('@/views/teams/Teams.vue')
    },
    {
      path: '/teams/create',
      name: 'CreateTeam',
      component: () => import('@/views/teams/TeamEdit.vue')
    },
    {
      path: '/teams/edit/:id',
      name: 'EditTeam',
      component: () => import('@/views/teams/TeamEdit.vue')
    },
    {
      path: '/teams/:id',
      name: 'TeamDetail',
      component: () => import('@/views/teams/TeamDetail.vue')
    },
    {
      path: '/my-tournaments',
      name: 'MyTournaments',
      component: () => import('@/views/tournaments/Tournaments.vue')
    },
    {
      path: '/tournaments/create',
      name: 'CreateTournament',
      component: () => import('@/views/tournaments/TournamentEdit.vue')
    },
    {
      path: '/tournaments/edit/:id',
      name: 'EditTournament',
      component: () => import('@/views/tournaments/TournamentEdit.vue')
    },
    {
      path: '/tournaments/:id',
      name: 'TournamentDetail',
      component: () => import('@/views/tournaments/TournamentEdit.vue')
    },
  ]
})

export default router
