import React from 'react';
import { useForm } from 'react-hook-form';
import ValidatedInput from 'components/ValidatedInput';
import ValidatedCheck from 'components/ValidatedCheck';
import { useDispatch, useSelector } from 'react-redux';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Avatar,
  Box,
  Button,
  Flex,
  Image,
  Link,
  ScaleFade,
  Text,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import { NavLink } from 'react-router-dom';
import { signin } from './authSlice';

const formRules = {
  username: {
    required: 'Bắt buộc nhập',
  },
  password: {
    required: 'Bắt buộc nhập',
  },
};

export default function SignIn() {
  const dispatch = useDispatch();
  const { errorMessage } = useSelector((state) => state.auth);

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
              <Text>Đăng nhập</Text>
            </Flex>
            {errorMessage && (
              <Alert status="error">
                <AlertIcon />
                <AlertTitle>Đăng nhập thất bại</AlertTitle>
                <AlertDescription>{errorMessage}</AlertDescription>
              </Alert>
            )}
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
                label="Tên tài khoản"
                rules={formRules.username}
              />

              <ValidatedInput
                control={control}
                name="password"
                type="password"
                label="Mật khẩu"
                rules={formRules.password}
              />

              <ValidatedCheck control={control} name="rememberMe" label="Ghi nhớ tài khoản" />

              <Button type="submit" width="100%">
                Gửi
              </Button>
              <Text color="gray.500">
                Bạn chưa có tài khoản?&nbsp;
                <Link as={NavLink} to="/auth/signup" fontWeight="bold" color="teal.400">
                  Tạo tài khoản
                </Link>
              </Text>
            </Box>
          </Box>
        </Flex>
      </ScaleFade>
    </Box>
  );
}
