import { ReactElement } from 'react';
import { AboutPage, HomePage } from '../pages';

interface NavigationType {
  path: string
  name: string
  component: () => JSX.Element
  props: Record<string, any>
}

export const navigation: NavigationType[] = [
  {
    path: '/about', name: 'О нас', component: AboutPage, props: {},
  },
  {
    path: '/', name: 'Главная', component: HomePage, props: { exact: true },
  },
];
