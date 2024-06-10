import React from "react";

export default function LineaDeTiempo (props) {
    return (

        <div className="flex flex-row w-full h-auto xl:h-64 bg-white shadow-xl " data-aos={props.transicion}>
                        <div className="flex-col p-10 w-6">
                            <div className={`h-6 w-6 rounded-full ${props.color_circulo}`}></div>
                            <div className="h-full w-0.5 bg-black ml-2.5 mt-2"></div>
                        </div>
                        <div className="w-full p-8 overflow-y-auto overflow-hidden">
                            <div className="flex flex-row justify-between w-full">
                                <h2 className="text-sm md:text-2xl lg:text-2xl xl:text-2xl">{props.titulo}</h2>
                                <p className="text-sm  md:text-2xl lg:text-2xl xl:text-2xl">{props.ano}</p>
                            </div>
                            <div className="pt-2 lg:pt-10 xl:pt-10 text-xl lg:w-1/2 w-full "> 
                                <p className="text-xs md:text-xl lg:text-xl">{props.texto}</p>
                            </div>
                        </div>
                    </div>
    )
};