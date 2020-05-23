import axios from "axios";

export default {
  getCamera: function (query) {
    return axios.get("/api/pictures/" + query);
  },

  getPictures: function () {
    return axios.get("/api/pictures");
  },
  updatePictureData: function () {
    return axios.put("/api/pictures");
  },
};
