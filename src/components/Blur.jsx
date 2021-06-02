import Icon from '@chakra-ui/icon';
import { IconProps, useBreakpointValue } from '@chakra-ui/react';

const Blur = (props: IconProps) => {
  return (
    <Icon
      width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 568 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill="#7F557D" />
      <circle cx="244" cy="106" r="139" fill="#726E97" />
      <circle cy="291" r="139" fill="#726E97" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#7698B3" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#83B5D1" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};

export default Blur;
