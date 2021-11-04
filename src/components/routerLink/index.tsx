import React from 'react';
import { useHistory } from 'react-router-dom';

interface RouterLinkProps {
  to: string
  children: JSX.Element | JSX.Element[] | string
  className?: string
}

export const RouterLink = ({ to, children, className }: RouterLinkProps): JSX.Element => {
  const history = useHistory();
  const onClick = (): void => history.push(to);

  return <button className={className} type="button" data-aim="router-link" onClick={onClick}>{children}</button>;
};

RouterLink.defaultProps = {
  className: undefined,
};
