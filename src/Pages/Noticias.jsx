import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


export default function Noticias() {
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
      console.log(noticias)
    fetchData();
  }, []);

      
        return (
            <div className="h-sreen w-full font-quicksand  pb-12 pt-16 px-10 sm:px-10 md:px-20 lg:px-40">
            <div className="flex h-36 w-full justify-center items-center" >
                <h1 className="lg:text-5xl text-4xl font-semibold">Noticias</h1>
            </div> 
          <div className="grid lg:grid-cols-4 grid-cols-1  gap-6 lg:gap-10">
            {noticias.map((contenido, index) => (
              <div key={contenido.oid} className={ index === 0 ? "rounded-md bg-white shadow-xl transform hover:scale-105 hover:-translate-y-2 transition-transform duration-200 lg:col-span-2 lg:row-span-1":"rounded-md bg-white shadow-xl transform hover:scale-105 hover:-translate-y-2 transition-transform duration-200 lg:h-auto lg:col-span-1 lg:row-span-1 sm:col-span-2 sm:row-span-1"}>
                <Link to={`/articulo/${contenido.oid}`}>
                  <div className="flex flex-col h-full">
                    <div>
                      <img className={index === 0 ? "w-full h-full rounded-md object-cover":"w-full h-48 rounded-md object-cover"} src={`https://support.consilialogistics.com/public/${contenido.image}`} alt="" />
                    </div>
                    <div className="p-4 flex flex-col justify-between flex-1">
                      <div>
                        <p className="text-xl">{contenido.title}</p>
                        <p className="text-sm text-slate-500">{contenido.subtitle}</p>
                        <p className="text-sm text-slate-500 pt-4">{contenido.gancho}</p>
                      </div>
                      <div className="flex flex-row justify-between p-2">
                          <div>
                            <p className="text-md text-slate-500">{contenido.type}</p>
                          </div>
                          {
                            index === 0? 
                            <div className="rounded-md p-2 w-auto h-auto bg-red-300 animate-pulse">
                              <p className="text-sm">Ultimas noticias</p>
                            </div>
                          :
                            ""
                            
                          }
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          </div>
        );
      }
