"use client"
import Link from "next/link"
import { useState } from "react"
import fromStyles from "@/styles/styles.module.css"

const Registro = ({onClose}:any)=> {
    const [ email, setEmail ] = useState ('')
    const [ password, setPassword ] = useState ('')
    const [ name, setName ] = useState ('')

    const handelRegister = () => {
        console.log(`Login con correo: ${email}`)
        console.log(`Login con password: ${password}`)
    }
    return(
        <div className={fromStyles.modal}>
            <div className={fromStyles.modalContent}>
                <center>
                <h2>Registrarse</h2>
                <br/>
                <label htmlFor="name">Nombre: </label>
                <input type="name" id="name" value={name} onChange={(e)=>{
                   e.preventDefault()
                   setName(e.target.value)
                }}/>
                <br/>
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
                <button onClick={handelRegister}>Iniciar Sesion</button>
                <p>¿Ya tienes cuenta? <Link href="/">Iniciar Sesion</Link></p>
                <button onClick={()=>{}}>Cerrar</button>
                </center>
            </div>
        </div>
        )
}

export default Registro