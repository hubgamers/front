<script setup>
import DashboardLayout from '@/layout/DashboardLayout.vue';
import router from '@/router';
import { notify } from '@kyvg/vue3-notification';
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
let stripeSessionId = ref(null)
let isSubscribed = ref(false)
let url = ref(null)
if (localStorage.getItem("userId")) {
  store.dispatch('getUserById', localStorage.getItem("userId")).then((response) => {
    stripeSessionId.value = response.stripeSessionId
    if (response.stripeSessionId) {
        isSubscribed.value = true
    }

    if (isSubscribed.value) {
        store.dispatch('createPortalSession',stripeSessionId.value).then((response) => {
            url.value = response
            window.location.href = response
        })
    } else {
        notify({
            title: 'Erreur',
            text: 'Vous n\'êtes pas abonné',
            type: 'error'
        })
        router.push('/dashboard')
    }
  })
}

</script>

<template>
    <DashboardLayout title="Gérer mon abonnement">
        <p>Redirection en cours.</p>
        <p>Si vous n'êtes pas redirigé, vous pouvez cliquer sur le lien suivant : <a :href="url">{{ url }}</a></p>
    </DashboardLayout>
</template>