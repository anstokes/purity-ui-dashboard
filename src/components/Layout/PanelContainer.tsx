import React from "react";
import { Box, useStyleConfig } from "@chakra-ui/react";
import { TLayoutProps } from "@typings/purityUi";

export default function PanelContainer(props: TLayoutProps) {
  const { variant, children, ...rest } = props;
  const styles = useStyleConfig("PanelContainer", { variant });
  
  // Pass the computed styles into the `__css` prop
  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
}
