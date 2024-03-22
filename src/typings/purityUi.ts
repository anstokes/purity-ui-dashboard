import { ResponsiveValue, StyleProps } from "@chakra-ui/react";
import { ReactNode } from "react";

export type TOnOpen = (...args: any[]) => any;

export interface TLayoutProps extends StyleProps {
    children?: ReactNode,
    variant?: ResponsiveValue<string> | undefined,
}

