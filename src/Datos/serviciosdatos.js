//Iconos de servicios
import en_transito from "../Icons/en_transito.png";
import en_transito_aereo from "../Icons/en_transito_aereo.png";
import transporte_terrestre from "../Icons/transporte_terrestre.png";
import almacenaje from "../Icons/Almacenaje.png";
import gestion_aduanal from "../Icons/Gestion_aduanal.png";
import paqueteria from "../Icons/Paqueteria_2.png";




const serviciosdatos = [
    {
        id: 1,
        espacio: "flex flex-col justify-center items-center text-white bg-bluemunsell h-72 w-full  rounded-md shadow-md lg:transform lg:transition-transform lg:duration-100 lg:hover:scale-105 lg:hover:-translate-y-2 md:transform md:transition-transform md:duration-100 md:hover:scale-105 md:hover:-translate-y-2",
        imagen: en_transito,
        claseImagen: `h-24 w-24 invert` ,
        titulo: "maritim_transport",
        claselink: "rounded-md text-white text-opacity-75 hover:text-opacity-100 ",
        link: "#/servicios#transporte_maritimo"
    },
    {
        id: 2,
        espacio:`flex flex-col justify-center items-center bg-slate-50 h-72 w-full rounded-md shadow-md lg:transform lg:transition-transform lg:duration-100 lg:hover:scale-105 lg:hover:-translate-y-2 md:transform md:transition-transform md:duration-100 md:hover:scale-105 md:hover:-translate-y-2`,
        imagen: en_transito_aereo,
        claseImagen: `h-24 w-24` ,
        titulo: "air_transport",
        claselink: "rounded-md text-black text-opacity-75 hover:text-opacity-100 ",
        link: "#/servicios#transporte_aereo"
    },
    {
        id: 3,
        espacio:`flex flex-col justify-center items-center text-white bg-blue h-72 w-full rounded-md shadow-md lg:transform lg:transition-transform lg:duration-100 lg:hover:scale-105 lg:hover:-translate-y-2 md:transform md:transition-transform md:duration-100 md:hover:scale-105 md:hover:-translate-y-2`,
        imagen: transporte_terrestre,
        claseImagen: `h-24 w-24 invert` ,
        titulo: "ground_transport",
        texto: "Nuestras alianzas en territorio dominicano con servicios de geolocalización, ofrecen seguridad y garantía para el transporte de mercancías.",
        claselink: "rounded-md text-white text-opacity-75 hover:text-opacity-100",
        link: "#/servicios#transporte_terrestre"
    },
    {
        id: 4,
        espacio:`flex flex-col justify-center items-center bg-slate-50 h-72  w-full rounded-md shadow-md lg:transform lg:transition-transform lg:duration-100 lg:hover:scale-105 lg:hover:-translate-y-2 md:transform md:transition-transform md:duration-100 md:hover:scale-105 md:hover:-translate-y-2`,
        imagen: almacenaje,
        claseImagen: `h-24 w-24` ,
        titulo:"storage",
        texto:"Ofrecemos soluciones de almacenaje seguro y eficiente para sus mercancías, garantizando su integridad y disponibilidad en todo momento.",
        claselink: "rounded-md text-black text-opacity-75 hover:text-opacity-100 ",
        link: "#/servicios#almacenaje"
    },
    {
        id: 5,
        espacio:`flex flex-col justify-center items-center text-white bg-oldgold h-72 w-full rounded-md shadow-md lg:transform lg:transition-transform lg:duration-100 lg:hover:scale-105 lg:hover:-translate-y-2 md:transform md:transition-transform md:duration-100 md:hover:scale-105 md:hover:-translate-y-2`,
        imagen: gestion_aduanal,
        claseImagen: `h-24 w-24 invert` ,
        titulo:"customs_zone",
        texto:"Nuestro equipo de expertos en aduanas ofrece servicios de gestión aduanal integral, facilitando los trámites y asegurando el cumplimiento de todas las regulaciones.",
        claselink: "rounded-md text-white text-opacity-75 hover:text-opacity-100",
        link: "#/servicios#gestion_aduanal"
    },
    {
        id: 6,
        espacio:`flex flex-col justify-center items-center bg-slate-50 h-72 w-full rounded-md shadow-md lg:transform lg:transition-transform lg:duration-100 lg:hover:scale-105 lg:hover:-translate-y-2 md:transform md:transition-transform md:duration-100 md:hover:scale-105 md:hover:-translate-y-2`,
        imagen: paqueteria,
        claseImagen: `h-24 w-24` ,
        titulo:"packaging",
        texto:"Servicio de paquetería ágil y seguro para envíos locales e internacionales, garantizando la entrega oportuna y en perfectas condiciones de sus paquetes y documentos.",
        claselink: "rounded-md text-black text-opacity-75 hover:text-opacity-100",
        link: "#/servicios#paqueteria"
    }
    
];

export default serviciosdatos;