import axios from 'axios';

const baseURL = () => {  
  if (process.env.NODE_ENV === 'development') {
    return `http://localhost:3001/api`;
  }
}

const instance = axios.create({
  baseURL: baseURL(),
  headers: {
    'Accept': 'application/json, */*',
    'Content-Type': 'application/json',
  },
});

// creating errors interceptor
instance.interceptors.response.use((response) => {
  return response;
}, ({response}) => {
  let failures = [];
  if (response.data.failures) {
    failures = response.data.failures;
  } else { 
    failures.push(`${response.data.message}`);
  }
  return Promise.reject(failures);
});

export default instance;