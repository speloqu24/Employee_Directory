import axios from "axios";

const APIURL = "https://randomuser.me/api/?results=100";

// EXPORT object from radom-user API
export default {
  getUser: function () {
    return axios.get(APIURL);
  },
};
