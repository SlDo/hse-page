import React from 'react';
import style from './style.module.scss';

export const ForwardFooter = ({ children }: { children: JSX.Element | JSX.Element[] }): JSX.Element => (
  <footer className={style.forwardFooter}>{children}</footer>
);
