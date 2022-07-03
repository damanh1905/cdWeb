import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8082/api/",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// instance.interceptors.request.use(
//   async (config) => {
//     if (
//       config.url.indexOf("auth/login") >= 0 ||
//       config.url.indexOf("auth/refreshtoken") >= 0 ||
//       config.url.indexOf("auth/logout") >= 0
//     ) {
//       return config;
//     }
//     console.log(`${config.url}`);
//     // console.log(useSelector(selectToken));
//     // const token = useSelector(selectToken);
//     // if (token) {
//     //   console.log(token);
//     //   const user = jwt_decode(token);
//     //   const now = Math.floor(Date.now() / 1000);
//     //   if (user.exp > now) return config;
//     try {
//       const response = await instance.post("auth/refreshtoken");
//       console.log("aaaa", response.data.status);
//       if (response.data.status === 200) {
//         console.log("aaaa", response.data["accessToken"]);
//         console.log("aaaa", response);

//         instance.defaults.headers.common[
//           "Authorization"
//         ] = `Bearer ${response.data["accessToken"]}`;
//       }
//     } catch (_error) {
//       if (_error.response && _error.response.data) {
//         return Promise.reject(_error.response.data);
//       }
//     }
//     // }
//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
//   // async (error) => {
//   //   console.log("first");
//   //   try {
//   //     const response = await instance.post("auth/refreshtoken");
//   //     console.log("aaaa", response.data.status);
//   //     if (response.data.status === 200) {
//   //       console.log("aaaa", response.data["accessToken"]);
//   //       console.log("aaaa", response);

//   //       instance.defaults.headers.common[
//   //         "Authorization"
//   //       ] = `Bearer ${response.data["accessToken"]}`;
//   //       console.log("token", Cookies.get("token"));
//   //       return error;
//   //     }
//   //   } catch (_error) {
//   //     if (_error.response && _error.response.data) {
//   //       return Promise.reject(_error.response.data);
//   //     }
//   //   }
//   // }
// );
let refresh = false;
instance.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    if (error.response.status === 401 && !refresh) {
      refresh = true;
      try {
        const response = await instance.post("auth/refreshtoken");
        console.log("aaaa", response.data.status);
        if (response.data.status === 200) {
          console.log("aaaa", response.data["accessToken"]);
          console.log("aaaa", response);
          error.isRetryAttempt = true;
          instance.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${response.data["accessToken"]}`;

          return instance(error.config);
        }
      } catch (_error) {
        if (_error.response && _error.response.data) {
          return Promise.reject(_error.response.data);
        }
      }
      return Promise.reject(error.config);
    }
    refresh = false;
    return Promise.reject(error);
  }
);

export default instance;
