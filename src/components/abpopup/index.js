import React, { useContext  } from 'react';
import { AppContext } from '../../contexts/app_context';
import './index.css'

function ABPopup() {
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
      <p onClick={() => handleClick()}>back</p>
     <p>Alien battle page</p>
    </div>
  );
}

export default ABPopup;
