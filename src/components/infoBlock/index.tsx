import {
  Heading, HeadingSize, Icon, IconSize, Paragraph,
} from '@hse-design/react';
import React from 'react';
import cs from 'classnames';
import style from './style.module.scss';

export interface InfoBlockProps {
  icon: React.ElementType
  title: string
  description: string
}

export const InfoBlock = ({ icon, title, description }: InfoBlockProps): JSX.Element => (
  <div className={style.infoBlock}>
    <Icon icon={icon} size={IconSize.large} />
    <Heading className={style.title} size={HeadingSize.H4}>{title}</Heading>
    <Paragraph className={cs('hse-Text_caption-medium-regular', style.description)}>
      {description}
    </Paragraph>
  </div>
);
