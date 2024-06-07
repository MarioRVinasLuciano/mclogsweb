import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function ArticulosPagina() {

    const [noticias, setNoticias] = useState([]);
    const [compartir, setCompartir] = useState(false);

    const Comparte = () => {
        setCompartir(!compartir)
    }


    function formatDate(dateString) {
        const date = new Date(dateString);
        const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();

        return `${day} ${month} ${year}`;
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
        <div className='h-full w-full relative font-Encode-Sans pt-32 px-10 sm:px-10 md:px-20 lg:px-40 xl:px-[20%]'>
            <div className='flex flex-col justify-center items-center pb-12'>
                <div className='w-full text-start'>
                    <p className="text-sm text-slate-500">{contenido.type}</p>
                </div>
                <div className="flex flex-col items-center w-full">
                    <div className='w-full text-start'>
                        <h1 className="text-md sm:text-md md:text-4xl lg:text-4xl font-semibold mb-2">{contenido.title}</h1>
                    </div>
                    <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row justify-between py-4 w-full'>
                        <div className='flex flex-col w-full'>
                            <div>
                                <p className="text-md text-slate-500">{formatDate(contenido.create_in)}</p>
                            </div>
                            <div className='flex flex-wrap gap-2 py-4'>
                                {contenido.tags.split(',').map((tag, index) => (
                                    <div key={index} className='rounded-full bg-slate-100 text-center px-4 py-1'>
                                        <p className='text-sm'>{tag.trim()}</p>
                                    </div>
                                ))}
                            </div>



                        </div>
                        <div className='relative flex flex-row items-center pt-4'>

                            <button onClick={Comparte} className='flex'>
                                <p className='text-slate-500 pr-4 '>Compartir</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-slate-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                                </svg>
                            </button>
                            {compartir === true ?
                                <div className='absolute top-20 h-44 w-40 bg-slate-100 flex flex-col gap-y-2 text-center p-2 z-10'>
                                    <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.mclogs.com/view/3bb714c0-953a-11ee-92b4-09f9186b79fa">Facebook</a>
                                    <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://www.mclogs.com&source=LinkedIn">LinkedIn</a>
                                    <a href="https://twitter.com/intent/tweet?text=&amp;url=https://www.mclogs.com/view/3bb714c0-953a-11ee-92b4-09f9186b79fa">Twitter</a>
                                    <a href="whatsapp://send?text=https://www.mclogs.com/view/3bb714c0-953a-11ee-92b4-09f9186b79fa">Whatsapp</a>
                                    <a href="mailto:?subject=Noticia%20-%20MC%20Logistics&body=https://www.mclogs.com/view/3bb714c0-953a-11ee-92b4-09f9186b79fa">Email</a>
                                </div>
                                :
                                ""
                            }
                        </div>
                    </div>
                    <div className='h-full w-full flex justify-center items-center'>
                        <div className=''>
                            <img className="relative h-[38rem] w-[100rem] mb-2 object-cover " src={`https://support.consilialogistics.com/public/${contenido.image}`} alt="" />
                        </div>
                    </div>
                    <p className="text-sm text-slate-500 mb-2">{contenido.subtitle}</p>

                    <div className=''>
                        <p className="mt-4" style={{ whiteSpace: 'pre-wrap' }}>{contenido.text}</p>
                        <p className="text-xl text-slate-500 pt-5">{contenido.author}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArticulosPagina;
