//从文件夹选择文件

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { css } from "@emotion/core"
import CloudUploadIcon from '@material-ui/icons/CloudUpload';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));




export default function UploadButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root} css={css`margin-top:5px`}>
      <input
        accept="*"

        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <span id="progress">0%</span>
      <label htmlFor="contained-button-file">
        <Button variant="contained"
                color="default"
                className={classes.button}
                startIcon={<CloudUploadIcon />}
                size="large"
                component="h1"
        >
          Upload
        </Button>
      </label>













      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />

      <label htmlFor="icon-button-file">
        <IconButton  aria-label="upload picture" component="h1" size="large">
          <PhotoCamera />
        </IconButton>
      </label>
    </div>
  );
}