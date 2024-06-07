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
                                <div className='absolute top-20 h-44 w-32 bg-slate-100 flex flex-col gap-y-2 text-center items-start p-2 z-10'>
                                    
                                    <a  className="flex items-center gap-x-2" href="https://www.facebook.com/sharer/sharer.php?u=https://www.mclogs.com/view/3bb714c0-953a-11ee-92b4-09f9186b79fa">
                                    <div>
                                    <svg className="h-5 w-5 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#000000" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
                                    </div>
                                    <div>
                                    Facebook
                                    </div>
                                    </a>

                                    <a className="flex items-center gap-x-2" href="https://www.linkedin.com/shareArticle?mini=true&url=https://www.mclogs.com&source=LinkedIn">
                                    <div>
                                    <svg className="h-5 w-5 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#000000" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                                    </div>
                                    <div>
                                    LinkedIn
                                    </div>
                                    </a>
                                    <a className="flex items-center gap-x-2" href="https://twitter.com/intent/tweet?text=&amp;url=https://www.mclogs.com/view/3bb714c0-953a-11ee-92b4-09f9186b79fa">
                                    <div>
                                    <svg className="h-5 w-5 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#000000" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM351.3 199.3v0c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3 .6 10.4 .8 15.8 .8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3c-9-6-16.4-14.1-21.5-23.6s-7.8-20.2-7.7-31c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34c.2 2.8 .2 5.7 .2 8.5z"/></svg>
                                    </div>
                                    <div>
                                        Twitter
                                    </div>
                                    </a>
                                    <a className="flex items-center gap-x-2" href="whatsapp://send?text=https://www.mclogs.com/view/3bb714c0-953a-11ee-92b4-09f9186b79fa">
                                    <div>
                                    <svg className="h-5 w-5 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#000000" d="M92.1 254.6c0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6L152 365.2l4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8c0-35.2-15.2-68.3-40.1-93.2c-25-25-58-38.7-93.2-38.7c-72.7 0-131.8 59.1-131.9 131.8zM274.8 330c-12.6 1.9-22.4 .9-47.5-9.9c-36.8-15.9-61.8-51.5-66.9-58.7c-.4-.6-.7-.9-.8-1.1c-2-2.6-16.2-21.5-16.2-41c0-18.4 9-27.9 13.2-32.3c.3-.3 .5-.5 .7-.8c3.6-4 7.9-5 10.6-5c2.6 0 5.3 0 7.6 .1c.3 0 .5 0 .8 0c2.3 0 5.2 0 8.1 6.8c1.2 2.9 3 7.3 4.9 11.8c3.3 8 6.7 16.3 7.3 17.6c1 2 1.7 4.3 .3 6.9c-3.4 6.8-6.9 10.4-9.3 13c-3.1 3.2-4.5 4.7-2.3 8.6c15.3 26.3 30.6 35.4 53.9 47.1c4 2 6.3 1.7 8.6-1c2.3-2.6 9.9-11.6 12.5-15.5c2.6-4 5.3-3.3 8.9-2s23.1 10.9 27.1 12.9c.8 .4 1.5 .7 2.1 1c2.8 1.4 4.7 2.3 5.5 3.6c.9 1.9 .9 9.9-2.4 19.1c-3.3 9.3-19.1 17.7-26.7 18.8zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM148.1 393.9L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5c29.9 30 47.9 69.8 47.9 112.2c0 87.4-72.7 158.5-160.1 158.5c-26.6 0-52.7-6.7-75.8-19.3z"/></svg>
                                    </div>
                                    <div>
                                        Whatsapp
                                    </div>
                                    </a>
                                    <a className="flex items-center gap-x-2"href="mailto:?subject=Noticia%20-%20MC%20Logistics&body=https://www.mclogs.com/view/3bb714c0-953a-11ee-92b4-09f9186b79fa">
                                    <div>
                                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#000000" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                                    </div>
                                    <div>
                                        Email
                                    </div>
                                    </a>
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
