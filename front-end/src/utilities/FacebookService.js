import axios from 'axios';
import { API_URL } from 'utilities/constant';

export default new class FacebookService {
  
  constructor() {
    this.axios = axios;
  }

  async auth(access_token) {
    return this.axios.get(API_URL('auth/facebook'), { params: { access_token } });
  }
}();