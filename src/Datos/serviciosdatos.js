//importo imagenes locales asignadas a cada div
import Transporte_Maritimo from "../Images/Nuestros_servicios_logisticosimgs/Transporte_maritimo.webp";
import Transporte_Aereo from "../Images/Nuestros_servicios_logisticosimgs/Transporte_aereo.webp";
import Transporte_terrestre from "../Images/Nuestros_servicios_logisticosimgs/Transporte_terrestre.webp";
import Almacenaje from "../Images/Nuestros_servicios_logisticosimgs/Almacenaje.webp";
import Gestion_aduanal from "../Images/Nuestros_servicios_logisticosimgs/Gestion_aduanal.webp";
import Paqueteria from "../Images/Nuestros_servicios_logisticosimgs/Paqueteria.webp";





const serviciosdatos = [
    {
        id: 1,
        espacio: `bg-white lg:h-auto h-96  w-full lg:col-span-1 lg:col-start-1 md:col-span-1 md:col-start-1 rounded-md shadow-md`,
        imagen: Transporte_Maritimo,
        titulo: "Transporte Marítimo",
        texto: "Combinar dos modalidades de transporte, reduciendo los tiempos de tránsito y costos al comparar uno sobre otro de manera individual, garantiza al cliente una eficiente solución al transporte de sus cargas críticas.",
        transicion: "",
        delay: "",
        duracion: ""
    },
    {
        id: 2,
        espacio:`bg-white lg:h-auto h-96 w-full lg:col-span-1 lg:col-start-2 md:col-span-1 md:col-start-2 rounded-md shadow-md`,
        imagen: Transporte_Aereo,
        titulo: "Transporte Aéreo",
        texto: "China, India, España, nunca habían estado tan cerca para envíos urgentes, carga o expreso, a la puerta de su empresa.",
        transicion: "",
        delay: "",
        duracion: ""
    },
    {
        id: 3,
        espacio:`bg-white lg:h-auto h-96 w-full lg:col-span-1 lg:col-start-3 md:col-span-1 md:col-start-1 rounded-md shadow-md`,
        imagen: Transporte_terrestre,
        titulo: "Transporte Terrestre",
        texto: "Nuestras alianzas en territorio dominicano con servicios de geolocalización, ofrecen seguridad y garantía para el transporte de mercancías.",
        transicion: "",
        delay: "",
        duracion: ""
    },
    {
        id: 4,
        espacio:`bg-white lg:h-auto h-96 w-full lg:col-span-1 lg:col-start-1 rounded-md shadow-md`,
        imagen: Almacenaje,
        titulo:"Almacenaje",
        texto:"Ofrecemos soluciones de almacenaje seguro y eficiente para sus mercancías, garantizando su integridad y disponibilidad en todo momento.",
        transicion: "",
        delay: "",
        duracion: ""
    },
    {
        id: 5,
        espacio:`bg-white lg:h-auto h-96 w-full lg:col-span-1 lg:col-start-2 rounded-md shadow-md`,
        imagen: Gestion_aduanal,
        titulo:"Gestión Aduanal",
        texto:"Nuestro equipo de expertos en aduanas ofrece servicios de gestión aduanal integral, facilitando los trámites y asegurando el cumplimiento de todas las regulaciones.",
        transicion: "",
        delay: "",
        duracion: ""
    },
    {
        id: 6,
        espacio:`bg-white lg:h-auto h-96 w-full lg:col-span-1 lg:col-start-3 rounded-md shadow-md`,
        imagen: Paqueteria,
        titulo:"Paquetería",
        texto:"Servicio de paquetería ágil y seguro para envíos locales e internacionales, garantizando la entrega oportuna y en perfectas condiciones de sus paquetes y documentos.",
        transicion: "",
        delay: "",
        duracion: ""
    }
    
];

export default serviciosdatos;