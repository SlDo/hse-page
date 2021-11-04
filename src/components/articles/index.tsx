import React from 'react';
import cs from 'classnames';
import { Article, ArticleProps } from '../article';
import style from './style.module.scss';

interface ArticlesProps {
  articles: ArticleProps[]
  className?: string
}

export const Articles = ({ articles, className }: ArticlesProps): JSX.Element => (
  <div className={cs(style.articles, className)}>
    {articles.map((article, index) => <Article key={index} {...article} />)}
  </div>
);

Articles.defaultProps = {
  className: undefined,
};
