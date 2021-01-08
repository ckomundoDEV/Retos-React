import React, { useState } from 'react'
import "./ColorPiker.css";


function ColorPiker() {
    const [color, setColor] = useState("#f1f2f5")


    const handlClick = e => {
        setColor(e.target.value)
        console.log(color);
    }
    return (
        <div className="app" style={{backgroundColor:color}}>
            <header >
                <h1 style={{color:color}}>ColorPiker</h1>
            </header>

            <div className="body">
                <div className="card">
                    
                    <h3> Crea una página con React.js que muestre 5 cuadros de diferentes colores los cuales al cliquearlos cambien el color de fondo de la página.</h3>
                    <div className="colors">
                        <button onClick={handlClick} style={{backgroundColor:"blue", font:"none"}} value ="blue" className="color"></button>
                        <button onClick={handlClick} style={{backgroundColor:"red", font:"none"}} value ="red" className="color"></button>
                        <button onClick={handlClick} style={{backgroundColor:"orange", font:"none"}} value ="orange" className="color"></button>
                        <button onClick={handlClick} style={{backgroundColor:"purple", font:"none"}} value ="purple" className="color"></button>
                        <button onClick={handlClick} style={{backgroundColor:"green", font:"none"}} value ="green" className="color"></button>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ColorPiker
