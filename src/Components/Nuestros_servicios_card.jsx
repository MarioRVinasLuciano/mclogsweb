import React from "react";


export default function Nuestros_servicios(props) {
    return (
        <div className={`flex flex-col h-full ${props.espacio}`}>
        <div className="w-full lg:h-2/3 md:h-1/3 sm:h-1/2 h-1/2">
            <img className="w-full h-full rounded-t-md" src={props.imagen} alt="" />
        </div>
        <div className="flex flex-col w-full text-center p-4">
            <p className="text-xl pt-4 font-semibold">{props.titulo}</p>
            {/* <p className="pt-4 text-xs lg:text-regular md:text-regular sm:text-sm">{props.texto}</p> */}
        </div>
        <div className="flex h-auto justify-center mt-auto pb-6">
            <button className="h-10 w-auto bg-cyan-500 hover:bg-cyan-600 my-4 rounded-md">
                <a className="p-4 text-white" href={props.link}>Saber Más</a>
            </button>
        </div>
    </div>
    

    )
}