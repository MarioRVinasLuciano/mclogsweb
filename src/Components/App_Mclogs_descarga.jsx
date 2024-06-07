import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Logos
import apple from "../Icons/Apple.png"; // Logo de apple
import android from "../Icons/Android.png"; // Logo de android

//Video
import App_descarga from "../Videos/App_Mclogs.mp4";

export default function AppMclogs() {
    return (
        <div className="h-auto w-full bg-zinc-100 ">
            <div className="flex flex-col items-center justify-center py-8 md:py-16">
                <div className="flex flex-col h-auto items-center justify-center">
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

                    <video className="py-32 lg:py-0 w-[56rem] h-full object-cover" src={App_descarga} loop autoPlay muted></video>


                    <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row">

                        <div className="relative h-full w-auto lg:w-1/2 xl:w-1/2 flex items-center justify-center flex-col pb-10 lg:pb-0">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center w-full lg:w-auto">
                                
                                <div className="flex flex-col p-4 gap-2 w-full lg:w-auto h-auto bg-slate-200 rounded-md text-start items-center shadow-md"  data-aos="zoom-in-down" data-aos-duration="500">
                                    <div className="h-10 w-10 text-center opacity-80 flex items-center justify-center">
                                    <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#038EA3ff" d="M32 32c17.7 0 32 14.3 32 32V400c0 8.8 7.2 16 16 16H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64C0 46.3 14.3 32 32 32zM160 224c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm128-64V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32zm64 32c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32zM480 96V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.7 14.3-32 32-32s32 14.3 32 32z"/></svg>
                                    </div>
                                    <div className="flex items-center h-14">
                                        <p className="text-xl text-bluemunsell" >Dashboard</p>
                                    </div>
                                </div>
                                <div className="flex flex-col p-4 gap-2 w-auto h-auto bg-slate-200 rounded-md items-center shadow-md"  data-aos="fade-down" data-aos-delay="200" data-aos-duration="500">
                                    <div className="h-10 w-10  text-center opacity-80 flex items-center justify-center">
                                    <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path  fill="#038EA3ff" d="M192 32c0-17.7 14.3-32 32-32H352c17.7 0 32 14.3 32 32V64h48c26.5 0 48 21.5 48 48V240l44.4 14.8c23.1 7.7 29.5 37.5 11.5 53.9l-101 92.6c-16.2 9.4-34.7 15.1-50.9 15.1c-19.6 0-40.8-7.7-59.2-20.3c-22.1-15.5-51.6-15.5-73.7 0c-17.1 11.8-38 20.3-59.2 20.3c-16.2 0-34.7-5.7-50.9-15.1l-101-92.6c-18-16.5-11.6-46.2 11.5-53.9L96 240V112c0-26.5 21.5-48 48-48h48V32zM160 218.7l107.8-35.9c13.1-4.4 27.3-4.4 40.5 0L416 218.7V128H160v90.7zM306.5 421.9C329 437.4 356.5 448 384 448c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 501.7 417 512 384 512c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7l0 0C136.7 437.2 165.1 448 192 448c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z"/></svg>
                                    </div>
                                    <div className="flex items-center text-center h-14">
                                        <p className="text-xl text-bluemunsell" >Ordenes</p>
                                    </div>
                                </div>
                                <div className="flex flex-col p-4 gap-2 w-auto h-auto bg-slate-200 rounded-md items-center shadow-md"  data-aos="zoom-in-right" data-aos-delay="400" data-aos-duration="500">
                                    <div className="h-10 w-10 text-center opacity-80 flex items-center justify-center">
                                    <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#038EA3ff" d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z"/></svg>
                                    </div>
                                    <div className="flex items-center h-14 p-2 text-center">
                                        <p className="text-xl text-bluemunsell" >Recibos</p>
                                    </div>
                                </div>
                                <div className="flex flex-col p-4 gap-2 w-auto h-auto bg-slate-200 rounded-md items-center shadow-md"  data-aos="zoom-in-left" data-aos-delay="600" data-aos-duration="500">
                                    <div className="h-10 w-10 text-center opacity-80 flex items-center justify-center">
                                    <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#038EA3ff" d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z"/></svg>
                                    </div>
                                    <div className="flex items-center text-center h-14">
                                        <p className="text-xl text-bluemunsell" >Facturas</p>
                                    </div>
                                </div>
                                <div className="flex flex-col p-4 gap-2 w-auto h-auto bg-slate-200  rounded-md items-center shadow-md"  data-aos="zoom-in-right" data-aos-delay="600" data-aos-duration="500">
                                    <div className="h-10 w-10 text-center opacity-80 flex items-center justify-center">
                                    <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#038EA3ff" d="M88.2 309.1c9.8-18.3 6.8-40.8-7.5-55.8C59.4 230.9 48 204 48 176c0-63.5 63.8-128 160-128s160 64.5 160 128s-63.8 128-160 128c-13.1 0-25.8-1.3-37.8-3.6c-10.4-2-21.2-.6-30.7 4.2c-4.1 2.1-8.3 4.1-12.6 6c-16 7.2-32.9 13.5-49.9 18c2.8-4.6 5.4-9.1 7.9-13.6c1.1-1.9 2.2-3.9 3.2-5.9zM0 176c0 41.8 17.2 80.1 45.9 110.3c-.9 1.7-1.9 3.5-2.8 5.1c-10.3 18.4-22.3 36.5-36.6 52.1c-6.6 7-8.3 17.2-4.6 25.9C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.8-2.2 9.6-4.5 14.2-6.8c15.1 3 30.9 4.5 47.1 4.5c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176zM432 480c16.2 0 31.9-1.6 47.1-4.5c4.6 2.3 9.4 4.6 14.2 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.8 2-19-4.6-25.9c-14.2-15.6-26.2-33.7-36.6-52.1c-.9-1.7-1.9-3.4-2.8-5.1C622.8 384.1 640 345.8 640 304c0-94.4-87.9-171.5-198.2-175.8c4.1 15.2 6.2 31.2 6.2 47.8l0 .6c87.2 6.7 144 67.5 144 127.4c0 28-11.4 54.9-32.7 77.2c-14.3 15-17.3 37.6-7.5 55.8c1.1 2 2.2 4 3.2 5.9c2.5 4.5 5.2 9 7.9 13.6c-17-4.5-33.9-10.7-49.9-18c-4.3-1.9-8.5-3.9-12.6-6c-9.5-4.8-20.3-6.2-30.7-4.2c-12.1 2.4-24.7 3.6-37.8 3.6c-61.7 0-110-26.5-136.8-62.3c-16 5.4-32.8 9.4-50 11.8C279 439.8 350 480 432 480z"/></svg>
                                    </div>
                                    <div className="flex items-center h-14">
                                        <p className="text-xl text-bluemunsell" >Notas</p>
                                    </div>
                                </div>
                                <div className="flex flex-col p-4 gap-2 w-auto h-auto bg-slate-200  rounded-md items-center shadow-md"  data-aos="zoom-in-left" data-aos-delay="800" data-aos-duration="500">
                                    <div className="h-10 w-10 text-center opacity-80 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#038EA3ff" d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"/></svg>
                                    </div>
                                    <div className="flex items-center h-14">
                                        <p className="text-xl text-bluemunsell" >Calendario de actividades</p>
                                    </div>
                                </div>
                            


                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full lg:w-1/2 xl:w-1/2">
                            <div className="text-center bg-slate-200 rounded-md p-8 gap-8 shadow-md h-full w-full" data-aos="fade-up" data-aos-duration="800" data-aos-delay="800">
                            <p className="font-medium md:text-2xl lg:text-3xl text-slate-600" data-aos="fade-down" data-aos-anchor-placement="bottom-bottom">En MC Logistics estamos centrados en el cliente e impulsados por la data, razon por lo que creamos la app McLogs para tí.</p>
                            <p className="font-regular md:text-xl lg:text-2xl text-slate-500" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="800" data-aos-delay="200" >McLogs es la aplicación que ponemos a su disposición para gestionar toda la información que necesita de forma directa y en vivo de sus órdenes de servicio, desde el punto de coordinación, hasta la entrega de su carga, como otras funciones que facilitaran su gestión en la cadena logística.</p>
                            </div>
                        </div>
                    </div>



                </div>

            </div>
        </div>
    )
}