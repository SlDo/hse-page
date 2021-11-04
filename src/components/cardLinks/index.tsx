import { ClickableIcon, Icon, IconSize } from '@hse-design/react';
import React from 'react';
import style from './style.module.scss';

export interface CardLink {
  icon: React.ElementType
  href: string
  color?: string
}

type CardLinksProps = { links: CardLink[], size?: IconSize };

export const CardLinks = ({ links, size }: CardLinksProps): JSX.Element => (
  <div className={style.cardLinks}>
    {links.map(({ icon, href, color }, index) => {
      const iconProps = { icon, size };
      return (
        <a key={index} aria-label="Перейти по ссылке" href={href}>
          <ClickableIcon color={color} iconProps={iconProps} />
        </a>
      );
    })}
  </div>
);

CardLinks.defaultProps = {
  size: IconSize.medium,
};
