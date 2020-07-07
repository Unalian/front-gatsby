import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"


const ListSlide = props => (
    <Link to={props.to}> <li style={{ display: `inline-block`, marginRight: `0.5rem` }} css={css`
           width:300px;
           padding : 10px;
           background: #e5f3ff;
           border-radius: 25px;
            &:hover {
            background : #b2d8f8;
            }
      `}><span css={css`
           padding : 10px;
            color: #315586;
            display: inline-block;
            &:hover {
            color : #315586;
            }
      `}>{props.children}</span> </li></Link>


)

export default function SlidBar() {
  return(

    <div css={css`
          margin: ${rhythm(1.0)};
           pardding : 10px;
           margin-left: ${rhythm(0.0)};
          `}>
      <div>
        <ul style={{ listStyle: `none`}}>
          <li><ListSlide to={"/upload/"}><span>Upload</span></ListSlide></li>
          <li><ListSlide to={'/my-files/'}><span>My files</span></ListSlide></li>
          <li> <ListSlide to={'/share/'}><span>My sharing</span></ListSlide> </li>
          <li><ListSlide to={'/recent/'}><span>Recent</span></ListSlide> </li>
          <li><ListSlide to={'/star/'}><span>Star</span></ListSlide> </li>
          <li><ListSlide to={'/'}><span>Trash</span></ListSlide> </li>

        </ul>
      </div>
      <div>
      </div>
    </div>
  )
}