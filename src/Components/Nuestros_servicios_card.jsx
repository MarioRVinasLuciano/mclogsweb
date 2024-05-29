import React from "react";
import { Link } from "react-router-dom";


export default function Nuestros_servicios(props) {
    return (
        <div className={props.espacio}>
            <div className="w-auto">
                <img className={props.claseImagen} src={props.imagen} alt="" />
            </div>
            <div className="w-auto py-4">
                <h1 className="text-xl">{props.titulo}</h1>
            </div>
            <div className="w-auto">
                <a className={props.claselink} href={props.link}>Conocer más</a>
            </div>
        </div>


    )
}