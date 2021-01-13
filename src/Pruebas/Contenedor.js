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
            </Switch>
        </div>
    </Router>
    )
}

export default Contenedor
