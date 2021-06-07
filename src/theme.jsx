import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/react';

const styles = {
  global: props => ({
    body: {
      color: mode('', '#FCFFFD')(props),
      bg: mode('', '#020300')(props),
    },
  }),
};
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const components = {
  Button: {
    // 1. We can update the base styles
    baseStyle: {
      fontWeight: 'bold', // Normally, it is "semibold"
    },
    // 2. We can add a new button size or extend existing
    sizes: {
      xl: {
        h: '56px',
        fontSize: 'lg',
        px: '32px',
      },
    },
    // 3. We can add a new visual variant
    variants: {
      'with-shadow': {
        bg: 'red.400',
        boxShadow: '0 0 2px 2px #efdfde',
      },
      outline: props => ({
        borderColor: props.colorMode === 'dark' ? '#5299D3' : '',
      }),
      // 4. We can override existing variants
    },
  },
};

const theme = extendTheme({
  config,
  components,
  styles,
});

export default theme;
