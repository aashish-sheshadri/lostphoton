import React from 'react'
import GlobalStyle from '../styles/global'
import SEO from './SEO'
import 'typeface-cantata-one'
import 'typeface-open-sans'
import NavBar from './navbar'
const Layout = () => (
  <>
    <SEO />
    <GlobalStyle />
    <NavBar />
  </>
)

export default Layout
