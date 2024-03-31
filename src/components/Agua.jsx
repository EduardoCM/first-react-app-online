import agua from '../imagenes/agua.png'
import EstadoAgua from './EstadoAgua'


export const Agua = () => {
    return (
        <>
        <h1>Elemento Agua</h1>
        <h2>SABER</h2>

        <img src={agua} />

        <EstadoAgua temperatura={50}/>
        </>
    )
}