import {
  Button, ButtonVariant, Heading, HeadingSize, Paragraph,
} from '@hse-design/react';
import React from 'react';
import cs from 'classnames';
import { Banner } from '../banner';
import style from './style.module.scss';
import { RouterLink } from '../routerLink';

export const TeamBanner = (): JSX.Element => (
  <Banner className={style.teamBanner}>
    <div className={style.body}>
      <Heading size={HeadingSize.H3}>Команда</Heading>
      <Paragraph className={cs('hse-Text_caption_large_regular', style.description)}>
        Кто и зачем создаёт лучшие мобильные приложения для цифрового университета
      </Paragraph>
      <div className={style.buttons}>
        <Button component={RouterLink} to="/about" variant={ButtonVariant.primary}>Подробнее</Button>
        {/* <Button variant={ButtonVariant.secondary}>{size.width <= parseInt(breakpointTabletSmall, 10) ? 'Вакансии' : 'Присоединиться к нам' }</Button> */}
      </div>
    </div>
    <div className={style.teamImage} />
  </Banner>
);
