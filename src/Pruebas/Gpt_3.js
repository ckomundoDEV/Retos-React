import React, { useState } from 'react'
import {
    Container, 
    Card,
    CardContent,
    TextField,
    Button,
    DialogTitle,
    Dialog,
    List,
    ListItem,
    ListItemText,

} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(5),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing(1),

    },
    paper: {
        maxWidth: 400,
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(5),
    }
}));

function IperDialog({texto, open, onClose, data}) {

    const handleClose = () => {
        onClose(texto)
    }


    return (
        <Dialog
        onClose={handleClose}
        open={open}
        >
            <DialogTitle>Datos analizado</DialogTitle>

            <List>

                <ListItem>
                    {texto}
                </ListItem>
                <ListItem>
                    Numero de palabras : {data.nPalabra}
                </ListItem>
                <ListItem>
                    Primera palabra: {data.pPalabra}
                </ListItem>
                <ListItem>
                    Ultima palabra: {data.ultPalabra}
                </ListItem>
                <ListItem>
                    Palabras invertidas: {data.invers}
                </ListItem>
                <ListItem>
                    Alfabetico: {data.abcd}
                </ListItem>
                <ListItem>
                    Contra alfabetico: {data.rev}
                </ListItem>


            </List>


        </Dialog>
    )

}

function Gpt_3() {
    const [open, setOpen] = useState(false);
    const [texto, setTexto] = useState("");
    const [data, setData] = useState({
        nPalabra: "",
        pPalabra: "",
        ultPalabra: "",
        invers: "",
        abcd:"",
        rev:""
    });

    const handleClickOpen = (e) => {
        e.preventDefault()
        const text = texto.split(" ")


        setData({
            palabra: text,
            pPalabra: text[0],
            ultPalabra: text[text.length -1],
            nPalabra: text.length,
            invers: text.reverse().join(),         
            abcd: text.sort().join(),
            rev: text.reverse().join()
        })

        
        setOpen(true)

    }

    const handleClose = (val) => {
        setOpen(false);
        setTexto(val);
    }

    const classes = useStyles();


    return (
        <Container className={classes.root}>
            <Card className={classes.paper} variant="outlined">
                <CardContent>
                <h2>HOla soy Gpt_3</h2>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Multiline"
                    multiline
                    rows={20}
                    size='medium'
                    fullWidth
                    onChange={e => setTexto(e.target.value)}                      
                    variant="outlined"
                >

                </TextField>
                
                </CardContent>
                <Button variant="contained" color="secondary" onClick={handleClickOpen}>
                        Dialog c;
                </Button>

            </Card>
            <IperDialog 
                data={data}
                texto={texto}
                open={open}
                onClose={handleClose}
            />

            </Container>
    )
}

export default Gpt_3
