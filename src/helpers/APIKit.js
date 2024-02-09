import axios from "axios";

export let client = axios.create({
  timeout: 20000,
});

const APIKit = {
  user: {
    getUserList: (params) => {
      const url = "https://dummyjson.com/users";
      return client.get(url, { params });
    },
    getUserDetails: (uid) => {
      const url = `https://dummyjson.com/users/${uid}`;
      return client.get(url);
    },
  },
};

export default APIKit;
