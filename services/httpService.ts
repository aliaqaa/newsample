import axios from "axios";
import swal from "sweetalert";
import Cookies from "js-cookie";

axios.interceptors.request.use(
  function (config) {
    const token = Cookies.get("token");

    if (config.headers.useMultipartForm) {
      config.headers["Content-Type"] = "multipart/form-data";
    } else {
      config.headers["Content-Type"] = "application/json";
    }

    config.headers.Accept = "application/json";

    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },

  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    switch (error?.response?.status) {
      case 400: {
        swal(error?.response?.data.ErrorMessage);
        break;
      }
      case 401: {
        swal("شما برای این عمل، احراز هویت نشده اید");
        break;
      }
      case 403: {
        swal("دسترسی غیرمجاز");
        break;
      }
      default: {
        break;
      }
    }
    return Promise.reject(error);
  }
);

const methods = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
export default methods;
