import React from 'react';
import {
  Heading, HeadingSize, Link, Paragraph,
} from '@hse-design/react';
import { decode } from 'html-entities';
import { breakpointMobileLarge } from '@hse-design/tokens';
import cs from 'classnames';
import style from './style.module.scss';
import { Tags, TagType } from '../tags';
import { useWindowSize } from '../../utils/hooks/useWindowSize';
import { Visibility } from '../visibility';

export interface ArticleProps {
  image: string | undefined
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
      <Visibility visible={image != null}>
        <Link className={style.titleLink} href={href} target="_blank">
          <img className={style.image} src={image} alt="article" />
        </Link>
      </Visibility>
      <Paragraph className={cs('hse-Text_caption-small-regular', style.label)}>{label}</Paragraph>
      <Link className={style.titleLink} href={href} target="_blank">
        {size.width <= parseInt(breakpointMobileLarge, 10)
          ? <Paragraph className={cs('hse-Text_caption_medium_bold', style.title)}>{decode(title)}</Paragraph>
          : <Heading size={HeadingSize.H4} className={style.title}>{decode(title)}</Heading>}
      </Link>
      <Paragraph className="hse-Paragraph_small">{decode(description)}</Paragraph>
      <Tags className={style.labels} tags={tags} />
    </article>
  );
};
