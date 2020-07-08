import React, { useEffect, useState, useRef } from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classList from './draghook.module.css';
import { css } from "@emotion/core"

const FilesDragAndDrop = (props) => {
  const [dragging, setDragging] = useState(false);
  const [message, setMessage] = useState({ show: false, text: null, type: null });
  const drop = useRef();
  const drag = useRef();
  useEffect(() => {
    // useRef 的 drop.current 取代了 ref 的 this.drop
    drop.current.addEventListener('dragover', handleDragOver);
    drop.current.addEventListener('drop', handleDrop);
    drop.current.addEventListener('dragenter', handleDragEnter);
    drop.current.addEventListener('dragleave', handleDragLeave);
    return () => {
      drop.current.removeEventListener('dragover', handleDragOver);
      drop.current.removeEventListener('drop', handleDrop);
      drop.current.removeEventListener('dragenter', handleDragEnter);
      drop.current.removeEventListener('dragleave', handleDragLeave);
    }
  })
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false)
    const { count, formats } = props;
    const files = [...e.dataTransfer.files];

    if (count && count < files.length) {
      showMessage(`Sorry, ${count} files could be allowed!。`, 'error', 2000);
      return;
    }

    if (formats && files.some((file) => !formats.some((format) => file.name.toLowerCase().endsWith(format.toLowerCase())))) {
      showMessage(`Only ${formats.join(', ')} files are allowed!`, 'error', 2000);
      return;
    }

    if (files && files.length) {
      showMessage('Success！', 'success', 1000);
      props.onUpload(files);
    }
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.target !== drag.current && setDragging(true)
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.target === drag.current && setDragging(false)
  };

  const showMessage = (text, type, timeout) => {
    setMessage({ show: true, text, type, })
    setTimeout(() =>
      setMessage({ show: false, text: null, type: null, },), timeout);
  };

  return (
    <div
      ref={drop}
      className={classList.FilesDragAndDrop}
    >
      {message.show && (
        <div
          className={
            classList.FilesDragAndDrop_placeholder_success}
        >
          {message.text}
        </div>
      )}
      {dragging && (
        <div
          ref={drag}
        >
          <span css={css`position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column nowrap;
    background-color: #e7e7e7;
    border-radius: 12px;
    color: #ffffff;
    font-size: 24px;
    opacity: 1;
    text-align: center;
    line-height: 1.4;`}>Let it go.</span>

        </div>
      )}
      {props.children}
    </div>
  );
}

FilesDragAndDrop.propTypes = {
  onUpload: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  count: PropTypes.number,
  formats: PropTypes.arrayOf(PropTypes.string)
}

export { FilesDragAndDrop };
