import { ThemeConfig, extendTheme } from '@chakra-ui/react';

// Additional components
import CardComponent from './additions/card/Card';
import CardBodyComponent from './additions/card/CardBody';
import CardHeaderComponent from './additions/card/CardHeader';
import MainPanelComponent from './additions/layout/MainPanel';
import PanelContentComponent from './additions/layout/PanelContent';
import PanelContainerComponent from './additions/layout/PanelContainer';

// Style existing components
import buttonStyles from './components/button';
import badgeStyles from './components/badge';
import linkStyles from './components/link';
import drawerStyles from './components/drawer';

// Breakpoints
import breakpoints from './foundations/breakpoints';

// Global styles
import globalStyles from './styles';

// Define colour configuration
export const config: ThemeConfig = {
  initialColorMode: 'light', // Initial color mode
  useSystemColorMode: false, // Use OS system color mode
};

export default extendTheme(
  { config }, // Base configuration
  { breakpoints }, // Breakpoints
  globalStyles, // Global styles
  buttonStyles, // Button styles
  badgeStyles, // Badge styles
  linkStyles, // Link styles
  drawerStyles, // Sidebar variant for Chakra's drawer
  CardComponent, // Card component
  CardBodyComponent, // Card Body component
  CardHeaderComponent, // Card Header component
  MainPanelComponent, // Main Panel component
  PanelContentComponent, // Panel Content component
  PanelContainerComponent, // Panel Container component
);
