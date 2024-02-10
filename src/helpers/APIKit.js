import axios from "axios";

const basic= "https://dummyjson.com/";

export let client = axios.create({
  baseURL: basic,
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
      const url = (params?.filter && params.search) ? `users/filter?key=${params?.filter}&value=${params.search || ""}` :
      params?.search ? `users/search?q=${params?.search}` : "users";
      return client.get(url);
    },
    getUserDetails: (uid) => {
      const url = `users/${uid}`;
      return client.get(url);
    },
    postUser: (payload) => {
      const url = `users/add`;
      return client.post(url, payload);
    },
  },
};

export default APIKit;
