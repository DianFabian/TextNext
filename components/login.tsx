"use client"
import Link from "next/link"
import { useState } from "react"
import fromStyles from "@/styles/styles.module.css"

const Login = ({onClose}:any)=> {
    const [ email, setEmail ] = useState ('')
    const [ password, setPassword ] = useState ('')
    const handelLogin = () => {
        console.log(`Login con correo: ${email}`)
        console.log(`Login con correo: ${password}`)
    }
    return(
        <div className={fromStyles.modal}>
            <div className={fromStyles.modalContent}>

                <center>
                <h2>Iniciar sesion</h2>
                <br/>
                <label htmlFor="email">Correo: </label>
                <input type="email" id="email" value={email} onChange={(e)=>{
                   e.preventDefault()
                   setEmail(e.target.value)
                }}/>
                <br/>
                <br/>
                <label htmlFor="password">Contraseña: </label>
                <input type="password" id="password" value={password} onChange={(e)=>{
                   e.preventDefault()
                   setPassword(e.target.value)
                }}/>
                <br/>
                <br/>
                <button onClick={handelLogin}>Login</button>
                <p>¿No tienes cuenta? <Link href="/pages/registr">Registrate</Link></p>
                <button onClick={onClose}>Cerrar</button>
                </center>
            </div>
        </div>
        )
}

export default Login