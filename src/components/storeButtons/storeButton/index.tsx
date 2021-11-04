import React from 'react';
import { StoreButtonProps } from '../index';

type StoreButtonPropsExtended = { children: JSX.Element } & StoreButtonProps;

export const StoreButton = ({ href, children }: StoreButtonPropsExtended): JSX.Element => (
  <a href={href}>
    {children}
  </a>
);
