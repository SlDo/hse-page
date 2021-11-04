import React from 'react';
import cs from 'classnames';
import { breakpointTabletSmall } from '@hse-design/tokens';
import { Heading, HeadingSize, Paragraph } from '@hse-design/react';
import style from './style.module.scss';
import { ReactComponent as MobileSVG } from '../../images/mobile.svg';
import { AppStoreButton, GooglePlayButton } from '../storeButtons';
import { Banner } from '../banner';
import { Visibility } from '../visibility';
import { useWindowSize } from '../../utils/hooks/useWindowSize';

interface AppBannerProps {
  className?: string
}

export const AppBanner = ({ className }: AppBannerProps): JSX.Element => {
  const size = useWindowSize();

  return (
    <Banner className={cs(style.appBanner, className)}>
      <div className={style.appBannerBody}>
        <Heading className={style.appBannerTitle} size={HeadingSize.H4}>{'HSE App X – новая версия \n популярного приложения'}</Heading>
        <Paragraph className={cs('hse-Text_caption-small-bold', style.appBannerLabel)}>
          Доступно в App Store и Google Play
        </Paragraph>
        <div className={style.appBannerButtons}>
          <AppStoreButton href="https://apps.apple.com/us/app/hse-app-x/id1527320487" />
          <GooglePlayButton href="https://play.google.com/store/apps/details?id=com.hse.app2&hl=ru&gl=US" />
        </div>
      </div>
      <div className={style.appBannerImageContainer}>
        <Visibility visible={size.width >= parseInt(breakpointTabletSmall, 10)}>
          <svg className={style.appBannerImageCircle} viewBox="0 0 297 297" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.9247 204.702C-20.2223 128.812 14.8643 42.1281 90.2928 11.0885C165.721 -19.9512 252.928 16.4073 285.075 92.2977C317.222 168.188 282.136 254.872 206.707 285.912C131.279 316.951 44.0716 280.593 11.9247 204.702ZM212.236 122.272C197.234 86.8563 156.537 69.8888 121.336 84.3741C86.1362 98.8594 69.7624 139.312 84.7644 174.728C99.7664 210.144 140.463 227.111 175.664 212.626C210.864 198.141 227.238 157.688 212.236 122.272Z" fill="url(#app_circle_linear)" />
            <defs>
              <linearGradient id="app_circle_linear" x1="-122.655" y1="268.256" x2="303.284" y2="-179.893" gradientUnits="userSpaceOnUse">
                <stop stopColor="#738FFE" />
                <stop offset="1" stopColor="#2953FC" />
              </linearGradient>
            </defs>
          </svg>
        </Visibility>
        <MobileSVG className={style.appBannerImage} />
      </div>
    </Banner>
  );
};

AppBanner.defaultProps = {
  className: undefined,
};
