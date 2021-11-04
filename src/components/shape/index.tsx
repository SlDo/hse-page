import React from 'react';
import cs from 'classnames';
import style from './style.module.scss';

interface ShapeProps {
  children: JSX.Element | JSX.Element[]
  className?: string
}

export const Shape = ({
  children, className,
}: ShapeProps): JSX.Element => (
  <div className={cs(className, style.shape)}>
    {children}
  </div>
);

Shape.defaultProps = {
  className: undefined,
};
