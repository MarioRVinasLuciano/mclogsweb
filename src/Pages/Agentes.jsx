import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import imagen_background from "../Images/Agentes/introimg2.webp";


export default function Agentes() {
  const [agents, setAgents] = useState([]);
  const [selectedContinent, setSelectedContinent] = useState("");
  const [agentsInContinent, setAgentsInContinent] = useState([]);
  const [search, setSearch] = useState("");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://support.consilialogistics.com/mclogs/agents"
        );
        const data = await response.json();
        setAgents(data);
        setSelectedContinent("");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const agentsInSelectedContinent = agents.filter(agent =>
      selectedContinent === "" || agent.continent === selectedContinent
    );
    setAgentsInContinent(agentsInSelectedContinent);
  }, [selectedContinent, agents]);


  const handleContinentClick = (continent) => {
    setSelectedContinent(continent);
  };

  const buscar = (e) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);
    const filteredAgents = agents.filter(agent => {
      const agentData = [agent.name.toLowerCase(), agent.country.toLowerCase(), agent.continent.toLowerCase()].join(" ");
      return agentData.includes(query);
    });
    setAgentsInContinent(filteredAgents);
  }

  const uniqueCountryNames = [...new Set(agentsInContinent.map(agent => agent.country.trimEnd()))];

  

  const continents = [
    'Asia', 
    'Oceania', 
    'Europa', 
    'África', 
    'Norte América', 
    'Centro América', 
    'Sur América'
  ];




  return (
    <div className="h-auto w-full font-Encode-Sans ">
      <div className="flex flex-col h-auto w-full items-center gap-y-6 pt-20">
      <div className="flex justify-center items-center bg-center w-full h-40 md:h-80" style={{ backgroundImage: `url(${imagen_background})`, backgroundSize: 'cover' }}>
                <div className="flex flex-col text-center">
                    <h1 className="text-white text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-semibold">{t("our_agents")}</h1>
                    <p className="text-white font-regular pt-4 px-2">{t("our_agents_description")}</p>
                </div>
            </div>
      </div>

      <div className="flex flex-col h-auto w-full pt-4 md:pt-16 pb-20 sm:pb-56 px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40">
        <div className="flex flex-col w-full  h-auto gap-y-6 pb-16">
          <div className="bg-white pt-4 w-full">
            <div className="grid xl:grid-cols-7 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 sm:grid-rows-3 md:grid-rows-3 lg:grid-rows-1 gap-y-4 grid-rows-auto gap-x-6 w-full justify-items-center">
              {continents.map((continent, index) => (
                <button
                  key={index}
                  className={`hover:border-aureolin border-2 w-full h-auto p-2 rounded-md text-aureolin ${selectedContinent === continent ? 'bg-aureolin text-white border-0' : ''}`}
                  onClick={() => handleContinentClick(continent)}
                >
                  {continent}
                </button>
              ))}
            </div>
            
          </div>
          <div className="rounded-md w-full h-10 border border-slate-400">
            <input className="h-full w-full rounded-md p-2 " placeholder="Buscar" onChange={buscar} ></input>
          </div>

        </div>


        <div>
          <div className="flex flex-col w-auto h-auto gap-6">
            {uniqueCountryNames.length > 0 ? (
              uniqueCountryNames.map(countryName => (
                <div key={countryName}>
                  <h1 className="text-2xl font-semibold pb-6 text-blue">{countryName}</h1>
                  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {agentsInContinent
                      .filter(agent => agent.country.trimEnd() === countryName)
                      .map(agent => (
                        <div key={agent.oid} className="bg-white shadow-md rounded-md p-4 mb-4 w-auto h-auto overflow-auto">
                          <p className="font-bold text-slate-600">{agent.name}</p>
                          <p className=" font-semibold text-slate-400">Ciudad: {agent.town}</p>
                          <p>
                            {agent.web_page.length !== 0 ? (
                              <span>Pagina: <a href={agent.web_page} className="text-sky-600">{agent.web_page}</a></span>
                            ) : (
                              ""
                            )}
                          </p>
                          <p>Email: {agent.email}</p>
                          <p>Tipo: {agent.type}</p>
                        </div>
                      ))}
                  </div>
                </div>
              ))
            ) : (
              <p>No se encontraron agentes.</p>
            )}
          </div>


        </div>
      </div>
    </div>
  );
}

