import React from 'react';
import { useForm } from 'react-hook-form';
import ValidatedInput from 'components/ValidatedInput';
import ValidatedCheck from 'components/ValidatedCheck';
import { useDispatch } from 'react-redux';
import { Box, Button } from '@chakra-ui/react';
import { signin } from './authSlice';

const formRules = {
  email: {
    required: 'Email is required',
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Please enter a valid email',
    },
  },
  password: {
    required: 'Password is required',
  },
};

export default function SignIn() {
  const dispatch = useDispatch();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmit = (values) => {
    dispatch(signin(values));
  };

  return (
    <Box
      sx={{
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        top: '50%',
        left: '50%',
        width: 500,
        boxShadow: 'md',
        p: 4,
      }}
    >
      <h1>Sign In</h1>
      <Box as="form" noValidate style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
        <ValidatedInput
          control={control}
          name="username"
          type="email"
          label="Email"
          rules={formRules.email}
        />

        <ValidatedInput
          control={control}
          name="password"
          type="password"
          label="Password"
          rules={formRules.password}
        />

        <ValidatedCheck control={control} name="rememberMe" label="Remember me" />

        <Button color="primary" type="submit">
          Sign In
        </Button>
      </Box>
    </Box>
  );
}
