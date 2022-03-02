import React from 'react'
import { Section } from '..'
import ContainerFluid from './ContainerFluid'
import ContainerVertical from "./ContainerVertical";

function SectionLayout(props) {

  
  return (
    <Section {...props}>
      <ContainerFluid>
        <ContainerVertical>
          {props.children}
        </ContainerVertical>
      </ContainerFluid>
    </Section>
  )
}

export default SectionLayout