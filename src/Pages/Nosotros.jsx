import React, { useEffect } from "react";

//Animacion de AOS
import Aos from "aos";
import 'aos/dist/aos.css';

//background
import white_bg from "../Images/Homepageimgs/Background/white_waves.jpg";


import Linea_de_tiempo from "../Components/Linea de tiempo";
//importo datos para la linea de tiempos
import lineadetiempodatos from "../Datos/Lineadetiempo/lineadetiempodatos";


//Imagenes importadas localmente
import bote from "../Images/Nosotros/Bote_grande.jpg";
import bote_en_puerto from "../Images/Nosotros/Bote_en_puerto.jpg";
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


            <div className="w-full pb-10 pt-16" style={{ height: "600px" }}>
                <div className="h-full w-auto flex lg:flex-row flex-col lg:relative">
                    <div className="lg:absolute relative lg:w-1/2 w-auto top-14 z-0 px-10 sm:px-10 md:px-20 lg:px-40" data-aos="zoom-out-down" data-aos-delay="200">
                        <div className="pb-10 text-center lg:text-start w-full">
                            <h1 className="lg:text-5xl text-4xl font-semibold">Nuestra Historia</h1>
                        </div>
                        <div className="h-[20rem] lg:w-[30rem] w-auto bg-white shadow-md text-center p-10 z-10 ">
                            <p className="text-xl lg:text-2xl">Nacemos en el 2005 de la inquietud de crear valor en el proceso de gestión de la cadena de suministro, viendo oportunidades en el sector logístico de mejor flujo de información.</p>
                        </div>
                    </div>
                    <div className="absolute lg:w-1/2 w-full h-auto  z-[-10] right-0 top-0" data-aos="fade-right" >
                        <img className="w-[101rem] h-auto" src={bote} alt="" />
                    </div>
                </div>
            </div>

            <div className="w-auto h-full pb-10 px-10 sm:px-10 md:px-20 lg:px-40">

                <div className="h-12 w-auto">
                    <h1 className="text-2xl font-semibold">Linea de tiempo</h1>
                </div>

                <div className="h-auto w-auto flex flex-col gap-y-6">
                    {
                        lineadetiempodatos.map(props => (
                            <Linea_de_tiempo
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
                <div className="flex h-full bg-center relative bg-fixed py-8" style={{ backgroundImage: `url(${white_bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="h-auto w-full px-10 sm:px-10 md:px-20 lg:px-40">

                        <div className="pt-12 pb-12 text-center">
                            <h1 className="text-6xl text-black font-bold">Quienes Somos</h1>
                        </div>

                        <div className="lg:h-64 h-auto w-full flex lg:flex-row flex-col sm:items-center items-center lg:justify-end md:justify-end sm:justify-center justify-center">
                            <div className="pt-6">
                                <img className="h-[14rem] " src={mision} alt="" />
                            </div>
                            <div className="h-full w-full lg:w-[26rem] xl:lg:w-[26rem] flex flex-col bg-white shadow-md rounded-sm p-4">
                                <h2 className="text-2xl">
                                    Misión
                                </h2>
                                <p className="pt-4">
                                    <b>Integrar</b> junto a socios responsables, de manera eficiente la cadena de suministro tanto de manera local como regional, en un ambiente de trabajo proactivo y ameno creando oportunidades de desarrollo constante a nuestros colaboradores.
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 lg:h-64 h-auto w-full flex lg:flex-row flex-col sm:items-center items-center lg:justify-start md:justify-start sm:justify-center justify-center">
                            <div className="h-full w-full lg:w-[26rem] xl:lg:w-[26rem] flex flex-col bg-white shadow-md rounded-sm p-4" >
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
                            <div className="h-full w-full lg:w-[26rem] xl:lg:w-[26rem] flex flex-col bg-white shadow-md rounded-sm p-4">
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

            <div className="h-full w-auto pt-12 px-10 sm:px-10 md:px-20 lg:px-40">
                <div className="">
                    <h1 className="text-4xl">¿Por qué elegirnos?</h1>
                </div>
                <div className="w-full h-auto flex lg:flex-row md:flex-col flex-col justify-center gap-x-24 py-24 md:gap-y-12 gap-y-12 md:items-center items-center">
                    <div className="h-44 w-44 flex flex-col justify-center items-center bg-white shadow-md rounded-sm" data-aos="fade-down" >
                        <img className="h-24 w-24" src={confiable} alt="" />
                        <p>Confiabilidad</p>
                    </div>
                    <div className="h-44 w-44 flex flex-col justify-center items-center bg-white shadow-md rounded-sm" data-aos="fade-down" data-aos-delay="200">
                        <img className="h-24 w-24" src={innovacion} alt="" />
                        <p>Innovación</p>
                    </div>
                    <div className="h-44 w-44 flex flex-col justify-center items-center bg-white shadow-md rounded-sm" data-aos="fade-down" data-aos-delay="300">
                        <img className="h-24 w-24" src={flexible} alt="" />
                        <p>Flexibilidad</p>
                    </div>
                    <div className="h-44 w-44 flex flex-col justify-center items-center bg-white shadow-md rounded-sm" data-aos="fade-down" data-aos-delay="400">
                        <img className="h-24 w-24" src={tecnologia} alt="" />
                        <p>Tecnología</p>
                    </div>
                </div>
            </div>
        </div>
    )
}