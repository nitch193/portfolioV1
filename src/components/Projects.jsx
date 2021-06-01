import {
  Box,
  Flex,
  Heading,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Blur from './Blur';
import netflix from '../assets/projects/netflix.jpg';
import trip from '../assets/projects/trip.png';
import ascii from '../assets/projects/ascii.png';
import sorting from '../assets/projects/sorting.png';
import task from '../assets/projects/taskdo.png';
import cvmake from '../assets/projects/cvmake.png';

const projectData = [
  {
    name: 'Image-To-Ascii',
    url: 'https://nitch193.github.io/Image-to-Ascii/',
    code: 'https://github.com/nitch193/Image-to-Ascii',
    about:
      'Upload any image to convert it into an image of ascii characters and play your videos in ascii characters by uploading',
    photo: ascii,
    tools: 'JavaScript, HTML, Canvas API',
  },
  {
    name: 'Sorting Visualizer',
    url: 'https://nitch193.github.io/Visualize-Sorting/',
    code: 'https://github.com/nitch193/Visualize-Sorting',
    about:
      'Easily visualize some sorting algorithms such as bubble sort, merge sort, quick sort,insertion sort and selection sort',
    photo: sorting,
    tools: 'JavaScript ,Webpack, Canvas API',
  },
  {
    name: 'Netflix-Clone',
    url: 'https://netflix-clone-859ff.web.app/',
    code: 'https://github.com/nitch193/netflix-clone',
    about:
      'My attempt to build netflix clone using react and TMDB API. Click on any image to watch the trailer for that show/movie',
    photo: netflix,
    tools: 'React, TMDB API. Firebase',
  },
  {
    name: 'CV-Make',
    url: 'https://cv-make.netlify.app/',
    code: 'https://github.com/nitch193/ATS-resume',
    about:
      'A free web app for making your single column ATS parsable resume by simply filling out forms, made using react',
    photo: cvmake,
    tools: 'React React-Hooks',
  },
  {
    name: 'TaskDo',
    url: 'https://nitch193.github.io/TaskDo/',
    code: 'https://github.com/nitch193/TaskDo',
    about:
      'Simple Todo list app coded entirely in vanilla javascript and bundled with webpack, it has support of localstorage',
    photo: task,
    tools: 'Webpack, HTML, LocalStorage',
  },
  {
    name: 'Trip-Log',
    url: 'https://trip-log-app.herokuapp.com/',
    code: 'https://github.com/nitch193/travel-log-api',
    about:
      'Keep a log of all the trips/jounerys that you did,add photos and memories. Double click on any place on the map to add an entry',
    photo: trip,
    tools: 'React Express MongoDB MapBox',
  },
];

const backgrounds = [
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height= '185 ' viewBox= '0 0 560 185 ' fill= 'none '%3E%3Cellipse cx= '102.633 ' cy= '61.0737 ' rx= '102.633 ' ry= '61.0737 ' fill= '%23ED64A6 ' /%3E%3Cellipse cx= '399.573 ' cy= '123.926 ' rx= '102.633 ' ry= '61.0737 ' fill= '%23F56565 ' /%3E%3Cellipse cx= '366.192 ' cy= '73.2292 ' rx= '193.808 ' ry= '73.2292 ' fill= '%2338B2AC ' /%3E%3Cellipse cx= '222.705 ' cy= '110.585 ' rx= '193.808 ' ry= '73.2292 ' fill= '%23ED8936 ' /%3E%3C/svg%3E")`,
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ED8936'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%2348BB78'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%230BC5EA'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%23ED64A6'/%3E%3C/svg%3E")`,
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED8936'/%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%2348BB78'/%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%230BC5EA'/%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED64A6'/%3E%3C/svg%3E")`,
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ECC94B'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%239F7AEA'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%234299E1'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%2348BB78'/%3E%3C/svg%3E")`,
];

function ProjectCard(props) {
  const { name, url, about, photo, index, tools, code } = props;
  return (
    <Flex
      boxShadow={'lg'}
      maxW={'400px'}
      direction={{ base: 'column-reverse', md: 'row' }}
      width={'full'}
      rounded={'xl'}
      p={10}
      justifyContent={'space-between'}
      position={'relative'}
      bg={useColorModeValue('white', 'gray.800')}
      _after={{
        content: '""',
        position: 'absolute',
        height: '21px',
        width: '29px',
        left: '35px',
        top: '-10px',
        backgroundSize: 'cover',
        backgroundImage: `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='21' viewBox='0 0 29 21' fill='none'%3E%3Cpath d='M6.91391 21C4.56659 21 2.81678 20.2152 1.66446 18.6455C0.55482 17.0758 0 15.2515 0 13.1727C0 11.2636 0.405445 9.43939 1.21634 7.7C2.0699 5.91818 3.15821 4.3697 4.48124 3.05454C5.84695 1.69697 7.31935 0.678787 8.89845 0L13.3157 3.24545C11.5659 3.96667 9.98676 4.94242 8.57837 6.17273C7.21266 7.36061 6.25239 8.63333 5.69757 9.99091L6.01766 10.1818C6.27373 10.0121 6.55114 9.88485 6.84989 9.8C7.19132 9.71515 7.63944 9.67273 8.19426 9.67273C9.34658 9.67273 10.4776 10.097 11.5872 10.9455C12.7395 11.7939 13.3157 13.1091 13.3157 14.8909C13.3157 16.8848 12.6542 18.4121 11.3311 19.4727C10.0508 20.4909 8.57837 21 6.91391 21ZM22.5982 21C20.2509 21 18.5011 20.2152 17.3488 18.6455C16.2391 17.0758 15.6843 15.2515 15.6843 13.1727C15.6843 11.2636 16.0898 9.43939 16.9007 7.7C17.7542 5.91818 18.8425 4.3697 20.1656 3.05454C21.5313 1.69697 23.0037 0.678787 24.5828 0L29 3.24545C27.2502 3.96667 25.6711 4.94242 24.2627 6.17273C22.897 7.36061 21.9367 8.63333 21.3819 9.99091L21.702 10.1818C21.9581 10.0121 22.2355 9.88485 22.5342 9.8C22.8756 9.71515 23.3238 9.67273 23.8786 9.67273C25.0309 9.67273 26.1619 10.097 27.2715 10.9455C28.4238 11.7939 29 13.1091 29 14.8909C29 16.8848 28.3385 18.4121 27.0155 19.4727C25.7351 20.4909 24.2627 21 22.5982 21Z' fill='%239F7AEA'/%3E%3C/svg%3E")`,
      }}
      _before={{
        content: '""',
        position: 'absolute',
        zIndex: '-1',
        height: 'full',
        maxW: '450px',
        width: 'full',
        filter: 'blur(40px)',
        transform: 'scale(0.98)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        top: 0,
        left: 0,
        backgroundImage: backgrounds[index % 4],
      }}
    >
      <Box maxW={'445px'} w={'full'} p={6} overflow={'hidden'}>
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}
          bgImage={photo}
          bgPosition="center"
          bgSize="cover"
        />
        <Stack justifyContent={'start'}>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'small'}
            fontFamily={'body'}
            letterSpacing={'wide'}
          >
            {tools.split(',').map(tool => (
              <span>{tool}</span>
            ))}
          </Heading>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}
          >
            <Link color="purple.400" href={url}>
              {name}
            </Link>
          </Heading>
          <Text color={'gray.500'}>{about}</Text>
        </Stack>
        <Stack direction="row" justify="center" mt={4} spacing={4}>
          <Link href={code}>
            <Icon as={FaGithub} />
          </Link>
          <Link href={url}>
            <Icon as={FaExternalLinkAlt} />
          </Link>
        </Stack>
      </Box>
    </Flex>
  );
}

export default function Projects() {
  return (
    <Flex
      textAlign={'center'}
      pt={10}
      ml="auto"
      mr="auto"
      justifyContent={'center'}
      direction={'column'}
      maxW={'7xl'}
    >
      <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
        <Heading py={5} fontSize={48} fontWeight={'bold'}>
          Things I've built
        </Heading>
        <Heading
          margin={'auto'}
          width={'70%'}
          fontFamily={'Inter'}
          fontWeight={'medium'}
          fontSize={24}
        >
          Here are some projects I've worked on recently
        </Heading>
      </Box>
      <SimpleGrid
        columns={{ base: 1, xl: 3, lg: 2, md: 2 }}
        spacing={'16'}
        mt={16}
        mx={'auto'}
      >
        {projectData.map((cardInfo, index) => (
          <ProjectCard {...cardInfo} index={index} />
        ))}
      </SimpleGrid>
      <Blur
        position="absolute"
        style={{ filter: 'blur(70px)' }}
        zIndex={-2}
        top={-10}
        left={-10}
      />
    </Flex>
  );
}
