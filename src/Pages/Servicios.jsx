import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import imagen_background from "../Images/Agentes/introimg2.jpg";


import Transporte_Maritimo from "../Images/Nuestros_servicios_logisticosimgs/Transporte_maritimo.webp";
import Transporte_Aereo from "../Images/Nuestros_servicios_logisticosimgs/Transporte_aereo.webp";
import Transporte_terrestre from "../Images/Nuestros_servicios_logisticosimgs/Transporte_terrestre.webp";
import Almacenaje from "../Images/Nuestros_servicios_logisticosimgs/Almacenaje.webp";
import Gestion_aduanal from "../Images/Nuestros_servicios_logisticosimgs/Gestion_aduanal.webp";
import Paqueteria from "../Images/Nuestros_servicios_logisticosimgs/Paqueteria.webp";
import Inspeccion from "../Images/Nuestros_servicios_logisticosimgs/Inspeccion.jpg";
import Seguro from "../Images/Nuestros_servicios_logisticosimgs/Seguro.webp";
import Cargo_completo from "../Images/Nuestros_servicios_logisticosimgs/Carga_lcl.jpg";
import Carga_completa from "../Images/Nuestros_servicios_logisticosimgs/Carga_completa.jpg"


export default function Servicios() {
    const location = useLocation();

    useEffect(() => {
        const handleHashChange = () => {
            if (location.hash) {
                const id = location.hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView();
                }
            }
        };
        window.addEventListener('hashchange', handleHashChange);

        // Call handleHashChange on initial render
        handleHashChange();

        // Clean up by removing the event listener
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, [location]);


    return (
        <div className="w-full h-auto font-Encode-Sans py-20">
            <div className="flex justify-center items-center bg-bottom w-full h-40 md:h-80" style={{ backgroundImage: `url(${imagen_background})`, backgroundSize: 'cover' }}>
                <div className="flex flex-col items-center text-center">
                    <h1 className="text-white text-2xl lg:text-5xl xl:text-6xl font-semibold">Nuestros Servicios Logisticos</h1>
                    <p className="text-white font-regular pt-4">Lo común entre nuestros servicios es la excelencia</p>
                </div>
            </div>

            <div className="flex flex-col justify-center h-auto w-full py-10 md:py-20 xl:py-20">
                <div className="flex flex-col h-auto w-full px-10 sm:px-10 md:px-20 lg:px-40">


                    <div id="transporte_maritimo" className="flex flex-col-reverse lg:flex-row xl:flex-row">
                        <div className="flex flex-col w-full lg:w-1/2 xl:w-1/2 items-center text-center justify-center">
                            <h1 className="text-xl md:text-2xl lg:text-4xl xl:text-4xl w-2/3 font-bold">Transporte Maritimo</h1>
                            <p className="text-sm md:text-2xl lg:text-2xl xl:text-2xl pt-4 font-normal w-2/3">El transporte marítimo es ideal para trasladar grandes volúmenes de carga a bajo costo y en largos trayectos. Esta modalidad asegura entregas seguras y puntuales, ofreciendo una solución eficiente y económica para el transporte de cargas críticas.</p>
                        </div>
                        <div className="w-full py-4 md:py-10  lg:w-1/2 xl:w-1/2 md:px-8 flex items-center justify-center">
                            <img className="relative h-full md:h-4/5 w-full md:w-[40rem] objetc-cover rounded-md" src={Transporte_Maritimo} alt="" />
                        </div>
                    </div>



                    <div id="transporte_aereo" className="flex flex-col lg:flex-row xl:flex-row pt-4 md:pt-20">
                        <div className="w-full py-4 md:py-10  lg:w-1/2 xl:w-1/2 md:px-8 flex items-center justify-center">
                            <img className="relative h-full md:h-4/5 w-full md:w-[40rem] objetc-cover rounded-md" src={Transporte_Aereo} alt="" />
                        </div>
                        <div className="flex flex-col w-full lg:w-1/2 xl:w-1/2 items-center text-center justify-center">
                            <h1 className="text-xl md:text-2xl lg:text-4xl xl:text-4xl w-2/3 font-bold">Transporte Aéreo</h1>
                            <p className="text-sm md:text-2xl lg:text-2xl xl:text-2xl pt-4 font-normal w-2/3">China, India, España, nunca habían estado tan cerca para envíos urgentes, carga o expreso, a la puerta de su empresa.</p>
                        </div>
                    </div>



                    <div id="transporte_terrestre" className="flex flex-col-reverse  lg:flex-row xl:flex-row pt-16">
                        <div className="flex flex-col w-full lg:w-1/2 xl:w-1/2 items-center text-center justify-center">
                            <h1 className="text-xl md:text-2xl lg:text-4xl xl:text-4xl w-2/3 font-bold">Transporte Terrestre</h1>
                            <p className="text-sm md:text-2xl lg:text-2xl xl:text-2xl pt-4 font-normal w-2/3">Nuestras alianzas en territorio dominicano con servicios de geolocalización, ofrecen seguridad y garantía para el transporte de mercancías.</p>
                        </div>
                        <div className="w-full py-4 md:py-10  lg:w-1/2 xl:w-1/2 md:px-8 flex items-center justify-center">
                            <img className="relative h-full md:h-4/5 w-full md:w-[40rem] objetc-cover rounded-md" src={Transporte_terrestre} alt="" />
                        </div>
                    </div>


                    <div id="almacenaje" className="flex flex-col lg:flex-row xl:flex-row pt-16">
                        <div className="w-full py-4 md:py-10  lg:w-1/2 xl:w-1/2 md:px-8 flex items-center justify-center">
                            <img className="relative h-full md:h-4/5 w-full md:w-[40rem] objetc-cover rounded-md" src={Almacenaje} alt="" />
                        </div>
                        <div className="flex flex-col w-full lg:w-w-1/2 xl:w-1/2 items-center text-center justify-center">
                            <h1 className="text-xl md:text-2xl lg:text-4xl xl:text-4xl w-2/3 font-bold">Almacenaje</h1>
                            <p className="text-sm md:text-2xl lg:text-2xl xl:text-2xl pt-4 font-normal w-2/3 ">Bajo el régimen de deposito logístico, nos encargamos del manejo de mercancías dentro de zona primaria para el país y la región. Con sede en el puerto de Caucedo, garantizamos conexiones a mas 20 islas en el caribe; así como centro, norte y sur américa.</p>
                        </div>
                    </div>


                    <div id="gestion_aduanal" className="flex flex-col-reverse  lg:flex-row xl:flex-row pt-16">
                        <div className="flex flex-col w-full lg:w-1/2 xl:w-1/2 items-center text-center justify-center">
                            <h1 className="text-xl md:text-2xl lg:text-4xl xl:text-4xl w-2/3 font-bold">Gestión aduanal</h1>
                            <p className="text-sm md:text-2xl lg:text-2xl xl:text-2xl pt-4 font-normal w-2/3">El comercio global ha ido cambiando de manera constante y la cadena logística requiere del uso de mejor tecnología para procesar y gestionar información y cumplir con las regulaciones aduanales y fiscales, administrar riesgo y llevar a cabo gestiones efectivas. Conociendo esto contamos de una actualizada asesoría, en materia de comercio exterior, aduanas, logística, transporte y distribución.</p>
                        </div>
                        <div className="w-full py-4 md:py-10  lg:w-1/2 xl:w-1/2 md:px-8 flex items-center justify-center">
                            <img className="relative h-full md:h-4/5 w-full md:w-[40rem] objetc-cover rounded-md" src={Gestion_aduanal} alt="" />
                        </div>
                    </div>


                    <div id="paqueteria" className="flex flex-col lg:flex-row xl:flex-row pt-16">
                        <div className="w-full py-4 md:py-10  lg:w-1/2 xl:w-1/2 md:px-8 flex items-center justify-center">
                            <img className="relative h-full md:h-4/5 w-full md:w-[40rem] objetc-cover rounded-md" src={Paqueteria} alt="" />
                        </div>
                        <div className="flex flex-col w-full lg:w-1/2 xl:w-1/2 items-center text-center justify-center">
                            <h1 className="text-xl md:text-2xl lg:text-4xl xl:text-4xl w-2/3 font-bold">Paqueteria</h1>
                            <p className="text-sm md:text-2xl lg:text-2xl xl:text-2xl pt-4 font-normal w-2/3">Ofrecemos a todos nuestros clientes cuentas personales así como corporativas con tarifas económicas, un buzón en Miami, USA, uno en Guangzhou, China y otro en Madrid, España,</p>
                        </div>
                    </div>

                    <div id="gestion_aduanal" className="flex flex-col-reverse lg:flex-row xl:flex-row pt-16">
                        <div className="flex flex-col w-full lg:w-1/2 xl:w-1/2 items-center text-center justify-center">
                            <h1 className="text-xl md:text-2xl lg:text-4xl xl:text-4xl w-2/3 font-bold">Inspeccion de Carga</h1>
                            <p className="text-sm md:text-2xl lg:text-2xl xl:text-2xl pt-4 font-normal w-2/3">La fiabilidad del proveedor es lo que hace o daña su empresa. A través de nuestra inspección de carga y fabricación nos aseguramos de reducir y/o eliminar la exposición de su empresa a los vendedores dudosos y a la calidad de la carga.</p>
                        </div>
                        <div className="w-full py-4 md:py-10  lg:w-1/2 xl:w-1/2 md:px-8 flex items-center justify-center">
                            <img className="relative h-full md:h-4/5 w-full md:w-[40rem] objetc-cover rounded-md" src={Inspeccion} alt="" />
                        </div>
                    </div>


                    <div id="paqueteria" className="flex flex-col lg:flex-row xl:flex-row pt-16">
                        <div className="w-full py-4 md:py-10  lg:w-1/2 xl:w-1/2 md:px-8 flex items-center justify-center">
                            <img className="relative h-full md:h-4/5 w-full md:w-[40rem] objetc-cover rounded-md" src={Seguro} alt="" />
                        </div>
                        <div className="flex flex-col w-full lg:w-1/2 xl:w-1/2 items-center text-center justify-center">
                            <h1 className="text-xl md:text-2xl lg:text-4xl xl:text-4xl w-2/3 font-bold">Servicio de Administracion de Riesgos</h1>
                            <p className="text-sm md:text-2xl lg:text-2xl xl:text-2xl pt-4 font-normal w-2/3">Alianzas con compañías multinacionales, permiten ofrecer pólizas coherentes con la necesidades de su empresa, aislando el riesgo de sus pólizas generales, manteniéndoles competitivos siempre.</p>
                        </div>
                    </div>

                    <div id="gestion_aduanal" className="flex flex-col-reverse  lg:flex-row xl:flex-row pt-16">
                        <div className="flex flex-col w-full lg:w-1/2 xl:w-1/2 items-center text-center justify-center">
                            <h1 className="text-xl md:text-2xl lg:text-4xl xl:text-4xl w-2/3 font-bold">Carga Suelta (LCL)</h1>
                            <p className="text-sm md:text-2xl lg:text-2xl xl:text-2xl pt-4 font-normal w-2/3">Consolidación en el lugar de origen, es la clave para la realización de nuestros transportes de carga menuda de manera eficiente siendo costos efectivos en la gestión. Miami, Panamá, España, Shanghái, Hong Kong, Shenzhen, New York, son solo algunos de los puntos estratégicos utilizados por nuestra empresa para eliminar los puntos de trasbordo, reduciendo asi los tiempos de ciclo a nuestros clientes.</p>
                        </div>
                        <div className="w-full py-4 md:py-10  lg:w-1/2 xl:w-1/2 md:px-8 flex items-center justify-center">
                            <img className="relative h-full md:h-4/5 w-full md:w-[40rem] objetc-cover rounded-md" src={Cargo_completo} alt="" />
                        </div>
                    </div>


                    <div id="paqueteria" className="flex flex-col lg:flex-row xl:flex-row pt-16">
                        <div className="w-full py-4 md:py-10  lg:w-1/2 xl:w-1/2 md:px-8 flex items-center justify-center">
                            <img className="relative h-full md:h-4/5 w-full md:w-[40rem] objetc-cover rounded-md" src={Carga_completa} alt="" />
                        </div>
                        <div className="flex flex-col w-full lg:w-1/2 xl:w-1/2 items-center text-center justify-center">
                            <h1 className="text-xl md:text-2xl lg:text-4xl xl:text-4xl w-2/3 font-bold">Contenedores Completos</h1>
                            <p className="text-sm md:text-2xl lg:text-2xl xl:text-2xl pt-4 font-normal px-4 w-2/3">Desarrollando relaciones con un puñado de socios, aseguramos ser de los más competitivos al momento de presentar nuestras ofertas.Rapidez en la coordinación de sus embarques gracias a nuestra red de oficinas propias en Asia / España / México / Estados Unidos / Brasil / Costa Rica, garantizan el hablar un mismo “idioma” con el consignatario y el suplidor</p>
                        </div>
                    </div>




                </div>
            </div>
        </div>
    )
}