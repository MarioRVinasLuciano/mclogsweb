import React from "react";

export default function Linea_de_tiempo (props) {
    return (

        <div className="flex flex-row w-full h-64 bg-white shadow-md" data-aos={props.transicion}>
                        <div className="flex-col p-10 w-6">
                            <div className={`h-6 w-6 rounded-full ${props.color_circulo}`}></div>
                            <div className="h-full w-0.5 bg-black ml-2.5 mt-2"></div>
                        </div>
                        <div className="w-full p-8">
                            <div className="flex flex-row justify-between w-full">
                                <h2 className="text-2xl">{props.titulo}</h2>
                                <p className="text-2xl">{props.ano}</p>
                            </div>
                            <div className="pt-10 text-xl w-1/2"> 
                                <p>{props.texto}</p>
                            </div>
                        </div>
                    </div>
    )
};