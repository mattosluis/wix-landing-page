import React from 'react';

import logoWix from '../../assets/img/wix-logo.png'

import { 
  NavBar,
  Logo,
  PageLinks,
  WatchVideoDiv
} from './styles';

export default function Header() {
  return (
    <NavBar>
      <Logo>
        <img src={logoWix} alt="Logo Wix"/>
      </Logo>
      <PageLinks>
        <a href="#!">Home</a>
        <a href="#!">How It Works</a>
        <a href="#!">New To Wix?</a>
        <a href="#!">FAQ</a>  
      </PageLinks>
      <WatchVideoDiv>
        <a href="#!">Watch Video</a>  
      </WatchVideoDiv>
    </NavBar>  
  )
}
