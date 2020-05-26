import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavItem = styled(Link)`
  text-decoration: none;
  color: #4C2680;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #e07628;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #e07628;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`
const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/landscapes">Landscapes</NavItem>
      <NavItem to="/milkyway">Milkyway</NavItem>
      <NavItem to="/galaxies">Galaxies</NavItem>
      <NavItem to="/nebulae">Nebulae</NavItem>
      <NavItem to="/solarsystem">Solar System</NavItem>
      <NavItem to="/starclusters">Clusters</NavItem>
    </>
  )
}

export default NavbarLinks