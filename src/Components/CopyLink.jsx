import React from 'react'
import copy from '../assets/copy.svg'

const CopyLink = ({link}) => {
  function copylink() {
    const tempInput = document.createElement('input');
    tempInput.value = link;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert(`Copied Link: ${link}`);
  }
  return (
    <div>
      <img className='copy' src={copy} onClick={copylink} alt='Copy the link'></img>
    </div>
  )
}

export default CopyLink
