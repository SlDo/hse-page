import { Heading, HeadingSize, Paragraph } from '@hse-design/react';
import React from 'react';
import cs from 'classnames';
import style from './style.module.scss';
import { Visibility } from '../visibility';

interface ForwardCardProps {
  title: string
  description: string
  image: string
  footer?: JSX.Element
}

export const ForwardCard = ({
  title, description, image, footer,
}: ForwardCardProps): JSX.Element => (
  <aside className={style.forwardCard}>
    <img className={style.image} src={image} alt="Forward card" />
    <div className={style.body}>
      <div className={style.content}>
        <Heading size={HeadingSize.H3}>{title}</Heading>
        <Paragraph className={cs('hse-Text_caption_large_regular', style.description)}>
          {description}
        </Paragraph>
      </div>
      <Visibility visible={footer != null}>
        <div className={style.footer}>{footer}</div>
      </Visibility>
    </div>
  </aside>
);

ForwardCard.defaultProps = {
  footer: undefined,
};
