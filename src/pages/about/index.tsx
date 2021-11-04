import React from 'react';
import cs from 'classnames';

import { Heading, HeadingSize, Paragraph } from '@hse-design/react';

import AboutUsImage from '../../images/about.webp';

import style from './style.module.scss';
import { Section } from '../../components/section';
import { Team } from '../../components/team';

import '../../styles/index.scss';

export const AboutPage = (): JSX.Element => (
  <main className="mainRoot">
    <img className={cs(style.pageImage, 'gap-v')} alt="Наша команда" src={AboutUsImage} />
    <Section className="sectionSpace gap-v">
      <Paragraph className={cs('hse-Text_paragraph_large', style.aboutTitle)}>Помнишь Рокетбанк? Вирусный маркетинг, живое общение с клиентами, непривычно для того времени удобный продукт – и все это внутри неповоротливой зарегулированной банковской системы. Мы – Рокет в цифровых решениях для университетов.</Paragraph>
      <Heading className={style.aboutTitle} size={HeadingSize.H4}>Наша миссия</Heading>
      <Paragraph className={cs('hse-Text_paragraph_large', style.aboutTitle)}>
        {'Сейчас почти все университеты пытаются развивать технологии и предлагать студентам  цифровые решения. Изначально эти решения создаются как необходимые и удобные, но сложные и долгие процессы реализации, постоянные компромиссы и незаинтересованные в конечном продукте люди делают эти решения далёкими от запросов студентов и, как следствие, ненужными.\n'
      + '\n'
      + 'Это превращает концепт цифровых решений внутри университетов в концепт очередного бесполезного сервиса, который приносит боль и студентам, и разработчикам. Это – неклассно. Но мы верим, что это можно исправить.\n'
      + '\n'
      + 'Мы считаем, что когда ты делаешь крутой продукт в такой консервативной отрасли, как высшее образование, и меняешь систему изнутри, привлекать внимание нужно, не заставляя пользоваться твоим решением, а создавая интересные поводы поговорить о продукте. Иногда такие поводы возникают сами по себе, но как правило, их нужно создавать.'}
      </Paragraph>
    </Section>
    <Section className="sectionSpace gap-v">
      <Team />
    </Section>
  </main>
);
