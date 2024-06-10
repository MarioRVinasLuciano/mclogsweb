import React from "react";
import { useEffect } from "react";

import Aos from "aos";
import 'aos/dist/aos.css';

//Imagenes
import imagen_background from "../Images/Contactos/bg_image_1.jpg";


export default function Contacto() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);



    return (
        <div className="w-full h-auto bg-white pt-20 ">

            <div className="flex justify-center items-center bg-center bg-fixed w-full h-40 md:h-80" style={{ backgroundImage: `url(${imagen_background})`, backgroundSize: 'cover' }}>
                <div className="text-center">
                    <h1 className="text-white text-3xl lg:text-5xl xl:text-6xl font-semibold">Contactanos</h1>
                </div>
            </div>

            <div className=" px-10 pb-24 sm:px-10 md:px-20 lg:px-40">


                <div className="flex flex-col lg:flex-row xl:flex-row w-full h-auto justify-between items-center gap-5 py-10">

                    <div className="flex flex-col items-center justify-center rounded-md bg-cyan-500 h-56 w-full sm:w-96 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-16 w-16 p-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        <h1 className="text-2xl font-semibold">Teléfono</h1>
                        <a href="https://wa.me/18095653265">+1 (809)-565-3265</a>
                    </div>
                    <div className="flex flex-col items-center justify-center rounded-md bg-slate-50 h-56 w-full sm:w-96 text-center px-10" >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-16 w-16 p-2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                            />
                        </svg>
                        <h1 className="text-2xl font-semibold">Dirección</h1>
                        <a href="https://www.google.com/maps/place/M.C.+Logistics+SRL/@18.501022,-69.9557977,17z/data=!3m1!4b1!4m5!3m4!1s0x8eaf8987ea6ea207:0x7bcfa7fa8182db54!8m2!3d18.501022!4d-69.953609" target="_blank" rel="noreferrer">Ave. Carlos Perez Ricart #5,
                            Santo Domingo, DN, R.D.</a>
                    </div>

                    <div className="flex flex-col items-center justify-center rounded-md bg-DarkBlue h-56 w-full sm:w-96 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-16 w-16 p-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        <h1 className="text-2xl font-semibold">Correo</h1>
                        <a href="mailto:info@mclogs.com">info@mclogs.com</a>
                    </div>

                </div>





                <div className="flex flex-col lg:flex-row w-full h-auto items-center justify-between ">
                    <div className="flex flex-col w-full lg:w-1/2 h-full justify-center items-center" data-aos="fade-up">
                        <div className="w-full h-80 rounded-xl overflow-hidden">
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
                    <div className="flex flex-col w-full lg:w-1/2 h-full items-center" data-aos="fade-up">
                        <div className="flex flex-col w-full h-full py-6 lg:py-0 lg:px-20 text-center items-center justify-center">
                            <h1 className="text-4xl font-bold">Sucursal en Santo Domingo</h1>
                            <p className="text-xl font-thin">Ave. Carlos Perez Ricart #5, Santo Domingo, DN, R.D.</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col-reverse lg:flex-row h-auto w-full items-center justify-between mt-20" data-aos="fade-up">
                    <div className="flex flex-col w-full lg:w-1/2 h-full items-center">
                        <div className="flex flex-col w-full h-full py-6 lg:py-0 lg:px-20 text-center items-center justify-center">
                            <h1 className="text-4xl font-bold">Sucursal en Santiago</h1>
                            <p className="text-xl font-thin">F866+MFG, Santiago de los Caballeros 51000</p>
                        </div>
                    </div>
                    <div className="flex flex-col w-full lg:w-1/2 h-full justify-center items-center" data-aos="fade-up">
                        <div className="w-full h-80 rounded-xl overflow-hidden">
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


                <div className="flex flex-col lg:flex-row h-auto w-full items-center justify-between mt-20" data-aos="fade-up">
                    <div className="flex flex-col w-full lg:w-1/2 h-full justify-center items-center">
                        <div className="w-full h-80 rounded-xl overflow-hidden">
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
                    <div className="flex flex-col w-full lg:w-1/2 h-full items-center" data-aos="fade-up">
                        <div className="flex flex-col w-full h-full py-6 lg:py-0 lg:px-20 text-center items-center justify-center">
                            <h1 className="text-4xl font-bold">Caucedo, Zona Franca</h1>
                            <p className="text-xl font-thin">C9G7+9WX, Andrés, Dominican Republic</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col-reverse lg:flex-row h-auto w-full items-center justify-between mt-20" data-aos="fade-up">
                    <div className="flex flex-col w-full lg:w-1/2 h-full items-center">
                        <div className="flex flex-col w-full h-full py-6 lg:py-0 lg:px-20 text-center items-center justify-center">
                            <h1 className="text-4xl font-bold">High Performance Cargo Logistics</h1>
                            <p className="text-xl font-thin">Por determinar</p>
                        </div>
                    </div>
                    <div className="flex flex-col w-full lg:w-1/2 h-full justify-center items-center" data-aos="fade-up">
                        <div className="w-full h-80 rounded-xl overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.419978166022!2d-80.3852301!3d25.8556514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9bc66e2c5086d%3A0x2d8a1985b1a14f52!2s11600%20NW%2091st%20St%20%233%2C%20Miami%2C%20FL%2033178%2C%20USA!5e0!3m2!1sen!2sdo!4v1717787577342!5m2!1sen!2sdo"
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

        </div>


    )
}