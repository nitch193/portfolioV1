import {
  Box,
  Stack,
  Heading,
  Text,
  Container,
  Button,
  SimpleGrid,
  useBreakpointValue,
  IconProps,
  Icon,
  Link,
  ButtonGroup,
  IconButton,
} from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaCodepen } from 'react-icons/fa';

export default function Hero() {
  return (
    <Box>
      <Container
        as={SimpleGrid}
        maxW={'7xl'}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
          >
            <Text
              mb="2"
              fontSize="md"
              fontWeight="bold"
              letterSpacing="wide"
              textTransform="uppercase"
            >
              Hi There! 👋, I am
            </Text>
            <Text
              mb="2"
              w="full"
              paddingBottom="5px"
              bgClip="text"
              bgGradient="linear(to-r,purple.300,cyan.800)"
              fontWeight="extrabold"
            >
              Nitesh Chaurasiya
            </Text>
            <Text
              fontSize="md"
              fontWeight="bold"
              letterSpacing="wide"
              textTransform="uppercase"
            >
              Full-Stack Developer
            </Text>
          </Heading>
          <Stack direction={{ base: 'row', sm: 'row' }} spacing={4}>
            <Button colorScheme="blue" variant="solid" size="lg">
              Projects
            </Button>
            <Button variant="outline" colorScheme="blue" size="lg">
              Resume
            </Button>
          </Stack>
          <ButtonGroup marginTop="2rem" spacing="6">
            <Link href={'https://www.github.com/nitch193/'}>
              <IconButton
                variant="outline"
                colorScheme="white"
                aria-label="Go to Github Profile"
                fontSize="20px"
                icon={<FaGithub />}
                isRound="true"
              ></IconButton>
            </Link>
            <Link href={'https://www.Linkedin.com/in/niteshchaurasiya/'}>
              <IconButton
                variant="outline"
                colorScheme="white"
                aria-label="Go to LinkedIn Profile"
                fontSize="20px"
                isRound="true"
                icon={<FaLinkedin />}
              ></IconButton>
            </Link>
            <Link href={'https://www.codepen.io/nitch193/'}>
              <IconButton
                isRound="true"
                variant="outline"
                colorScheme="white"
                aria-label="Checkout Codepens"
                fontSize="20px"
                icon={<FaCodepen />}
              ></IconButton>
            </Link>
          </ButtonGroup>
        </Stack>
      </Container>
      <Blur
        position={'absolute'}
        top={-10}
        left={-10}
        style={{ filter: 'blur(70px)' }}
        zIndex={-2}
      />
    </Box>
  );
}

export const Blur = (props: IconProps) => {
  return (
    <Icon
      width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};
