import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from "react-i18next";

// Estado Bl imagenes
import TELEX_RELEASE from "../Icons/telexRelease_hbl.png";
import COPIA_BL from "../Icons/copia_hbl.png";

import Video2 from "../Videos/Video2.mp4";

export default function Tracking() {
  const { t } = useTranslation();
  const [trackSearch, setTrackSearch] = useState('');
  const [trackResult, setTrackResult] = useState(null);
  const [error, setError] = useState(null);
  const [isContainer, setIsContainer] = useState(false);
  const [movementType, setMovementType] = useState('');
  const scrollRef = useRef(null);

  useEffect(() => {
    if (trackSearch === '') {
      setTrackResult(null);
      setError(null);
    }
  }, [trackSearch]);

  useEffect(() => {
    if ((trackResult || error) && scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [trackResult, error]);

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

  const handleClearSearch = () => {
    setTrackSearch('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
          <td className={`py-4 px-6 text-blue`}>{x.Description}</td>
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
    if (!trackResult || !trackResult.State) return null;

    let imageUrl = '';

    switch(trackResult.State) {
      case 'Despachado':
      case 'En Puerto':
      case 'EnPuerto':
        imageUrl = trackResult.TransportMode === 'Maritimo' ? 'lifeline-barco-03.svg' : 'lifeline-avion-03.svg';
        break;
      case 'En Despacho Solicitado Maritimo':
      case 'En Despacho Solicitado':
      case 'DespachoSolicitado':
        imageUrl = trackResult.TransportMode === 'Maritimo' ? 'lifeline-barco-03.svg' : 'lifeline-avion-03.svg';
        break;
      case 'En Transito':
      case 'EnTransito':
        trackResult.State = 'En Transito';
        imageUrl = trackResult.TransportMode === 'Maritimo' ? 'lifeline-barco-02.svg' : 'lifeline-avion-02.svg';
        break;
      case 'EnCoordinacion':
      case 'En Coordinación':
        imageUrl = trackResult.TransportMode === 'Maritimo' ? 'lifeline-barco-01.svg' : 'lifeline-avion-01.svg';
        break;
      default:
        return null;
    }

    const stateKey = trackResult.State.toLowerCase().replace(/ /g, "_");
    console.log(`Translating state key: ${stateKey}`); // Debugging line

    return (
      <img src={`https://www.mclogs.com/assets/images/status_orders/${imageUrl}`} alt="Status" className="imageNow h-full" />
    );
  };

  const currentDate = new Date();
  const etaDate = trackResult ? new Date(trackResult.ETA) : null;
  const isAfterEta = etaDate && currentDate > etaDate;

  return (
    <div className='h-full w-full font-Encode-Sans pt-20'>
      <div className='relative flex flex-col px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40 h-screen items-center justify-center'>
        <video className="absolute z-[-10] inset-0 w-full h-full object-cover brightness-50" src={Video2} loop autoPlay muted controls={false} onContextMenu={(e) => e.preventDefault()} playsInline ></video>
        <div className='w-auto h-2/3 flex flex-col items-center justify-start'>
          <div className="w-full text-center pb-24">
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-7xl font-bold text-white">{t("track")}</h1>
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
                placeholder={t("track_placeholder")}
              />
              <button
                id="track_button"
                className="bg-blue hover:bg-midblue p-2 w-full md:w-24 lg:w-24 xl:w-24 rounded-md flex justify-center"
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
                 {t("track_guide")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {error && <div className="track_no_result_section h-screen flex items-center justify-center" ref={scrollRef}>
        <div>
          <h1 className='text-3xl sm:text-4xl md:text-4xl lg:text-7xl px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40'>{error}</h1>
          <div className='w-full flex items-center justify-center pt-16'>
           <button onClick={handleClearSearch} className="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-slate-300 rounded hover:bg-white group py-1.5 px-2.5">
              <span className="w-56 h-48 rounded bg-oldgold absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-bluemunsell transition-colors duration-300 ease-in-out group-hover:text-white">Limpiar busqueda</span>
            </button>
          </div>
        </div>
      </div>}

      {trackResult && (
        <div className="relative track_result_section px-10 sm:px-10 md:px-20 lg:px-30 xl:px-40 2xl:px-64 h-auto pb-16" ref={scrollRef}>
          <div className="imagesContainer text-center mt-8 rounded-md bg-slate-100 shadow-md">
            <div className='w-full h-32 flex justify-center py-4'>
              {renderImages()}
            </div>
            <div className='text-center py-4'>
              <h1 className="text-3xl font-semibold text-Estadoverde ">{trackResult.State && <p>{t(`state.${trackResult.State.toLowerCase().replace(/ /g, "_")}`)}</p>}</h1>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row xl:justify-between gap-5 h-auto w-full py-6">
            <div className="flex flex-col items-center text-center h-44 w-full rounded-md bg-slate-100 p-4 shadow-md">
              <div>
                {trackResult.ActivityPlace === "CAUCEDO" || isAfterEta ? (
                  <h1 className="font-semibold text-2xl text-bluemunsell">{t("eta_past")}</h1>
                ) : (
                  <h1 className="font-semibold text-2xl text-bluemunsell">{t("eta_future")}</h1>
                )}
              </div>
              <div>
                <p className='pt-10 text-xl font-bold text-gray-500'>{etaDate.toLocaleDateString('en-GB')}</p>
              </div>
            </div>
            <div className=" flex flex-col items-center text-center h-44 w-full rounded-md bg-slate-100 p-4 shadow-md">
              <div>
                <p className=" font-semibold text-bluemunsell text-2xl">{t("hbl_state")}</p>
              </div>
              <div className="flex-non">
                {trackResult.TelexRelease === true ?
                  <img className="h-28 w-34" src={TELEX_RELEASE} alt="TELEX RELEASE" />
                  :
                  <img className="h-28 w-34" src={COPIA_BL} alt="COPIA BL" />
                }
              </div>
            </div>
            <div className="flex flex-col items-center text-center h-44 w-full rounded-md bg-slate-100 p-4 shadow-md gap-y-10">
              <h1 className="font-semibold text-bluemunsell text-2xl">{t("movement_type")}</h1>
              <p className='font-bold text-xl text-gray-500'>{trackResult.MovementType === "Consolidation" ? t("consolidado") : trackResult.MovementType}</p>
            </div>
          </div>
          <div>
            <div className="shadow-md sm:rounded-lg overflow-x-auto">
              <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400 '>
                <thead className="text-xs text-gray-700 uppercase">
                  <tr className="border-b bg-slate-100">
                    <th scope="col" className="py-3 px-6">{t("table_head_state")}</th>
                    <th scope="col" className="py-3 px-6">{t("table_head_descripcion")}</th>
                    <th scope="col" className="py-3 px-6">{t("table_head_place")}</th>
                    <th scope="col" className="py-3 px-6">{t("table_head_date")}</th>
                    <th scope="col" className="py-3 px-6">{t("table_head_ship")}</th>
                    <th scope="col" className="py-3 px-6">{t("table_head_No")}</th>
                  </tr>
                </thead>
                <tbody>
                  {renderSummary()}
                </tbody>
              </table>
            </div>
          </div>
          {renderFreights()}
          <div className='w-full flex items-center justify-center pt-16'>
            <button onClick={handleClearSearch} className="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-slate-300 rounded hover:bg-white group py-1.5 px-2.5">
              <span className="w-56 h-48 rounded bg-oldgold absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-bluemunsell transition-colors duration-300 ease-in-out group-hover:text-white">{t("clean_search_btn")}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
