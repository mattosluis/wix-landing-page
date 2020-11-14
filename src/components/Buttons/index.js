import React from 'react';

import { 
  Primary,
  Second
} from './styles';

function PrimaryButton({ children }) {
  return <Primary>{children}</Primary>
}

function SecondButton({ children }) {
  return <Second>{children}</Second>
}

export {
  PrimaryButton,
  SecondButton
}
