import React from 'react'
import Nav from "./Nav.js";
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";

import ColorPiker from "./ColorPiker";
import Conversión from "./Conversión.js";
import PrimeDetector from "./PrimeDetector.js";
import Gpt3 from "./Gpt_3.js" 


function Contenedor() {

    
    return (
    <Router>
        <div>
            <Nav />
            <Switch>
                <Route path="/ColorPiker">
                    <ColorPiker />
                </Route>

                <Route path="/Conversión">
                    <Conversión />
                </Route>

                <Route path="/PrimeDetector">
                    <PrimeDetector />
                </Route>

                <Route path="/Gpt_3">
                    <Gpt3 />
                </Route>
            </Switch>
        </div>
    </Router>
    )
}

export default Contenedor
