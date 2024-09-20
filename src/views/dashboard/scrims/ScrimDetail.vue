<template>
  <DashboardLayout>
    <div v-if="store.getters.getScrim !== null">
    <div class="py-10 px-10">
      
    </div>
  </div>
  </DashboardLayout>
</template>
<script setup>
import { defineComponent, ref, watchEffect } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import moment from 'moment';
import DashboardLayout from '@/layout/DashboardLayout.vue'

defineComponent({
  name: 'ScrimDetailPage'
})

const store = useStore();
const params = useRoute().params;
// let tournamentForm = ref({
//   name: '',
//   description: '',
//   rules: '',
//   startDate: '',
//   endDate: '',
//   game: '',
//   platform: '',
//   logo: '',
//   banner: '',
//   tournamentType: ''
// });
if (params && params.id) {
  store.dispatch('getScrimById', params.id)
  tournamentForm.value = store.getters.getScrim;
}

let haveAccess = ref(false);
watchEffect(() => {
  if (store.getters.getUser && store.getters.getScrim) {
    if (!haveAccess.value) {
      haveAccess.value = store.getters.getScrim.organizerId === store.getters.getUser.id
    }
  }
})

store.dispatch('getAllGames')

// TODO: faire la gestion des onglets avec tab=... dans l'url
let tabStatus = ref('rules')
function changeTabStatus(tab) {
  tabStatus.value = tab
  if (tab === 'edit') {
    router.push({name: 'EditTournament', params: { id: params.id }});
  }
}

function formatDate(date, formatDate= 'yyyy-MM-dd') {
  return moment(date).format(formatDate)
}

const router = useRouter()
let sideBarStatus = ref('')
if (router.currentRoute.value.query.tab) {
  // @ts-ignore
  sideBarStatus.value = router.currentRoute.value.query.tab
} else {
  sideBarStatus.value = 'invitations'
}
function changeSideBarStatus(tab) {
  sideBarStatus.value = tab
  router.push({ query: { tab: tab } })
}

function updateTournament() {
  store.dispatch('updateTournament', tournamentForm.value)
}
</script>