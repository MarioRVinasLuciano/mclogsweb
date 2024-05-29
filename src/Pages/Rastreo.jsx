import React, { useState, useEffect, useRef } from "react";
import contenedor from "../Images/Rastrear/barco_rastrear.jpg";
import contenedor1 from "../Images/Rastrear/contenedor_bg_2.jpg";
import contenedor2 from "../Images/Rastrear/contenedor_bg_3.jpg";
import Tracker from "../Components/Trak";

//Estado Bl imagenes
import TELEX_RELEASE from "../Icons/Telex_release.svg";
import COPIA_BL from "../Icons/Copia_Bl.svg";

// Import images
import procesando from "../Icons/procesando.png"
import en_transito from "../Icons/en_transito.png";
import en_transito_aereo from "../Icons/en_transito_aereo.png";
import en_puerto from "../Icons/en_puerto.png";
import en_aeropuerto from "../Icons/en_aereopuerto.png";
import Solicitado from "../Icons/Solicitado.png";
import Despachado from "../Icons/Despacho_aprobado.png"



export default function Rastreo() {
    const [valor, setValor] = useState("");
    const [embarque, setEmbarque] = useState("");
    const [error, setError] = useState(false);
    const [formattedDate, setFormattedDate] = useState("");
    const [searchPerformed, setSearchPerformed] = useState(false);
    const [searchCount, setSearchCount] = useState(0);
    const scrollRef = useRef(null);

    const manejoBusqueda = async (valor_entrada) => {
        await fetchData(valor_entrada);
        setSearchCount(prevCount => prevCount + 1); // Increment search count
    };

    const fetchData = async (valor_entrada) => {
        try {
            const respuesta = await fetch(
                `https://api.mclogs.com/odata/public/GetOrderByText(Value='${valor_entrada}')?$select=Oid,State,ETD,ETA,TelexRelease,TransportMode,MovementType,Freights,Summary&$expand=Freights,Summary`
            );
            const datos = await respuesta.json();
            setEmbarque(datos)
            setError(false);
        } catch (error) {
            console.error("No se encontro un embarque con este numero", error);
            setError(true);
        }
    };

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [searchCount]);

    useEffect(() => {
        if (embarque && embarque.ETA) {
            const date = new Date(embarque.ETA);
            const dia = date.getDate();
            const mes = date.getMonth() + 1;
            const ano = date.getFullYear();
            const diaenformato = dia < 10 ? '0' + dia : dia;
            const mesenformato = mes < 10 ? '0' + mes : mes;
            const fecha = `${diaenformato}/${mesenformato}/${ano}`;
            setFormattedDate(fecha);
        }
    }, [embarque]);

    const getProgressWidth = (state) => {
        switch (state) {
            case "EnCoordinacion":
                return "5%";
            case "EnTransito":
                return "50%";
            case "EnPuerto":
            case "DespachoSolicitado":
            case "Despachado":
                return "100%";
            case "EnAeropuerto":
                return "50%";
            default:
                return "0%";

        }
    };

    const currentDate = new Date();

const formatDateClass = (dateString) => {
    const date = new Date(dateString);
    if (date > currentDate) {
        return 'text-slate-50';
    } else if (date.toDateString() === currentDate.toDateString()) {
        return 'text-black';
    } else {
        return 'text-green-500';
    }
};


    return (
        <div className="h-full w-full font-Encode-Sans pt-16">
            <div className="w-auto h-screen ">
                <div className="flex flex-col relative h-full bg-center px-10 sm:px-10 md:px-20 lg:px-40" style={{ backgroundImage: `url(${contenedor})`, backgroundSize: 'cover', backgroundPosition: 'bo' }}>
                    <div className="w-full">
                        <h1 className="text-4xl pt-20 font-semibold text-white">Rastrea tu embarque</h1>
                    </div>
                    <div className="pt-24">
                        <Tracker onSearch={manejoBusqueda} />
                    </div>
                </div>
            </div>
            {searchCount > 0 ?
                (
                    !error && embarque?.Summary?.length >= 3 ? (
                        <div id="historial" className="h-auto w-full " ref={scrollRef}>
                            <div className="flex flex-col py-24 w-auto">
                                {/* Estatus espacio */}
                                <div className="px-10 sm:px-10 md:px-20 lg:px-40 w-auto">
                                    <div className="flex flex-row justify-between items-end">
                                        <div className="flex flex-col">
                                            <div>
                                                <img
                                                    className={embarque.State === "EnCoordinacion" ? "h-20 w-20" : "h-16 w-16"}
                                                    src={embarque.TransportMode === "Maritimo" ? procesando : procesando}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <div>
                                                <img
                                                    className={embarque.State === "EnTransito" ? "h-28 w-28" : "h-16 w-16"}
                                                    src={embarque.TransportMode === "Maritimo" ? en_transito : en_transito_aereo}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <div>
                                                <img
                                                    className={embarque.State === "EnPuerto" || embarque.State === "EnAeropuerto" ? "h-28 w-28" : "h-16 w-16"}
                                                    src={embarque.TransportMode === "Maritimo" ? en_puerto : en_aeropuerto}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        {(embarque.State === "DespachoSolicitado" || embarque.State === "Despachado") && (
                                            <div>
                                                <img
                                                    className={embarque.State === "DespachoSolicitado" ? "h-28 w-28" : "h-16 w-16"}
                                                    src={Solicitado}
                                                    alt=""
                                                />
                                            </div>
                                        )}
                                        {embarque.State === "Despachado" && (
                                            <div>
                                                <img className="h-28 w-28" src={Despachado} alt="" />
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-row justify-center pt-4">
                                        <div className="h-1 w-full bg-neutral-200 dark:bg-neutral-600">
                                            <div
                                                className="h-1 bg-lime-500"
                                                style={{ width: getProgressWidth(embarque.State) }}
                                            ></div>
                                        </div>
                                    </div>

                                </div>

                                <div className="flex flex-row justify-center py-8 gap-x-16">
                                    <div>
                                        <h1 className="text-3xl font-semibold">
                                            {
                                                embarque.State === "EnCoordinacion" ?
                                                    "En Coordinacion" :
                                                    embarque.State === "EnTransito" ?
                                                        "En Transito" :
                                                        embarque.State === "EnPuerto" ?
                                                            "En Puerto" :
                                                            embarque.State === "EnAeropuerto" ?
                                                                "En Aeropuerto" :
                                                                embarque.State === "DespachoSolicitado" ?
                                                                    "Despacho Solicitado" :
                                                                    embarque.State === "Despachado" ?
                                                                        "Despachado" :
                                                                        embarque.State === "Retenido" ?
                                                                            "Retenido" : ""
                                            }
                                        </h1>
                                    </div>
                                </div>

                                {/* fin Estatus espacio */}

                                <div className="flex flex-col lg:flex-row xl:flex-row items-center justify-center gap-10 h-auto w-full">
                                    <div className="flex items-center h-56 ">
                                        <h1 className="font-semibold">Fecha estimada de llegada: {formattedDate}</h1>
                                    </div>
                                    <div className=" flex flex-row items-center text-center">
                                        <div>
                                            <p className="font-semibold">Estado de HBL: </p>
                                        </div>
                                        <div className="flex-non">
                                            {embarque.TelexRelease === true ?
                                                <img className="h-56 w-auto" src={TELEX_RELEASE} alt="" />
                                                :
                                                <img className="h-56 w-56 flex-none" src={COPIA_BL} alt="" />

                                            }
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-center h-auto pt-16">
                                    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                                        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                                    <tr>
                                                        <th scope="col" className="py-3 px-6">Estado</th>
                                                        <th scope="col" className="py-3 px-6">Lugar</th>
                                                        <th scope="col" className="py-3 px-6">Fecha</th>
                                                        <th scope="col" className="py-3 px-6">Barco</th>
                                                        <th scope="col" className="py-3 px-6">No.Viaje</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {embarque.Summary.map((contenido) => {
                                                        const dateClass = formatDateClass(contenido.Date);
                                                        return (
                                                            <tr className="bg-white border-b" key={contenido.TravelNumber}>
                                                                <td className={`py-4 px-6 ${dateClass}`}>{contenido.Status}</td>
                                                                <td className="py-4 px-6">{contenido.ActivityPlace}</td>
                                                                <td className="py-4 px-6">{new Date(contenido.Date).toLocaleDateString()}</td>
                                                                <td className="py-4 px-6">{contenido.Ship}</td>
                                                                <td className="py-4 px-6">{contenido.TravelNumber}</td>
                                                            </tr>
                                                        );
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ) : (
                        // Content to display when search is unsuccessful
                        <div className="w-full py-44 flex justify-center items-center" ref={scrollRef}>
                            <h1 className="text-4xl">No se encontró un contenedor con este número</h1>

                        </div>
                    )
                ) : null}
        </div>
    );
}


