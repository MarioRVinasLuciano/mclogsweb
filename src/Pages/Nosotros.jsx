import React, { useEffect } from "react";

//Animacion de AOS
import Aos from "aos";
import 'aos/dist/aos.css';


import Linea_de_tiempo from "../Components/Linea de tiempo";
//importo datos para la linea de tiempos
import lineadetiempodatos from "../Datos/Lineadetiempo/lineadetiempodatos";


//Imagenes importadas localmente
import bote from "../Images/Nosotros/Bote_grande.jpg";
import bote_en_puerto from "../Images/Nosotros/Bote_en_puerto.jpg";
import contenedores from "../Images/Nosotros/Contenedores.jpg";
import mision from "../Images/Nosotros/Mision.jpg";
import vision from "../Images/Nosotros/Vision.jpg";
import valores from "../Images/Nosotros/Valores.jpg";

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
        <div className="h-auto w-full font-quicksand">


            <div className="w-auto pb-10" style={{ height: "600px" }}>
                <div className="h-full w-auto flex lg:flex-row flex-col relative">
                    <div className="absolute lg:w-1/2 p-12 z-0" data-aos="zoom-out-down" data-aos-delay="200">
                        <div className="pb-10 ml-44">
                            <h1 className="text-4xl font-semibold">Nuestra Historia</h1>
                        </div>
                        <div className="h-80 w-[30rem] bg-white shadow-md text-center p-10 ml-44 z-10">
                            <p className="text-2xl">Nacemos en el 2005 de la inquietud de crear valor en el proceso de gestión de la cadena de suministro, viendo oportunidades en el sector logístico de mejor flujo de información.</p>
                        </div>
                    </div>
                    <div class="absolute lg:w-1/2 h-auto  z-[-10] right-24 top-0" data-aos="fade-left" >
                        <img className="w-[101rem] h-[35rem]" src={bote} alt="" />
                    </div>
                </div>
            </div>

            <div class="w-auto h-full pb-10">

                <div className="h-12 w-auto pl-24">
                    <h1 className="text-2xl font-semibold">Linea de tiempo</h1>
                </div>

                <div className="h-auto w-auto px-24 flex flex-col gap-y-6">
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

            <div className="h-56 w-full">
                <div className="flex h-full bg-center relative bg-fixed" style={{ backgroundImage: `url(${contenedores})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                </div>
            </div>

            <div className="h-auto w-full">
                
                <div className="pt-12 pb-12">
                    <h1 className="text-4xl pl-24">Quienes Somos</h1>
                </div>

                <div className="h-64 w-full flex flex-row px-24 lg:justify-end md:justify-end sm:justify-center justify-center">
                    <div className="pt-6" data-aos="fade-left">
                        <img className="h-[14rem] " src={mision} alt="" />
                    </div>
                    <div className="h-full w-[26rem] flex flex-col bg-white shadow-md rounded-sm p-4" data-aos="fade-left">
                        <h2 className="text-2xl">
                            Misión
                        </h2>
                        <p className="pt-4">
                        <b>Integrar</b> junto a socios responsables, de manera eficiente la cadena de suministro tanto de manera local como regional, en un ambiente de trabajo proactivo y ameno creando oportunidades de desarrollo constante a nuestros colaboradores.
                        </p>
                    </div>
                </div>

                <div className="mt-12 h-64 w-full flex flex-row px-24 lg:justify-start md:justify-start sm:justify-center justify-center">
                    <div className="h-full w-[26rem] flex flex-col bg-white shadow-md rounded-sm p-4" data-aos="fade-right">
                        <h2 className="text-2xl">
                            Visión
                        </h2>
                        <p className="pt-4">
                        <b>Ser líder</b> en la integración de los servicios logísticos, mediante la innovación, agilidad, honestidad y compromiso con nuestros clientes y colaboradores, generando rentabilidad a nuestros clientes, socios y colaboradores a través de la eficiencia.
                        </p>
                    </div>
                    <div className="pt-6" data-aos="fade-right">
                        <img className="h-[14rem] " src={vision} alt="" />
                    </div>
                </div>

                <div className="mt-12 h-64 w-full flex flex-row px-24 lg:justify-end md:justify-end sm:justify-center justify-center">
                    <div className="pt-6" data-aos="fade-left">
                        <img className="h-[14rem] " src={valores} alt="" />
                    </div>
                    <div className="h-full w-[26rem] flex flex-col bg-white shadow-md rounded-sm p-4" data-aos="fade-left">
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

            <div className="h-56 w-full mt-12">
                <div className="flex h-full bg-center relative bg-fixed" style={{ backgroundImage: `url(${bote_en_puerto})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                </div>
            </div>

            <div className="h-full w-auto pt-12">
                    <div className="pl-24">
                        <h1 className="text-4xl">Por qué elegirnos</h1>
                    </div>
                    <div className="px-24 w-full h-auto flex lg:flex-row md:flex-col flex-col justify-center gap-x-24 py-24">
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


            <div className="bg-white">
                    <hr className=" h-px my-8 bg-gray-200 border-0" />
                </div>
        </div>
    )
}