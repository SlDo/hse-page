import React from 'react';
import { Avatar } from '../avatar';
import style from './style.module.scss';

export type PersonAvatar = { image: string }

export interface PersonProps extends PersonAvatar {
  children: JSX.Element | JSX.Element[]
  href: string
}

export const Person = ({ image, children, href }: PersonProps): JSX.Element => (
  <article className={style.person}>
    <a href={href}>
      <Avatar image={image} />
    </a>
    <div className={style.info}>
      {children}
    </div>
  </article>
);
