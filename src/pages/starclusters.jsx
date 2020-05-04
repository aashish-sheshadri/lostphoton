import React from 'react'

import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import {GalleryStarClusters}  from '../components/Gallery'

// Elements
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'

const StarClustersPage = ({}) => (
  <>
    <Layout />
    <Parallax pages={1}>
      <Hero offset={0}>
        <center>
          <BigTitle>
            Collecting Photons.
          </ BigTitle>
          <Subtitle>...In Construction</Subtitle>
        </center>
      </Hero>
    </Parallax>
  </>
)

export default StarClustersPage
