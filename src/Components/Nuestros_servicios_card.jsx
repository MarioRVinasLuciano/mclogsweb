import React from "react";


export default function Nuestros_servicios(props){
    return(
        <div className={props.espacio} data-aos={props.transicion} data-aos-delay={props.delay} data-aos-duration={props.duracion}>
                            <div className="w-full  h-1/3">
                                <img className="w-full h-full rounded-md" src={props.imagen} alt="" />
                            </div>
                            <div className="flex flex-col w-full text-center p-4">
                                <p className="text-xl pt-4 font-semibold">{props.titulo}</p>
                                <p>{props.texto}</p>
                            </div>
                        </div>
    )
}