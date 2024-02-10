import axios from "axios";

export let client = axios.create({
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 20000,
});

// const defaultFileUploadConfig = {
//   headers: { "Content-Type": "multipart/form-data" },
// };


const APIKit = {
  user: {
    getUserList: (params) => {
      const url = (params?.filter && params.search) ? `https://dummyjson.com/users/filter?key=${params?.filter}&value=${params.search || ""}` :
      params?.search ? `https://dummyjson.com/users/search?q=${params?.search}` : "https://dummyjson.com/users";
      return client.get(url);
    },
    getUserDetails: (uid) => {
      const url = `https://dummyjson.com/users/${uid}`;
      return client.get(url);
    },
    postUser: (payload) => {
      const url = `https://dummyjson.com/users/add`;
      return client.post(url, payload);
    },
  },
};

export default APIKit;
