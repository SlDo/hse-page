import { Tag } from '@hse-design/react';
import React from 'react';
import cs from 'classnames';
import style from './style.module.scss';

export type TagType = { tag: string, href?: string }

interface TagsProps {
  className?: string
  tags: TagType[]
}

export const Tags = ({ tags, className }: TagsProps): JSX.Element => (
  <div className={cs(className, style.tags)}>
    {tags.map(({ tag, href }, index) => (
      <a className={style.tagLink} href={href}>
        <Tag key={index} size={Tag.Size.medium}>{tag}</Tag>
      </a>
    ))}
  </div>
);

Tags.defaultProps = {
  className: undefined,
};
