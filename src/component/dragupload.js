import React, { Component } from 'react';
import { FilesDragAndDrop } from './draghook';
import { css } from "@emotion/core"
import classList from './draghook.module.css';

export default class App extends Component {
  onUpload = (files) => {
    console.log(files);  // files为获得的file
  };
  render () {
    return (
      <FilesDragAndDrop
        onUpload={this.onUpload}
        count={1}
        formats={['jpg', 'png', 'gif']}
      >
        <div className={classList.FilesDragAndDrop__area}>
         Drag the file here.
        </div>
      </FilesDragAndDrop>
    )
  }
}
