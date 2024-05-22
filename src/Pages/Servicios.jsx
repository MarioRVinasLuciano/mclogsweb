import React from "react";

//importo componente
import Nuestros_servicios from "../Components/Nuestros_servicios_card";
//importo datos
import serviciosdatos from "../Datos/Servicios_datos/serviciosdatos";


export default function Servicios(){
    return(
        <div className="w-full h-auto font-Encode-Sans pt-10">
                <div className="flex w-full h-24 items-center justify-center ">
                    <h3 className="pl-10 pt-10 text-5xl"> Nuestros Servicios Logisticos</h3>
                </div>
                <div className="flex justify-center h-auto w-full py-20">
                    <div className=" grid lg:grid-cols-3 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-3 gap-8 gap-x-16 px-10 sm:px-10 md:px-20 lg:px-40">
                    {
                               serviciosdatos.map(props=> (
                                <Nuestros_servicios
                                key={props.id}
                                espacio={props.espacio}
                                imagen={props.imagen}
                                titulo={props.titulo}
                                texto={props.texto}
                                transicion={props.transicion}
                                delay={props.delay}
                                duracion={props.duracion}
                                />
                               ))
                            }
                    </div>
                </div>
            </div>
    )
}