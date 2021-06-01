import {
  Box,
  ButtonGroup,
  Container,
  IconButton,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaCodepen, FaGithub, FaLinkedin } from 'react-icons/fa';

import { SiNodeDotJs } from 'react-icons/si';

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
        <SiNodeDotJs />
        <Stack direction={'row'} spacing={6}>
          <Link href={'/about'}>About</Link>
          <Link href={'/projects'}>Blog</Link>
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
            <Link href={'https://github.com/nitch193/'}>
              <IconButton colorScheme="purple" variant="outline" isRound="true">
                <FaGithub />
              </IconButton>
            </Link>
            <Link href={'https://linkedin.com/in/niteshchaurasiya/'}>
              <IconButton colorScheme="purple" variant="outline" isRound="true">
                <FaLinkedin />
              </IconButton>
            </Link>
            <Link href={'https://codepen.io/nitch193/'}>
              <IconButton colorScheme="purple" variant="outline" isRound="true">
                <FaCodepen />
              </IconButton>
            </Link>
          </ButtonGroup>
        </Container>
      </Box>
    </Box>
  );
}
