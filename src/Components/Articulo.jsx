import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';


function ArticulosPagina() {

    const [noticias, setNoticias] = useState([]);


    useEffect (() => {
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
        <div className='h-full w-full relative font-Encode-Sans pt-24 px-10 sm:px-10 md:px-20 lg:px-40'>
            <div className='flex flex-col justify-center items-center pb-12'>
                <div className="flex flex-col justify-center items-center">
                    <div className='w-full text-start'>
                        <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-bold mb-2">{contenido.title}</h1>
                    </div>
                    <div className='flex flex-col justify-between py-4 w-full'>
                        <div>
                            <p className="text-md text-slate-500">Fuente: {contenido.author}</p>
                        </div>
                        <div>
                            <p className="text-md text-slate-500">{contenido.create_in}</p>
                        </div>
                    </div>
                    <div className='h-auto w-full flex justify-center items-center'>
                        <img className=" h-auto mb-2" src={`https://support.consilialogistics.com/public/${contenido.image}`} alt="" />
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
