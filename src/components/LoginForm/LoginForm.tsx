'use client';
import { AuthService } from '@/services';
import { Apis } from '@/services/Apis';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { FC, memo, useState } from 'react';
import Cookies from 'js-cookie';
import styles from './LoginForm.module.scss';
import { useRouter } from 'next/navigation';

const LoginForm: FC = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

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
        console.log(res);

        const expirationDate = new Date();
        expirationDate.setHours(expirationDate.getHours() + 1);

        Cookies.set('token', `Token ${res.token}`, {
          sameSite: 'Strict',
          expires: expirationDate,
        });
        router.push(`${Apis.NOMENCLATURES}`);
      })
      .catch((err) => console.log('err', err));
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 8,
          gap: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          className={styles['login-form']}
          onSubmit={handleOnSubmit}
        >
          <TextField
            onInvalid={() => null}
            id="login"
            label="Логин"
            required
            fullWidth
            helperText="Это поле не может быть пустым."
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextField
            onInvalid={() => null}
            id="password"
            label="Пароль"
            type="password"
            required
            fullWidth
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained">
            Войти
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
export default memo(LoginForm);
