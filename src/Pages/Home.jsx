import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import "../Slidercss/slider.css";

//Datos
import serviciosdatos from "../Datos/serviciosdatos";

//Componentes
import NuestrosServicios from "../Components/Nuestros_servicios_card";

//Imagenes
import white from "../Images/Homepageimgs/Background/white_waves.jpg";
import contenedores_cielo from "../Images/Homepageimgs/bote_vertical.webp";
import figibox_img from "../Images/Homepageimgs/Somos/compañias/figibox-logo.svg";
import consilia_img from "../Images/Homepageimgs/Somos/compañias/mainConcilia_logo.png";
import Oea_certificacion from "../Images/Homepageimgs/certificaciones/OEARD.webp";
import Basc_Certificacion from "../Images/Homepageimgs/certificaciones/Basc_certificacion.webp";
import high_performance from "../Images/Logos/high-performace.png";
import asodec from "../Images/Homepageimgs/Miembros/Asodec.jpeg";
import adaa from "../Images/Homepageimgs/Miembros/Adaa.jpeg";
import adacam from "../Images/Homepageimgs/Miembros/adacam.png";

//Slider imagenes
import slider_1 from "../Images/Homepageimgs/slider1.webp";
import slider_2 from "../Images/Homepageimgs/slider2.webp";
import slider_3 from "../Images/Homepageimgs/slider3.webp";
import slider_4 from "../Images/Homepageimgs/slider4.webp";

//Animacion
import "swiper/swiper-bundle.css";
import "animate.css";
import "animate.css/animate.min.css";
import Aos from "aos";
import "aos/dist/aos.css";
import "swiper/css/effect-creative";

//Videos
import Video from "../Videos/Video1.mp4";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

//Iconos
import confiable from "../Icons/Confiable.png";
import innovacion from "../Icons/Innovacion.png";
import flexible from "../Icons/Flexible.png";
import tecnologia from "../Icons/Tecnologia.png";

import AppMclogs from "../Components/App_Mclogs_descarga";



const ServiceCard = ({ delay, className, imgSrc, title, description, link }) => {
    const { t, i18n } = useTranslation();

    return (
        <div data-aos="fade-down" data-aos-delay={delay} className="flex flex-col bg-slate-100 h-[24rem] md:h-[24rem] w-full  shadow-lg rounded-md text-center overflow-hidden">

            <div className="flex justify-center items-center h-64">
                <img className={className} src={imgSrc} alt={title} />
            </div>
            <div className="h-auto">
                <p className="px-8 text-sm lg:text-md xl:text-md 2xl:text-lg font-regular text-slate-500 flex-grow">{description}</p>
            </div>
            <div className="pt-4">
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-base font-semibold m-6 group relative w-max">
                    <span>{t("know_more")}</span>
                    <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-bluemunsell group-hover:w-3/6"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-bluemunsell group-hover:w-3/6"></span>
                </a>

            </div>
        </div>
    );
};

export default function Homepage() {
    const { t, i18n } = useTranslation();






    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false);

    const texts = [
        {
            title: 'MC LOGISTICS',
            subtitle: t("customer_focused"),
            description: t("data_driven"),
        },
        {
            title: '',
            subtitle: t("opportunity_focus"),
            description: t("efficiency_profitability"),
        },
    ];


    useEffect(() => {
        const interval = setInterval(() => {
            setFade(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
                setFade(false);
            }, 500);
        }, 6000);

        return () => clearInterval(interval);
    }, [texts.length]);



    const currentText = texts[currentIndex];

    return (
        <div className="w-full h-auto font-Encode-Sans">
            {/* Primera seccion  */}
            <div className="relative h-screen w-full">
                <video className="fixed inset-0 w-full h-full object-cover brightness-50 z-[-10]" src={Video} loop autoPlay muted controls={false} onContextMenu={(e) => e.preventDefault()} playsInline></video>
                <div className="flex w-full h-full text-white px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40 pt-20 items-center">
                    <div className={`h-auto w-auto text-wrap ${fade ? 'fade-out' : 'fade-in'}`}>
                        <p className="w-3/4 text-4xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl" data-aos="fade-up" data-aos-duration="400" data-aos-delay="600">{currentText.subtitle}</p>
                        <p className="text-lg font-semibold py-4" data-aos="fade-up" data-aos-duration="500" data-aos-delay="1300">{currentText.description}</p>
                    </div>
                </div>
            </div>


            {/* Seccion de Somos */}
            <div className="w-full lg:h-screen h-auto bg-white flex px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40">
                <div className="flex h-full w-full items-center justify-center py-8">
                    <div className="flex flex-col-reverse md:flex-row items-center justify-center shadow-md rounded-md bg-SoftGrey max-w-[100rem] h-auto md:h-[34rem]" data-aos="fade-up">
                        <div className="h-full flex flex-col items-start justify-center w-auto md:w-2/3 xl:w-1/2 py-4 px-8">
                            <h1 className="block text-2xl sm:text-4xl md:text-5xl lg:text-3xl xl:text-4xl 2xl:text-5xl" data-aos="fade-up" data-aos-delay="50">{t("about_us")}</h1>
                            <h1 className="block text-3xl sm:text-5xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold pt-2" data-aos="fade-up" data-aos-delay="60">MC Logistics</h1>
                            <p className="block pt-4 pb-2 font-thin text-md sm:text-xl md:text-lg lg:text-md xl:text-xl" data-aos="fade-up" data-aos-delay="70">{t("strategic_partner")}</p>
                            <p className="lg:hidden xl:block hidden sm:hidden md:hidden pb-2 text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg 2xl:text-xl" data-aos="fade-up" data-aos-delay="85">{t("born")}</p>
                            <a href="/#/nosotros" className="flex items-center justify-center h-12 w-32 rounded-md bg-DarkBlue hover:bg-blue" data-aos="fade-down" data-aos-delay="0">
                                <p className="text-white">{t("learn_more")}</p>
                            </a>
                        </div>
                        <div className="h-full w-full md:w-1/3 xl:w-1/2 shrink-0 overflow-hidden bg-clip-border">
                            <img className="h-96 md:h-full w-full object-cover rounded-md" src={contenedores_cielo} alt="Logistics" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Nuestros Servicios */}
            <div className="w-full h-auto pb-16 bg-white">
                <div className="flex w-full pb-6 pt-12 items-center justify-center px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40 text-center">
                    <h3 className="text-4xl md:text-5xl font-bold" data-aos="fade-down">{t("our_services")}</h3>
                </div>
                <div className="flex justify-center h-auto w-full pt-8 px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40">
                    <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-y-12 gap-x-6 justify-items-center w-full">
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
            <AppMclogs />

            {/* Seccion de compañias */}
            <div className="w-full h-auto xl:h-screen bg-white ">
                <div className="flex bg-center bg-fixed w-full h-full pb-2 pt-12 md:py-20" style={{ backgroundImage: `url(${''})`, backgroundSize: 'cover' }}>
                    <div className="flex flex-col w-full h-full items-center justify-center px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40">
                        <div className="pb-0 md:pb-10 text-center">
                            <h1 className="text-4xl md:text-5xl font-bold text-black">{t("our_divisions")}</h1>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-x-10 gap-y-8 w-full h-full justify-items-center items-center">
                            <ServiceCard
                                delay={""}
                                className={"pt-20 h-44 w-64 z-10"}
                                imgSrc={figibox_img}
                                title="FIGIBOX"
                                description={t("figibox_description")}
                                link="https://figibox.do/"
                            />
                            <ServiceCard
                                delay={"200"}
                                className={" h-44 w-80 z-10"}
                                imgSrc={consilia_img}
                                title="CONSILIA"
                                description={t("consilia_description")}
                                link="https://www.consilialogistics.com/"
                            />
                            <ServiceCard
                                delay={"400"}
                                className={"h-64 w-64 z-10"}
                                imgSrc={high_performance}
                                title="HIGH PERFORMANCE CL"
                                description={t("highperformance_description")}
                                link="https://figibox.do/"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-auto w-full pt-8 bg-white">
                <div className="flex flex-col h-full justify-center px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40">
                    <div className="flex w-full h-auto justify-center lg:justify-start">
                        <div className="h-auto xl:w-auto w-full py-8 text-center">
                            <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold">{t("why_choose_us")}</h1>
                        </div>
                    </div>

                    <div className="flex 2xl:flex-row xl:flex-row lg:flex-col md:flex-col sm:flex-col flex-col w-full h-4/5 gap-x-10">
                        <div className="flex flex-col xl:w-1/2 w-full">
                            <div className="wrap h-full w-auto text-center">
                                <ul className="list-disc list-inside text-justify text-md lg:text-lg xl:text-lg 2xl:text-xl">
                                    <li>
                                        {t("integration")}
                                    </li>
                                    <li className="pt-4">
                                        {t("loyalty_commitment")}
                                    </li>
                                    <li className="pt-4">
                                        {t("quality_service")}
                                    </li>
                                </ul>
                            </div>

                            <div className="w-auto h-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 pt-4 pb-8 xl:pb-0 gap-y-12 gap-x-4 justify-items-center">
                                <div className="flex flex-col justify-center items-center bg-slate-50 shadow-md rounded-sm p-6" data-aos="fade-down">
                                    <img className="h-8 w-8 lg:h-12 lg:w-12" src={confiable} alt="" />
                                    <p className="text-xs">{t("reliability")}</p>
                                </div>
                                <div className="flex flex-col justify-center items-center bg-slate-50 shadow-md rounded-sm p-6" data-aos="fade-down" data-aos-delay="200">
                                    <img className="h-8 w-8 lg:h-12 lg:w-12" src={innovacion} alt="" />
                                    <p className="text-xs">{t("innovation")}</p>
                                </div>
                                <div className="flex flex-col justify-center items-center bg-slate-50 shadow-md rounded-sm p-6" data-aos="fade-down" data-aos-delay="300">
                                    <img className="h-8 w-8 lg:h-12 lg:w-12" src={flexible} alt="" />
                                    <p className="text-xs">{t("flexibility")}</p>
                                </div>
                                <div className="flex flex-col justify-center items-center bg-slate-50 shadow-md rounded-sm p-6" data-aos="fade-down" data-aos-delay="400">
                                    <img className="h-8 w-8 lg:h-12 lg:w-12" src={tecnologia} alt="" />
                                    <p className="text-xs">{t("technology")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col h-full w-full xl:w-1/2 items-center justify-center">
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

                    <div className="flex flex-col lg:flex-col xl:flex-row h-full justify-between pb-24 pt-12">
                        <div className="flex flex-col">
                            <div className="w-full text-start">
                                <h1 className="text-sm sm:text-2xl font-extrabold text-DarkBlue">{t("certifications")}</h1>
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
                                <h1 className="text-sm sm:text-2xl font-extrabold text-DarkBlue">{t("members")}</h1>
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
