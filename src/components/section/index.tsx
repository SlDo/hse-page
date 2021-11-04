import { Heading, HeadingSize } from '@hse-design/react';
import React from 'react';
import cs from 'classnames';
import { Visibility } from '../visibility';
import style from './style.module.scss';

interface SectionProps {
  title?: string
  children: JSX.Element | JSX.Element[]
  label?: JSX.Element
  className?: string
  classNames?: {
    header?: string
  }
}

export const Section = ({
  title, children, label, className, classNames,
}: SectionProps): JSX.Element => (
  <section className={className}>
    <Visibility visible={title != null || label != null}>
      <header className={cs(style.header, classNames?.header)}>
        <Visibility visible={title != null}>
          <Heading className={style.title} size={HeadingSize.H3}>{title}</Heading>
          <Visibility visible={label != null}>
            {label}
          </Visibility>
        </Visibility>
      </header>
    </Visibility>
    {children}
  </section>
);

Section.defaultProps = {
  title: undefined,
  label: undefined,
  className: undefined,
  classNames: {
    header: undefined,
  },
};
