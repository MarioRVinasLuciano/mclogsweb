import React, { useState, useEffect, useRef } from 'react';

//Estado Bl imagenes
import TELEX_RELEASE from "../Icons/Telex_release.svg";
import COPIA_BL from "../Icons/Copia_Bl.svg";

import Video2 from "../Videos/Video2.mp4";

export default function Tracking() {
  const [trackSearch, setTrackSearch] = useState('');
  const [trackResult, setTrackResult] = useState('');
  const [error, setError] = useState(null);
  const [isContainer, setIsContainer] = useState(false);
  const [movementType, setMovementType] = useState('');
  const scrollRef = useRef(null);

  useEffect(() => {
    if (trackSearch === '') {
      setTrackResult('');
      setError(null);
    }
  }, [trackSearch]);

  useEffect(() => {
    if (trackResult || error && scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [trackResult]);

  const handleButtonClick = async () => {
    try {
      const response = await fetch(`https://api.mclogs.com/odata/public/GetOrderByText(Value='${trackSearch}')?$select=Oid,State,ETD,ETA,TelexRelease,TransportMode,MovementType,Freights,Summary&$expand=Freights,Summary`);
      const data = await response.json();

      setTrackResult(data);
      setMovementType(data.MovementType);
      setIsContainer(/^([A-Z]{3})([UJZ])([0-9]{6})([0-9])$/.test(trackSearch));

      if (data.Summary && isContainer && (data.MovementType === 'Consolidation' || data.MovementType === 'LCL/LCL')) {
        data.Summary = data.Summary.filter(x => !['EnCoordinacion', 'En Coordinación', 'En Transito', 'EnTransito'].includes(x.Status));
      }

      setTrackResult(data);
      setError(null);
    } catch (error) {
      setError('No se encontraron resultados');
      setTrackResult(null);
    }
  };

  const handleClearSearch = async () => {
    setTrackSearch('');
  };

  const handleSearchChange = (e) => {
    setTrackSearch(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleButtonClick();
    }
  };

  const renderSummary = () => {
    if (!trackResult || !trackResult.Summary) return null;

    return trackResult.Summary.map((x, index) => {
      const dateClass = formatDateClass(x.Date);
      return (
        <tr key={index} className={`bg-slate-50 border-b ${x.Status === 'Descargado' ? 'success' : ''}`}>
          <td className={`py-4 px-6 ${dateClass}`}>{x.Status}</td>
          <td className="py-4 px-6">{x.ActivityPlace || '-'}</td>
          <td className="py-4 px-6">{`${new Date(x.Date).toDateString()}, ${new Date(x.Date).toLocaleTimeString()}`}</td>
          <td className="py-4 px-6">{x.Ship || '-'}</td>
          <td className="py-4 px-6">{x.TravelNumber || '-'}</td>
        </tr>
      );
    });
  };

  const formatDateClass = (dateString) => {
    const date = new Date(dateString);
    const currentDate = new Date();
    if (date > currentDate) {
      return 'text-slate-400'; // Future date
    } else if (date.toDateString() === currentDate.toDateString()) {
      return 'text-black'; // Current date
    } else {
      return 'text-green-500'; // Past date
    }
  };

  const renderFreights = () => {
    if (!trackResult || !trackResult.Freights) return null;

    return trackResult.Freights.map((e, index) => {
      if (e.ContainerNumber === trackSearch) {
        return (
          <div key={index}>
            <div className="containerNumber">{e.ContainerNumber}</div>
            <div className="isContenedor">Contenedor encontrado</div>
          </div>
        );
      }
      return null;
    });
  };

  const renderImages = () => {
    if (!trackResult) return null;

    let imageUrl = '';

    if (trackResult.State === 'Despachado') {
      if (trackResult.TransportMode === 'Maritimo') imageUrl = 'lifeline-barco-03.svg';
      else imageUrl = 'lifeline-avion-03.svg';
    }
    else if (trackResult.State === 'En Puerto' || trackResult.State === 'EnPuerto') {
      if (trackResult.TransportMode === 'Maritimo') imageUrl = 'lifeline-barco-03.svg';
      else imageUrl = 'lifeline-avion-03.svg';
    } else if (trackResult.State === 'En Despacho Solicitado Maritimo') {
      if (trackResult.TransportMode === 'Maritimo') imageUrl = 'lifeline-barco-03.svg';
      else imageUrl = 'lifeline-avion-03.svg';
    }
    else if (trackResult.State === 'En Despacho Solicitado') {
      if (trackResult.TransportMode === 'Maritimo') imageUrl = 'lifeline-barco-03.svg';
      else imageUrl = 'lifeline-avion-03.svg';
    }
    else if (trackResult.State === 'DespachoSolicitado') {
      if (trackResult.TransportMode === 'Maritimo') imageUrl = 'lifeline-barco-03.svg';
      else imageUrl = 'lifeline-avion-03.svg';
    }
    else if (trackResult.State === 'En Transito' || trackResult.State === 'EnTransito') {
      trackResult.State = 'En Transito';
      if (trackResult.TransportMode === 'Maritimo') imageUrl = 'lifeline-barco-02.svg';
      else imageUrl = 'lifeline-avion-02.svg';
    }
    else if (trackResult.State === 'EnCoordinacion' || trackResult.State === 'En Coordinación') {
      if (trackResult.TransportMode === 'Maritimo') imageUrl = 'lifeline-barco-01.svg';
      else imageUrl = 'lifeline-avion-01.svg';
    }

    if (trackResult.State === 'EnCoordinacion' || trackResult.State === 'En Coordinación') trackResult.State = 'En Coordinación';
    if (trackResult.State === 'En Transito' || trackResult.State === 'EnTransito') trackResult.State = 'En Transito';
    if (trackResult.State === 'EnPuerto' || trackResult.State === 'En Puerto') trackResult.State = 'En Puerto';
    if (trackResult.State === 'EnAeropuerto') trackResult.State = 'En Aeropuerto';
    if (trackResult.State === 'DespachoSolicitado') trackResult.State = 'Despacho Solicitado';
    if (trackResult.State === 'Retenido') trackResult.State = 'Retenido';
    if (trackResult.State === 'Despachado') trackResult.State = 'Despachado';
    if (trackResult.State === 'PendienteDeConsolidacion') trackResult.State = 'Pendiente de Consolidación';

    if (trackResult.Summary.length) {
      const gg = trackResult.Summary[trackResult.Summary.length - 1];
      if (gg.Status === 'Descargado' && gg.Date) {
        imageUrl = 'descargado1.png';
        trackResult.State = 'En Almacén';
      }
      if (gg.Status === 'Descargado' && !gg.Date) {
        imageUrl = 'descargado2.png';
      }
      if (gg.Status !== 'Descargado' && (movementType === 'Consolidation' || movementType === 'LCL/LCL')) {
        imageUrl = 'descargado2.png';
        trackResult.State = trackResult.State + ' (En Tránsito Almacén)';
      }
    }

    return (
      <img src={`https://www.mclogs.com/assets/images/status_orders/${imageUrl}`} alt="Status" className="imageNow h-full" />
    );
  };

  return (
    <div className='h-full w-full font-Encode-Sans pt-20'>
      <div className='relative flex flex-col px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40 h-screen items-center justify-center'>
        <video className="absolute z-[-10] inset-0 w-full h-full object-cover brightness-50" src={Video2} loop autoPlay muted controls={false} onContextMenu={(e) => e.preventDefault()} playsInline ></video>
      <div className='w-auto h-2/3 flex flex-col items-center justify-start'>
      <div className="w-full text-center pb-24">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-7xl font-bold text-white">Rastrea tu embarque</h1>
        </div>
        <div className="w-full backdrop-blur h-44 bg-white/40 rounded-lg items-center p-8">
          <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row text-white gap-2 ">
            <input
              type="text"
              id="track_search"
              value={trackSearch}
              onChange={handleSearchChange}
              onKeyDown={handleEnter}
              className="h-12 w-full rounded-lg px-2 text-black bg-gray-100"
              placeholder="Contenedor / Conocimiento de embarque / Referencia / Orden"
            />
            <button
              id="track_button"
              className="bg-blue hover:bg-midblue p-2 w-full  md:w-24 lg:w-24 xl:w-24 rounded-md flex justify-center"
              onClick={handleButtonClick}
              disabled={trackSearch === ''}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
          </div>
          <div className="flex m-4">
            <div className="pr-2 hidden md:block lg:block">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
              </svg>
            </div>
            <div className='hidden md:block lg:block'>
              <p className="text-xs sm:text-sm md:text-normal text-white">
                Rastree su carga ingresando su número de contenedor, conocimiento de embarque,
                orden o referencia para obtener información de seguimiento de carga instantánea
              </p>
            </div>

          </div>
        </div>
      </div> 
      </div>

      {error && <div className="track_no_result_section h-screen flex items-center justify-center" ref={scrollRef}> 
      <div>
      <h1  className='text-3xl sm:text-4xl md:text-4xl lg:text-7xl px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40'>{error}</h1>
      <div className='w-full flex items-center justify-center pt-16'>
            <button className='rounded-md h-10 w-auto bg-oldgold px-4 text-white' onClick={handleClearSearch}>Limpiar busqueda</button>
          </div>
      </div>
      
      
      </div>}

      {trackResult && (
        <div className="relative track_result_section px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40 h-auto pb-16" ref={scrollRef}>
          <div className='w-full flex items-center justify-center pt-16'>
            <button className='rounded-md h-10 w-auto bg-oldgold px-4 text-white' onClick={handleClearSearch}>Limpiar busqueda</button>
          </div>
          <div className="imagesContainer text-center pt-8">
          
            <div className='w-full h-44 flex justify-center'>
              {renderImages()}
            </div>
            <div className='text-center py-4 lg:py-10'>
              <h1 className="text-3xl font-semibold text-aureolin ">{trackResult.State}</h1>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row xl:flex-row items-center justify-center gap-2 md:gap-10 h-auto w-full">
            <div className="flex flex-row items-center text-center h-32 lg:h-56 ">
              <h1 className="font-semibold">Fecha estimada de llegada:</h1>
              <p className='px-10'>{`${new Date(trackResult.ETA).toDateString()},${new Date(trackResult.ETA).toLocaleTimeString()}`}</p>
            </div>
            <div className=" flex flex-row items-center text-center h-32 lg:h-56">
              <div>
                <p className="font-semibold">Estado de HBL: </p>
              </div>
              <div className="flex-non">
                {trackResult.TelexRelease === true ?
                  <img className="h-32 lg:h-56 w-auto" src={TELEX_RELEASE} alt="" />
                  :
                  <img className="h-32 lg:h-56 w-56" src={COPIA_BL} alt="" />
                }
              </div>
            </div>
          </div>
          <div>
            <div className="shadow-md sm:rounded-lg overflow-x-auto ">
              <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400 '>
                <thead className="text-xs text-gray-700 uppercase">
                  <tr className="border-b bg-slate-100">
                    <th scope="col" className="py-3 px-6">Estado</th>
                    <th scope="col" className="py-3 px-6">Lugar</th>
                    <th scope="col" className="py-3 px-6">Fecha</th>
                    <th scope="col" className="py-3 px-6">Barco</th>
                    <th scope="col" className="py-3 px-6">No.Viaje</th>
                  </tr>
                </thead>
                <tbody>
                  {renderSummary()}
                </tbody>
              </table>
            </div>
          </div>
          {renderFreights()}
        </div>
      )}
    </div>
  );
}
