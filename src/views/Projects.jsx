import React from 'react'
import PropTypes from 'prop-types'
import { Divider, DividerMiddle } from '../elements/Dividers'
import Content from '../elements/Content'
import Inner from '../elements/Inner'
import { UpDown, UpDownWide } from '../styles/animations'
import { colors } from '../../tailwind'
import SVG from '../components/SVG'

const Projects = ({ children, offset }) => (
  <>
    // <Divider bg="#23262b" clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)" speed={0.2} offset={`${offset}.1`} />
    <DividerMiddle
      bg="linear-gradient(to right, DarkSlateBlue 0%, MidnightBlue 100%)"
      // bg="#23262b"
      // clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
      speed={-0.2}
      offset={`${offset}.1`}
      factor={2}
    />
    <Content speed={0.4} offset={`${offset}.2`} factor={2}>
      <Inner>{children}</Inner>
    </Content>
    <Divider speed={0.2} offset={offset} factor={2}>
      <UpDown>
        <SVG icon="box" width={6} fill={colors.white} left="85%" top="35%" />
        <SVG icon="upDown" width={8} fill={colors.teal} left="70%" top="20%" />
        <SVG icon="triangle" width={8} stroke={colors.orange} left="25%" top="5%" />
        <SVG icon="circle" hiddenMobile width={24} fill={colors.white} left="17%" top="60%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="arrowUp" hiddenMobile width={16} fill={colors.green} left="20%" top="90%" />
        <SVG icon="triangle" width={12} stroke={colors.white} left="90%" top="30%" />
        <SVG icon="circle" width={16} fill={colors.yellow} left="70%" top="90%" />
        <SVG icon="triangle" hiddenMobile width={16} stroke={colors.teal} left="18%" top="75%" />
        <SVG icon="circle" width={6} fill={colors.white} left="75%" top="10%" />
        <SVG icon="upDown" hiddenMobile width={8} fill={colors.green} left="45%" top="10%" />
        <SVG icon="circle" width={6} fill={colors.white} left="85%" top="58%" />
        <SVG icon="circle" width={12} fill={colors.pink} left="30%" top="42%" />
        <SVG icon="box" width={6} fill={colors.orange} left="25%" top="57%" />
        <SVG icon="box" width={12} fill={colors.yellow} left="49%" top="56%" />
        <SVG icon="hexa" width={16} stroke={colors.red} left="45%" top="35%" />
        <SVG icon="hexa" width={8} stroke={colors.yellow} left="10%" top="40%" />
      </UpDownWide>
      <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
      <SVG icon="circle" width={12} fill={colors.pink} left="80%" top="60%" />
      <SVG icon="box" width={6} fill={colors.orange} left="10%" top="10%" />
      <SVG icon="box" width={12} fill={colors.yellow} left="29%" top="26%" />
      <SVG icon="hexa" width={16} stroke={colors.red} left="75%" top="30%" />
      <SVG icon="hexa" width={8} stroke={colors.yellow} left="80%" top="70%" />
    </Divider>
  </>
)

export default Projects

Projects.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
