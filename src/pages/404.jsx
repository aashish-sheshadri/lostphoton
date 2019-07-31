import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'

// Elements
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'

const NotFoundPage = ({}) => (
  <>
    <Layout />
    <Parallax pages={1}>
      <Hero offset={0}>
        <center>
          <BigTitle>
            You are Lost.
          </BigTitle>
          <Subtitle>Turn Back.</Subtitle>
        </center>
      </Hero>
    </Parallax>
  </>
)

export default NotFoundPage
