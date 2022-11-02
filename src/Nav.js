import React from "react"
import './Nav.css'
import PopUp from "./PopUp";
import {useState,useEffect} from "react";

function Nav() {
    const [show, handleShow] = useState(false)
    const transitionNavBar = ()=>{
        if(window.scrollY > 100){
            handleShow(true)
        }
        else{
            handleShow(false)
        }
    }
    const [showMenu, handleShowMenu] = useState(true)
    useEffect(()=>{
        window.addEventListener("scroll",transitionNavBar);
        return ()=>window.removeEventListener("scroll",transitionNavBar);
    },[])
    const clickMenu=()=>{
        console.log("clicked!")
        handleShowMenu(!showMenu)
        console.log(showMenu)
    }
    useEffect(()=>{
        // handleShow(show)
        console.log('show changed')
    },[showMenu])
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className="nav_contents">
                <img className="nav_logo"
                     src="https://pngimg.com/uploads/netflix/netflix_PNG25.png"
                     alt=""/>
                <div className="popup_button" onClick={clickMenu}>
                    <img
                        className="nav_avatar"
                        src="https://th.bing.com/th/id/OIP.feBlMIjAvATINShg7FRyJQHaFj?pid=ImgDet&rs=1"
                        alt=""/>
                    {/*<div className="PopUpMenu" hidden={showMenu}>HIBITCH</div>*/}
                    <PopUp visible={showMenu}/>
                </div>
            </div>
        </div>
    )
}

export default Nav