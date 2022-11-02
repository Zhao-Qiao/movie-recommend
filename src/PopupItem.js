import React from 'react'
import './PopUpItem.css'
function PopupItem({option}) {
    return (
        <div className="popup_item">
            <div className="text">{option}</div>
        </div>
    )
}

export default PopupItem