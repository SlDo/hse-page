import React from 'react';
import {
  Heading, HeadingSize, Link, Paragraph,
} from '@hse-design/react';
import { breakpointMobileLarge } from '@hse-design/tokens';
import cs from 'classnames';
import style from './style.module.scss';
import { Tags, TagType } from '../tags';
import { useWindowSize } from '../../utils/hooks/useWindowSize';

export interface ArticleProps {
  image: string
  label: string
  title: string
  description: string
  tags: TagType[]
  href: string
}

export const Article = ({
  image, label, title, description, tags, href,
}: ArticleProps): JSX.Element => {
  const size = useWindowSize();

  return (
    <article className={style.article}>
      <Link className={style.titleLink} href={href} target="_blank">
        <img className={style.image} src={image} alt="article" />
      </Link>
      <Paragraph className={cs('hse-Text_caption-small-regular', style.label)}>{label}</Paragraph>
      <Link className={style.titleLink} href={href} target="_blank">
        {size.width <= parseInt(breakpointMobileLarge, 10)
          ? <Paragraph className={cs('hse-Text_caption_medium_bold', style.title)}>{title}</Paragraph>
          : <Heading size={HeadingSize.H4} className={style.title}>{title}</Heading>}
      </Link>
      <Paragraph className="hse-Paragraph_small">{description}</Paragraph>
      <Tags className={style.labels} tags={tags} />
    </article>
  );
};
