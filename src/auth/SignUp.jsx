import React from 'react';
import { useForm } from 'react-hook-form';
import ValidatedInput from 'components/ValidatedInput';
import { Avatar, Box, Button, Flex, Image, Link, ScaleFade, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import { NavLink } from 'react-router-dom';

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

export default function SignUp() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstname: '',
      lastname: '',
      username: '',
      password: '',
    },
  });

  const onSubmit = (values) => {
    // eslint-disable-next-line no-console
    console.log(values);
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
            <Text fontSize="2xl" fontWeight="bold" mb={4}>
              <Avatar
                bg="teal.500"
                color="whiteAlpha.900"
                icon={<FontAwesomeIcon icon={regular('user')} />}
              />
              &nbsp;Sign Up
            </Text>

            <Box
              as="form"
              noValidate
              sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '.5rem' }}
              onSubmit={handleSubmit(onSubmit)}
            >
              <Flex gap={2}>
                <ValidatedInput control={control} name="firstname" type="text" label="Firstname" />
                <ValidatedInput control={control} name="lastname" type="text" label="Lastname" />
              </Flex>
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

              {/* <ValidatedCheck control={control} name="rememberMe" label="Remember me" /> */}

              <Button type="submit" width="100%" mt={2}>
                Sign Up
              </Button>

              <Text color="gray.500">
                Already a member?{' '}
                <Link as={NavLink} to="/auth/signin" fontWeight="bold" color="teal.400">
                  Log In
                </Link>
              </Text>
            </Box>
          </Box>
        </Flex>
      </ScaleFade>
    </Box>
  );
}
