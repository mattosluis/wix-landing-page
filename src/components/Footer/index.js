import React from 'react';

import { 
  Container,
  Content,
  BottomLinks
} from './styles';

export default function Footer() {
  return (
    <Container>
      <Content>
        <span>This Website was created using <b>My experience.</b></span>
        <span>You can do it, too.</span>
        <p>
          Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make a type 
          specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining
          essentially unchanged. It was popularised in the
          1960s with the release of Letraset sheets electronic 
          typesetting, remaining.
        </p>
      </Content>
      <BottomLinks>
        <a href="#!">Terms of Use</a>
        <a href="#!">Privacy Policy</a>
        <a href="#!">Content Rules</a>
        <a href="#!">FAQ</a>
        <p href="#!">2006-2017 Wix.co, FC</p>
      </BottomLinks>
    </Container>
  )
}
