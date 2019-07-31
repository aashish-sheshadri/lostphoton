import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'
import {graphql} from 'gatsby'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import InstaCard from '../components/InstaCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = ({}) => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Lost Photons <br /> The Photon Enclave.
        </BigTitle>
        <Subtitle>Landscape and Astrophotography<br />Aashish Sheshadri</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Galleries</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Landscapes"
            link="/landscapes"
            // bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            Landscapes. Seascapes. Nightscapes.
          </ProjectCard>
          <ProjectCard
            title="Milkyway"
            link="/milkyway"
            // bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            Wide Field Shots of our Galaxy.
          </ProjectCard>
          <ProjectCard
            title="Nebulae"
            link="/nebulae"
            // bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Emmision. Planetary. Reflection. Dark. Nebulae.
          </ProjectCard>
          <ProjectCard
            title="Galaxies"
            link="/galaxies"
            // bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            Spiral. Elliptical. Galaxies.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Aashish Sheshadri" />
          <AboutSub>
            I help photons find a home.<br /><br />
            While I am not rescuing photons I am busy being a Computer Scientist.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          There is something magical about collecting photons that have been
          travelling several light years from distant stars in the midst of
          man created photons to paint a truly telling picture.<br /><br />
          In this space I share with the world agglomerations of exotic photons.
          <br /><br /><br /><br />
          <InstaCard />
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:hello@aashish.me">Hi</a> or find me on {' '}
            <a href="https://www.instagram.com/aasheshadri">Instagram</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Aashish Sheshadri{' '}
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
