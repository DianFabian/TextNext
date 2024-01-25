"use client"
import { useState } from "react"
import Login from "./login"
import Registro from "./Registro"

const IndexPage = () => {
    const [showLogin, setShowLogin] = useState(false)
    const [showRegister, setShowRegister] = useState(false)

    const handelLoginClick = () =>{
        setShowLogin(false)
    }
    const handelRegisterClick = () =>{
        setShowRegister(false)
    }

    return(
        <div>
            <button onClick={() =>{
            setShowLogin(true)}}>Iniciar Sesion</button>
            <br/>

            <button onClick={() =>{
            setShowRegister(true)}}>Registrarse</button>
            <br/>
            <br/>
            {showLogin && <Login onClose={handelLoginClick}/>}
            {showRegister && <Registro onClose={handelRegisterClick}/>}
        </div>
    )
}

export default IndexPage