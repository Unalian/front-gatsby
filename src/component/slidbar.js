import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import logefile from "../asset/fileIM.jpg"
import logeshare from "../asset/shareIM.jpg"
import logorecent from "../asset/recentIM.jpg"
import logotrash from "../asset/trashIM.jpg"

const ListSlide = props => (
    <Link to={props.to}>
      <li style={{ display: `inline-block`, marginRight: `2rem`,marginTop: `rem`}} css={css`
           
           width:${props.length}px;
           height:40px;
          
           background: #ffffff;
           border-radius: ${props.radius}px;
            &:hover {
            background : #b2d8f8;
            }
            
             
      `}><div css={css`  display: flex;
                      justify-content: flex-start;margin-left:5px;padding-bottom:5px;`}>
          <img src ={props.logo} css={css `width:20px;height:20px;margin-top:8px;padding:3px;`} />

          <div>
          <span css={css`
           padding : 10px;
            color: #315586;
            display: inline-block;
            &:hover {
            color : #315586;
            }
            
            font-size:80%;
      `}>{props.children}</span></div>
      </div>
      </li>
      </Link>
)

ListSlide.defaultProps = {

  to : "/",
length : 120,
  radius:10
}


const ListSlideUpload = props => (
  <Link to={props.to}>
    <li style={{ display: `inline-block`, marginRight: `0.5rem` }} css={css`
          
          width: 30px;
          height: 30px;
          -moz-border-radius: 50px;
          -webkit-border-radius: 50px;
          
          

          border-radius: 50px;
          color: #eeeeee;
      -moz-box-shadow: 1px 1px 1px 1px gray;
-webkit-box-shadow: 1px 1px 1px 1px gray;
box-shadow: 1px 1px 1px 1px gray;

            &:hover {
         
             background:#b2d8f8;
            }
      `}><span css={css`

            height:20px;
            width:20px;
            padding:0px;
            margin-top: -10px;
            margin-left:7px;
            color: rgba(181,146,96,0.93);
            
            display: inline-block;
            &:hover {
            color : #000000;
            }
            font-size:200%;
      `}>{props.children}</span> </li></Link>
)

export default function SlidBar() {
  return(

    <div css={css`
          margin: ${rhythm(1.0)};
           pardding : 0px;
           margin-left: ${rhythm(0.0)};
          `}>

        <ul style={{ listStyle: `none`}}>
          <li> <ListSlideUpload to={"/upload/"}>+</ListSlideUpload></li>
          <li><ListSlide to={'/my-files/'} logo = {logefile}>Files</ListSlide></li>
          <li> <ListSlide to={'/share/'} logo = {logeshare}>Sharing</ListSlide> </li>
          <li><ListSlide to={'/recent/'} logo = {logorecent}>Recent</ListSlide> </li>
          <li><ListSlide to={'/'} logo = {logotrash}>Trash</ListSlide> </li>
          <div
            className="gatsby-code-button-container"
            data-toaster-id=""
            data-toaster-class="gatsby-code-button-toaster"
            data-toaster-text-class="gatsby-code-button-toaster-text"
            data-toaster-text=""
            data-toaster-duration="3500"
            onClick="copyToClipboard(`alert('how cool is this');`)"
          >
          </div>

        </ul>
    </div>
  )
}

//