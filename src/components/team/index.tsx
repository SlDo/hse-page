import React from 'react';
import MNAvatar from '../../images/avatars/mn.png';
import MKAvatar from '../../images/avatars/mk.png';
import ACHAvatar from '../../images/avatars/ach.png';
import GSAvatar from '../../images/avatars/gs.png';
import RAAvatar from '../../images/avatars/ra.png';
import MCBAvatar from '../../images/avatars/mcb.png';
import ASHAvatar from '../../images/avatars/ash.png';
import IYAvatar from '../../images/avatars/iy.png';
import { Persons } from '../persons';

export const Team = ():JSX.Element => (
  <Persons
    persons={[
      {
        image: MNAvatar, name: 'Максим Немкевич', label: 'Начальник отдела', href: 'https://www.hse.ru/staff/maxim',
      },
      {
        image: MKAvatar, name: 'Матвей Кавторов', label: 'Ведущий программист', href: 'https://www.hse.ru/org/persons/208501436',
      },
      {
        image: ACHAvatar, name: 'Анастасия Четверткова', label: 'Аналитик', href: 'https://www.hse.ru/staff/nastyaproduction',
      },
      {
        image: GSAvatar, name: 'Герман Щипин', label: 'Ведущий программист', href: 'https://www.hse.ru/staff/ty',
      },
      {
        image: RAAvatar, name: 'Роман Анчугов', label: 'Программист', href: 'https://www.hse.ru/org/persons/208485787',
      },
      {
        image: MCBAvatar, name: 'Михаил Челбаев', label: 'Программист', href: 'https://www.hse.ru/staff/mchelbaev',
      },
      {
        image: ASHAvatar, name: 'Андрей Шинкарев', label: 'Ведущий программист', href: 'https://www.hse.ru/staff/ashinkarev',
      },
      {
        image: IYAvatar, name: 'Игорь Юнаш', label: 'Аналитик', href: 'https://www.hse.ru/staff/igralino',
      },
    ]}
  />
);
