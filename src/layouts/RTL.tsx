import React, { Dispatch, SetStateAction, useState } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

// Chakra imports
import { Portal, useDisclosure } from '@chakra-ui/react';

// Fonts
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Layout components
import Configurator from '../components/Configurator';
import FixedPlugin from '../components/FixedPlugin';
import Footer from '../components/Footer';
import AdminNavbar from '../components/Navbars/Admin';
import RtlProvider from '../components/RTLProvider/RTLProvider';
import Sidebar from '../components/Sidebar';

// Custom components
import MainPanel from '../components/Layout/MainPanel';
import PanelContainer from '../components/Layout/PanelContainer';
import PanelContent from '../components/Layout/PanelContent';

import routes, { getActiveNavbar, getActiveRoute, getRoutes } from '../routes';
import ThemeProvider from './ThemeProvider';

type TRTLLayoutProps = {}

const getRoute = () => window.location.pathname !== '/admin/full-screen-maps';
const logoText = 'PURITY UI DASHBOARD';

export default function RTLLayout(props: TRTLLayoutProps) {
  const { ...rest } = props;

  // States and functions
  const [sidebarVariant, setSidebarVariant] : [string, Dispatch<SetStateAction<string>>] = useState('transparent');
  const [fixed, setFixed] : [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);
  
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Default document direction
  document.documentElement.dir = 'rtl';

  return (
    <ThemeProvider>
      <RtlProvider>
        <Sidebar
          display='none'
          logoText={logoText}
          routes={routes}
          sidebarVariant={sidebarVariant}
          {...rest}
        />
        <MainPanel
          variant='rtl'
          w={{
            base: '100%',
            xl: 'calc(100% - 275px)',
          }}>
          <Portal>
            <AdminNavbar
              brandText={getActiveRoute(routes)}
              fixed={fixed}
              logoText="PURITY UI DASHBOARD"
              onOpen={onOpen}
              secondary={getActiveNavbar(routes)}
              {...rest}
            />
          </Portal>
          {getRoute() ? (
            <PanelContent>
              <PanelContainer>
                <Routes>
                  {/* Default route */}
                  <Route element={<Navigate to='/rtl/rtl-support-page' />} path="/rtl" />
                  {getRoutes(routes, '/rtl')}
                </Routes>
                <Outlet />
              </PanelContainer>
            </PanelContent>
          ) : null}
          <Footer />
          <Portal>
            <FixedPlugin
              // fixed={fixed}
              onOpen={onOpen}
              // secondary={getActiveNavbar(routes)}
            />
          </Portal>
          <Configurator
            isChecked={fixed}
            isOpen={isOpen}
            onClose={onClose}
            onOpaque={() => setSidebarVariant('opaque')}
            onSwitch={(value: boolean): void => {
              setFixed(value);
            }}
            onTransparent={() => setSidebarVariant('transparent')}
            secondary={getActiveNavbar(routes)}
          />
        </MainPanel>
      </RtlProvider>
    </ThemeProvider>
  );
}
