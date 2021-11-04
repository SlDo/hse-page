import React from 'react';
import {
  Button, ButtonSize, ButtonVariant, Heading, HeadingSize, Paragraph,
} from '@hse-design/react';
import cs from 'classnames';
import { Banner } from '../banner';
import style from './style.module.scss';

interface SdkBannerProps {
  title: string
}

export const SDKBanner = ({ title }: SdkBannerProps): JSX.Element => (
  <Banner className={style.sdkBanner}>
    <div className={style.body}>
      <Heading className={style.title} size={HeadingSize.H3}>{title}</Heading>
      <Paragraph className={cs('hse-Text_caption-large-regular', style.description)}>Комплект средств разработки для встраивания авторизации, компонентов дизайн-системы Вышки в мобильные приложения на Android и iOS.</Paragraph>
      <div className={style.buttons}>
        <Button variant={ButtonVariant.primary} size={ButtonSize.medium}>
          Подробнее
        </Button>
        <Button variant={ButtonVariant.secondary} size={ButtonSize.medium}>
          GitHub
        </Button>
      </div>
    </div>
    <div className={style.image} />
  </Banner>
);
