import {
  FaReact,
  FaPython,
  FaJs,
  FaNodeJs,
  FaGit,
  FaFigma,
  FaCuttlefish,
  FaLinux,
} from 'react-icons/fa';
import {
  SiVisualstudiocode,
  SiPostman,
  SiHtml5,
  SiCss3,
  SiFirebase,
  SiMongodb,
} from 'react-icons/si';
import { Box, Heading, SimpleGrid, Icon } from '@chakra-ui/react';
import Calender from './Calender';

export default function SkillsTools() {
  return (
    <Box p={8} maxW="7xl" mx={'auto'} px={{ base: 2, sm: 12, md: 17 }}>
      <Heading
        textAlign={'center'}
        fontSize={'4xl'}
        py={10}
        fontWeight={'bold'}
      >
        Professional Skills
      </Heading>
      <SimpleGrid minChildWidth="150px" spacing={{ base: 5, lg: 8 }}>
        <Box
          p={8}
          display="flex"
          justifyContent="center"
          // shadow={'xl'}
          border={'1px solid'}
          rounded={'lg'}
        >
          <Icon as={FaJs} w={20} h={20} />
        </Box>
        <Box
          p={8}
          display="flex"
          justifyContent="center"
          // shadow={'xl'}
          border={'1px solid'}
          rounded={'lg'}
        >
          <Icon as={FaPython} w={20} h={20} />
        </Box>
        <Box
          p={8}
          display="flex"
          justifyContent="center"
          // shadow={'xl'}
          border={'1px solid'}
          rounded={'lg'}
        >
          <Icon as={FaCuttlefish} w={20} h={20} />
        </Box>
        <Box
          p={8}
          display="flex"
          justifyContent="center"
          // shadow={'xl'}
          border={'1px solid'}
          rounded={'lg'}
        >
          <Icon as={FaReact} w={20} h={20} />
        </Box>
        <Box
          p={8}
          display="flex"
          justifyContent="center"
          // shadow={'xl'}
          border={'1px solid'}
          rounded={'lg'}
        >
          <Icon as={FaNodeJs} w={20} h={20} />
        </Box>
        <Box
          p={8}
          display="flex"
          justifyContent="center"
          // shadow={'xl'}
          border={'1px solid'}
          rounded={'lg'}
        >
          <Icon as={SiHtml5} w={20} h={20} />
        </Box>
        <Box
          p={8}
          display="flex"
          justifyContent="center"
          // shadow={'xl'}
          border={'1px solid'}
          rounded={'lg'}
        >
          <Icon as={SiCss3} w={20} h={20} />
        </Box>
        <Box
          p={8}
          display="flex"
          justifyContent="center"
          // shadow={'xl'}
          border={'1px solid'}
          rounded={'lg'}
        >
          <Icon as={FaGit} w={20} h={20} />
        </Box>
        <Box
          p={8}
          display="flex"
          justifyContent="center"
          // shadow={'xl'}
          border={'1px solid'}
          rounded={'lg'}
        >
          <Icon as={FaLinux} w={20} h={20} />
        </Box>
        <Box
          p={8}
          display="flex"
          justifyContent="center"
          // shadow={'xl'}
          border={'1px solid'}
          rounded={'lg'}
        >
          <Icon as={SiMongodb} w={20} h={20} />
        </Box>
        <Box
          p={8}
          display="flex"
          justifyContent="center"
          // shadow={'xl'}
          border={'1px solid'}
          rounded={'lg'}
        >
          <Icon as={SiFirebase} w={20} h={20} />
        </Box>
        <Box
          p={8}
          display="flex"
          justifyContent="center"
          // shadow={'xl'}
          border={'1px solid'}
          rounded={'lg'}
        >
          <Icon as={SiPostman} w={20} h={20} />
        </Box>
        <Box
          p={8}
          display="flex"
          justifyContent="center"
          // shadow={'xl'}
          border={'1px solid'}
          rounded={'lg'}
        >
          <Icon as={SiVisualstudiocode} w={20} h={20} />
        </Box>
        <Box
          p={8}
          display="flex"
          justifyContent="center"
          // shadow={'xl'}
          border={'1px solid'}
          rounded={'lg'}
        >
          <Icon as={FaFigma} w={20} h={20} />
        </Box>
      </SimpleGrid>
      <Heading
        textAlign={'center'}
        fontSize={'4xl'}
        py={10}
        fontWeight={'bold'}
      >
        My Github Activity
      </Heading>
      <Calender />
    </Box>
  );
}
