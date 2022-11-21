import React, {useEffect} from 'react';
import './App.css';
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {auth} from "./firebase";
import {onAuthStateChanged} from "firebase/auth"
import {useDispatch, useSelector} from "react-redux";
import {login, logout, selectUser} from "./features/userSlice";
import ProfileScreen from "./screens/ProfileScreen";
function App() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(userAuth)=>{
            if(userAuth){
                // logged in
                console.log(userAuth)
                dispatch(login({
                    uid: userAuth.uid,
                    email: userAuth.email,
                }))
            }
            else {
                //logged out
                dispatch(logout())
            }
        })
        return unsubscribe
    },[])
    return (
        <div className="app">
            <Router>
                {!user?(<LoginScreen/>):
                    ( <Routes>
                            <Route path="/profile" element={<ProfileScreen/>}/>
                            <Route exact path="/" element={<HomeScreen/>}/>
                        </Routes>
                    )}
            </Router>
        </div>
    );
}
export default App