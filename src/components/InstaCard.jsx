import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'
import { StaticQuery, graphql } from "gatsby"

const Container = styled('div')`
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
`

const InstaCard = () => (
  <StaticQuery
    query={graphql`
      query InstagramPosts {
        allInstagramContent(limit: 9) {
          edges {
            node {
            link
            caption{
              text
            }
            localImage{
                childImageSharp {
                    fluid(maxHeight: 500, maxWidth: 500 quality: 50) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
            images {
                standard_resolution {
                  width
                  height
                  url
                }
                low_resolution{
                    url
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <Container className='grid'>
        {
            data.allInstagramContent.edges.map((item, i) => {
                let captionText = item.node.caption? deleteTags(item.node.caption.text) : "Instagram Post"
                //Check for missing images
                return (
                    item.node.localImage? <Image fluid={item.node.localImage.childImageSharp.fluid} key={i} caption={captionText} />  : <div></div>
                )
            })
        }
      </Container>
    )}
  />
)

export default InstaCard

function deleteTags(text) {
  return  text.replace(/^(\s*#\w+\s*)+$/gm, "")
}
