import React from "react";


export default function Nuestros_servicios(props){
    return(
        <div className={props.espacio} data-aos={props.transicion} data-aos-delay={props.delay} data-aos-duration={props.duracion}>
                            <div className="w-full lg:h-1/3 md:h-1/3 sm:h-1/2 h-1/2">
                                <img className="w-full h-full rounded-md" src={props.imagen} alt="" />
                            </div>
                            <div className="flex flex-col w-full text-center p-4 flex-wrap">
                                <p className="text-xl pt-4 font-semibold">{props.titulo}</p>
                                <p className="pt-4 text-xs lg:text-regular md:text-regular sm:text-sm">{props.texto}</p>
                            </div>
                        </div>
    )
}