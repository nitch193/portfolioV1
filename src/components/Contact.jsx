import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  Textarea,
} from '@chakra-ui/react';
import Blur from './Blur';

export default function Contact() {
  return (
    <Flex align={'center'} justify={'center'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={4} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Want to know more?</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            Fill out the form below to get in touch with me
          </Text>
        </Stack>
        <Box rounded={'lg'} boxShadow={'lg'} p={8}>
          <Stack spacing={4}>
            <FormControl id="name">
              <FormLabel>Your name</FormLabel>
              <Input type="text" required placeholder="Full name" />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" required placeholder="Email id" />
            </FormControl>
            <FormControl id="message">
              <FormLabel>Message</FormLabel>
              <Textarea
                type="text"
                required
                placeholder="Write your message here"
              />
            </FormControl>
            <Stack spacing={10}>
              <Button variant="outline">Send</Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <Blur
        position={'absolute'}
        top={-10}
        left={-10}
        style={{ filter: 'blur(70px)' }}
        zIndex={-2}
      />
    </Flex>
  );
}
