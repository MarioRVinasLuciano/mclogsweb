import React, { useEffect, useState } from "react";

import "../Slidercss/slider.css"

//Datos
import serviciosdatos from "../Datos/serviciosdatos";

//Componentes
import NuestrosServicios from "../Components/Nuestros_servicios_card";

//Imagenes
import white from "../Images/Homepageimgs/Background/white_waves.jpg"
import contenedores_cielo from "../Images/Homepageimgs/bote_vertical.jpg";
import figibox_img from "../Images/Homepageimgs/Somos/compañias/figibox-logo.svg";
import consilia_img from "../Images/Homepageimgs/Somos/compañias/mainConcilia_logo.png";
import Oea_certificacion from "../Images/Homepageimgs/certificaciones/OEARD.webp";
import Basc_Certificacion from "../Images/Homepageimgs/certificaciones/Basc_certificacion.webp"
import high_performance from "../Images/Logos/high-performace.png";
import asodec from "../Images/Homepageimgs/Miembros/Asodec.jpeg";
import adaa from "../Images/Homepageimgs/Miembros/Adaa.jpeg";
import adacam from "../Images/Homepageimgs/Miembros/adacam.png";


//Slider imagenes
import slider_1 from "../Images/Homepageimgs/slider1.jpg"
import slider_2 from "../Images/Homepageimgs/slider2.jpg"
import slider_3 from "../Images/Homepageimgs/slider3.jpg"
import slider_4 from "../Images/Homepageimgs/slider4.jpg"


//Animacion
import 'swiper/swiper-bundle.css';
import 'animate.css';
import 'animate.css/animate.min.css';
import Aos from "aos";
import 'aos/dist/aos.css';
import 'swiper/css/effect-creative';

//Videos
import Video from "../Videos/Video1.mp4";


//Swiper 
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

//Iconos
import confiable from "../Icons/Confiable.png";
import innovacion from "../Icons/Innovacion.png";
import flexible from "../Icons/Flexible.png";
import tecnologia from "../Icons/Tecnologia.png";


import AppMclogs from "../Components/App_Mclogs_descarga";


const ServiceCard = ({ delay, className, imgSrc, title, description, link }) => (
    <div data-aos="fade-down" data-aos-delay={delay} className="flex flex-col bg-white h-[26rem] md:h-[36rem] w-auto lg:w-[24rem] xl:w-[24rem] shadow-lg rounded-md text-center overflow-hidden">
        <div className="w-full h-1/3 bg-clip-border flex justify-center items-center" style={{ backgroundImage: `url(${white})`, backgroundSize: 'cover' }}>
            <img className={className} src={imgSrc} alt={title} />
        </div>
        <p className="p-8 overflow-y-auto text-sm sm:text-lg lg:text-md font-regular text-slate-500 flex-grow">{description}</p>
        <div className="mt-auto">
            <button className="h-10 w-auto bg-bluemunsell hover:bg-cyan-600 my-8 rounded-md">
                <a className="p-4 text-white" href={link}>Saber Más</a>
            </button>
        </div>
    </div>

);



export default function Homepage() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false);

    const texts = [
        {
            title: 'MC LOGISTICS',
            subtitle: 'CENTRADOS EN EL CLIENTE',
            description: 'Impulsados por la DATA',
        },
        {
            title: '',
            subtitle: 'ENFOCADOS EN IDENTIFICAR OPORTUNIDADES',
            description: 'Para aumentar la rentabilidad de nuestros clientes a través de la EFICIENCIA',
        },
    ]



    useEffect(() => {
        const interval = setInterval(() => {
            setFade(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
                setFade(false);
            }, 500); // Duration of the fade-out animation
        }, 6000);

        return () => clearInterval(interval); // Clear interval on component unmount
    }, [texts.length]);

    const currentText = texts[currentIndex];





    return (
        <div className=" w-full h-auto font-Encode-Sans">

            {/* Primera seccion  */}
            <div className="relative  h-screen w-full">
                <video className="absolute inset-0 w-full h-full object-cover brightness-50" src={Video} loop autoPlay muted controls={false} onContextMenu={(e) => e.preventDefault()}
                    playsInline ></video>
                <div className="relative flex w-full h-full text-white px-10 sm:px-10 md:px-20 lg:px-40 items-center">
                    <div className={`h-72 w-auto text-wrap ${fade ? 'fade-out' : 'fade-in'}`}>
                        <p className="w-3/4 text-4xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl" data-aos="fade-up" data-aos-duration="400" data-aos-delay="600">{currentText.subtitle}</p>
                        <p className="text-lg font-semibold py-4" data-aos="fade-up" data-aos-duration="500" data-aos-delay="1300">{currentText.description}</p>
                    </div>
                </div>
            </div>

            {/* Seccion de Somos */}
            <div className="w-full lg:h-screen h-auto bg-white flex px-10 sm:px-10 md:px-20 lg:px-40">
                <div className="flex h-full w-full items-center justify-center py-8">
                    <div className="flex flex-col md:flex-row items-center justify-center shadow-md rounded-md bg-SoftGrey max-w-[100rem] h-2/3" data-aos="fade-up">

                        <div className="h-full flex flex-col items-start justify-center w-auto md:w-1/2 py-4 px-8">
                            <h1 className="block text-2xl sm:text-4xl md:text-5xl lg:text-3xl xl:text-5xl" data-aos="fade-up" data-aos-delay="50">Somos</h1>
                            <h1 className="block text-3xl sm:text-5xl md:text-4xl lg:text-4xl xl:text-6xl font-semibold pt-4" data-aos="fade-up" data-aos-delay="60">MC Logistics</h1>
                            <p className="block py-4 font-thin text-md sm:text-xl md:text-lg lg:text-md xl:text-lg" data-aos="fade-up" data-aos-delay="70">Tu socio estratégico en logística a nivel global. Desde el origen hasta el destino final, maximizando la rentabilidad de nuestros clientes y socios con una gestión eficiente de mercancías, energía e información.</p>
                            <hr className="h-0.5 lg:hidden xl:block hidden sm:hidden md:hidden bg-slate-50" data-aos="fade-up" data-aos-delay="80" />
                            <p className="lg:hidden xl:block hidden sm:hidden md:hidden py-4 text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl" data-aos="fade-up" data-aos-delay="85">Nacemos en el 2005 de la inquietud de crear valor en el proceso de gestión de la cadena de suministro, viendo oportunidades en el sector logístico de mejor flujo de información.</p>
                            <button className="block h-12 w-32 rounded-md bg-DarkBlue hover:bg-blue" data-aos="fade-down" data-aos-delay="0">
                                <a className="text-white" href="/#/nosotros">Leer más</a>
                            </button>
                        </div>

                        <div className="h-96 md:h-full m-0 w-full md:w-1/2 shrink-0 overflow-hidden bg-clip-border">
                            <img className="h-full w-full object-cover rounded-md " src={contenedores_cielo} alt="Logistics" />
                        </div>
                    </div>
                </div>
            </div>





            {/* Nuestros Servicios */}
            <div className="w-full h-auto xl:h-screen pb-16">
                <div className="flex w-full h-24 items-center justify-center px-4 sm:px-10 md:px-20 lg:px-40 text-center">
                    <h3 className="text-3xl sm:text-3xl md:text-5xl font-bold" data-aos="fade-down">Nuestros servicios</h3>
                </div>
                <div className="flex justify-center h-auto w-full pt-8 px-4 sm:px-10 md:px-20 lg:px-40">
                    <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2  gap-y-12 gap-x-6 justify-items-center w-full">
                        {serviciosdatos.map((servicio) => (
                            <NuestrosServicios
                                key={servicio.id}
                                espacio={servicio.espacio}
                                imagen={servicio.imagen}
                                claseImagen={servicio.claseImagen}
                                titulo={servicio.titulo}
                                claselink={servicio.claselink}
                                link={servicio.link}
                            />
                        ))}

                    </div>
                </div>
            </div>

            {/* Seccion de App */}
            <AppMclogs></AppMclogs>




            {/* Seccion de compañias */}
            <div className="w-full h-auto bg-gray-200">
                <div className="flex bg-center bg-fixed w-full h-full pb-2 pt-12 md:py-20" style={{ backgroundImage: `url(${''})`, backgroundSize: 'cover' }}>
                    <div className="flex flex-col w-full h-full items-center justify-center px-10 sm:px-10 md:px-20 lg:px-40">
                        <div className="pb-0 md:pb-10 text-center">
                            <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold text-black">
                                Nuestras Divisiones
                            </h1>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-32 gap-x-10 gap-y-8  w-full h-full py-10 justify-items-center">
                            <ServiceCard
                                delay={""}
                                className={" h-32 w-36 z-10"}
                                imgSrc={figibox_img}
                                title="FIGIBOX"
                                description="División de correo expreso con servicio a domicilio y casilleros en Miami, FL y Guangzhou, China en adición a nuestros servicios desde el proveedor a sus manos."
                                link="https://figibox.do/"
                            />
                            <ServiceCard
                                delay={"200"}
                                className={"pb-6 h-32 w-40 z-10"}
                                imgSrc={consilia_img}
                                title="CONSILIA"
                                description="Bajo el régimen de deposito logístico, nos encargamos del manejo de mercancías dentro de zona primaria para el país y la región. Con sede en el puerto de Caucedo, garantizamos conexiones a mas 20 islas en el caribe; así como centro, norte y sur américa."
                                link="https://www.consilialogistics.com/"
                            />
                            <ServiceCard
                                delay={"400"}
                                className={" h-56 w-56 z-10"}
                                imgSrc={high_performance}
                                title="HIGH PERFORMANCE CL"
                                description="Con sede en Miami, Fl, y 100% parte de nuestra empresa, es el contacto con sus proveedores y clientes en los Estados Unidos."
                                link="https://figibox.do/"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-auto w-full pt-8">
                <div className="flex flex-col h-full justify-center px-10 sm:px-10 md:px-20 lg:px-40">

                    <div className="flex w-full h-auto justify-center lg:justify-start">
                        <div className="h-auto xl:w-auto w-full py-8 text-center">
                            <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold">¿Por qué elegirnos?</h1>
                        </div>
                    </div>

                    <div className="flex 2xl:flex-row xl:flex-row lg:flex-col md:flex-col sm:flex-col flex-col h-auto w-full lg:h-full">
                        <div className="flex flex-col xl:w-1/2 w-full">

                            <div className="wrap h-full w-auto text-center xl:text-start">
                                <p className="font-light md:text-xl lg:text-2xl xl:text-2xl leading-loose text-justify">
                                    Integramos a todos los actores de la cadena de suministro mediante un flujo constante de información rápida y certera, asegurando que nuestros clientes siempre tomen la decisión correcta. Nuestra existencia y éxito se deben a la lealtad de nuestros clientes, por lo que nos comprometemos a ser su apoyo incondicional, superando expectativas y estando siempre disponibles para brindar soluciones efectivas. Con un equipo altamente capacitado y dedicado, ofrecemos un servicio de calidad excepcional y atención personalizada, reafirmando nuestro compromiso de ser un aliado confiable y dispuesto a adaptarse a sus necesidades.
                                </p>
                            </div>

                            <div className=" w-auto h-auto grid grid-cols-2 md:grid-cols-4 py-12 gap-y-12 justify-items-center">
                                <div className="h-20 w-20 lg:h-28 lg:w-32 flex flex-col justify-center items-center bg-slate-50 shadow-md rounded-sm" data-aos="fade-down" >
                                    <img className="h-8 w-8 lg:h-12 lg:w-12" src={confiable} alt="" />
                                    <p className="text-xs">Confiabilidad</p>
                                </div>
                                <div className="h-20 w-20 lg:h-28 lg:w-32 flex flex-col justify-center items-center bg-slate-50 shadow-md rounded-sm" data-aos="fade-down" data-aos-delay="200">
                                    <img className="h-8 w-8 lg:h-12 lg:w-12" src={innovacion} alt="" />
                                    <p className="text-xs">Innovación</p>
                                </div>
                                <div className="h-20 w-20 lg:h-28 lg:w-32 flex flex-col justify-center items-center bg-slate-50 shadow-md rounded-sm" data-aos="fade-down" data-aos-delay="300">
                                    <img className="h-8 w-8 lg:h-12 lg:w-12" src={flexible} alt="" />
                                    <p className="text-xs">Flexibilidad</p>
                                </div>
                                <div className="h-20 w-20 lg:h-28 lg:w-32 flex flex-col justify-center items-center bg-slate-50 shadow-md rounded-sm" data-aos="fade-down" data-aos-delay="400">
                                    <img className="h-8 w-8 lg:h-12 lg:w-12" src={tecnologia} alt="" />
                                    <p className="text-xs">Tecnología</p>
                                </div>
                            </div>

                        </div>
                        <div className="flex flex-col h-full w-full xl:w-1/2 pl-0 md:pl-8 items-center justify-center">
                            <Swiper
                                effect={'creative'}
                                creativeEffect={{
                                    prev: {
                                      origin: 'left center',
                                      translate: ['-5%', 0, -200],
                                      rotate: [0, 100, 0],
                                    },
                                    next: {
                                      origin: 'right center',
                                      translate: ['5%', 0, -200],
                                      rotate: [0, -100, 0],
                                    },
                                  }}
                                autoplay={{
                                    delay: 3500,
                                    disableOnInteraction: false,
                                }}
                                modules={[Autoplay, EffectCreative]}
                                className="mySwiper"
                                style={{ width: '100%', height: '100%' }}
                            >
                                <SwiperSlide>
                                    <img className="rounded-md" src={slider_1} alt="Slide 1" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className="rounded-md" src={slider_2} alt="Slide 2" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className="rounded-md" src={slider_3} alt="Slide 3" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className="rounded-md" src={slider_4} alt="Slide 4" />
                                </SwiperSlide>
                            </Swiper>
                        </div>


                    </div>

                    {/* <hr className="h-0.2 bg-slate-100 w-full" /> */}
                    <div className="flex flex-col lg:flex-col xl:flex-row h-full justify-between pb-24 pt-12">
                        <div className="flex flex-col">
                            <div className="w-full text-start">
                                <h1 className="text-sm sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl font-extrabold text-DarkBlue">Nuestras Certificaciones</h1>
                            </div>
                            <div className="flex flex-row items-center gap-x-8">
                                <div>
                                    <img className="h-auto w-32 md:h-32 lg:h-32 xl:h-32 md:w-36 lg:w-36 xl:w-36" src={Basc_Certificacion} alt="" />
                                </div>
                                <div>
                                    <img className="h-auto w-32 md:h-20 lg:h-16 xl:h-16 md:w-36 lg:w-36 xl:w-36" src={Oea_certificacion} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col text-start xl:text-end">
                            <div className="w-full">
                                <h1 className="text-sm sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl font-extrabold text-DarkBlue">Miembros</h1>
                            </div>
                            <div className="flex flex-row gap-x-8 items-center">
                                <div>
                                    <img className="h-auto w-32 md:h-32 lg:h-32 xl:h-32 md:w-36 lg:w-36 xl:w-36" src={asodec} alt="" />
                                </div>
                                <div>
                                    <img className="h-auto w-32 md:h-32 lg:h-32 xl:h-32 md:w-36 lg:w-36 xl:w-36" src={adaa} alt="" />
                                </div>
                                <div>
                                    <img className="h-auto w-32 md:h-32 lg:h-32 xl:h-32 md:w-36 lg:w-36 xl:w-36" src={adacam} alt="" />
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    );
}
