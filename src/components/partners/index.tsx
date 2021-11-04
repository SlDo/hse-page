import React from 'react';
import style from './style.module.scss';

import { ReactComponent as YandexLogo } from '../../images/logo/yandex.svg';
import { ReactComponent as WalletLogo } from '../../images/logo/wallet.svg';
import { ReactComponent as MailCloudSolutionsLogo } from '../../images/logo/cloud-solutions.svg';
import { ReactComponent as SberDevicesLogo } from '../../images/logo/sberdevices.svg';

export const Partners = (): JSX.Element => (
  <div className={style.partners}>
    <a href="https://mcs.mail.ru" aria-label="Mail.ru Cloud"><MailCloudSolutionsLogo /></a>
    <a href="https://sberdevices.ru/" aria-label="SberDevices"><SberDevicesLogo /></a>
    <a href="https://yandex.ru/company/" aria-label="Yandex"><YandexLogo /></a>
    <a href="https://eco.koshelek.app" aria-label="Wallet"><WalletLogo /></a>
  </div>
);
