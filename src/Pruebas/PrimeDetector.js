import React, { useState } from 'react'
import './PrimeDetector.css'


function PrimeDetector() {
    const [primos, setPrimos] = useState([])
    const [dato, setDato] = useState()

    console.log("hoal");
    

    const handlePrime = () => {
            const n = dato
            let res = []

        for (let numero = 0; numero < n; numero++) {

            let esPrimo= true
            if(numero === 0 ) esPrimo=false

            for (let l = 2; l < numero-1; l++) {

                if( numero % l === 0 ) {
                    esPrimo=false
                }
                
            }
            if (esPrimo) {
                res.push(numero)
            }
    
            
        }
        setPrimos(res)
        console.log(res);
    }



    return (
        <div className="app">
            <div className="navBar">
                <p>Numeros Primos del 1 al ...   </p>
                
                <input type="number" onChange={e => setDato(e.target.value)} />
                <button type="submit" onClick={handlePrime}></button>
            </div>
            <div className="body">

                <div className="">
                    <ul>
                        {
                            primos.map((primo) => {
                                return (
                                    <li>{primo}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>


            
        </div>
    )
}

export default PrimeDetector
