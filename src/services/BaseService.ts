import axios, { CreateAxiosDefaults } from 'axios';
import { AxiosInstance } from 'axios';

const BASE_URL = 'http://localhost:8000/api/v1/';

class BaseService {
  static headers = new Headers({
    Authorization: 'Token b74ffede0fa251a2c446bdf7cfa35e40308139e4',
  });
  static baseOptions: any = { headers: this.headers, mode: 'cors' };

  static createRequest({
    endpoint,
    method,
    body,
  }: {
    endpoint: string;
    method: string;
    body?: BodyInit;
  }) {
    return new Request(`${BASE_URL}${endpoint}/`, {
      ...BaseService.baseOptions,
      method,
      body,
    });
  }

  static async baseFetch(req: any) {
    try {
      const res = await fetch(req);
      return res.json();
    } catch (err) {
      throw err;
    }
  }

  static get(endpoint: string) {
    return BaseService.createRequest({
      endpoint,
      method: 'GET',
    });
  }

  static post(endpoint: string, body: BodyInit) {
    return BaseService.createRequest({
      endpoint,
      method: 'POST',
      body,
    });
  }
}
export default BaseService;
