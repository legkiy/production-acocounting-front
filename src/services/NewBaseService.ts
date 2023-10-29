import { baseFetch } from '.';

class NewBaseService {

  static get(endpoint: string) {
    try {
      return baseFetch(endpoint, 'GET');
    } catch (error) {
      throw error;
    }
  }
}

export default NewBaseService