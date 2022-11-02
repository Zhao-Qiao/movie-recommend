import React from 'react'
import './PopUp.css'
import PopupItem from "./PopupItem";

function PopUp({visible=true}) {
    const options=['Sign Up', 'Login', 'Settings', 'Log out']
    return visible?( <div className="popup_menu">
        <div className="popup_contents">
            {options.map((opt)=>(
                <PopupItem option={opt}/>)
            )
            }
        </div>
    </div>):(null)
}

export default PopUp