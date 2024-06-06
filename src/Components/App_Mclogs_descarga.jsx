import React from "react";

//Logos
import apple from "../Icons/Apple.png"; // Logo de apple
import android from "../Icons/Android.png"; // Logo de android

//Video
import App_descarga from "../Videos/App_Mclogs.mp4";

export default function AppMclogs() {
    return (
        <div className="h-auto w-full bg-zinc-100 ">
            <div className="flex flex-col items-center justify-center py-16">
                <div className="flex flex-col h-44 items-center justify-center">
                    <h1 className="text-6xl text-bluemunsell font-bold">McLogs</h1>
                    <p className="pt-4 text-md">Descarga nuestra app en tu dispositivo</p>
                    <div className="flex flex-row items-center justify-center gap-x-10">
                        <div>
                            <a href='https://apps.apple.com/do/app/mclogs/id1504701375' target="_blank">
                                <div className="pt-4 py-2 gap-x-2 flex flex-row">
                                    <img className="h-6 w-6" src={apple} alt="Apple Store" />
                                    <p className="text-xl">Apple Store</p>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a href='https://play.google.com/store/apps/details?id=com.mclogs.www' target="_blank">
                                <div className="pt-4 py-2 gap-x-2 flex flex-row">
                                    <img className=" h-6 w-6" src={android} alt="Google Play" />
                                    <p className="flex text-xl">Google Play</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="w-full h-full flex justify-center items-center flex-col px-10 sm:px-10 md:px-20 lg:px-40 pb-16 gap-16">

                    <video className=" w-[56rem] h-full object-cover" src={App_descarga} loop autoPlay muted></video>


                    <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row">

                        <div className="relative mb-10 h-full w-auto lg:w-1/2 xl:w-1/2 flex items-center flex-col ">
                            <div className="text-center py-12">
                                <p className="text-4xl font-semibold" data-aos="fade-down">Funcionalidades</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 items-center tex-center">
                                
                                <div className="flex flex-col gap-4 w-44 h-32 border-bluemunsell hover:bg-slate-200 border-2 rounded-md items-center justify-center"  data-aos="zoom-in-down" data-aos-duration="500">
                                    <div className="h-10 w-10 bg-bluemunsell rounded-full text-center opacity-80 flex items-center justify-center">
                                        <p className="text-white text-xl">1</p>
                                    </div>
                                    <div className="flex items-center h-14">
                                        <p className="text-xl text-bluemunsell" >Dashboard</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 w-44 h-32  border-bluemunsell hover:bg-slate-200 border-2 rounded-md items-center justify-center"  data-aos="fade-down" data-aos-delay="200" data-aos-duration="500">
                                    <div className="h-10 w-10 bg-bluemunsell rounded-full text-center opacity-80 flex items-center justify-center">
                                        <p className="text-bluemnusell text-xl text-white ">2</p>
                                    </div>
                                    <div className="flex items-center text-center h-14">
                                        <p className="text-xl text-bluemunsell" >Calendario de Actividades</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 w-44 h-32  border-bluemunsell hover:bg-slate-200 border-2 rounded-md items-center justify-center"  data-aos="zoom-in-right" data-aos-delay="400" data-aos-duration="500">
                                    <div className="h-10 w-10 bg-bluemunsell rounded-full text-center opacity-80 flex items-center justify-center">
                                        <p className="text-bluemnusell text-xl text-white ">3</p>
                                    </div>
                                    <div className="flex items-center h-14 p-2 text-center">
                                        <p className="text-xl text-bluemunsell" >Ordenes y Facturas</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 w-44 h-32  border-bluemunsell hover:bg-slate-200 border-2 rounded-md items-center justify-center"  data-aos="zoom-in-left" data-aos-delay="600" data-aos-duration="500">
                                    <div className="h-10 w-10 bg-bluemunsell rounded-full text-center opacity-80 flex items-center justify-center">
                                        <p className="text-bluemnusell text-xl text-white ">4</p>
                                    </div>
                                    <div className="flex items-center text-center h-14">
                                        <p className="text-xl text-bluemunsell" >Histórico de Tránsito</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 w-44 h-32  border-bluemunsell hover:bg-slate-200 border-2 rounded-md items-center justify-center"  data-aos="zoom-in-right" data-aos-delay="600" data-aos-duration="500">
                                    <div className="h-10 w-10 bg-bluemunsell rounded-full text-center opacity-80 flex items-center justify-center">
                                        <p className="text-bluemnusell text-xl text-white ">5</p>
                                    </div>
                                    <div className="flex items-center h-14">
                                        <p className="text-xl text-bluemunsell" >Inventario</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 w-44 h-32  border-bluemunsell hover:bg-slate-200 border-2 rounded-md items-center justify-center"  data-aos="zoom-in-left" data-aos-delay="800" data-aos-duration="500">
                                    <div className="h-10 w-10 bg-bluemunsell rounded-full text-center opacity-80 flex items-center justify-center">
                                        <p className="text-bluemnusell text-xl text-white ">6</p>
                                    </div>
                                    <div className="flex items-center text-center h-14">
                                        <p className="text-xl text-bluemunsell" >Detalle de mercancia</p>
                                    </div>
                                </div>
                            


                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full lg:w-1/2 xl:w-1/2 px-8 gap-8">
                            <p className="font-medium text-3xl " data-aos="fade-down" data-aos-anchor-placement="bottom-bottom">En MC Logistics estamos centrados en el cliente e impulsados por la data, razon por lo que creamos la app McLogs para ti.</p>
                            <p className="font-regular text-2xl" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="800" data-aos-delay="200" >McLogs es la aplicación que ponemos a su disposición para gestionar toda la información que necesita de forma directa y en vivo de sus órdenes de servicio, desde el punto de coordinación, hasta la entrega de su carga, como otras funciones que facilitaran su gestión en la cadena logística.</p>
                        </div>
                    </div>



                </div>

            </div>
        </div>
    )
}