import React, { ReactNode, useState } from 'react';

// Chakra imports
import { ChakraProvider, ColorMode, ColorModeProvider, createLocalStorageManager } from '@chakra-ui/react';

import theme from '../theme';

type TThemeProviderProps = {
    children: ReactNode,
}

/**
 * Color mode provider / manager
 * ChakraProvider does not appear to correctly instantiate the ColorModeProvider
 * @see https://chakra-ui.com/getting-started/migration#using-custom-storage-keys
 */
const colorModeManager = createLocalStorageManager('purity-ui-color-mode');
const { get, set } = colorModeManager;

export default function ThemeProvider(props: TThemeProviderProps) {
  const { children } = props;

  // Get the current color mode, and custom theme
  const [state, setState] = useState({ colorMode: get(), theme });

  // Intercept the 
  colorModeManager.set = (value: ColorMode) => {
    // Check if colorMode is actually changing
    if (state.colorMode !== value) {
      // console.log(`Changing color mode: ${value}`);
      setState({
        colorMode: value,
        // Recalculate the global styles with the new color mode
        theme: {
          ...theme,
          styles: {
            ...theme.styles,
            global: {
              ...theme.styles.global({ colorMode: value }),
            },
          },
        },
      });
    }

    // Call the original set method
    set(value);
  };
    
  return (
    <ColorModeProvider colorModeManager={colorModeManager}>
      <ChakraProvider colorModeManager={colorModeManager} resetCSS theme={state.theme}>
        {children}
      </ChakraProvider>
    </ColorModeProvider>
  );
}
