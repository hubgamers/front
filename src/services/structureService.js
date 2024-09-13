import axiosCustom from '@/services/axiosCustom.js'

export default {
  getAdminColumns() {
    return axiosCustom.get("/admin/structure/columns");
  },
  getColumns() {
    return axiosCustom.get("/structure/columns");
  },
  getAllStructures() {
    return axiosCustom.get("/structure/all");
  },
  getAllMyStructures() {
    return axiosCustom.get("/structure/my-structures");
  },
  countAllStructures() {
    return axiosCustom.get("/structure/count-all");
  },
  getAllPublicStructures () {
    return axiosCustom.get("/structure/all-public");
  },
  getAllStructuresByName(name) {
    return axiosCustom.get(`/structure/all/name/${name}`);
  },
  getStructureByName(name) {
    return axiosCustom.get(`/structure/name/${name}`);
  },
  getStructureById(id) {
    return axiosCustom.get(`/structure/id/${id}`);
  },
  createStructure(structure) {
    return axiosCustom.post("/structure/create", structure);
  },
  uploadStructureBanner(structureId, file) {
    let formData = new FormData();
    formData.append("file", file);
    
    return axiosCustom.post(`/structure/banner/upload/${structureId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },
  uploadStructureLogo(structureId, file) {
    let formData = new FormData();
    formData.append("file", file);
    
    return axiosCustom.post(`/structure/logo/upload/${structureId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },
  updateStructure(structure) {
    return axiosCustom.put("/structure/update", structure);
  },
  deleteStructure(id) {
    return axiosCustom.delete(`/structure/delete/${id}`);
  }
}