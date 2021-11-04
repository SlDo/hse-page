import {
  IconActionPlus, IconButton, IconButtonVariant, Paragraph,
} from '@hse-design/react';
import React from 'react';
import cs from 'classnames';
import style from './style.module.scss';

export const JoinButton = (): JSX.Element => (
  <a href="https://hse.ru" className={style.join}>
    <IconButton size={IconButton.Size.large} variant={IconButtonVariant.secondary} icon={IconActionPlus} />
    <Paragraph className={cs('hse-Text_caption-large-bold', style.linkText)}>Присоединиться</Paragraph>
  </a>
);
