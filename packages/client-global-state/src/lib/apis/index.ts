import axios from 'axios';

const HOST = 'http://localhost:8080';

export const apiClient = axios.create({
  baseURL: HOST,
});

/**
 * 디버깅 코드
 */
// apiClient.interceptors.response.use(
//   function (response) {
//     console.log("response success: ", response);
//     return response;
//   },
//   function (error) {
//     console.log("response error: ", error);
//     return Promise.reject(error);
//   }
// );
