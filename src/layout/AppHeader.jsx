import React from 'react';
import {
  Box,
  Button,
  chakra,
  Heading,
  useColorModeValue,
  useColorMode,
  Menu,
  MenuButton,
  HStack,
  Avatar,
  VStack,
  Text,
  MenuList,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/react';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from 'app/appSlice';
import { NavLink, useLocation } from 'react-router-dom';

const BrandIcon = chakra('img', {
  baseStyle: {
    width: '2rem',
    height: 'auto',
  },
});

export function AppHeaderUser({
  username = 'anonymous',
  role = 'anonymous',
  avatarLink = 'https://i.pravatar.cc/300',
}) {
  return (
    <HStack>
      <Avatar size="sm" src={avatarLink} />
      <VStack display={{ base: 'none', md: 'flex' }} alignItems="flex-start" spacing="1px" ml="2">
        <Text fontSize="sm">{username}</Text>
        <Text fontSize="xs" color={useColorModeValue('green.500', 'yellow.500')}>
          {role}
        </Text>
      </VStack>
      <Box display={{ base: 'none', md: 'flex' }}>
        <FontAwesomeIcon icon={solid('caret-down')} />
      </Box>
    </HStack>
  );
}

export function AppMenuItem({ text, link }) {
  return (
    <MenuItem as={NavLink} to={link}>
      {text}
    </MenuItem>
  );
}

export default function AppHeader({ title, brandIcon, sx, children }) {
  const dispatch = useDispatch();
  const location = useLocation();

  const { toggleColorMode } = useColorMode();

  const borderBottomColor = useColorModeValue('gray.200', 'gray.700');
  const currColorModeIcon = useColorModeValue(solid('sun'), solid('moon'));

  const handleClickToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <Box
      as="header"
      bg="gray.800"
      color="white"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      borderBottom="1px solid"
      borderBottomColor={borderBottomColor}
      px={5}
      py={2}
      h={20}
      ml={{ base: 0, md: 20, lg: 20 }}
      sx={sx}
    >
      <Box
        as="div"
        display={{ base: 'flex', md: 'none' }}
        flexDirection="column"
        justifyContent="center"
      >
        <Button type="button" variant="ghost" onClick={handleClickToggleSidebar} w={18}>
          <FontAwesomeIcon icon={solid('bars')} />
        </Button>
      </Box>

      <Box display="flex" alignItems="center">
        <BrandIcon src={brandIcon} alt="logo" />
        <Heading as="h5" size="lg" ml={2} display={{ base: 'none', md: 'block' }}>
          {title}
        </Heading>
      </Box>

      <Box display="flex" flexDir="row" alignContent="center">
        <Box display="flex" flexDir="column" justifyContent="center" mr={2}>
          <Button type="button" variant="ghost" onClick={toggleColorMode}>
            <FontAwesomeIcon size="lg" icon={currColorModeIcon} />
          </Button>
        </Box>
        <Menu>
          <MenuButton type="button" py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
            {children}
          </MenuButton>
          <MenuList color={useColorModeValue('black', 'white')}>
            <MenuItem as={NavLink} to="/auth/profile">
              Profile
            </MenuItem>
            <MenuItem as={NavLink} to="/auth/setting">
              Settings
            </MenuItem>
            <MenuDivider />
            <MenuItem as={NavLink} state={{ backgroundLocation: location }} to="/auth/signout">
              Sign out
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
}
