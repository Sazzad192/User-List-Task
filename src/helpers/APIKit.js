import axios from "axios";

export let client = axios.create({
  timeout: 20000,
});

const APIKit = {
  auth: {
    // superAdminLogin: (payload) => {
    //   const url = "superadmin/auth/login";
    //   return client.post(url, payload);
    // },

    // currentOrganization: () => {
    //     const url = "we";
    //     return client.get(url);
    //   },
    //   updateProfile: (payload) => {
    //     const url = `me`;
    //     return client.patch(url, payload, defaultFileUploadConfig);
    //   },

    getDashboardParcelsData: (params) => {
      const url = "we/dashboard/parcels";
      return client.get(url, { params });
    },
  },
  user: {
    getUserList: (params) => {
      const url = "https://dummyjson.com/users";
      return client.get(url, { params });
    },
  },
};

export default APIKit;
