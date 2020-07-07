import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"
import logoPath from "../asset/cetacis.jpg"
import SlidBar from "./slidbar"


const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}><span  css={css`
          position: relative;
          max-width: 100%;
          padding-top: ${rhythm(4)};
          color:white;
            &:hover {
            color: gray;
            }
            
            
      `}>{props.children}</span></Link>
  </li>
)

export default function Layout({ children }) {
  //在非页面文件使用检索
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
<div>
    <div
      css={css`
        margin: 0;
        max-width: 100%;
        padding: ${rhythm(0.3)};
        padding-top: ${rhythm(0.7)};
         background: url(${logoPath}) center/cover no-repeat;
      `}
    >
      <Link to={`/`}>
        <span
          css={css`
            margin-bottom: ${rhythm(2.0)};
            padding : 10px;
            display: inline-block;
            font-style: normal;
            font-size : 200%;
            
            height:50%;
            
            color:white;
            &:hover {
            color: gray;
            }
          `}
        >
          {data.site.siteMetadata.title}
        </span>

      </Link>

      <ul style={{ listStyle: `none`, float: `right` }}
          css={css`
           margin: 30px;
          `}
         >
        <ListLink to="/">Setting</ListLink>
        <ListLink to="/my-files/">About</ListLink>
        <ListLink to="/upload/">Myself</ListLink>
      </ul>
    </div>
    <div  css={css`  display: flex;
                      justify-content: flex-start;`}>
      <div><SlidBar></SlidBar></div>
      <div css={css` padding : 20px;`}>{children}</div>
    </div>

</div>
  )


}