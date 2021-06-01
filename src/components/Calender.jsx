import { Box } from '@chakra-ui/layout';
import React from 'react';
import GitHubCalendar from 'react-github-calendar';

function Calender() {
  const colourTheme = {
    background: 'transparent',
    text: '#ffffff',
    grade4: '#8400b8',
    grade3: '#b22ff4',
    grade2: '#b265f6',
    grade1: '#c084f5',
    grade0: '#ecd9fc',
  };
  return (
    <Box p={8} maxW="7xl" mx={'auto'} px={{ base: 2, sm: 4, md: 6 }}>
      <GitHubCalendar
        username="nitch193"
        blockSize={15}
        blockMargin={5}
        theme={colourTheme}
        fontSize={16}
      />
    </Box>
  );
}

export default Calender;
