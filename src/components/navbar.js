/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Helmet from 'react-helmet'

import Header from "./Header"

const NavBar = () => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
            site {
                siteMetadata {
                title
                    menuLinks {
                    name
                    link
                    }
                
                }
            }
            }
        `}
        render={data => (
            <React.Fragment>
            
            <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
            <div
                style={{
                margin: '0 auto',
                maxWidth: 960,
                padding: '0px 1.0875rem 1.45rem',
                paddingTop: 0,
                }}
            >
                
            </div>
            </React.Fragment>
        )}
    /> 
  
)

NavBar.propTypes = {
  children: PropTypes.node.isRequired,
}

export default NavBar