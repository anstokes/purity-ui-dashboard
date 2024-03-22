import React, { useEffect, useRef } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

// chakra imports
import { Box, Portal } from '@chakra-ui/react';

import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Custom components
import Footer from '@components/Footer';
import AuthNavbar from '@components/Navbars/Auth';

import routes, { getActiveNavbar, getRoutes } from '../routes';
import ThemeProvider from './ThemeProvider';

export default function Pages() {
  // ref for the wrapper div
  const wrapper = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'unset';
    // Specify how to clean up after this effect:
    return function cleanup() {};
  });
	
  document.documentElement.dir = 'ltr';

  return (
    <ThemeProvider>
      <Box ref={navRef} w='100%'>
        <Portal containerRef={navRef}>
          <AuthNavbar
            logoText='PURITY UI DASHBOARD'
            secondary={getActiveNavbar(routes)}
          />
        </Portal>
        <Box w='100%'>
          <Box ref={wrapper} w='100%'>
            <Routes>
              {/* Default route */}
              <Route element={<Navigate to='/auth/login-page' />} path='/auth' />
              {getRoutes(routes, '/auth')}
            </Routes>
          </Box>
        </Box>
        <Box maxW='100%' mx='auto' px='24px' width='1044px'>
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
