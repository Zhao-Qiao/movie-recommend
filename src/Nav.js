import React from "react"
import './Nav.css'
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

    useEffect(()=>{
        window.addEventListener("scroll",transitionNavBar);
        return ()=>window.removeEventListener("scroll",transitionNavBar);
    },[])


    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className="nav_contents">
                <img className="nav_logo"
                     src="https://pngimg.com/uploads/netflix/netflix_PNG25.png"
                     alt=""/>

                <img
                    className="nav_avatar"
                    src="https://th.bing.com/th/id/OIP.feBlMIjAvATINShg7FRyJQHaFj?pid=ImgDet&rs=1"
                    alt=""/>
            </div>
        </div>
    )
}

export default Nav