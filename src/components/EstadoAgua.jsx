
import hielo from '../imagenes/hielo.png';
import aguaa from '../imagenes/aguaa.png';
import vapor from '../imagenes/vapor.png';
import { useState } from 'react';
import { Button, TextField } from '@mui/material';



function EstadoAgua(props) {

    const[temperatura, setTemperatura] = useState(props.temperatura)

    function aumentarTemperatura(){
        setTemperatura(temperatura + 5);
    }

    function bajarTemperatura(){
        setTemperatura(temperatura - 5);
    }

    let imagen;

    console.log("Evalua temperatura: " + temperatura);
    if(temperatura <= 0){
        console.log("menor a 0: " + temperatura);
        imagen = <img src={hielo} />
    } else if(temperatura >= 1 && temperatura < 100){
        console.log("mayor a 1 y menor a 100: " + temperatura);
        imagen = <img src={aguaa} />
    } else if(temperatura >= 100){
        console.log("mayor a 100 " + temperatura)
        imagen = <img src={vapor}  />
    }

    console.log("Imagen: " + imagen);


    return(
        <>
        <h2>Estado del Agua</h2>
        <Button onClick={bajarTemperatura} variant="contained">Bajar Temperatura</Button>
        
        <TextField disabled value={temperatura} inputProps={{style: { textAlign: 'center' }}} />
        <Button onClick={aumentarTemperatura} variant='contained' color='error'>Aumentar temperatura</Button>
        
        <div>
        {imagen}
        </div>


        </>
    )
}

export default EstadoAgua;