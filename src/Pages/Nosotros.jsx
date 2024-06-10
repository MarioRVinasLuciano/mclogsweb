import React, { useEffect } from "react";

//Animacion de AOS
import Aos from "aos";
import 'aos/dist/aos.css';

//Linea de tiempo
import LineaDeTiempo from "../Components/Linea de tiempo";

//importo datos para la linea de tiempos
import lineadetiempodatos from "../Datos/Lineadetiempo/lineadetiempodatos";


//Imagenes importadas localmente
import bote from "../Images/Nosotros/Bote_grande.jpg";
import mision from "../Images/Nosotros/Mision.webp";
import vision from "../Images/Nosotros/Vision.webp";
import valores from "../Images/Nosotros/Valores.webp";

//iconos
import confiable from "../Icons/Confiable.png";
import innovacion from "../Icons/Innovacion.png";
import flexible from "../Icons/Flexible.png";
import tecnologia from "../Icons/Tecnologia.png";


export default function Nosotros() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])


    return (
        <div className="h-auto w-full font-Encode-Sans ">
            

            <div className="w-full  h-auto xl:h-screen pb-10 pt-20">
                <div className="h-full w-auto flex xl:flex-row flex-col items-center">
                    <div className="flex flex-col items-center w-full py-10 lg:w-1/2 xl:w-1/2 px-10 sm:px-10 md:px-20 lg:px-40" data-aos="zoom-out-down" data-aos-delay="200">
                        <div className="pb-10 text-center w-full lg:w-96">
                            <h1 className="w-full xl:text-6xl lg:text-4xl text-4xl font-semibold ">Nuestra Historia</h1>
                        </div>
                        <div className="h-auto lg:w-[30rem] w-auto text-justify">
                            <p className="text-xl lg:text-2xl font-regular">Nacemos en el 2005 de la inquietud de crear valor en el proceso de gestión de la cadena de suministro, viendo oportunidades en el sector logístico de mejor flujo de información.

                            <br/>
                                Hoy, bajo el nombre de MCLogistics cubrimos mercados de manera efectiva y eficiente estando, SIEMPRE, el cliente como piedra angular en el desarrollo de nuestra empresa.
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-3/4 h-auto  z-[-10] right-0 top-0" data-aos="fade-right" >
                        <img className="w-[101rem] h-auto rounded-md " src={bote} alt="" />
                    </div>
                </div>
            </div>

            <div className="w-auto h-full pb-10 px-10 sm:px-10 md:px-20 lg:px-40 pt-12">

                <div className="h-auto w-auto py-0 md:py-8 text-center lg:text-start">
                    <h1 className="text-2xl lg:text-4xl xl:text-5xl font-semibold">Linea de tiempo</h1>
                </div>

                <div className="h-auto w-auto flex flex-col gap-y-6">
                    {
                        lineadetiempodatos.map(props => (
                            <LineaDeTiempo
                                key={props.id}
                                titulo={props.titulo}
                                ano={props.ano}
                                texto={props.texto}
                                color_circulo={props.color_circulo}
                                transicion={props.transicion}
                            />
                        ))}
                </div>
            </div>

            <div className="h-auto w-full ">
                <div className="flex h-full bg-center relative bg-fixed  ">
                    <div className="h-auto w-full px-10 sm:px-10 md:px-20 lg:px-40">

                        <div className="lg:pt-16 lg:pb-12 md:pt-12 md:pb-8 text-center">
                            <h1 className="text-3xl lg:text-5xl xl:text-6xl font-semibold">Quienes Somos</h1>
                        </div>

                        <div className="lg:h-64 h-auto w-full flex lg:flex-row flex-col sm:items-center items-center lg:justify-end md:justify-end sm:justify-center justify-center" data-aos="fade-righ">
                            <div className="pt-6">
                                <img className="h-[14rem] " src={mision} alt="" />
                            </div>
                            <div className="h-full w-full lg:w-[26rem] xl:lg:w-[26rem] flex flex-col bg-slate-100 shadow-md rounded-sm p-4">
                                <h2 className="text-2xl">
                                    Misión
                                </h2>
                                <p className="pt-4">
                                    <b>Integrar</b> junto a socios responsables, de manera eficiente la cadena de suministro tanto de manera local como regional, en un ambiente de trabajo proactivo y ameno creando oportunidades de desarrollo constante a nuestros colaboradores.
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 lg:h-64 h-auto w-full flex lg:flex-row flex-col sm:items-center items-center lg:justify-start md:justify-start sm:justify-center justify-center">
                            <div className="h-full w-full lg:w-[26rem] xl:lg:w-[26rem] flex flex-col bg-slate-100 shadow-md rounded-sm p-4" >
                                <h2 className="text-2xl">
                                    Visión
                                </h2>
                                <p className="pt-4 text-sm sm:text-sm md:text-md lg:text-lg">
                                    <b>Ser líder</b> en la integración de los servicios logísticos, mediante la innovación, agilidad, honestidad y compromiso con nuestros clientes y colaboradores, generando rentabilidad a nuestros clientes, socios y colaboradores a través de la eficiencia.
                                </p>
                            </div>
                            <div className="lg:pt-6">
                                <img className="h-[14rem] " src={vision} alt="" />
                            </div>
                        </div>

                        <div className="mt-12 lg:h-64 h-auto w-full flex lg:flex-row flex-col sm:items-center items-center lg:justify-end md:justify-end sm:justify-center justify-center">
                            <div className="pt-6">
                                <img className="h-[14rem] " src={valores} alt="" />
                            </div>
                            <div className="h-full w-full lg:w-[26rem] xl:lg:w-[26rem] flex flex-col bg-slate-100 shadow-md rounded-sm p-4">
                                <h2 className="text-2xl">
                                    Valores
                                </h2>
                                <ul className="pt-4 pl-4 list-disc">
                                    <li>Pasión</li>
                                    <li>Proactividad</li>
                                    <li>Honestidad</li>
                                    <li>Respeto</li>
                                    <li>Humildad</li>
                                    <li>Integridad</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-full w-auto px-10 sm:px-10 md:px-20 lg:px-40">
                <div className="pt-12">
                    <h1 className="text-3xl lg:text-5xl xl:text-6xl font-semibold text-center lg:text-start">¿Por qué elegirnos?</h1>
                </div>
                <div className="w-full h-auto flex lg:flex-row md:flex-col flex-col justify-center gap-x-24 xl:py-24 py-16 md:gap-y-12 gap-y-12 md:items-center items-center">
                    <div className="text-white h-44 w-44 flex flex-col justify-center items-center bg-blue shadow-md rounded-sm" data-aos="fade-down" >
                        <img className="h-24 w-24 invert" src={confiable} alt="" />
                        <p>Confiabilidad</p>
                    </div>
                    <div className="text-white h-44 w-44 flex flex-col justify-center items-center bg-aureolin shadow-md rounded-sm" data-aos="fade-down" data-aos-delay="200">
                        <img className="h-24 w-24 invert" src={innovacion} alt="" />
                        <p>Innovación</p>
                    </div>
                    <div className="text-white h-44 w-44 flex flex-col justify-center items-center bg-bluemunsell shadow-md rounded-sm" data-aos="fade-down" data-aos-delay="300">
                        <img className="h-24 w-24 invert" src={flexible} alt="" />
                        <p>Flexibilidad</p>
                    </div>
                    <div className="text-white h-44 w-44 flex flex-col justify-center items-center bg-aureolin shadow-md rounded-sm" data-aos="fade-down" data-aos-delay="400">
                        <img className="h-24 w-24 invert" src={tecnologia} alt="" />
                        <p>Tecnología</p>
                    </div>
                </div>
            </div>
        </div>
    )
}