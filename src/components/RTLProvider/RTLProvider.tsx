import React, { ReactNode } from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtl from "stylis-plugin-rtl";

// NB: A unique `key` is important for it to work!
const options = {
  rtl: { key: "css-ar", stylisPlugins: [rtl] },
  ltr: { key: "css-en" },
};

type TRtlProviderProps = {
  children: ReactNode
}

export default function RtlProvider(props: TRtlProviderProps) {
  const { children } = props;
  const dir = document.documentElement.dir === "ar" ? "rtl" : "ltr";
  const cache = createCache(options[dir]);
  
  return (
    <CacheProvider value={cache}>
      {children}
    </CacheProvider>
  );
}
