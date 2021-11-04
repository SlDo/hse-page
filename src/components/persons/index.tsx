import React from 'react';
import style from './style.module.scss';
import { PersonCard, PersonCardProps } from '../personCard';

interface PersonsProps {
  persons: PersonCardProps[]
  additional?: JSX.Element | JSX.Element[]
}

export const Persons = ({ persons, additional }: PersonsProps): JSX.Element => (
  <div className={style.persons}>
    {persons.map((person, index) => <PersonCard key={index} {...person} />)}
    {additional}
  </div>
);

Persons.defaultProps = {
  additional: undefined,
};
