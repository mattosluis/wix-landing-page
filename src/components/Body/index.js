import React from 'react';

import { PrimaryButton, SecondButton } from '../Buttons';

import scubaDivingImg from '../../assets/img/scuba.jpg';
import hikingImg from '../../assets/img/hiking.jpg';
import skiImg from '../../assets/img/ski.jpg';
import surfImg from '../../assets/img/surf.jpg';
import parachutingImg from '../../assets/img/parachuting.jpg';

import { 
  FirstSection, 
  FirstSectionContent,
  SecondSection,
  SecondSectionContent,
  ThirdSection,
  ThirdSectionContent,
  StepsSection,
  StepTitleAndDescription,
  FourthSection,
  FourthSectionContent,
  FifthSection,
  FifthSectionContent
} from './styles';

export default function Body() {
  return (
    <>
      <FirstSection image={`url(${scubaDivingImg})`}>
        <FirstSectionContent>
          <span>Wix Want You to</span>
          <h1>Capture Your Dream Photo</h1>
          <PrimaryButton href="#!">Submit Now</PrimaryButton>
        </FirstSectionContent>
      </FirstSection>
      <SecondSection image={`url(${skiImg})`}>
        <SecondSectionContent>
          <h1>Make Your Dream Shoot a Reality</h1>
          <p>
            There`s a moment you`ve always wanted to capture,
             and Wix wants to make it happen - anywhere, anytime, 
             with any equipament. There are no limits to how big 
             your dream shoot can be.
          </p>
          <SecondButton href="#!">Watch Now</SecondButton>
        </SecondSectionContent>
      </SecondSection>
      <ThirdSection image={`url(${hikingImg})`}>
        <ThirdSectionContent>
          <h1>How It Works</h1>
          <StepsSection>
            <span>1</span>
            <StepTitleAndDescription>
              <h3>Submit Your Wix Portifolio</h3>
              <p>
                Show off your best work by submitting your Wix
                portifolio website.
              </p>
            </StepTitleAndDescription>
          </StepsSection>
          <StepsSection>
            <span>2</span>
            <StepTitleAndDescription>
              <h3>Submit Your Wix Portifolio</h3>
              <p>
                Show off your best work by submitting your Wix
                portifolio website.
              </p>
            </StepTitleAndDescription>
          </StepsSection>
          <StepsSection>
            <span>3</span>
            <StepTitleAndDescription>
              <h3>Submit Your Wix Portifolio</h3>
              <p>
                Show off your best work by submitting your Wix
                portifolio website.
              </p>
            </StepTitleAndDescription>
          </StepsSection>
          <PrimaryButton href="#!">Submit Now</PrimaryButton>
        </ThirdSectionContent>
      </ThirdSection>
      <FourthSection image={`url(${surfImg})`}>
        <FourthSectionContent>
          <h1>New to Wix?</h1>
          <h3>Create your stuning portifolio.</h3>
          <p>
            Get started by choosing a template and use the Wix
            Pro Gallery to showcase your photography in the highest
            quality online.
          </p>
          <SecondButton href="#!">Start Now</SecondButton>
        </FourthSectionContent>
      </FourthSection>
      <FifthSection image={`url(${parachutingImg})`}>
        <FifthSectionContent>
          <h1>Your Dream Shoot Is Waiting For You</h1>
          <PrimaryButton href="#!">Submit Now</PrimaryButton>
        </FifthSectionContent>
      </FifthSection>
    </>
  );
}
