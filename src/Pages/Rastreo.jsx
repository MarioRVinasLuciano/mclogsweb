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
    const scrollRef = useRef(null);

    const manejoBusqueda = async (valor_entrada) => {
        console.log("Search value:", valor_entrada);
        await fetchData(valor_entrada);
    };

    const fetchData = async (valor_entrada) => {
        try {
            const respuesta = await fetch(
                `https://api.mclogs.com/odata/public/GetOrderByText(Value='${valor_entrada}')?$select=Oid,State,ETD,ETA,TelexRelease,TransportMode,MovementType,Freights,Summary&$expand=Freights,Summary`
            );
            const datos = await respuesta.json();
            setSearchPerformed(true);
            setEmbarque(datos)
            console.log(datos);
            setError(false);
        } catch (error) {
            console.error("No se encontro un embarque con este numero", error);
            setError(true);
        }
    };


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

    useEffect(() => {
        if (searchPerformed && scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [searchPerformed]);

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
            {searchPerformed ?
                (
                    !error && embarque?.Summary?.length >= 3 ? (
                        <div className="h-auto w-full" ref={scrollRef}>
                            <div className="flex flex-col py-24">
                                {/* Estatus espacio */}
                                <div className="hidden md:flex lg:flex xl:flex flex-row justify-center items-end gap-x-24">
                                    <div className="flex flex-col">
                                        <div>
                                            <img className={embarque.State === "EnCoordinacion" ? "h-20 w-20" : "h-16 w-16"} src={embarque.TransportMode === "Maritimo" ? procesando : procesando} alt="" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <div>
                                            <img className={embarque.State === "EnTransito" ? "h-28 w-28" : "h-16 w-16"} src={embarque.TransportMode === "Maritimo" ? en_transito : en_transito_aereo} alt="" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <div>
                                            <img className={embarque.State === "EnPuerto" || embarque.State === "EnAeropuerto" ? "h-28 w-28" : "h-16 w-16"} src={embarque.TransportMode === "Maritimo" ? en_puerto : en_aeropuerto} alt="" />
                                        </div>
                                    </div>
                                    {
                                        embarque.State === "DespachoSolicitado" || embarque.State === "Despachado" ?
                                            <div>
                                                <img className={embarque.State === "DespachoSolicitado" ? "h-28 w-28" : "h-16 w-16"} src={Solicitado} alt="" />
                                            </div>
                                            : ""

                                    }
                                    {
                                        embarque.State === "Despachado" ?
                                            <div>
                                                <img className={embarque.State === "Despachado" ? "h-28 w-28" : "h-16 w-16"} src={Despachado} alt="" />
                                            </div>
                                            : ""
                                    }

                                </div>

                                <div className="hidden md:flex lg:flex xl:flex flex-row justify-center pt-4">
                                    <div className="flex flex-row justify-end">
                                        <div className={embarque.State === "EnCoordinacion" || embarque.State === "EnTransito" || embarque.State === "EnPuerto" || embarque.State === "Despachado" || embarque.State === "DespachoSolicitado" || embarque.State === "EnAeropuerto" ? "bg-green-400 rounded-full h-6 w-6 " : "bg-slate-100 rounded-full h-6 w-6"}></div>
                                        <div className={embarque.State === "EnTransito" || embarque.State === "EnPuerto" || embarque.State === "Despachado" || embarque.State === "DespachoSolicitado" || embarque.State === "EnAeropuerto" ? "bg-green-400 h-1 w-36 mt-3" : "bg-slate-100 h-1 w-36 mt-3"}></div>
                                    </div>
                                    <div className="flex flex-row justify-end">
                                        <div className={embarque.State === "EnTransito" || embarque.State === "EnPuerto" || embarque.State === "Despachado" || embarque.State === "DespachoSolicitado" || embarque.State === "EnAeropuerto" ? "bg-green-400 rounded-full h-6 w-6" : "bg-slate-100 rounded-full h-6 w-6"}></div>
                                        <div className={embarque.State === "EnPuerto" || embarque.State === "Despachado" || embarque.State === "DespachoSolicitado" || embarque.State === "EnAeropuerto" ? "bg-green-400 h-1 w-36 mt-3" : "bg-slate-100 h-1 w-36 mt-3"}></div>
                                    </div>
                                    <div className="flex flex-row justify-end">
                                        <div className={embarque.State === "EnPuerto" || embarque.State === "Despachado" || embarque.State === "DespachoSolicitado" || embarque.State === "EnAeropuerto" ? "bg-green-400 rounded-full h-6 w-6" : "bg-slate-100 rounded-full h-6 w-6"}></div>
                                        {
                                            embarque.State === "DespachoSolicitado" || embarque.State === "Despachado"?
                                                <div className="flex flex-row justify-end">
                                                    <div className={embarque.State === "DespachoSolicitado" || embarque.State === "Despachado" ? "bg-green-400 h-1 w-36 mt-3" : "bg-slate-100 h-1 w-36 mt-3"}></div>
                                                </div> : ""
                                    }
                                    </div>
                                    {
                                        embarque.State === "DespachoSolicitado" || embarque.State === "Despachado" ?
                                            <div className="flex flex-row justify-end">
                                                <div className={embarque.State === "DespachoSolicitado" || embarque.State === "Despachado"  ? "bg-green-400 rounded-full h-6 w-6" : "bg-slate-100 rounded-full h-6 w-6"}></div>
                                                <div className={embarque.State === "DespachoSolicitado" || embarque.State === "Despachado"  ? "bg-green-400 h-1 w-36 mt-3" : "bg-slate-100 h-1 w-36 mt-3"}></div>
                                            </div>
                                            : ""
                                    }
                                    {
                                        embarque.State === "Despachado" ?
                                            <div className="flex flex-row justify-end">
                                                <div className={embarque.State === "Despachado" ? "bg-green-400 rounded-full h-6 w-6" : "bg-slate-100 rounded-full h-6 w-6"}></div>
                                            </div>
                                            : ""
                                    }
                                </div>

                                <div className="flex flex-row justify-center pt-4 gap-x-16">
                                    <div>
                                        <h1>
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
                                                    {
                                                        embarque.Summary.map((contenido) => (
                                                            <tr className="bg-white border-b">
                                                                <td className="py-4 px-6">{contenido.Status}</td>
                                                                <td className="py-4 px-6">{contenido.ActivityPlace}</td>
                                                                <td className="py-4 px-6">{contenido.Date}</td>
                                                                <td className="py-4 px-6">{contenido.Ship}</td>
                                                                <td className="py-4 px-6">{contenido.TravelNumber}</td>
                                                            </tr>
                                                        ))
                                                    }
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


