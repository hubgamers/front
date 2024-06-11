import axiosCustom from '@/services/axiosCustom.js'

export default {
  createCheckoutSession(lookupKey) {
    return axiosCustom.post("/stripe/create-checkout-session?lookup_key=" + lookupKey);
  },
  createPortalSession(sessionId) {
    return axiosCustom.post("/stripe/create-portal-session?session_id=" + sessionId);
  }
}
