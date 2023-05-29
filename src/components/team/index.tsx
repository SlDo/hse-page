import React, { useEffect, useState } from 'react';
import { Persons } from '../persons';

export const Team = (): JSX.Element => {
  const [persons, setPersons] = useState<any[]>([]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const fetchPersons = async () => {
      try {
        const response = await fetch('https://hseapp.hb.bizmrg.com/staff.json');
        const data = await response.json();
        setPersons(data);
      } catch (error) {
        console.error('Error fetching persons:', error);
        setPersons([]);
      }
    };
    fetchPersons();
  }, []);
  return (
    <Persons
      persons={persons.map((person) => ({
        image: person.avatar_url,
        name: person.full_name,
        label: person.description,
        href: person.profile_link,
      }))}
    />
  );
};
