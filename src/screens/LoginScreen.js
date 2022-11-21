import React from 'react'
import "./LoginScreen.css"
import SignUpScreen from "./SignUpScreen";
import {useState, useEffect} from "react";
function LoginScreen() {
    const [signIn, setSignIn] = useState(false)
    return (
        <div className="loginScreen">
            <div className="loginScreen_background">
                <img className="loginScreen_logo"
                    src="https://pngimg.com/uploads/netflix/netflix_PNG25.png"
                    alt=""/>
                <button className="loginScreen_button" onClick={()=>setSignIn(true)}>
                    Sign In
                </button>
                <div className="loginScreen_gradient"/>
            </div>
            <div className="loginScreen_body">
                {signIn?(
                    <SignUpScreen/>
                ):
                (<>
                    <h1>Unlimited movies and TV Series and more.</h1>
                    <h2>Watch anywhere, cancel anytime</h2>
                    <h3>Enter your email to create your account!</h3>
                    <div className="loginScreen_input">
                        <form>
                            <input type="email" placeholder="email address"/>
                            <button className="loginScreen_getStarted" onClick={()=>setSignIn(true)}>GET FUCKING STARTED</button>
                        </form>
                    </div>
                </>)}
            </div>
        </div>
    )
}

export default LoginScreen