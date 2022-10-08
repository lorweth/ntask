import React from 'react';
import {
  Avatar,
  Box,
  Button,
  chakra,
  Heading,
  Text,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useColorModeValue,
  VStack,
  useColorMode,
  theme,
} from '@chakra-ui/react';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from 'app/appSlice';

const BrandIcon = chakra('img', {
  baseStyle: {
    width: '2rem',
    height: 'auto',
  },
});

export default function AppHeader({ title, brandIcon, ...rest }) {
  const dispatch = useDispatch();

  const { toggleColorMode } = useColorMode();

  const borderBottomColor = useColorModeValue('gray.200', 'gray.700');
  const currColorModeIcon = useColorModeValue(solid('sun'), solid('moon'));
  const adminColor = useColorModeValue('green.500', 'yellow.400');
  const menuTextColor = useColorModeValue(theme.colors.black, theme.colors.white);

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
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
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
            <HStack>
              <Avatar
                size="sm"
                src="https://i.pinimg.com/564x/08/33/7b/08337b0f3707529f5b20fc3691ce0437.jpg"
              />
              <VStack
                display={{ base: 'none', md: 'flex' }}
                alignItems="flex-start"
                spacing="1px"
                ml="2"
              >
                <Text fontSize="sm">Virsavik</Text>
                <Text fontSize="xs" color={adminColor}>
                  Admin
                </Text>
              </VStack>
              <Box display={{ base: 'none', md: 'flex' }}>
                <FontAwesomeIcon icon={solid('caret-down')} />
              </Box>
            </HStack>
          </MenuButton>
          <MenuList color={menuTextColor}>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuDivider />
            <MenuItem>Sign out</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
}
