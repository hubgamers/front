import axiosCustom from '@/services/axiosCustom.js'

export default {
  getColumns() {
    return axiosCustom.get("/scrim/columns");
  },
  getAllScrims () {
    return axiosCustom.get("/scrim/all");
  },
  getMyScrims () {
    return axiosCustom.get("/scrim/my");
  },
  createScrim (scrim) {
    return axiosCustom.post("/scrim/create", scrim);
  },
  getScrimById (id) {
    return axiosCustom.get(`/scrim/${id}`);
  }
}