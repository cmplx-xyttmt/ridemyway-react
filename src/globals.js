import axios from 'axios';

const API_HOST_URL = 'https://ridemywayapidb.herokuapp.com/ridemyway/api/v1';

let settings = {
  baseURL: API_HOST_URL,
};

if (localStorage.getItem('token')) {
  settings = {
    baseURL: API_HOST_URL,
    headers: { Authorization: localStorage.getItem('token') },
  };
}
export const axiosInstance = axios.create(settings);
