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

const LandscapesPage = ({}) => (
  <>
    <Layout />
    <Parallax pages={1}>
      <Hero offset={0}>
        <center>
          <BigTitle>
            Collecting Photons.
          </BigTitle>
          <Subtitle>...In Construction</Subtitle>
        </center>
      </Hero>
    </Parallax>
  </>
)

export default LandscapesPage
