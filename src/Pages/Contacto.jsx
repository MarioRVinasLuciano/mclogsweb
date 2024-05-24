import React from "react";

//Imagenes
import telefono from "../Images/Contactos/telephono.jpg";


export default function Contacto() {
    return (
        <div className="w-full h-auto bg-white pt-20 px-10 pb-10 sm:px-10 md:px-20 lg:px-40">
            <div className="pt-10">
                <h1 className="text-5xl">Contactanos</h1>
            </div>
            
            <div className="flex flex-col lg:flex-row xl:flex-row w-full h-auto gap-x-8 item-center xs:item-center sm:items-center">
                <div className="flex flex-col w-full lg:w-2/4 xl:w-2/4 text-center">
                <div className="pt-6 w-full">
                    <h1 className="text-2xl">Contactos</h1>
                </div>
                <div className="pt-8">
                    <div className=" p-4">
                    <h2>Telefono:</h2>
                    <p>+1 (809)-565-3265</p>
                    </div>
                </div>
                <div className="">
                    <div className="p-4">
                    <h2>Correo:</h2>
                    <p>info@mclogs.com</p>
                    </div>
                </div>
                <div className="">
                   <div className="p-4 ">
                   <h2>Direccion de Sucursal Principal:</h2>
                    <p>Ave. Carlos Perez Ricart #5, Santo Domingo, DN, R.D.</p>
                   </div>
                </div>
                </div>
                <div className="flex h-96 w-full lg:w-2/4 xl:w-2/4">
                    <img className="h-full w-full py-8" src={telefono} alt="" />
                </div>
            </div>


            <div className="flex flex-col lg:flex-row h-80 w-full items-center justify-between">
                <div className="flex flex-col w-1/2 h-full justify-center items-center">
                    <div className="w-full h-full">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30270.719272893064!2d-69.9722908283497!3d18.490909364070806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf8987ea6ea207%3A0x7bcfa7fa8182db54!2sM.C.%20Logistics%20SRL!5e0!3m2!1sen!2sdo!4v1715034805315!5m2!1sen!2sdo"
                                width="100%"
                                height="100%"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map"
                            ></iframe>
                    </div>
                </div>
                <div className="flex flex-col w-1/2 h-full items-center">
                    <div className="flex flex-col w-full h-full bg-slate-200 px-20 text-center items-center justify-center">
                        <h1>Sucursal en Santo Domingo</h1>
                        <p>Ave. Carlos Perez Ricart #5, Santo Domingo, DN, R.D.</p>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col lg:flex-row h-80 w-full items-center justify-between mt-10">
                <div className="flex flex-col w-1/2 h-full items-center">
                    <div className="flex flex-col w-full h-full bg-slate-200 px-20 text-center items-center justify-center">
                        <h1>Sucursal en Santiago</h1>
                        <p>F866+MFG, Santiago de los Caballeros 51000</p>
                    </div>
                </div>
                <div className="flex flex-col w-1/2 h-full justify-center items-center">
                    <div className="w-full h-full">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.8581881500027!2d-70.69136342478485!3d19.461680081823953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb1c57d1286e737%3A0x650d6227adf177c3!2sMC%20Logistics%20(FigitalBox)!5e0!3m2!1sen!2sdo!4v1716559220273!5m2!1sen!2sdo"
                                width="100%"
                                height="100%"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map"
                            ></iframe>
                    </div>
                </div>
            </div>


            <div className="flex flex-col lg:flex-row h-80 w-full items-center justify-between mt-10">
                <div className="flex flex-col w-1/2 h-full justify-center items-center">
                    <div className="w-full h-full">
                            <iframe
                                src="https://maps.google.com/maps?q=zona%20franca%20multimodal%20caucedo&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map"
                            ></iframe>
                    </div>
                </div>
                <div className="flex flex-col w-1/2 h-full items-center">
                    <div className="flex flex-col w-full h-full bg-slate-200 px-20 text-center items-center justify-center">
                        <h1>Caucedo, Zona Franca</h1>
                        <p>C9G7+9WX, Andrés, Dominican Republic</p>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col lg:flex-row h-80 w-full items-center justify-between mt-10">
                <div className="flex flex-col w-1/2 h-full items-center">
                    <div className="flex flex-col w-full h-full bg-slate-200 px-20 text-center items-center justify-center">
                        <h1>High Performance CL</h1>
                        <p>Por determinar</p>
                    </div>
                </div>
                <div className="flex flex-col w-1/2 h-full justify-center items-center">
                    <div className="w-full h-full">
                            <iframe
                                src="https://maps.google.com/maps?q=Krystal%20Logistics%20USA&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map"
                            ></iframe>
                    </div>
                </div>
            </div>
            
        </div>


    )
}