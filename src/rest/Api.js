import { CONFIG } from './../config/ServerConfig';
import axios from "axios";

const HOST = CONFIG.url;

const config = {
  headers: { Accept: "application/json" },
};

class RestClient {
  /*************** GET Method ***********/
  static async get(url, params = {}) {
    return new Promise((fulfill, reject) => {
      axios
        // eslint-disable-next-line prefer-template
        .get(`${ HOST }`)
        .then((response) => {
          if (response?.data?.status === 401) {
            reject();
            navigateToLogin();
          } else fulfill({ status: response.status, data: response.data });
        })
        .catch((error) => {
          if (error && error.response && error.response.status === 401) {
            fulfill({ ...error.response.data, status: error.response.status, data: [] });
          } else {
            reject(error);
          }
        });
    });
  }
}

export default RestClient;
