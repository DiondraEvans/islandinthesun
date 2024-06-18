import React, { useContext  } from 'react';
import { AppContext } from '../../contexts/app_context';
import './index.css'

function SNPopup() {
  let {showDiv, setShowDiv} = useContext(AppContext);

  function handleClick() {
    if(showDiv === false){
        setShowDiv(true);
    } else if (showDiv === true){
        setShowDiv(false);
    }
}
  return (
    <div class="popup_screen">
      <p onClick={() => handleClick()} class="backbtn">back</p>
     <h2 class="case_title">Sneakers</h2>
    </div>
  );
}

export default SNPopup;
