import React, { useState } from 'react'
import "./Conversión.css";

function Conversión() {
    const [cantidad, setCantidad] = useState();
    const [resultado, setResultado] = useState();
    const [dato, setDato] = useState(true)
    const [tex, setTex ] = useState("Dolares a pesos")

    const handlEvent = e => {
        e.preventDefault() 
        setCantidad(e.target.value)
        console.log(cantidad)
        
    }

    const datoChange = e => {
        e.preventDefault();
        setTex(dato ? "Pesos a dolares" : "Dolares a pesos ")
        setDato(!dato)
        console.log(dato, tex);
    }

    const handlConvert = e => {
        e.preventDefault();
        const  dV =  19.66;

        if (dato === true ) {
            console.log(cantidad);
             const fix = cantidad * dV
            setResultado(fix.toFixed(2));
        console.log("Dolaes a pesos");

        }else {
            const fix = cantidad / dV
            setResultado(fix.toFixed(2));
            console.log("Pesos a dolares");        
            setResultado(fix.toFixed(2));

        }

    }
    return (
        <div className="app">
                <div className="header">                   
                        <input 
                            value={cantidad}
                            placeholder="Cuanto quieres convertir a pesos" 
                            onChange={ handlEvent }
                            type="number"
                        />

                        <button onClick={ handlConvert } type="submit">
                            Hidden submit
                        </button>
                </div>
            <div className="body">

                <div className="dem">
                    <h3>{tex}</h3>
                    <button type="submit" onClick={ datoChange }>
                        cambiar de fromato 
                    </button>
                </div>

                <div className="card">
                    <p>{resultado}</p>
                </div>

            </div>
        </div>
    )
}

export default Conversión
