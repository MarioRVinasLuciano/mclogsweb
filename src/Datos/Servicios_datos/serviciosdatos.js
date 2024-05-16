//importo imagenes locales asignadas a cada div
import Transporte_Maritimo from "/Users/macuser/mclogs/src/Images/Nuestros_servicios_logisticosimgs/Transporte_maritimo.jpg";
import Transporte_Aereo from "/Users/macuser/mclogs/src/Images/Nuestros_servicios_logisticosimgs/Transporte_aereo.jpg";
import Transporte_terrestre from "/Users/macuser/mclogs/src/Images/Nuestros_servicios_logisticosimgs/Transporte_terrestre.jpg";
import Almacenaje from "/Users/macuser/mclogs/src/Images/Nuestros_servicios_logisticosimgs/Almacenaje.jpg";
import Gestion_aduanal from "/Users/macuser/mclogs/src/Images/Nuestros_servicios_logisticosimgs/Gestion_aduanal.webp";
import Paqueteria from "/Users/macuser/mclogs/src/Images/Nuestros_servicios_logisticosimgs/Paqueteria.jpg";





const serviciosdatos = [
    {
        id: 1,
        espacio:`bg-white h-98 w-72 lg:col-span-1 lg:col-start-1 md:col-span-1 md:col-start-1 rounded-md shadow-md`,
        imagen: Transporte_Maritimo,
        titulo: "Transporte Maritimo",
        texto: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea saepe numquam ex, officiis cum temporibus est ut, vel officia provident libero iure nam quia esse explicabo, beatae doloribus repellat? Earum",
        transicion: "zoom-out-left",
        delay: "100",
        duracion: ""
    },
    {
        id: 2,
        espacio:`bg-white h-98 w-72 lg:col-span-1 lg:col-start-2 md:col-span-1 md:col-start-2 rounded-md shadow-md`,
        imagen: Transporte_Aereo,
        titulo: "Transporte Aereo",
        texto: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea saepe numquam ex, officiis cum temporibus est ut, vel officia provident libero iure nam quia esse explicabo, beatae doloribus repellat? Earum",
        transicion: "zoom-out",
        delay: "200",
        duracion: ""
    },
    {
        id: 3,
        espacio:`bg-white h-98 w-72 lg:col-span-1 lg:col-start-3 md:col-span-1 md:col-start-1 rounded-md shadow-md`,
        imagen: Transporte_terrestre,
        titulo: "Transporte Terrestre",
        texto:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea saepe numquam ex, officiis cum temporibus est ut, vel officia provident libero iure nam quia esse explicabo, beatae doloribus repellat? Earum",
        transicion: "zoom-out-right",
        delay: "300",
        duracion: ""
    },
    {
        id: 4,
        espacio:`bg-white h-98 w-72 lg:col-span-1 lg:col-start-1 rounded-md shadow-md`,
        imagen: Almacenaje,
        titulo:"Almacenaje",
        texto:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea saepe numquam ex, officiis cum temporibus est ut, vel officia provident libero iure nam quia esse explicabo, beatae doloribus repellat? Earum",
        transicion: "zoom-out-left",
        delay: "100",
        duracion: ""
    },
    {
        id: 5,
        espacio:`bg-white h-98 w-72 lg:col-span-1 lg:col-start-2 rounded-md shadow-md`,
        imagen: Gestion_aduanal,
        titulo:"Gestion Aduanal",
        texto:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea saepe numquam ex, officiis cum temporibus est ut, vel officia provident libero iure nam quia esse explicabo, beatae doloribus repellat? Earum",
        transicion: "zoom-out",
        delay: "200",
        duracion: ""
    },
    {
        id: 6,
        espacio:`bg-white h-98 w-72 lg:col-span-1 lg:col-start-3 rounded-md shadow-md`,
        imagen: Paqueteria,
        titulo:"Paqueteria",
        texto:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea saepe numquam ex, officiis cum temporibus est ut, vel officia provident libero iure nam quia esse explicabo, beatae doloribus repellat? Earum",
        transicion: "zoom-out-right",
        delay: "300",
        duracion: ""
    },
    
];

export default serviciosdatos;