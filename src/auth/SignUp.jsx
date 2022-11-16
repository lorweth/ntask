import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import ValidatedInput from 'components/ValidatedInput';
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
import { useDispatch, useSelector } from 'react-redux';
import { signup } from './authSlice';

export default function SignUp() {
  const dispatch = useDispatch();
  const { errorMessage } = useSelector((state) => state.auth);

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
      required: 'Tên tài khoản là bắt buộc',
    },
    name: {
      required: 'Tên người dùng là bắt buộc',
    },
    email: {
      required: 'Địa chỉ email là bắt buộc',
      pattern: {
        value:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Địa chỉ email không hợp lệ',
      },
    },
    password: {
      required: 'Mật khẩu là bắt buộc',
      min: {
        value: 6,
        message: 'Mật khẩu phải có ít nhất 6 ký tự',
      },
    },
    passwordConfirmation: {
      required: 'Mật khẩu xác nhận là bắt buộc',
      validate: (value) => value === password.current || 'Mật khẩu xác nhận không khớp',
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
              &nbsp;Đăng ký
            </Text>

            {errorMessage && (
              <Alert status="error" mb={2}>
                <AlertIcon />
                <AlertTitle>Đăng ký thất bại</AlertTitle>
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
                name="name"
                type="text"
                label="Tên người dùng"
                rules={formRules.name}
              />

              <ValidatedInput
                control={control}
                name="login"
                type="text"
                label="Tên tài khoản"
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
                label="Mật khẩu"
                rules={formRules.password}
              />

              <ValidatedInput
                control={control}
                name="passwordConfirmation"
                type="password"
                label="Nhập lại mật khẩu"
                rules={formRules.passwordConfirmation}
              />

              <Button type="submit" width="100%" mt={2}>
                Gửi
              </Button>

              <Text color="gray.500">
                Đã có tải khoản?&nbsp;
                <Link as={NavLink} to="/auth/signin" fontWeight="bold" color="teal.400">
                  Đăng nhập
                </Link>
              </Text>
            </Box>
          </Box>
        </Flex>
      </ScaleFade>
    </Box>
  );
}
