import React from 'react';
import style from './style.module.scss';

interface AvatarProps {
  image: string
}

export const Avatar = ({ image }: AvatarProps): JSX.Element => <img src={image} alt="User avatar" className={style.avatar} />;
