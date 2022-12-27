import { AboutPage, HomePage } from '../pages';
import { NewsPage } from '../pages/news';

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
    path: '/news', name: 'Новости', component: NewsPage, props: {},
  },
  {
    path: '/', name: 'Главная', component: HomePage, props: { exact: true },
  },
];
