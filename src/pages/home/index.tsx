import React from 'react';
import { useHistory } from 'react-router-dom';
import { breakpointTabletSmall, colorBrand1 } from '@hse-design/tokens';
import cs from 'classnames';

import { Link, LinkVariant } from '@hse-design/react';
import { AppBanner } from '../../components/appBanner';

import { ReactComponent as CalendarIcon } from '../../images/icons/calendar.svg';
import { ReactComponent as PersonIcon } from '../../images/icons/find.svg';
import { ReactComponent as WorkspaceIcon } from '../../images/icons/workspace.svg';
import { ReactComponent as WorkIcon } from '../../images/icons/work.svg';
import { ReactComponent as VirusIcon } from '../../images/icons/virus.svg';
import { ReactComponent as AuthIcon } from '../../images/icons/auth.svg';

import { ReactComponent as AppleLogo } from '../../images/logo/apple.svg';
import { ReactComponent as GooglePlayLogo } from '../../images/logo/googlePlay.svg';
import { ReactComponent as VKLogo } from '../../images/logo/vk.svg';
import { ReactComponent as TelegramLogo } from '../../images/logo/tg.svg';
import { ReactComponent as FBLogo } from '../../images/logo/fb.svg';

import HseAIcon from '../../images/logo/a.png';
import HseNavIcon from '../../images/logo/nav.png';
import HseAlumniIcon from '../../images/logo/alumni.png';
import HseAprilConfIcon from '../../images/logo/aprilConf.png';
import HseBotIcon from '../../images/logo/bot.png';
import HseAliceIcon from '../../images/logo/alice.png';
import HseMentorIcon from '../../images/logo/mentor.png';
import HseMatchIcon from '../../images/logo/match.png';
import SalutLogo from '../../images/logo/salut.png';
import Support from '../../images/support.webp';
import SocialMedia from '../../images/socialmedia.webp';

import { InfoBlocks } from '../../components/infoBlocks';
import { Section } from '../../components/section';
import { ProjectCards } from '../../components/projectCards';
import { Partners } from '../../components/partners';

import { NewsContainer } from '../../containers/news';

import '../../styles/index.scss';
import { useWindowSize } from '../../utils/hooks/useWindowSize';
import { TeamBanner } from '../../components/teamBanner';
import { ForwardCard } from '../../components/forwardCard';
import { CardLinks } from '../../components/cardLinks';
import { ForwardFooter } from '../../components/forwardCard/footer';

import style from './style.module.scss';

export const HomePage = (): JSX.Element => {
  const size = useWindowSize();
  const history = useHistory();

  const adaptiveSectionsClasses = { header: size.width <= parseInt(breakpointTabletSmall, 10) ? 'gap-v' : undefined };

  const blogRedirect = (): void => {
    history.push('/news');
  };

  return (
    <main className="mainRoot">
      <Section className={cs({ 'gap-v': size.width >= parseInt(breakpointTabletSmall, 10) })}>
        <AppBanner />
      </Section>
      <Section className="sectionSpace gap-v">
        <InfoBlocks infoBlocks={[
          { icon: CalendarIcon, title: 'Расписание', description: 'Узнавайте о парах через приложение. Можно экспортировать расписание в календарь и настроить уведомления о начале занятий.' },
          { icon: PersonIcon, title: 'Поиск по сотрудникам и студентам', description: 'Находите любого вышкинца: студента, преподавателя, сотрудника. А еще академическую группу или аудиторию. Добавляйте нужные страницы в «Избранное», чтобы не искать заново.' },
          { icon: WorkspaceIcon, title: 'Ярмарка проектов', description: 'Записывайтесь на проекты прямо через приложение и следите за вашим количеством кредитов в разделе Проектной деятельности.' },
          { icon: WorkIcon, title: 'Карьерный сервис', description: 'Работа, стажировка, практика — смотрите вакансии от компаний-партнеров Вышки и откликайтесь в одно касание. А с составлением CV поможет конструктор резюме.' },
          { icon: VirusIcon, title: 'COVID-19', description: 'Форма для заполнения информации о статусе по COVID-19. Сертификат или справку можно отсканировать внутри сервиса, если нет готового файла под рукой.' },
          { icon: AuthIcon, title: 'Единая авторизация', description: 'Авторизоваться в приложении легко. Вводите логин и пароль, как в корпоративной почте, ЕЛК, ЛМС и др.' },
        ]}
        />
      </Section>
      <Section title="Мобильные приложения" classNames={adaptiveSectionsClasses} className={cs('sectionSpace', { 'gap-v': size.width >= parseInt(breakpointTabletSmall, 10) })}>
        <ProjectCards
          className={size.width <= parseInt(breakpointTabletSmall, 10) ? 'gap-v' : undefined}
          cards={[
            {
              icon: HseAIcon, title: 'Вышка.Аналитика', description: 'Аналитические материалы Института статистических исследований и экономики знаний ВШЭ', links: [{ icon: AppleLogo, href: 'https://apps.apple.com/us/app/%D0%B2%D1%8B%D1%88%D0%BA%D0%B0-%D0%B0%D0%BD%D0%B0%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0/id1479767424' }],
            },
            {
              icon: HseNavIcon, title: 'Вышка.Навигация', description: 'Навигация по зданиям Высшей школы экономики', links: [{ icon: AppleLogo, href: 'https://apps.apple.com/ru/app/%D0%B2%D1%8B%D1%88%D0%BA%D0%B0-%D0%BD%D0%B0%D0%B2%D0%B8%D0%B3%D0%B0%D1%86%D0%B8%D1%8F/id1489661829' }, { icon: GooglePlayLogo, href: 'https://play.google.com/store/apps/details?id=ru.hse.navigation&hl=ru&gl=US' }],
            },
            {
              icon: HseAlumniIcon, title: 'HSE Alumni', description: 'Приложение для выпускников Вышки с картой лояльности внутри', links: [{ icon: AppleLogo, href: 'https://apps.apple.com/us/app/hse-alumni/id1503983969' }],
            },
            {
              icon: HseAprilConfIcon, title: 'Апрельская конференция', description: 'Приложение для участников ежегодной Апрельской конференции', links: [{ icon: AppleLogo, href: 'https://apps.apple.com/us/app/april-conference/id1487800764' }, { icon: GooglePlayLogo, href: 'https://play.google.com/store/apps/details?id=com.chichkanov.hseapril&hl=ru&gl=US' }],
            },
          ]}
        />
      </Section>
      <Section title="Боты и навыки для голосовых ассистентов" classNames={adaptiveSectionsClasses} className={cs('sectionSpace', { 'gap-v': size.width >= parseInt(breakpointTabletSmall, 10) })}>
        <ProjectCards
          className={size.width <= parseInt(breakpointTabletSmall, 10) ? 'gap-v' : undefined}
          cards={[
            {
              icon: HseBotIcon, title: 'HSE Bot', description: 'Расписание, свободные аудитории и другая информация в VK и Telegram', links: [{ icon: VKLogo, href: 'https://vk.me/hsebot' }],
            },
            {
              icon: HseMatchIcon, title: 'Академический мэтчинг', description: 'Поможет найти людей с похожими проблемами при написании работы, готовых помогать друг другу', links: [{ icon: TelegramLogo, href: 'https://t.me/hse_studscience_bot' }],
            },
            {
              icon: HseMentorIcon, title: 'HSE Mentor Bot', description: 'Бот программы менторства НИУ ВШЭ', labels: [{ tag: 'Скоро' }],
            },
            {
              icon: HseAliceIcon, title: 'Расписание для Алисы', description: 'Расписание занятий для Яндекс.Станции', labels: [{ tag: 'Скоро' }],
            },
            {
              icon: SalutLogo, title: 'Расписание для Салюта', description: 'Расписание занятий для виртуальных ассистентов СберСалют', labels: [{ tag: 'Скоро' }],
            },
          ]}
        />
      </Section>
      <Section
        title="Блог"
        label={(
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <Link
            variant={LinkVariant.primary}
            onClick={blogRedirect}
          >
            Смотреть все
          </Link>
        )}
        classNames={adaptiveSectionsClasses}
        className={cs('sectionSpace', { 'gap-v': size.width >= parseInt(breakpointTabletSmall, 10) })}
      >
        <NewsContainer count={3} className={size.width <= parseInt(breakpointTabletSmall, 10) ? 'gap-v' : undefined} />
      </Section>
      <Section className="sectionSpace gap-v">
        <TeamBanner />
        <div className={style.forwardCards}>
          <ForwardCard
            title="Поддержка"
            description="Сообщите о проблеме, и мы вам поможем"
            image={Support}
            footer={(
              <ForwardFooter>
                {/* <Button variant={ButtonVariant.primary}>Центр поддержки</Button> */}
                {/* <Space horizontal size={Size.small} /> */}
                <CardLinks links={[{ icon: VKLogo, href: 'https://vk.me/hseapp', color: colorBrand1 }, { icon: FBLogo, href: 'https://fb.me/hseapp', color: colorBrand1 }]} />
              </ForwardFooter>
            )}
          />
          <ForwardCard
            title="Социальные сети"
            description="Рассказываем об обновлениях и жизни команды"
            image={SocialMedia}
            footer={(
              <ForwardFooter>
                <CardLinks links={[{ icon: VKLogo, href: 'https://vk.com/hseapp', color: colorBrand1 }, { icon: FBLogo, href: 'https://www.facebook.com/hseapp', color: colorBrand1 }, { icon: TelegramLogo, href: 'https://t.me/nruhseapp', color: colorBrand1 }]} />
              </ForwardFooter>
            )}
          />
        </div>
      </Section>
      <Section title="Партнеры" className="sectionSpace gap-v">
        <Partners />
      </Section>
    </main>
  );
};
