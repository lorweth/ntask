import React from 'react';
import { useForm } from 'react-hook-form';
import ValidatedInput from 'components/ValidatedInput';
import ValidatedCheck from 'components/ValidatedCheck';
import { useDispatch } from 'react-redux';
import { Avatar, Box, Button, Flex, Image, Link, ScaleFade, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import { NavLink } from 'react-router-dom';
import { signin } from './authSlice';

const formRules = {
  username: {
    required: 'Username cannot be blank',
  },
  password: {
    required: 'Password cannot be blank',
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
      position="absolute"
      left="50%"
      top="40%"
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
            <Flex fontSize="2xl" fontWeight="bold" mb={4} gap={2} alignItems="center">
              <Avatar
                bg="teal.500"
                color="white"
                icon={<FontAwesomeIcon icon={regular('user')} />}
              />
              <Text>Login</Text>
            </Flex>
            <Box
              as="form"
              noValidate
              sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '.5rem' }}
              onSubmit={handleSubmit(onSubmit)}
            >
              <ValidatedInput
                control={control}
                name="username"
                type="text"
                label="Username"
                rules={formRules.username}
              />

              <ValidatedInput
                control={control}
                name="password"
                type="password"
                label="Password"
                rules={formRules.password}
              />

              <ValidatedCheck control={control} name="rememberMe" label="Remember me" />

              <Button type="submit" width="100%">
                Submit
              </Button>
              <Button
                borderColor="green.500"
                color="green.500"
                type="submit"
                width="100%"
                variant="outline"
              >
                Forgot your password
              </Button>
              <Text color="gray.500">
                Don&apos;t have an account?&nbsp;
                <Link as={NavLink} to="/auth/signup" fontWeight="bold" color="teal.400">
                  Create an account
                </Link>
              </Text>
            </Box>
          </Box>
        </Flex>
      </ScaleFade>
    </Box>
  );
}
