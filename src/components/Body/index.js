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
            <span data-aos="fade-down">Wix Want You to</span>
            <h1 data-aos="fade-down">Capture Your Dream Photo</h1>
          <PrimaryButton href="#!">Submit Now</PrimaryButton>
        </FirstSectionContent>
      </FirstSection>
      <SecondSection image={`url(${skiImg})`}>
        <SecondSectionContent>
          <h1 data-aos="fade-left">Make Your Dream Shoot a Reality</h1>
          <p data-aos="fade-up">
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
          <h1 data-aos="fade-down">How It Works</h1>
          <StepsSection data-aos="fade-up" data-aos-delay="600">
            <span>1</span>
            <StepTitleAndDescription>
              <h3>Submit Your Wix Portifolio</h3>
              <p>
                Show off your best work by submitting your Wix
                portifolio website.
              </p>
            </StepTitleAndDescription>
          </StepsSection>
          <StepsSection data-aos="fade-up" data-aos-delay="1400">
            <span>2</span>
            <StepTitleAndDescription>
              <h3>Submit Your Wix Portifolio</h3>
              <p>
                Show off your best work by submitting your Wix
                portifolio website.
              </p>
            </StepTitleAndDescription>
          </StepsSection>
          <StepsSection data-aos="fade-up" data-aos-delay="2400">
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
          <h1 data-aos="fade-right">New to Wix?</h1>
          <h3 data-aos="fade-up">Create your stuning portifolio.</h3>
          <p data-aos="fade-up">
            Get started by choosing a template and use the Wix
            Pro Gallery to showcase your photography in the highest
            quality online.
          </p>
          <SecondButton href="#!">Start Now</SecondButton>
        </FourthSectionContent>
      </FourthSection>
      <FifthSection image={`url(${parachutingImg})`}>
        <FifthSectionContent>
          <h1 data-aos="fade-down">Your Dream Shoot Is Waiting For You</h1>
          <PrimaryButton href="#!">Submit Now</PrimaryButton>
        </FifthSectionContent>
      </FifthSection>
    </>
  );
}
