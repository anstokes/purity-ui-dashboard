// 1. Import the utilities
import { createBreakpoints } from "@chakra-ui/theme-tools";
// 2. Update the breakpoints as key-value pairs
const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
});
// 3. Export breakpoints
export default breakpoints;
