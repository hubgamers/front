export default [
  {
    path: '/dashboard/structures',
    name: 'Structures',
    component: () => import('@/views/dashboard/structures/Structures.vue'),
    meta: {
      title: 'Toutes les structures - HubGamers',
      description: 'Parcourez toutes les structures de la plateforme HubGamers. Découvrez les équipes et les tournois en cours.'
    }
  },
  {
    path: '/dashboard/my-structures',
    name: 'MyStructures',
    component: () => import('@/views/dashboard/structures/MyStructures.vue'),
    meta: {
      title: 'Mes structures - HubGamers',
      description: 'Gérez vos structures de gaming sur HubGamers. Créez, modifiez ou suivez les performances de vos équipes et tournois.'
    }
  },
  {
    path: '/dashboard/structures/create',
    name: 'CreateStructure',
    component: () => import('@/views/dashboard/structures/StructureEdit.vue'),
    meta: {
      title: 'Créer une structure - HubGamers',
      description: 'Créez une nouvelle structure sur HubGamers. Gérez vos équipes, sélectionnez les jeux et organisez des compétitions.'
    }
  },
  {
    path: '/dashboard/structures/edit/:id',
    name: 'StructureEdit',
    component: () => import('@/views/dashboard/structures/StructureEdit.vue'),
    meta: {
      title: 'Modifier une structure - HubGamers',
      description: 'Modifiez les détails de votre structure de gaming sur HubGamers. Gérez les équipes, jeux, et tournois associés.'
    }
  },
  {
    path: '/dashboard/structures/:id',
    name: 'StructureDetail',
    component: () => import('@/views/dashboard/structures/StructureDetail.vue'),
    meta: {
      title: 'Détails de la structure - HubGamers',
      description: 'Consultez les détails de votre structure sur HubGamers. Suivez vos équipes, joueurs et performances en compétition.'
    }
  }
];
