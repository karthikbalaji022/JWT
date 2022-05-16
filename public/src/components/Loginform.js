import React,{useRef,useState,useContext} from "react";
import axios from 'axios'
import {propsPass} from '../App'
function Loginform(){
    const {present,SetPresent}=useContext(propsPass);
    const user=useRef();
    const pass=useRef();
    const [noti,setNoti]=useState();

    async function  login(e){
        e.preventDefault()
        const username=user.current.value;
        const password=pass.current.value;
        await axios({
            method:'post',
            url:'/api/v1/login',
            data:{
                username:username,
                password:password
            }
        }).then((res)=>{
           console.log(res.data)
            localStorage.setItem("token",res.data.token)
            setNoti("User created successfully")
            SetPresent(true);
        }).catch((e)=>{
            localStorage.removeItem("token")
            setNoti("User not created")
            SetPresent(false);
        })
        setTimeout(()=>{setNoti()},5000);
    }
    const notiStyle={color:noti==="User not created"?"red":"green"}
    return (
        <div className="login">
        <div className="formHead">
            <h3>Login/Register</h3>
        </div>
            <form className="formLogin">
                <label htmlFor="username">
                    UserName:
                    <input type="text" id="username" placeholder="Username" ref={user}></input>
                </label>
                <label htmlFor="password">
                    Password:
                    <input type="password" id="password" placeholder="Password" ref={pass}></input>

                </label>
                <button type="submit" id="submit" onClick={login}>Submit</button>
            </form>
            <span id="loginNotification" style={notiStyle}>{noti} </span>
        </div>
    )
}

export default Loginform;