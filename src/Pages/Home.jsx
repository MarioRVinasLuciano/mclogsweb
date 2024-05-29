import React, { useEffect } from "react";

import "../Slidercss/slider.css"

//Datos
import serviciosdatos from "../Datos/serviciosdatos";

//Componentes
import Nuestros_servicios from "../Components/Nuestros_servicios_card";

//Imagenes
import contenedores_cielo from "../Images/Homepageimgs/Somos/Contenedores_cielo.jpg";
import bgimage_2 from "../Images/Homepageimgs/Background/Bg_image.jpg";
import figibox_img from "../Images/Homepageimgs/Somos/compañias/figibox-logo.svg";
import consilia_img from "../Images/Homepageimgs/Somos/compañias/mainConcilia_logo.png";
import Somos_logistica_img2 from "../Images/Homepageimgs/Somos/Descripcion/Logistica.webp";
import Oea_certificacion from "../Images/Homepageimgs/certificaciones/OEARD.webp";
import Basc_Certificacion from "../Images/Homepageimgs/certificaciones/Basc_certificacion.webp"
import high_performance from "../Images/Logos/high-performace.png";
import asodec from "../Images/Homepageimgs/Miembros/Asodec.jpeg";
import adaa from "../Images/Homepageimgs/Miembros/Adaa.jpeg";
import adacam from "../Images/Homepageimgs/Miembros/adacam.png";


//Slider imagenes
import Slider_1 from "../Images/Homepageimgs/Slider_1.webp";
import Slider_2 from "../Images/Homepageimgs/Slider_2.webp";
import Slider_3 from "../Images/Homepageimgs/Slider_3.jpg";
import Slider_6 from "../Images/Homepageimgs/Slider_6.jpg";
import Slider_7 from "../Images/Homepageimgs/Slider_7.jpg";


//Animacion
import 'animate.css';
import 'animate.css/animate.min.css';
import Aos from "aos";
import 'aos/dist/aos.css';

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


import App_Mclogs from "../Components/App_Mclogs_descarga";




export default function Homepage() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);


    const ServiceCard = ({ dataAos, delay, className, imgSrc, title, description, link }) => (
        <div data-aos={dataAos} data-aos-delay={delay} className="flex flex-col bg-white h-auto lg:h-full md:h-5/6 w-full p-6 shadow-lg rounded-sm text-center items-center">
            <img className={className} src={imgSrc} alt={title} />
            <hr className="w-full" />
            <h1 className="text-md lg:text-xl font-semibold pt-4">{title}</h1>
            <p className="pt-4 overflow-y-auto text-sm sm:text-lg md:text-xl lg:text-lg xl:text-xl">{description}</p>
            <div className="mt-auto">
                <button className="h-10 w-auto bg-bluemunsell hover:bg-cyan-600 my-4 rounded-md">
                    <a className="p-4 text-white" href={link}>Saber Más</a>
                </button>
            </div>
        </div>
    );



    return (
        <div className=" w-full h-auto font-Encode-Sans">

            {/* Primera seccion  */}
            <div className="relative  h-screen w-full">
                <video className="absolute inset-0 w-full h-full object-cover brightness-50" src={Video} loop autoPlay muted controls={false} onContextMenu={(e) => e.preventDefault()}
  playsInline ></video>
                <div className="flex w-full h-full text-white px-10 sm:px-10 md:px-20 lg:px-40 items-center">
                    <div className="h-72 w-auto text-wrap">
                        <h1 className="w-auto text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl py-4" data-aos="fade-down" data-aos-duration="500">MC LOGISTICS</h1>
                        <p className="w-2/3 text-4xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl" data-aos="fade-up" data-aos-duration="400" data-aos-delay="600">CENTRADOS EN EL CLIENTE</p>
                        <p className="text-lg font-semibold py-4" data-aos="fade-up" data-aos-duration="500" data-aos-delay="1300">Impulsados por la DATA</p>
                    </div>
                </div>
            </div>

            {/* Seccion de Somos */}
            <div className="w-full lg:h-screen h-auto bg-white flex px-10 sm:px-10 md:px-20 lg:px-40">
                <div className="flex h-full w-full items-center justify-center py-8">
                    <div className="flex flex-col lg:flex-row items-center justify-center h-2/3 shadow-md rounded-md bg-SoftGrey " data-aos="fade-up">

                        <div className="h-auto lg:w-[50%] w-auto p-8">
                            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl" data-aos="fade-up" data-aos-delay="50">Somos</h1>
                            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-7xl font-semibold pt-4" data-aos="fade-up" data-aos-delay="60">MC Logistics</h1>
                            <p className="py-4 font-thin text-md sm:text-xl md:text-xl lg:text-xl" data-aos="fade-up" data-aos-delay="70">Tu socio estratégico en logística a nivel global. Desde el origen hasta el destino final, maximizando la rentabilidad de nuestros clientes y socios con una gestión eficiente de mercancías, energía e información.</p>
                            <hr className="h-0.5 bg-slate-50" data-aos="fade-up" data-aos-delay="80" />
                            <p className="py-4 text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl" data-aos="fade-up" data-aos-delay="85">Nacemos en el 2005 de la inquietud de crear valor en el proceso de gestión de la cadena de suministro, viendo oportunidades en el sector logístico de mejor flujo de información.</p>
                            <button className="h-12 w-32 rounded-md bg-DarkBlue hover:bg-blue" data-aos="fade-down" data-aos-delay="0">
                                <a className="text-white" href="/#/nosotros" >Leer más</a>
                            </button>
                        </div>

                        <div className="h-full lg:w-[50%] w-full flex lg:justify-end justify-center">
                            <img className="h-full w-[100%] object-cover rounded-r-md " src={contenedores_cielo} alt="Logistics" />
                        </div>
                    </div>
                </div>
            </div>



            {/* Nuestros Servicios */}
            <div className="w-full h-auto pb-16">
                <div className="flex w-full h-24 items-center justify-center px-4 sm:px-10 md:px-20 lg:px-40">
                    <h3 className="text-4xl font-bold">Nuestros Servicios Logísticos</h3>
                </div>
                <div className="flex justify-center h-auto w-full pt-8 px-4 sm:px-10 md:px-20 lg:px-40">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-y-12 gap-x-6 justify-items-center w-full">
                        {serviciosdatos.map((servicio) => (
                            <Nuestros_servicios
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
           <App_Mclogs></App_Mclogs>




            {/* Seccion de compañias */}
            <div className="w-full h-auto">
                <div className="flex bg-center bg-fixed w-full h-full py-24" style={{ backgroundImage: `url(${bgimage_2})`, backgroundSize: 'cover' }}>
                    <div className="flex flex-col w-full h-full items-center justify-center px-10 sm:px-10 md:px-20 lg:px-40">
                        <div className="pb-10">
                            <h1 className="text-6xl font-semibold text-white">
                                Nuestras Divisiones
                            </h1>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-20 gap-x-10 gap-y-8  w-full h-full py-10  items-center">
                            <ServiceCard
                                dataAos={"fade-down"}
                                delay={""}
                                className={" h-24 w-32"}
                                imgSrc={figibox_img}
                                title="FigiBox"
                                description="División de correo expreso con servicio a domicilio y casilleros en Miami, FL y Guangzhou, China en adición a nuestros servicios desde el proveedor a sus manos."
                                link="https://figibox.do/"
                            />
                            <ServiceCard
                                dataAos={"fade-down"}
                                delay={"200"}
                                className={"pb-4 h-24 w-32 "}
                                imgSrc={consilia_img}
                                title="Consilia"
                                description="Bajo el régimen de deposito logístico, nos encargamos del manejo de mercancías dentro de zona primaria para el país y la región. Con sede en el puerto de Caucedo, garantizamos conexiones a mas 20 islas en el caribe; así como centro, norte y sur américa."
                                link="https://www.consilialogistics.com/"
                            />
                            <ServiceCard
                                dataAos={"fade-down"}
                                delay={"400"}
                                className={"p-4 h-24 w-32 "}
                                imgSrc={high_performance}
                                title="High Performance Cl"
                                description="Con sede en Miami, Fl, y 100% parte de nuestra empresa, es el contacto con sus proveedores y clientes en los Estados Unidos."
                                link="https://figibox.do/"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-auto w-full pt-8">
                <div className="flex flex-col h-full justify-center px-4 sm:px-10 md:px-20 lg:px-40">



                    <div className="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col h-auto w-full lg:h-full items-end">
                        <div className="flex flex-col pt-8 lg:w-1/2 w-full">
                            <div className="flex w-full h-auto">
                                <div className="h-auto w-auto py-8">
                                    <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-6xl font-medium">¿Por qué elegirnos?</h1>
                                    <hr className="h-0.5 bg-slate-50" />
                                </div>
                            </div>
                            <div className="wrap w-auto">
                                <p className="font-light md:text-xl lg:text-2xl xl:text-2xl">Integramos los actores de la cadena de suministro mediante el flujo constante de información rápida y certera para asegurar que nuestros clientes tomen, siempre, la decisión correcta.
                                    Porque lo que somos lo debemos a nuestros clientes, encontrarán siempre en nosotros el apoyo deseado. Siempre prestos a servir.</p>

                            </div>
                            <div className=" w-auto h-auto flex flex-row justify-center gap-x-8 py-4 lg:py-10 md:gap-y-12 gap-y-12 md:items-center items-center">
                                <div className="h-20 w-20 lg:h-28 lg:w-32 flex flex-col justify-center items-center bg-white shadow-md rounded-sm" data-aos="fade-down" >
                                    <img className="h-8 w-8 lg:h-12 lg:w-12" src={confiable} alt="" />
                                    <p className="text-xs">Confiabilidad</p>
                                </div>
                                <div className="h-20 w-20 lg:h-28 lg:w-32 flex flex-col justify-center items-center bg-white shadow-md rounded-sm" data-aos="fade-down" data-aos-delay="200">
                                    <img className="h-8 w-8 lg:h-12 lg:w-12" src={innovacion} alt="" />
                                    <p className="text-xs">Innovación</p>
                                </div>
                                <div className="h-20 w-20 lg:h-28 lg:w-32 flex flex-col justify-center items-center bg-white shadow-md rounded-sm" data-aos="fade-down" data-aos-delay="300">
                                    <img className="h-8 w-8 lg:h-12 lg:w-12" src={flexible} alt="" />
                                    <p className="text-xs">Flexibilidad</p>
                                </div>
                                <div className="h-20 w-20 lg:h-28 lg:w-32 flex flex-col justify-center items-center bg-white shadow-md rounded-sm" data-aos="fade-down" data-aos-delay="400">
                                    <img className="h-8 w-8 lg:h-12 lg:w-12" src={tecnologia} alt="" />
                                    <p className="text-xs">Tecnología</p>
                                </div>
                            </div>

                        </div>
                        <div className="flex flex-col lg:w-1/2 w-full h-full py-16">
                            <div className="h-full w-full flex flex-col">
                                <Swiper
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    effect={'creative'}
                                    creativeEffect={{
                                        prev: {
                                            shadow: true,
                                            translate: [0, 0, -400],
                                        },
                                        next: {
                                            translate: ['100%', 0, 0],
                                        },
                                    }}
                                    style={{ width: '100%', maxWidth: '480px', height: '100%' }}
                                    autoplay={{
                                        delay: 3500,
                                        disableOnInteraction: false,
                                    }}
                                    modules={[Autoplay, EffectCreative]}
                                    className="mySwiper"

                                >
                                    <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                        <img src={Slider_6} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </SwiperSlide>
                                    <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                        <img src={Slider_3} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </SwiperSlide>
                                    <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                        <img src={Slider_7} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>

                    {/* <hr className="h-0.2 bg-slate-100 w-full" /> */}
                    <div className="flex flex-col lg:flex-row xl:flex-row h-full justify-between py-24">
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
                        <div className="flex flex-col text-start lg:text-end xl:text-end">
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
