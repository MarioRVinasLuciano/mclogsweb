//Swiper 
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative, Pagination, EffectFade } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

//Slider imagenes
import Slider_1 from "../Images/Homepageimgs/Slider_1.webp";
import Slider_2 from "../Images/Homepageimgs/Slider_2.webp";
import Slider_4 from "../Images/Homepageimgs/Slider_4.webp";
import Slider_5 from "../Images/Homepageimgs/Slider_5.webp";


export default function Swiper(){
    return (
        <>
        <Swiper
            style={{ width: '100%', height: '100%'}}
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
    )
}