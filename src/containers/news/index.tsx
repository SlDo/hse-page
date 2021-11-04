import React, { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { Articles } from '../../components/articles';
import { getNews } from '../../utils/API';
import { ArticleProps } from '../../components/article';
import { News } from '../../utils/API/routes/news';

interface NewsProps {
  className?: string
  count?: number | undefined
}

export const NewsContainer = ({ className, count }: NewsProps): JSX.Element => {
  const [news, setNews] = useState<ArticleProps[]>([]);

  useEffect(() => {
    getNews().then((res: AxiosResponse<{ ok: number, data: News[]}>) => {
      const { data: resData } = res || {};
      const { data } = resData || [];

      const newsData = data?.map((news) => ({
        image: news.img == null ? news.img : `https://www.hse.ru${news.img}`, href: news.href, label: news.extra.date.formatted, title: news.title, description: news.annotation, tags: news.meta?.tags?.map((tag) => ({ tag: tag.title, href: tag.href })) ?? [],
      }));

      const newsResponse = count != null ? newsData.slice(0, count) : newsData;

      // @ts-ignore
      setNews(newsResponse ?? []);
    });
  }, []);

  return (
    <Articles className={className} articles={news} />
  );
};

NewsContainer.defaultProps = {
  className: undefined,
  count: undefined,
};
