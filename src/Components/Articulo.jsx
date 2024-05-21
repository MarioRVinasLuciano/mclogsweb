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
        <div className='h-full w-full relative font-Encode-Sans pt-12'>
            <div className='flex flex-col justify-center items-center px-24 pb-12'>
                <div className="flex flex-col justify-center items-center p-4">
                    <div className='w-2/3'>
                        <h1 className=" text-2xl font-bold mb-2">{contenido.title}</h1>
                    </div>
                    <div className='flex flex-col justify-between py-4 w-2/3'>
                        <div>
                            <p className="text-md text-slate-500">Fuente: {contenido.author}</p>
                        </div>
                        <div>
                            <p className="text-md text-slate-500">{contenido.create_in}</p>
                        </div>
                    </div>
                    <div className='h-auto w-full flex justify-center items-center'>
                        <img className="w-2/3 h-auto mb-2" src={`https://support.consilialogistics.com/public/${contenido.image}`} alt="" />
                    </div>
                    <p className="text-sm text-slate-500 mb-2">{contenido.subtitle}</p>
                
                    <div className='w-2/3'>
                        <p className="mt-4" style={{ whiteSpace: 'pre-wrap' }}>{contenido.text}</p>
                    </div>
                </div>
            </div>
            <div className="bg-white">
                    <hr className=" h-px my-8 bg-gray-200 border-0" />
                </div>

        </div>
    );
}

export default ArticulosPagina;
