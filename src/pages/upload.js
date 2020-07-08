import React from "react"
import Layout from "../component/layout"
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import UploadButtons from '../component/upload';
import App from '../component/dragupload';
import PrimarySearchAppBar from "../component/newlayout"
export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <PrimarySearchAppBar>
      <UploadButtons></UploadButtons>
      <App></App>
      </PrimarySearchAppBar>
  );
}
