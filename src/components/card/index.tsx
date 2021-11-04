import React from 'react';
import { Heading, HeadingSize, Paragraph } from '@hse-design/react';
import cs from 'classnames';
import { Shape } from '../shape';
import style from './style.module.scss';
import { Visibility } from '../visibility';

export interface CardProps {
  icon: string
  title: string
  description: string
  footer?: JSX.Element | JSX.Element[]
}

export const Card = ({
  icon, title, description, footer,
}: CardProps): JSX.Element => (
  <Shape className={style.card}>
    <div className={style.content}>
      <img src={icon} alt="Card icon" className={style.icon} />
      <Heading size={HeadingSize.H4} className={style.title}>{title}</Heading>
      <Paragraph className={cs('hse-Text_caption-medium-regular', style.description)}>{description}</Paragraph>
    </div>
    <Visibility visible={footer != null}>
      <div className={style.footer}>
        {footer}
      </div>
    </Visibility>
  </Shape>
);

Card.defaultProps = {
  footer: undefined,
};
