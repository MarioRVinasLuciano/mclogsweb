import React, { useEffect, useRef } from "react";

import "/Users/admin/Documents/GitHub/mclogsweb/src/slider.css"

//Datos
import serviciosdatos from "../Datos/serviciosdatos";

//Componentes
import Nuestros_servicios from "../Components/Nuestros_servicios_card";

//Imagenes
import bgimage_2 from "../Images/Homepageimgs/Background/bgimg_2.jpg";
import figibox_img from "../Images/Homepageimgs/Somos/compañias/figibox-logo.svg";
import consilia_img from "../Images/Homepageimgs/Somos/compañias/mainConcilia_logo.png";
import Somos_logistica_img2 from "../Images/Homepageimgs/Somos/Descripcion/Logistica.jpg";
import high_performance from "../Images/Logos/high-performace.png";
import Slider_1 from "../Images/Homepageimgs/Slider_1.jpg";
import Slider_2 from "../Images/Homepageimgs/Slider_2.jpg";
import Slider_4 from "../Images/Homepageimgs/Slider_4.jpg";
import Slider_5 from "../Images/Homepageimgs/Slider_5.jpg";
import Slider_6 from "../Images/Homepageimgs/Slider_6.jpg";

//Animacion
import 'animate.css';
import 'animate.css/animate.min.css';
import Aos from "aos";
import 'aos/dist/aos.css';

//Swiper 
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative, Pagination, EffectFade } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

//Importacion de video
import Video from "../Videos/Video.mp4";


//Iconos
import confiable from "../Icons/Confiable.png";
import innovacion from "../Icons/Innovacion.png";
import flexible from "../Icons/Flexible.png";
import tecnologia from "../Icons/Tecnologia.png";




export default function Homepage() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);


    const ServiceCard = ({ dataAos, delay, className, imgSrc, title, description, link }) => (
        <div data-aos={dataAos} data-aos-delay={delay} className="flex flex-col bg-white h-auto lg:h-4/5 md:h-5/6 w-full p-6 shadow-lg rounded-sm text-center items-center">
            <img className={className} src={imgSrc} alt={title} />
            <hr className="w-full" />
            <h1 className="text-md lg:text-xl font-semibold pt-4">{title}</h1>
            <p className="pt-4 overflow-y-auto text-sm sm:text-lg md:text-xl lg:text-lg xl:text-xl">{description}</p>
            <div className="mt-auto">
                <button className="h-10 w-auto bg-cyan-500 hover:bg-cyan-600 my-4 rounded-md">
                    <a className="p-4 text-white" href={link}>Saber Más</a>
                </button>
            </div>
        </div>
    );



    return (
        <div className=" w-full h-auto font-Encode-Sans">

            {/* Primera seccion  */}
            <div className="relative w-full h-screen">
            <>
            <Swiper
            style={{ width: '100%', height: '100%' }}
            pagination={{
                dynamicBullets: true,
            }}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
            modules={[Pagination, EffectFade, Autoplay]}
            effect="fade"
            className="mySwiper"
          
        >
        <SwiperSlide>
        <div className="flex h-full bg-center relative bg-fixed" style={{ backgroundImage: `url(${Slider_1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="px-10 sm:px-10 md:px-20 lg:px-40 flex items-center ">
                <div className="text-white text-container">
                    <h1 className="w-auto lg:text-4xl sm:text-2xl text-2xl py-4 ">MC LOGISTICS</h1>
                    <p className="w-auto lg:text-8xl sm:text-6xl text-3xl font-semibold" >CENTRADOS EN EL CLIENTE</p>
                    <p className="text-lg font-semibold py-4" >Impulsados por la DATA</p>
                </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex h-full bg-center relative bg-fixed" style={{ backgroundImage: `url(${Slider_5})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="px-10 sm:px-10 md:px-20 lg:px-40 flex items-center ">
                <div className="text-white text-container">
                    <p className="w-auto lg:text-8xl sm:text-6xl text-3xl font-semibold" >ENFOCADOS EN IDENTIFICAR OPORTUNIDADES</p>
                    <p className="text-lg font-semibold py-4" >Para aumentar la rentabilidad de nuestros clientes a través de la EFICIENCIA</p>
                </div>
            </div>
        </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className="flex h-full bg-center relative bg-fixed" style={{ backgroundImage: `url(${Slider_4})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="px-10 sm:px-10 md:px-20 lg:px-40 flex items-center ">
                <div className="text-white text-container">
                    <p className="w-auto lg:text-8xl sm:text-6xl text-3xl font-semibold" >ENFOCADOS EN IDENTIFICAR OPORTUNIDADES</p>
                    <p className="text-lg font-semibold py-4" >Para aumentar la rentabilidad de nuestros clientes a través de la EFICIENCIA</p>
                </div>
            </div>
        </div>
        </SwiperSlide>
      </Swiper>
    </>
            </div>

            {/* Seccion de Somos */}
            <div className="w-full lg:h-screen h-auto bg-white flex px-10 sm:px-10 md:px-20 lg:px-40">
                <div className="flex flex-col lg:flex-row items-center h-full pt-12 gap-8 pb-12">

                    <div className="h-auto lg:w-[50%] w-auto">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" data-aos="fade-down">Somos</h1>
                        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-6xl font-semibold pt-4" data-aos="fade-up" data-aos-delay="100">MC Logistics</h1>
                        <p className="py-4 font-thin text-md sm:text-xl md:text-xl lg:text-2xl" data-aos="fade-up" data-aos-delay="200">Tu socio estratégico en logística a nivel global. Desde el origen hasta el destino final, maximizando la rentabilidad de nuestros clientes y socios con una gestión eficiente de mercancías, energía e información.</p>
                        <hr className="h-0.5 bg-slate-50" />
                        <p className="py-4 text-sm" data-aos="fade-up" data-aos-delay="300">Nacemos en el 2005 de la inquietud de crear valor en el proceso de gestión de la cadena de suministro, viendo oportunidades en el sector logístico de mejor flujo de información.</p>
                        <button className="h-12 w-32 rounded-sm bg-slate-100 hover:bg-slate-50" data-aos="fade-up" data-aos-delay="400">
                            <a className="text-black" href="/#/nosotros" >Leer más</a>
                        </button>
                    </div>

                    <div className="h-auto lg:w-[50%] w-full lg:pt-16 p-0 flex lg:justify-end justify-center">
                        <img className="h-1/2 w-[80%] object-contain " src={Somos_logistica_img2} alt="Logistics" />
                    </div>
                </div>
            </div>


            {/* Seccion de compañias */}
            <div className="w-full lg:h-screen h-auto">
                <div className="flex bg-center bg-fixed w-full h-full" style={{ backgroundImage: `url(${bgimage_2})`, backgroundSize: 'cover' }}>
                    <div className="flex flex-col w-full h-full items-center justify-center px-10 sm:px-10 md:px-20 lg:px-40">
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



            {/* Nuestros Servicios */}
            <div className="w-full h-auto pt-12">
                <div className="flex w-full h-24 items-center justify-center">
                    <h3 className="text-3xl ">Nuestros Servicios Logísticos</h3>
                </div>
                <div className="flex justify-center h-auto w-full pt-8 px-4 sm:px-10 md:px-20 lg:px-40">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-y-12 gap-x-12 justify-items-center w-full">
                        {serviciosdatos.map((props) => (
                            <Nuestros_servicios
                                key={props.id}
                                {...props}
                            />
                        ))}
                    </div>
                </div>
            </div>
            {/* 
            <div className="h-56 w-full py-10">
                <div className="flex h-full bg-center relative bg-fixed" style={{ backgroundImage: `url(${bgimage_3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                </div>
            </div> */}

            <div className="h-screen w-full pt-8">
                <div className="flex flex-col h-full justify-center px-4 sm:px-10 md:px-20 lg:px-40">



                    <div className="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col h-auto w-full lg:h-full items-center">
                        <div className="flex flex-col pt-8 lg:w-1/2">
                            <div className="flex w-full h-auto">
                                <div className="h-auto w-auto py-8">
                                    <h1 className="text-7xl font-medium">Por qué elegirnos</h1>
                                    <hr className="h-0.5 bg-slate-50" />
                                </div>
                            </div>
                            <p className="font-light text-2xl">Integramos los actores de la cadena de suministro mediante el flujo constante de información rápida y certera para asegurar que nuestros clientes tomen, siempre, la decisión correcta.
                                Porque lo que somos lo debemos a nuestros clientes, encontrarán siempre en nosotros el apoyo deseado. Siempre prestos a servir.</p>

                            <div className="w-full h-auto flex flex-row justify-center gap-x-8 py-10 md:gap-y-12 gap-y-12 md:items-center items-center">
                                <div className="h-28 w-32 flex flex-col justify-center items-center bg-white shadow-md rounded-sm" data-aos="fade-down" >
                                    <img className="h-12 w-12" src={confiable} alt="" />
                                    <p className="text-sm">Confiabilidad</p>
                                </div>
                                <div className="h-28 w-32 flex flex-col justify-center items-center bg-white shadow-md rounded-sm" data-aos="fade-down" data-aos-delay="200">
                                    <img className="h-12 w-12" src={innovacion} alt="" />
                                    <p>Innovación</p>
                                </div>
                                <div className="h-28 w-32 flex flex-col justify-center items-center bg-white shadow-md rounded-sm" data-aos="fade-down" data-aos-delay="300">
                                    <img className="h-12 w-12" src={flexible} alt="" />
                                    <p>Flexibilidad</p>
                                </div>
                                <div className="h-28 w-32 flex flex-col justify-center items-center bg-white shadow-md rounded-sm" data-aos="fade-down" data-aos-delay="400">
                                    <img className="h-12 w-12" src={tecnologia} alt="" />
                                    <p>Tecnología</p>
                                </div>
                            </div>

                        </div>
                        <div className="flex flex-col lg:w-1/2 items-center pt-10">
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
                                <Swiper
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    onSlideChange={() => console.log('Slide change')}
                                    onSwiper={(swiper) => console.log(swiper)}
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
                                    style={{ width: '80%', maxWidth: '1200px', height: '100%' }}
                                    autoplay={{
                                        delay: 3500,
                                        disableOnInteraction: false,
                                      }}
                                      modules={[Autoplay, EffectCreative]}
                                        className="mySwiper"
                                        
                                >
                                    <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                        <img src={Slider_1} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </SwiperSlide>
                                    <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                        <img src={Slider_2} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </SwiperSlide>
                                    <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                        <img src={Slider_2} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>



                </div>
            </div>

            {/* Contact Section */}
            {/* <div className="w-full h-auto bg-white pt-12">
                <div className="flex flex-col lg:flex-row h-auto w-full items-center justify-between pl-10 pb-10 px-4 sm:px-10 md:px-20 lg:px-40">
                    <div className="flex-col w-1/3" data-aos="fade-right">
                        <div className="pt-10">
                            <div className="flex flex-col pt-2 h-80 w-96 rounded-md bg-white shadow-md items-center">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30270.719272893064!2d-69.9722908283497!3d18.490909364070806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf8987ea6ea207%3A0x7bcfa7fa8182db54!2sM.C.%20Logistics%20SRL!5e0!3m2!1sen!2sdo!4v1715034805315!5m2!1sen!2sdo"
                                    width="90%"
                                    height="280"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Google Map"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="flex-col w-1/3" data-aos="fade-right">
                        <div className="pt-10">
                            <div className="flex flex-col pt-2 h-80 w-96 rounded-md bg-white shadow-md items-center">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30270.719272893064!2d-69.9722908283497!3d18.490909364070806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf8987ea6ea207%3A0x7bcfa7fa8182db54!2sM.C.%20Logistics%20SRL!5e0!3m2!1sen!2sdo!4v1715034805315!5m2!1sen!2sdo"
                                    width="90%"
                                    height="280"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Google Map"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row h-auto w-full items-center justify-center pl-10 pb-10">
                <div className="flex-col w-1/3" data-aos="fade-right">
                        <div className="pt-10">
                            <div className="flex flex-col pt-2 h-80 w-96 rounded-md bg-white shadow-md items-center">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30270.719272893064!2d-69.9722908283497!3d18.490909364070806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf8987ea6ea207%3A0x7bcfa7fa8182db54!2sM.C.%20Logistics%20SRL!5e0!3m2!1sen!2sdo!4v1715034805315!5m2!1sen!2sdo"
                                    width="90%"
                                    height="280"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Google Map"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="flex-col w-1/3" data-aos="fade-right">
                        <div className="pt-10">
                            <div className="flex flex-col pt-2 h-80 w-96 rounded-md bg-white shadow-md items-center">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30270.719272893064!2d-69.9722908283497!3d18.490909364070806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf8987ea6ea207%3A0x7bcfa7fa8182db54!2sM.C.%20Logistics%20SRL!5e0!3m2!1sen!2sdo!4v1715034805315!5m2!1sen!2sdo"
                                    width="90%"
                                    height="280"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Google Map"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                
            <div className="bg-white">
                    <hr className="h-px my-8 bg-gray-200 border-0" />
                </div>
            </div> */}
        </div>
    );
}
