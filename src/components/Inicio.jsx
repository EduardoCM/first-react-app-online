import mexico from '../imagenes/mexico.png'


export const Inicio = () => {
    return (
        <>
            <h1>Mi primer sitio con React</h1>
            <h2>Creador: Eduardo Castillo Mendoza</h2>
            <h2>Planeta: Tierra</h2>
            <h2>Pais: Mexico</h2>

            <img src={mexico} />

        </>
    )
}