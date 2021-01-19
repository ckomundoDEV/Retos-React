import React from 'react'

import {
    makeStyles,
    Drawer,
    Divider,
    List,
    ListItem,
    ListItemText

} from "@material-ui/core"
import { Link } from "react-router-dom"

const estilos = makeStyles(theme => ({
    drawer: {
        width: 240,
        flexShrink: 0
    },
    drawerPaper: {
        width: 240,
    },

    toolbar: theme.mixins.toolbar

}))


function Nav() {

    const classes = estilos();

    return (

        <Drawer className={classes.drawer} variant="permanent" classes={{paper:classes.drawerPaper}}>
            <div className={classes.toolbar}>
                
            </div>
            <Divider />
            

            <List component="nav">
                {["ColorPiker", 'Conversión','PrimeDetector', 'Gpt_3'].map((text )=> (

                    <Link to={text}>                     
                        <ListItem button>
                            <ListItemText primary={text}/>
                            <Divider />
                        </ListItem>
                    </Link>
                ))}

            </List>
        </Drawer>

    )
}

export default Nav
