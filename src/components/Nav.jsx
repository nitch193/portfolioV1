import React from 'react';
import {
  Link,
  Box,
  Flex,
  Text,
  Stack,
  IconButton,
  Container,
  Image,
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import LogoImg from '../assets/logo.svg';

const Nav = props => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container maxW="7xl">
      <NavBarContainer {...props}>
        <Logo w="100px" />
        <MenuToggle toggle={toggle} isOpen={isOpen} />
        <MenuLinks isOpen={isOpen} />
      </NavBarContainer>
    </Container>
  );
};

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? (
        <IconButton>
          <CloseIcon />
        </IconButton>
      ) : (
        <IconButton>
          <HamburgerIcon />
        </IconButton>
      )}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = '/', ...rest }) => {
  return (
    <Link href={to} to={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/about">About</MenuItem>
        <MenuItem to="/projects">Projects </MenuItem>
        <MenuItem to="/contact">Contact </MenuItem>
        <ColorModeSwitcher />
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      paddingTop={8}
      bg={['primary.500', 'primary.500', 'transparent', 'transparent']}
      {...props}
    >
      {children}
    </Flex>
  );
};

export function Logo(props) {
  return (
    <Box {...props}>
      <Link href="/">
        <Image src={LogoImg} alt="Logo" />
      </Link>
    </Box>
  );
}
export default Nav;
