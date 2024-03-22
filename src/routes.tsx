import React, { FunctionComponent, ReactNode } from 'react';
import { Route } from 'react-router-dom';

// Views
import Billing from "@views/Dashboard/Billing";
import Dashboard from "@views/Dashboard/Dashboard";
import Profile from "@views/Dashboard/Profile";
import RTLPage from "@views/Dashboard/RTL";
import Tables from "@views/Dashboard/Tables";
import SignIn from "@views/Auth/SignIn";
import SignUp from "@views/Auth/SignUp";

// Icons
import {
  CreditIcon,
  DocumentIcon,
  HomeIcon,
  PersonIcon,
  RocketIcon,
  StatsIcon,
  SupportIcon,
} from "@components/Icons/Icons";

export type TRoute = {
  path?: string,
  name: string,
  rtlName?: string
  icon?: ReactNode,
  component?: FunctionComponent<{}>,
  layout?: string,
  category?: string,
  collapse?: boolean,
  redirect?: boolean,
  secondaryNavbar?: boolean,
  state?: string,
  views?: IRouteArray,
}

export interface IRouteArray extends Array<TRoute> { };

export function getActiveRoute(routes: IRouteArray | undefined): string {
  const activeRoute = '';
  if (routes) {
    for (let i = 0; i < routes.length; i += 1) {
      const route: TRoute = routes[i];
      const { category, collapse, layout, name, path, views } = route;
      if (collapse) {
        const collapseActiveRoute = getActiveRoute(views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else if (category) {
        const categoryActiveRoute = getActiveRoute(views);
        if (categoryActiveRoute !== activeRoute) {
          return categoryActiveRoute;
        }
      } else if (window.location.href.indexOf(`${layout}${path}`) !== -1) {
        return name;
      }
    }
  }
  return activeRoute;
};

// This changes navbar state(fixed or not)
export function getActiveNavbar(routes: IRouteArray | undefined): boolean {
  const activeNavbar = false;
  if (routes) {
    for (let i = 0; i < routes.length; i += 1) {
      const route: TRoute = routes[i];
      const { category, layout, path, secondaryNavbar, views } = route;
      if (category) {
        const categoryActiveNavbar = getActiveNavbar(views);
        if (categoryActiveNavbar !== activeNavbar) {
          return categoryActiveNavbar;
        }
      } else if (window.location.href.indexOf(`${layout}${path}`) !== -1) {
        if (secondaryNavbar) {
          return secondaryNavbar;
        }
      }
    }
  }
  return activeNavbar;
};

export function getRoutes(routes: IRouteArray | undefined, layout?: string | undefined): any {
  return routes && routes.map((route: TRoute) => {
    const { category, collapse, component, name, path, views } = route;
    if (collapse) {
      return getRoutes(views, layout);
    }
    if (category) {
      return getRoutes(views, layout);
    }
    if (layout && (layout === route.layout)) {
      return (
        <Route
          key={name}
          Component={component}
          path={path}
        />
      );
    }
    return null;
  })
    .filter((route) => route);
}


const routes: IRouteArray = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    rtlName: "لوحة القيادة",
    icon: <StatsIcon color="inherit" />,
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/billing",
    name: "Billing",
    rtlName: "لوحة القيادة",
    icon: <CreditIcon color="inherit" />,
    component: Billing,
    layout: "/admin",
  },
  {
    path: "/rtl-support-page",
    name: "RTL",
    rtlName: "آرتيإل",
    icon: <SupportIcon color="inherit" />,
    component: RTLPage,
    layout: "/rtl",
  },
  {
    name: "ACCOUNT PAGES",
    category: "account",
    rtlName: "صفحات",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Profile",
        rtlName: "لوحة القيادة",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/admin",
      },
      {
        path: "/signin",
        name: "Sign In",
        rtlName: "لوحة القيادة",
        icon: <DocumentIcon color="inherit" />,
        component: SignIn,
        layout: "/auth",
      },
      {
        path: "/signup",
        name: "Sign Up",
        rtlName: "لوحة القيادة",
        icon: <RocketIcon color="inherit" />,
        secondaryNavbar: true,
        component: SignUp,
        layout: "/auth",
      },
    ],
  },
];

export default routes;
