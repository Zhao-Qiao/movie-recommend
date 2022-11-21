import React, {useRef} from 'react'
import "./SignUpScreen.css"
import {auth} from "../firebase";
import {signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"

function SignUpScreen() {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const register = (e)=>{
        e.preventDefault()
        createUserWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser)=>{
                console.log(authUser)
            }).catch((error)=>{
                alert(error.message)
        })
    }

    const signIn = (e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser)=>{
            console.log(authUser)
        }).catch((error)=>{
            alert(error.message)
        })
    }


    return (
        <div className="signupScreen">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder="Email Address" type="email"/>
                <input ref={passwordRef} placeholder="password" type="password"/>
                <button type="submit" onClick={signIn}>Sign In</button>

                <h4>
                    <span className="signupScreen_grey">
                        Haven't got an account?
                    </span>
                    <span className="signupScreen_link" onClick={register}> Sign Up Now.</span>
                </h4>
            </form>
        </div>
    )
}

export default SignUpScreen