import React from 'react';

interface VisibilityProps {
  visible: boolean
  children: JSX.Element | JSX.Element[] | undefined
}

export const Visibility = ({ visible, children }: VisibilityProps): JSX.Element | null => {
  if (!visible || !children) return null;

  return <>{children}</>;
};
