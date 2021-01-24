import React from 'react';
import styled from 'react-emotion';

import DeskImg from "../../img/desk.png"

const Shape =  styled('div')`
  position: absolute;
  display:flex;
  justify-content:center;
  width: 100vw;
  height:300px;
align-items:flex-end;
bottom:0;
  left: 0;
  text-align:center;
  z-index: 99;
`;

export const Desk = ({children, ...rest}) => <Shape {...rest}><img style={{width:520,height:200}} src={DeskImg} alt='A modern desk and chair' /></Shape>;