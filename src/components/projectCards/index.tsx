import React from 'react';
import cs from 'classnames';
import { Card, CardProps } from '../card';
import { CardLink, CardLinks } from '../cardLinks';
import { Tags, TagType } from '../tags';
import style from './style.module.scss';
import { Visibility } from '../visibility';

type CardType = Omit<CardProps, 'footer'> & { links?: CardLink[] } & { labels?: TagType[] }

interface ProjectCardsProps {
  cards: CardType[]
  className?: string
}

export const ProjectCards = ({ cards, className } : ProjectCardsProps): JSX.Element => (
  <div className={cs(style.cardsBlock, className)}>
    {cards.map(({
      icon, title, description, links, labels,
    }, index) => (
      <Card
        key={index}
        icon={icon}
        title={title}
        description={description}
        footer={(
          <>
            <Visibility visible={links != null}>
              {/* @ts-ignore */}
              <CardLinks links={links} />
            </Visibility>
            <Visibility visible={labels != null}>
              {/* @ts-ignore */}
              <Tags tags={labels} />
            </Visibility>
          </>
        )}
      />
    ))}
  </div>
);

ProjectCards.defaultProps = {
  className: undefined,
};
