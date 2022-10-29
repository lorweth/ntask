import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import ValidatedInput from 'components/ValidatedInput';
import { Avatar, Box, Button, Flex, Image, Link, ScaleFade, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signup } from './authSlice';

export default function SignUp() {
  const dispatch = useDispatch();

  const { control, watch, handleSubmit } = useForm({
    defaultValues: {
      login: '',
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
  });

  const password = useRef({});
  password.current = watch('password', '');

  const formRules = {
    login: {
      required: 'Login is required',
    },
    name: {
      required: 'Name is required',
    },
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
      min: {
        value: 6,
        message: 'Password must have at least 6 characters',
      },
    },
    passwordConfirmation: {
      required: 'Password confirmation is required',
      validate: (value) => value === password.current || 'The passwords do not match',
    },
  };

  const onSubmit = (values) => {
    dispatch(signup({ ...values }));
  };

  return (
    <Box
      position="absolute"
      left="50%"
      top="50%"
      transform="translate(-50%, -50%)"
      borderRadius="xl"
      overflow="hidden"
      shadow="lg"
    >
      <ScaleFade initialScale={0.9} in>
        <Flex height="max-content">
          <Box>
            <Image
              display={{ xl: 'block', base: 'none' }}
              width="100%"
              height="100%"
              objectFit="cover"
              src="https://arena.fpt.edu.vn/wp-content/uploads/2021/04/mau-sac-trong-flat-design.png"
              alt=""
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: 'md',
              width: 500,
              p: 4,
            }}
          >
            <Text fontSize="2xl" fontWeight="bold" mb={4}>
              <Avatar
                bg="teal.500"
                color="whiteAlpha.900"
                icon={<FontAwesomeIcon icon={regular('user')} />}
              />
              &nbsp;Create your Account
            </Text>

            <Box
              as="form"
              noValidate
              sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '.5rem' }}
              onSubmit={handleSubmit(onSubmit)}
            >
              <ValidatedInput
                control={control}
                name="name"
                type="text"
                label="Fullname"
                rules={formRules.name}
              />

              <ValidatedInput
                control={control}
                name="login"
                type="text"
                label="Username"
                rules={formRules.login}
              />

              <ValidatedInput
                control={control}
                name="email"
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

              <ValidatedInput
                control={control}
                name="passwordConfirmation"
                type="password"
                label="Password confirmation"
                rules={formRules.passwordConfirmation}
              />

              <Button type="submit" width="100%" mt={2}>
                Submit
              </Button>

              <Text color="gray.500">
                Already a member?{' '}
                <Link as={NavLink} to="/auth/signin" fontWeight="bold" color="teal.400">
                  Sign in
                </Link>
              </Text>
            </Box>
          </Box>
        </Flex>
      </ScaleFade>
    </Box>
  );
}
