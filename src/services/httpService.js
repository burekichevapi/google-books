import axios from "axios";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log(error);
    alert.error("An unexpected error occurrred.");
  }

  return Promise.reject(error);
});

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
