import React, { useState, useEffect } from "react";
import contenedor from "../Images/Rastrear/contenedor_bg.jpg";
import Tracker from "../Components/Trak";

//import imagenes
import procesando from "../Icons/procesando.png";
import en_transito from "../Icons/en_transito.png";
import en_puerto from "../Icons/en_puerto.png";

export default function Rastreo() {
    const [valor, setValor] = useState("");
    const [embarque, setEmbarque] = useState("");
    const [error, setError] = useState(false);
    const [formattedDate, setFormattedDate] = useState("");

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


    return (
        <div className="h-full w-full font-quicksand">
            <div className="w-auto h-screen" style={{ height: "700px" }}>
                <div className="flex flex-col relative h-full bg-center" style={{ backgroundImage: `url(${contenedor})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="w-full">
                        <h1 className="text-4xl pt-20 pl-24 font-semibold">Rastrea tu embarque</h1>
                    </div>
                    <div className="px-24 pt-24">
                        <Tracker onSearch={manejoBusqueda} />
                    </div>
                </div>
            </div>

            {
                !error && embarque?.Summary?.length >= 3 ?
                    <div className="h-auto w-full">
                        <div className="flex flex-col px-24 py-24">

                            {/* Estatus espacio */}
                            <div className="flex flex-row justify-center gap-x-24">
                                <div className="flex flex-col">
                                    <div>
                                        <img className="h-16 w-16" src={procesando} alt="" />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <div>
                                        <img className="h-16 w-16" src={en_transito} alt="" />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <div>
                                        <img className="h-16 w-16" src={en_puerto} alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-row justify-center pt-4">
                                <div className="flex flex-row justify-end">
                                    <div className={embarque.Summary[0]?.Happened === true ? "bg-green-400 rounded-full h-6 w-6" : "bg-slate-100 rounded-full h-6 w-6"}></div>
                                    <div className={embarque.Summary[1]?.Happened === true ? "bg-green-400 h-1 w-36 mt-3" : "bg-slate-100 h-1 w-36 mt-3"}></div>
                                </div>
                                <div className="flex flex-row justify-end">
                                    <div className={embarque.Summary[1]?.Happened === true ? "bg-green-400 rounded-full h-6 w-6" : "bg-slate-100 rounded-full h-6 w-6"}></div>
                                    <div className={embarque.Summary[2]?.Happened === true ? "bg-green-400 h-1 w-36 mt-3" : "bg-slate-100 h-1 w-36 mt-3"}></div>
                                </div>
                                <div className="flex flex-row justify-end">
                                    <div className={embarque.Summary[2]?.Happened === true ? "bg-green-400 rounded-full h-6 w-6" : "bg-slate-100 rounded-full h-6 w-6"}></div>
                                </div>
                            </div>

                            <div className="flex flex-row justify-center pt-4 gap-x-16">
                                <div className="flex flex-row w-32 justify-center">
                                    {embarque.Summary[0]?.Happened === true && embarque.Summary[1]?.Happened === false && embarque.Summary[2]?.Happened === false ? <p>En coordinación</p> : ""}
                                </div>
                                <div className="flex flex-row w-24 justify-center">
                                    {embarque.Summary[0]?.Happened === true && embarque.Summary[1]?.Happened === true && embarque.Summary[2]?.Happened === false ? <p>En transito</p> : ""}
                                </div>
                                <div className="flex flex-row w-24 justify-center">
                                    {embarque.Summary[2]?.Happened === true ? <p>En puerto</p> : ""}
                                </div>
                            </div>

                            {/* fin Estatus espacio */}

                            <div className="h-auto w-full pt-10 px-64">
                                <div>
                                    <h1 className="font-semibold">Fecha estimada de llegada: {formattedDate}</h1>
                                </div>
                                <div className="pt-8">
                                    <h1 className="font-semibold">Estado de HBL: Copia</h1>
                                </div>
                            </div>


                            {/* tabla */}
                            <div class="flex items-center justify-center h-auto pt-16">
                                <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                                    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                                                <tr>
                                                    <th scope="col" class="py-3 px-6">Estado</th>
                                                    <th scope="col" class="py-3 px-6">Lugar</th>
                                                    <th scope="col" class="py-3 px-6">Fecha</th>
                                                    <th scope="col" class="py-3 px-6">Barco</th>
                                                    <th scope="col" class="py-3 px-6">No.Viaje</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    
                                                    <tr class="bg-white border-b">
                                                    <td class="py-4 px-6">En Coordinación</td>
                                                    <td class="py-4 px-6">82926417</td>
                                                    <td class="py-4 px-6">Wed May 15 2024, 16:08:47</td>
                                                    <td class="py-4 px-6">BABUN EXPRESS</td>
                                                    <td class="py-4 px-6">264S</td>
                                                    </tr>
                                                }
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                        </div>



                    </div>

                    :


                    <div className="w-full py-44 flex justify-center items-center">
                        <h1 className="text-4xl">No se encontró un contendor con este número</h1>
                    </div>
            }


            <div className="bg-white">
                <hr className=" h-px my-8 bg-gray-200 border-0" />
            </div>
        </div>
    );
}
