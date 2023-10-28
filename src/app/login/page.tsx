'use client';
import { useCallback, useState } from 'react';
import { BaseService } from '@/services';
import { Api } from '@/services/Apis';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleOnSubmit = (e:any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set('username', userName);
    formData.set('password', password);

    const req = BaseService.post(Api.AUTH_TOKEN, formData);
    BaseService.baseFetch(req)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <label>
          user name
          <input type="text" onChange={(el) => setUserName(el.target.value)} />
        </label>
        <label>
          pass
          <input type="text" onChange={(el) => setPassword(el.target.value)} />
        </label>
        <button type="submit">login</button>
      </form>
    </div>
  );
};
export default Login;
