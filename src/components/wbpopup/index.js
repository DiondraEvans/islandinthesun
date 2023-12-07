import React, { useEffect, useState, useContext  } from 'react';
import { AppContext } from '../../contexts/app_context';
import './index.css'

function WBPopup() {
  let {showDiv, setShowDiv, setCase, Case} = useContext(AppContext);

  function handleClick() {
    if(showDiv == false){
        setShowDiv(true);
    } else if (showDiv == true){
        setShowDiv(false);
    }
}
  return (
    <div class="popup_screen">
      <p onClick={() => handleClick()} class="backbtn">back</p>
      <h2 class="case_title">WindBNB</h2>
    </div>
  );
}

export default WBPopup;
