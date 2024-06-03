import React from "react";
import { useState } from "react";
import { Checkmark } from 'react-checkmark'

export default function Soporte() {
    const [submit, setSubmit] = useState(false);


    const onSubmit = () => {
        setSubmit(true);
    }

    return (
        <div className="py-24 h-auto w-full font-Encode-Sans">
            <div className="px-10 sm:px-10 md:px-20 lg:px-40">

                {submit === false ?

                    <div className="flex flex-col items-center">
                        <div className="py-10 h-full w-full">
                            <div className="text-center">
                                <h1 className="text-7xl font-bold">Soporte</h1>
                                <p className="pt-4">Estamos siempre prestos a servir, porfavor, llene el formulario</p>
                            </div>
                        </div>
                        <div className="flex flex-row w-1/2 justify-between gap-4">
                            <div className="flex flex-col w-1/2">
                                <div className="pb-2">
                                    <h1 className="text-xl font-regular">Nombre</h1>
                                </div>
                                <div className="h-12">
                                    <input className="p-2 h-full w-full rounded-md shadow-md bg-slate-100"></input>
                                </div>
                            </div>

                            <div className="flex flex-col w-1/2">
                                <div className="pb-2">
                                    <h1 className="text-xl font-regular">Correo electrónico</h1>
                                </div>
                                <div className="h-12">
                                    <input className="p-2 h-full w-full rounded-md shadow-md bg-slate-100"></input>
                                </div>
                            </div>
                        </div>

                        <div className="w-1/2 pb-2 pt-4">
                            <h1 className="text-xl font-regular">Título</h1>
                        </div>
                        <div className="w-1/2 h-12">
                            <input className="p-2 h-full w-full rounded-md shadow-md bg-slate-100"></input>
                        </div>

                        <div className="w-1/2 pb-2 pt-4">
                            <h1 className="text-xl font-regular">Descripción</h1>
                        </div>
                        <div className="w-1/2 h-auto">
                            <textarea className="p-2 h-32 w-full resize-y  rounded-md shadow-md bg-slate-100"></textarea>
                        </div>


                        <div className="w-1/2 pt-10">
                            <button className="bg-bluemunsell hover:bg-cyan-600 text-white rounded-md h-12 w-full" onClick={onSubmit}>Enviar</button>
                        </div>

                    </div>

                    :

                    <div className="h-auto w-full py-24">
                        <div className="h-full w-full flex ">
                            <div className="flex flex-col h-full w-full items-center justify-center">
                                <div className="py-12">
                                    <Checkmark size='160px' />
                                </div>
                                <div className="w-1/2 h-1/2 p-6 flex justify-center items-center ">
                                    <h1 className="text-6xl font-bold text-bluemunsell">
                                        ORD00128720
                                    </h1>
                                </div>
                                <div className="py-16">
                                    <h1 className="text-xl">Su ticket ha sido generado exitosamente!</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                }



            </div>

        </div>
    )
}