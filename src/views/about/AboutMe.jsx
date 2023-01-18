import React from 'react'

import { AboutMeWrapper, DescriptiveText, MyImage, TextWrapper } from './AboutMe.style';

const AboutMe = () => {
  return (
    <AboutMeWrapper>
      <MyImage >x</MyImage>
      <TextWrapper>
        <DescriptiveText>
          I'm <strong>passionate</strong> about <strong>learning, discovering</strong> and getting to know about new topics and I'm always looking for new experiences that can nourish my soul. In that way, I can imagine new forms, textures, dimensions and abstract ideas. I don't limit myself to create, I try to innovate and transmit my ideas in a fresh and playful way.
          I use the art like a tool that has the power to help our society to understand the historical events and the social troubles.
        </DescriptiveText>
      </TextWrapper>
    </AboutMeWrapper>
  )
}

export default AboutMe;
