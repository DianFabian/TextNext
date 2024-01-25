

import {useState} from "react"

const Counter = ()=>{
        const [counter, setCounter] = useState(0)
        const [ showMessage, setShowMessage ] = useState (true)

        return(
            <div>
                <p>Haz hecho click {counter} veces</p>
                <br/>
                <button onClick={()=>
                setCounter(counter+1)}>
                    Haz click
                </button>
                <br/>
                <br/>
                <button onClick={()=>{
                    setShowMessage(!showMessage)
                }}>{!showMessage ? "Mostrar mensaje": "Ocultar mensaje"}</button>
                {
                    showMessage && <p> ¡¡Hola mundo!! </p>
                }
            </div>
        )
}

export default Counter