import React, { useEffect } from 'react';
import {
  Avatar,
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ValidatedInput from 'components/ValidatedInput';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateProfile } from './authSlice';

export default function EditProfile() {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const location = useLocation();
  const { userData } = useSelector((state) => state.auth);
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      login: '',
      name: '',
      avatarUrl: '',
      bio: '',
      email: '',
    },
  });

  useEffect(() => {
    setValue('login', userData.login);
    setValue('name', userData.name);
    setValue('avatarUrl', userData.avatarUrl);
    setValue('bio', userData.bio);
    setValue('email', userData.email);
  }, [userData]);

  const onClose = () => navigator(location.state?.backgroundLocation?.pathname || '/');

  const onSubmit = (values) => {
    dispatch(updateProfile({ ...userData, ...values, roles: userData.authorities }));
  };

  const formRules = {
    login: {
      required: 'Login is required',
    },
    name: {
      required: 'Name is required',
    },
    avatarUrl: {
      required: 'Avatar is required',
    },
    bio: {
      required: 'Bio is required',
    },
    email: {
      required: 'Email is required',
      pattern: {
        value:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Please enter a valid email',
      },
    },
  };

  return (
    <Modal isOpen onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton onClick={onClose} />
        <ModalHeader>
          <Text fontSize="2xl" fontWeight="bold">
            <Avatar
              bg="teal.500"
              color="whiteAlpha.900"
              icon={<FontAwesomeIcon icon={regular('user')} />}
            />
            &nbsp;Your profile
          </Text>
        </ModalHeader>
        <ModalBody>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
              width: '700',
              p: 2,
            }}
            as="form"
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
              name="avatarUrl"
              type="text"
              label="Avatar URL"
              rules={formRules.avatarUrl}
            />

            <ValidatedInput
              control={control}
              name="bio"
              type="text"
              label="Bio"
              rules={formRules.bio}
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

            <Button type="submit" width="100%" mt={2}>
              Submit
            </Button>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
