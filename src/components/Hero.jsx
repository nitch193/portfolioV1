import {
  Box,
  Stack,
  Heading,
  Text,
  Container,
  Button,
  SimpleGrid,
  Link,
  Image,
  Flex,
  ButtonGroup,
  IconButton,
  keyframes,
} from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaCodepen } from 'react-icons/fa';
import Blur from './Blur';
import homeImg from '../assets/about.png';

const gradient = keyframes`
  0% {background-position:0% ;}
  100% {background-position:100% ;}
`;

const animation = `${gradient} cubic-bezier(0.59, 0.82, 0.08, 0.55) 1s infinite alternate`;
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
            <Text mb="2" fontSize="md" fontWeight="bold" letterSpacing="wide">
              Hi, My name is
            </Text>
            <Text
              mb="2"
              w="full"
              paddingBottom="5px"
              bgClip="text"
              bgGradient="linear(to-r,purple.400,blue.100)"
              fontWeight="extrabold"
              bgSize="200% auto"
              animation={animation}
            >
              Nitesh Chaurasiya.
            </Text>
            <Text fontSize="md" fontWeight="bold" letterSpacing="wide">
              Student + Developer
            </Text>
          </Heading>
          <Stack direction={{ base: 'row', sm: 'row' }} spacing={4}>
            <Button colorScheme="purple" variant="outline" size="lg">
              Contact Me
            </Button>
            <Button variant="solid" colorScheme="purple" size="lg">
              Resume
            </Button>
          </Stack>
          <ButtonGroup marginTop="2rem" spacing="6">
            <Link href={'https://www.github.com/nitch193/'}>
              <IconButton
                variant="outline"
                colorScheme="purple"
                aria-label="Go to Github Profile"
                fontSize="20px"
                icon={<FaGithub />}
                isRound="true"
              ></IconButton>
            </Link>
            <Link href={'https://www.Linkedin.com/in/niteshchaurasiya/'}>
              <IconButton
                variant="outline"
                colorScheme="purple"
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
                colorScheme="purple"
                aria-label="Checkout Codepens"
                fontSize="20px"
                icon={<FaCodepen />}
              ></IconButton>
            </Link>
          </ButtonGroup>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
        >
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}
          >
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={homeImg}
            />
          </Box>
        </Flex>
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
