import axios from 'axios';


const instance = axios.create({
  baseURL: "http://localhost:3000",
});
instance.defaults.headers.post['Content-Type'] = 'application/json';
instance.defaults.headers.common['abc'] = 'abc';

export default instance;