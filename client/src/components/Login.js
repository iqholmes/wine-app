import React from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';

const Login = () => {
  const dispatch = useDispatch;

  return (
    <Container
      sx={{
        width: 700,
        maxWidth: '100%',
      }}
    >
      <TextField
        fullWidth
        id="outlined-basic"
        label="Username or Email"
        variant="outlined"
      />
    </Container>
  );
};

export default Login;
