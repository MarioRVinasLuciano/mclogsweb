import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function ArticulosPagina() {

    const [noticias, setNoticias] = useState([]);
    const [compartir,setCompartir] = useState(false);

    const Comparte = () => {
        setCompartir(!compartir)
    }


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://support.consilialogistics.com/mclogs/news?search="
                );
                const data = await response.json();
                setNoticias(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);

    //Recivo parametro en este caso id
    let { oid } = useParams();

    console.log(oid)
    //busco objeto con el mimso numero
    const contenido = noticias.find((noticias) => noticias.oid === (oid));

    if (!contenido) {
        return <div>No se encontro contenido</div>;
    }

    return (
        <div className='h-full w-full relative font-Encode-Sans pt-32 px-10 sm:px-10 md:px-20 lg:px-40'>
            <div className='flex flex-col justify-center items-center pb-12'>
                <div className="flex flex-col justify-center items-center">
                    <div className='w-full text-start'>
                        <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-bold mb-2">{contenido.title}</h1>
                    </div>
                    <div className='flex flex-row justify-between py-4 w-full'>
                        <div className='flex flex-col'>
                            <div>
                                <p className="text-md text-slate-500">Fuente: {contenido.author}</p>
                            </div>
                            <div>
                                <p className="text-md text-slate-500">{contenido.create_in}</p>
                            </div>
                        </div>
                        <div className='flex items-center'>
                           <button onClick={Comparte}>
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-slate-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                            </svg>
                           </button>
                           {compartir === true ? 
                              ""
                            :
                                ""
                            }
                        </div>
                    </div>
                    <div className='h-auto w-full flex justify-center items-center'>
                        <img className=" h-auto w-full mb-2" src={`https://support.consilialogistics.com/public/${contenido.image}`} alt="" />
                    </div>
                    <p className="text-sm text-slate-500 mb-2">{contenido.subtitle}</p>

                    <div className=''>
                        <p className="mt-4" style={{ whiteSpace: 'pre-wrap' }}>{contenido.text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArticulosPagina;
