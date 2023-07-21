import React, { useState } from 'react';
import Model from "./Model";

function UserProfile({popupOpen, setPopupOpen}) {
  console.log("::", popupOpen)
  return (
    <Model open={popupOpen} setOpen={setPopupOpen}>
          <div>
          this is profile popup
          </div>
    </Model>
  )
}

export default UserProfile