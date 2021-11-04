import { Link, LinkVariant, Paragraph } from '@hse-design/react';
import React from 'react';
import cs from 'classnames';
import { Person, PersonAvatar } from '../person';
import style from './style.module.scss';

export interface PersonCardProps extends PersonAvatar {
  name: string
  label: string
  href: string
}

export const PersonCard = ({
  image, name, label, href,
}: PersonCardProps): JSX.Element => (
  <Person image={image} href={href}>
    <Link variant={LinkVariant.primary} href={href}>
      <Paragraph className="hse-Text_caption-large-bold">{name}</Paragraph>
    </Link>
    <Paragraph className={cs('hse-Text_caption-x-small-bold', style.label)}>{label}</Paragraph>
  </Person>
);
