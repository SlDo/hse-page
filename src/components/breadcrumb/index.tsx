import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { navigation } from '../../utils/navigation';
import { RouterLink } from '../routerLink';

const getPathNameFromNavigation = (pathname: string): string | undefined => navigation.find((route) => route.path === pathname)?.name;

export const ReactRouterBreadcrumb = (): null => {
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;

    console.log(pathname);
    // TODO: Динамические breadcrumb

    console.log('Hello', pathname, getPathNameFromNavigation(pathname));
  }, [location]);

  return null;
};
