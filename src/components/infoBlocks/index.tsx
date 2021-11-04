import React from 'react';
import { InfoBlock, InfoBlockProps } from '../infoBlock';
import style from './style.module.scss';

interface InfoBlocksProps {
  infoBlocks: InfoBlockProps[]
}

export const InfoBlocks = ({ infoBlocks }: InfoBlocksProps): JSX.Element => (
  <div className={style.infoBlocks}>
    {infoBlocks.map((block, index) => <InfoBlock key={index} {...block} />)}
  </div>
);
