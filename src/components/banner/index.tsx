import React from 'react';
import cs from 'classnames';
import style from './style.module.scss';

interface BannerProps {
  children: JSX.Element | JSX.Element[]
  className?: string
}

export const Banner = ({ children, className }: BannerProps): JSX.Element => <aside className={cs(className, style.banner)}>{children}</aside>;

Banner.defaultProps = {
  className: undefined,
};
