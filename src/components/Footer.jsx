import {
  Box,
  ButtonGroup,
  Container,
  IconButton,
  Image,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaCodepen, FaGithub, FaLinkedin } from 'react-icons/fa';

import LogoImg from '../assets/logo.svg';

export default function Footer() {
  return (
    <Box>
      <Container
        as={Stack}
        maxW={'7xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}
      >
        <Image src={LogoImg} />
        <Stack direction={'row'} spacing={6}>
          <Link href={'/about'}>About</Link>
          <Link href={'/projects'}>Projects</Link>
          <Link href={'/contact'}>Contact</Link>
        </Stack>
      </Container>

      <Box borderTopWidth={1} borderStyle={'solid'}>
        <Container
          as={Stack}
          maxW={'7xl'}
          py={2}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text>© 2021 Nitesh Chaurasiya</Text>
          <ButtonGroup direction={'row'} spacing={6}>
            <Link target="_blank" href={'https://github.com/nitch193/'}>
              <IconButton variant="outline" isRound="true">
                <FaGithub />
              </IconButton>
            </Link>
            <Link
              target="_blank"
              href={'https://linkedin.com/in/niteshchaurasiya/'}
            >
              <IconButton variant="outline" isRound="true">
                <FaLinkedin />
              </IconButton>
            </Link>
            <Link target="_blank" href={'https://codepen.io/nitch193/'}>
              <IconButton variant="outline" isRound="true">
                <FaCodepen />
              </IconButton>
            </Link>
          </ButtonGroup>
        </Container>
      </Box>
    </Box>
  );
}
