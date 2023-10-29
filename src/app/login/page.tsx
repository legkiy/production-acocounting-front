'use client';
import { LoginForm } from '@/components';
import { AuthService } from '@/services';
import { Apis } from '@/services/Apis';
import { useState } from 'react';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    // const formData = new FormData();
    // formData.set('username', userName);
    // formData.set('password', password);

    // const req = BaseService.post(Api.AUTH_TOKEN, {
    //   username: userName,
    //   password: password,
    // });
    // BaseService.baseFetch(req)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    AuthService.getToken(Apis.AUTH_TOKEN, {
      username: userName,
      password: password,
    })
      .then((res) => {
        const expirationDate = new Date();
        expirationDate.setMinutes(expirationDate.getMinutes() + 1);
        console.log(res);

        // Cookies.set('token', `Token ${res.token}`, {
        //   // sameSite: 'Strict',
        //   expires: expirationDate,
        // });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <LoginForm />
      {/* <form onSubmit={handleOnSubmit}>
        <label>
          user name
          <input type="text" onChange={(el) => setUserName(el.target.value)} />
        </label>
        <label>
          pass
          <input type="text" onChange={(el) => setPassword(el.target.value)} />
        </label>
        <button type="submit">login</button>
      </form> */}
    </div>
  );
};
export default Login;
