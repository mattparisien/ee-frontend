import React from 'react'
import Section from '../../Containers/Section'
import ContainerFluid from '../../Containers/ContainerFluid'
import ReactMarkdown from 'react-markdown';
import Megaphone from '../../Vector/Megaphone';

function About({aboutText}) {
  return (
    <Section data-theme='dark' classes='o-about -padding-lg'>
    <ContainerFluid classes='-stretchY'>
      <ReactMarkdown
        children={aboutText}
        className='o-text -text-big -split -fadeUp'
      />
      <Megaphone />
    </ContainerFluid>
  </Section>
  )
}

export default About