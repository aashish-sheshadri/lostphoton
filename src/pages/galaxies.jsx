import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'
import { Gallery } from "gatsby-theme-gallery";

// Components
import Layout from '../components/Layout'

// Elements
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'

const GalaxyPage = ({}) => (
  <>
    <Layout />
    {/* <Parallax pages={5}> */}
      {/* <Hero offset={0}> */}
        <Gallery />
      {/* </Hero> */}
    {/* </Parallax> */}
  </>
)

export default GalaxyPage
