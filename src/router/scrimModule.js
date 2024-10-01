export default [
  {
    path: '/dashboard/scrims',
    name: 'Scrims',
    component: () => import('@/views/dashboard/scrims/Scrims.vue'),
    meta: {
      title: 'Tous les scrims - HubGamers',
      description: 'Découvrez tous les scrims sur HubGamers. Rejoignez des sessions de pratique et améliorez vos compétences avec d\'autres équipes.'
    }
  },
  {
    path: '/dashboard/my-scrims',
    name: 'MyScrims',
    component: () => import('@/views/dashboard/scrims/MyScrims.vue'),
    meta: {
      title: 'Mes scrims - HubGamers',
      description: 'Gérez vos scrims sur HubGamers. Suivez vos sessions de pratique et collaborez avec vos coéquipiers pour vous améliorer.'
    }
  },
  {
    path: '/dashboard/scrims/create',
    name: 'CreateScrim',
    component: () => import('@/views/dashboard/scrims/ScrimEdit.vue'),
    meta: {
      title: 'Créer un scrim - HubGamers',
      description: 'Créez un nouveau scrim sur HubGamers. Invitez des équipes et organisez des sessions de pratique pour améliorer vos stratégies.'
    }
  },
  {
    path: '/dashboard/scrims/edit/:id',
    name: 'EditScrim',
    component: () => import('@/views/dashboard/scrims/ScrimEdit.vue'),
    meta: {
      title: 'Modifier un scrim - HubGamers',
      description: 'Modifiez les détails de votre scrim sur HubGamers. Ajustez les équipes, les horaires et les paramètres de votre session.'
    }
  },
  {
    path: '/dashboard/scrims/:id',
    name: 'ScrimDetail',
    component: () => import('@/views/dashboard/scrims/ScrimDetail.vue'),
    meta: {
      title: 'Détails du scrim - HubGamers',
      description: 'Consultez les détails du scrim sur HubGamers. Suivez les équipes participantes, les résultats et les analyses des sessions.'
    }
  }
];
