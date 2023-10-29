import Cookies from 'js-cookie';
export const BASE_URL = 'http://localhost:8000/api/v1/';

const baseFetch = async (
  endpoint: string,
  method: 'GET' | 'POST',
  body?: {}
) => {
  const res = await fetch(`${BASE_URL}${endpoint}/`, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: `${Cookies.get('token')}`,
    },
    body: JSON.stringify(body),
  });
  return res.json();
};

export default baseFetch;
