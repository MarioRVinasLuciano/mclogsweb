import React, { useEffect, useState } from "react";

//importo Navbar
import Navbar from "../Components/Navbar";

//importacion de datos
import serviciosdatos from "../Datos/Servicios_datos/serviciosdatos";
import Nuestros_servicios from "../Components/Nuestros_servicios_card";

//Importacion - Imagenes
import background_img from "../Images/Homepageimgs/Somos/Backgroundimg2.jpg";
import figibox_img from "../Images/Homepageimgs/Somos/compañias/figibox-logo.svg";
import consilia_img from "../Images/Homepageimgs/Somos/compañias/mainConcilia_logo.png";
import Somos_logistica_img from '../Images/Homepageimgs/Somos/Descripcion/logistica_idea.webp';

//Animacion de AOS
import Aos from "aos";
import 'aos/dist/aos.css';


//Videos
import Video from "../Videos/Video.mp4";


export default function Homepage() {


    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])



    return (
        <div className="flex flex-col w-full h-auto font-quicksand">
            {/* Navbar comienza*/}

            {/* Primer Div Comienza */}
            <div className="relative  w-full" style={{ height: "700px" }}>
            <Navbar className="bg-gray/20 backdrop-blur-md"/>
                <video className="absolute inset-0 w-full h-full object-cover" src={Video} loop autoPlay muted></video>
                <div className="absolute top-0 left-0 w-full h-full grid lg:grid-cols-8 text-white p-4">
                    <div className="relative top-28 left-16 sm:left-0 h-72 w-auto text-wrap lg:col-span-6 lg:col-start-1 ml-16">
                        <h1 className="w-auto lg:text-6xl sm:text-4xl py-4" data-aos="fade-down" data-aos-duration="500">MC LOGISTICS</h1>
                        <p className="w-auto lg:text-8xl sm:text-6xl" data-aos="fade-up" data-aos-duration="400" data-aos-delay="600">CENTRADOS EN EL CLIENTE</p>
                        <p className="text-lg font-semibold py-4" data-aos="fade-up" data-aos-duration="500" data-aos-delay="1300">Impulsados por la DATA</p>
                    </div>
                </div>
            </div>




            {/* Primer Div se acava*/}

            <div className="w-full h-auto bg-white">
                <div className="py-6 text-center" data-aos="fade-up-left">
                    <h1 className="text-3xl">Somos</h1>
                </div>
                <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row py-20 justify-center items-center">
                    <div className="h-auto w-2/3 sm:w-2/3 md:2/3 lg:w-1/3 bg-blue-50 rounded-sm" data-aos="fade-up" >
                        <div className="p-4">
                            <h1 className="text-teal-500 text-xl font-semibold">MC Logistics</h1>
                            <p className="py-4 font-bold text-xl">Tu socio estratégico en logística a nivel global. Desde el origen hasta el destino final, maximizando la rentabilidad de nuestros clientes y socios con una gestión eficiente de mercancías, energía e información.</p>
                            <p className="py-4">Nacemos en el 2005 de la inquietud de crear valor en el proceso de gestión de la cadena de suministro, viendo oportunidades en el sector logístico de mejor flujo de información.</p>
                        </div>
                        <div className="p-4 ">
                            <button className="bg-cyan-500 hover:bg-cyan-600 h-12 w-32 rounded-md"><a className="text-white" href="/#/nosotros">Leer más</a></button>
                        </div>
                    </div>
                    <div>
                        <img className="animate-float" src={Somos_logistica_img} alt="" />
                    </div>
                </div>
            </div>


            <div className="w-full h-auto">
                <div className="flex h-auto bg-center relative bg-fixed" style={{ backgroundImage: `url(${background_img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="flex flex-col w-full h-auto items-center justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-3 sm:grid-rows-3 md:grid-rows-3 lg:grid-rows-1 gap-20 py-20">

                            <div className="flex flex-col bg-white h-auto w-80 p-8 shadow-lg rounded-sm text-center items-center">
                                <div className="">
                                    <img className="h-24 w-36" src={figibox_img} alt="" />
                                </div>
                                <hr className="w-full"></hr>
                                <div>
                                    <h1 className="text-xl font-semibold py-2">FigiBox</h1>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quia vel, magni nostrum placeat provident suscipit consequatur quidem amet architecto error nihil accusamus molestias facere, reiciendis quaerat. A, cum alias!</p>
                                    <button className="h-10 w-auto bg-cyan-500 hover:bg-cyan-600 my-4 rounded-sm"><a className="p-4 text-white" href="https://figibox.do/">Saber Mas</a></button>
                                </div>
                            </div>

                            <div className="flex flex-col bg-white h-auto w-80 p-8 shadow-lg rounded-sm text-center items-center">
                                <div className="">
                                    <img className="h-24 w-36" src={consilia_img} alt="" />
                                </div>
                                <hr className="w-full"></hr>
                                <div>
                                    <h1 className="text-xl font-semibold py-2">Consilia</h1>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quia vel, magni nostrum placeat provident suscipit consequatur quidem amet architecto error nihil accusamus molestias facere, reiciendis quaerat. A, cum alias!</p>
                                    <button className="h-10 w-auto bg-cyan-500 hover:bg-cyan-600 my-4 rounded-sm"><a className="p-4 text-white" href="https://www.consilialogistics.com/">Saber Mas</a></button>
                                </div>
                            </div>

                            <div className="flex flex-col bg-white h-auto w-80 p-8 shadow-lg rounded-sm text-center items-center">
                                <div className="">
                                    <img className="h-24 w-36" src={consilia_img} alt="" />
                                </div>
                                <hr className="w-full"></hr>
                                <div>
                                    <h1 className="text-xl font-semibold py-2">High Performance Cl</h1>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quia vel, magni nostrum placeat provident suscipit consequatur quidem amet architecto error nihil accusamus molestias facere, reiciendis quaerat. A, cum alias!</p>
                                    <button className="h-10 w-auto bg-cyan-500 hover:bg-cyan-600 my-4 rounded-sm"><a className="p-4 text-white" href="https://figibox.do/">Saber Mas</a></button>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>


            <div className="w-full h-auto">
                <div className="flex w-full h-24 items-center justify-center">
                    <h3 className="pl-10 text-3xl font-semibold"> Nuestros Servicios Logisticos</h3>
                </div>
                <div className="flex justify-center h-auto w-full py-20">
                    <div className=" grid lg:grid-cols-3 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-3 gap-8 gap-x-16">
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

            <>
                <div className="w-full h-auto bg-white">
                    <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row h-auto w-full items-center justify-center pl-10 pb-10">

                        <div className="flex-col w-1/3  " data-aos="fade-right">
                            <div className="">
                                <h1 className="text-3xl font-semibold">Donde nos ubicamos?</h1>
                            </div>
                            <div className="pt-10">
                                <div className="flex flex-col h-80 w-96 rounded-md bg-white shadow-md items-center">
                                    <div className="pt-4">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30270.719272893064!2d-69.9722908283497!3d18.490909364070806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf8987ea6ea207%3A0x7bcfa7fa8182db54!2sM.C.%20Logistics%20SRL!5e0!3m2!1sen!2sdo!4v1715034805315!5m2!1sen!2sdo"
                                            width="full"
                                            height="240"
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title="Google Map"
                                        ></iframe>
                                    </div>
                                    <div className="pt-4">
                                        <button className="bg-cyan-600 text-white rounded-sm w-34 h-8"><a className="px-4" href="https://www.google.com/maps/place/M.C.+Logistics+SRL/@18.4909094,-69.9722908,14z/data=!4m16!1m9!3m8!1s0x8eaf8987ea6ea207:0x7bcfa7fa8182db54!2sM.C.+Logistics+SRL!8m2!3d18.5010223!4d-69.9536097!9m1!1b1!16s%2Fg%2F11b5wpm5pg!3m5!1s0x8eaf8987ea6ea207:0x7bcfa7fa8182db54!8m2!3d18.5010223!4d-69.9536097!16s%2Fg%2F11b5wpm5pg?entry=ttu">Ver ubicacion</a></button>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="flex flex-row items-center h-96 w-2/5 pt-16">
                            <div className="flex flex-col">
                                <div data-aos="fade-up-left"> 
                                    <h1 className="text-2xl">Contactos</h1>
                                </div>
                                <div className="flex lg:flex-row sm:flex-col md:flex-col gap-x-8">
                                <div className="py-4" data-aos="fade-left" data-aos-delay="100">
                                <div className=" h-auto w-64 bg-white shadow-md rounded-md">
                                    <div className="p-4 flex flex-col">
                                        <div>
                                            <h1 className="text-xl">Correo: </h1>
                                        </div>
                                        <div>
                                            <p>info@mclogs.com</p>
                                        </div>
                                        <div className="py-2">
                                            <button className="bg-cyan-600 text-white rounded-sm"><a className="px-4" href="mailto:info@mclogs.com">Enviar correo</a></button>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="py-4" data-aos="fade-left" data-aos-delay="200">
                                <div className=" h-auto w-64 bg-white shadow-md rounded-md">
                                    <div className="p-4 flex flex-col">
                                        <div>
                                            <h1 className="text-xl">Telefono: </h1>
                                        </div>
                                        <div>
                                            <p>+1 (809)-565-3265</p>
                                        </div>
                                        <div className="py-2">
                                            <button className="bg-cyan-600 text-white rounded-sm"><a className="px-4" href="tel:+18095653265">Llamar</a></button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="bg-white">
                    <hr className=" h-px my-8 bg-gray-200 border-0" />
                </div>
            </>
        </div>
    )
}

