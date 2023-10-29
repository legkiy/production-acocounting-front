import { baseFetch } from '@/services';
import { BASE_URL } from './baseFetch';

class AuthService {
  static async getToken(endpoint: string, body: {}) {
    try {
      const res = await fetch(`${BASE_URL}${endpoint}/`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(body),
      });
      return res.json();
    } catch (error) {
      throw error;
    }
  }
}

export default AuthService;
