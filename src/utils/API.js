import axios from "axios";

const APIURL = "https://randomuser.me/api/";

// EXPORT object from radomuser API
export default {
  getUser: function () {
    return axios.get(APIURL);
  },
};
