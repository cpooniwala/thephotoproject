import axios from "axios";

export default {
  getCamera: function (query) {
    return axios.get("/api/pictures/" + query);
  },

  getPictures: function () {
    return axios.get("/api/pictures");
  },
  updatePictureData: function (pictureData) {
    return axios.put("/api/pictures", pictureData);
  },
};
