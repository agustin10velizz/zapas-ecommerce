const Zapas = (props) =>{

    return(
        <>
        <h2 className="marca">{props.nombre}</h2>
        <p className="marca">Talles : {props.talles} </p>
        <p className="marca">Colores : {props.color} </p>
        
        </>
    )
}

export default Zapas;