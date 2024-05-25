import React from "react";

//importo componente
import Nuestros_servicios from "../Components/Nuestros_servicios_card";
//importo datos
import serviciosdatos from "../Datos/serviciosdatos";


import Transporte_Maritimo from "../Images/Nuestros_servicios_logisticosimgs/Transporte_maritimo.webp";
import Transporte_Aereo from "../Images/Nuestros_servicios_logisticosimgs/Transporte_aereo.webp";
import Transporte_terrestre from "../Images/Nuestros_servicios_logisticosimgs/Transporte_terrestre.webp";
import Almacenaje from "../Images/Nuestros_servicios_logisticosimgs/Almacenaje.webp";
import Gestion_aduanal from "../Images/Nuestros_servicios_logisticosimgs/Gestion_aduanal.webp";
import Paqueteria from "../Images/Nuestros_servicios_logisticosimgs/Paqueteria.webp";




export default function Servicios(){
    return(
        <div className="w-full h-auto font-Encode-Sans pt-16">
                
                <div className="flex flex-col justify-center h-auto w-full py-16">
                    <div className="flex w-full h-20 items-center justify-center pb-8 pt-16">
                        <h3 className="pl-10 text-5xl font-semibold"> Nuestros Servicios Logisticos</h3>
                    </div>

                    <div className="flex flex-col h-auto w-full px-10 sm:px-10 md:px-20 lg:px-40">
                        <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row pt-20">
                            <div className="flex flex-col w-full lg:w-3/5 xl:w-3/5 items-center text-center">
                                <h1 className="text-4xl w-1/2">Transporte Maritimo</h1>
                                <p className="text-3xl pt-4 font-thin w-1/2 ">El transporte marítimo es ideal para trasladar grandes volúmenes de carga a bajo costo y en largos trayectos. Esta modalidad asegura entregas seguras y puntuales, ofreciendo una solución eficiente y económica para el transporte de cargas críticas.</p>
                            </div>
                            <div className="w-full py-10 lg:w-2/5 xl:w-2/5 px-8">
                                <img className="h-full objetc-cover rounded-xl" src={Transporte_Maritimo} alt="" />
                            </div>
                        </div>


                        <div className="flex flex-col lg:flex-row xl:flex-row pt-20">
                            <div className="w-full lg:w-3/5 xl:w-3/5 px-8">
                                <img className="h-full objetc-cover rounded-xl" src={Transporte_Aereo} alt="" />
                            </div>
                            <div className="flex flex-col w-full py-10 lg:w-2/5 xl:w-2/5 items-center text-center justify-center">
                                <h1 className="text-4xl w-1/2 ">Transporte Aéreo</h1>
                                <p className="text-3xl pt-4 font-thin w-1/2 ">China, India, España, nunca habían estado tan cerca para envíos urgentes, carga o expreso, a la puerta de su empresa.</p>
                            </div>
                        </div>


                        <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row pt-20">
                            <div className="flex flex-col w-full lg:w-3/5 xl:w-3/5 items-center text-center justify-center">
                                <h1 className="text-4xl w-1/2">Transporte Terrestre</h1>
                                <p className="text-3xl pt-4 font-thin w-1/2 ">Nuestras alianzas en territorio dominicano con servicios de geolocalización, ofrecen seguridad y garantía para el transporte de mercancías.</p>
                            </div>
                            <div className="w-full py-10 lg:w-2/5 xl:w-2/5 px-8">
                                <img className="h-full objetc-cover rounded-xl" src={Transporte_terrestre} alt="" />
                            </div>
                        </div>


                        <div className="flex flex-col lg:flex-row xl:flex-row pt-20">
                            <div className="w-full lg:w-3/5 xl:w-3/5 px-8">
                                <img className="h-full objetc-cover rounded-xl" src={Almacenaje} alt="" />
                            </div>
                            <div className="flex flex-col w-full py-10 lg:w-2/5 xl:w-2/5 items-center text-center justify-center">
                                <h1 className="text-4xl w-1/2 ">Almacenaje</h1>
                                <p className="text-xl pt-4 font-semibold w-1/2 ">Consilia</p>
                                <p className="text-3xl pt-4 font-thin w-full px-4">Bajo el régimen de deposito logístico, nos encargamos del manejo de mercancías dentro de zona primaria para el país y la región. Con sede en el puerto de Caucedo, garantizamos conexiones a mas 20 islas en el caribe; así como centro, norte y sur américa.</p>
                            </div>
                        </div>

                        


                    </div>
                </div>
            </div>
    )
}