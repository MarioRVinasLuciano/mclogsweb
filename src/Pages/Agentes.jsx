import React, { useState, useEffect } from "react";

import imagen_background from "../Images/Agentes/introimg2.jpg";


export default function Agentes() {
  const [agents, setAgents] = useState([]);
  const [selectedContinent, setSelectedContinent] = useState("");
  const [agentsInContinent, setAgentsInContinent] = useState([]);
  const [search, setSearch] = useState("");

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

  const continents = [...new Set(agents.map((agent) => agent.continent))];

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



  return (
    <div className="h-auto w-full font-Encode-Sans ">
      <div className="flex flex-col h-auto w-full items-center gap-y-6 pt-20">
      <div className="flex justify-center items-center bg-center w-full h-40 md:h-80" style={{ backgroundImage: `url(${imagen_background})`, backgroundSize: 'cover' }}>
                <div className="flex flex-col text-center">
                    <h1 className="text-white text-2xl lg:text-5xl xl:text-6xl font-semibold">Nuestros Agentes</h1>
                    <p className="text-white font-regular pt-4 px-2">Contamos con agentes en todos los continentes</p>
                </div>
            </div>
      </div>

      <div className="flex flex-col h-auto w-full pt-4 md:pt-16 pb-20 sm:pb-56 px-10 sm:px-10 md:px-20 lg:px-40">
        <div className="flex flex-col w-full  h-auto gap-y-6 pb-16">
          <div className="bg-white pt-4 md:p-4 w-full">
            <div className="grid xl:grid-cols-7 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 sm:grid-rows-2 md:grid-rows-2 lg:grid-rows-1 gap-y-6 grid-rows-auto gap-x-20 w-full justify-items-center">
              {continents.map((continent, index) => (
                <button
                  key={index}
                  className={`hover:border-aureolin border-2 w-full md:w-36 h-10 rounded-md text-aureolin ${selectedContinent === continent ? 'border-2 border-aureolin' : ''}`}
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
          <div className="flex flex-col w-auto h-auto gap-4">
            {uniqueCountryNames.length > 0 ? (
              uniqueCountryNames.map(countryName => (
                <div key={countryName}>
                  <h1 className="text-2xl font-semibold pb-6 text-blue">{countryName}</h1>
                  <div className="flex flex-wrap gap-4">
                    {agentsInContinent
                      .filter(agent => agent.country.trimEnd() === countryName)
                      .map(agent => (
                        <div key={agent.oid} className="bg-white shadow-md rounded-md p-4 mb-4 w-72 h-56 overflow-auto">
                          <p className="font-semibold text-aureolin">{agent.name}</p>
                          <p>
                            {agent.web_page.length !== 0 ? (
                              <span>Pagina: <a href={agent.web_page} className="text-blue">{agent.web_page}</a></span>
                            ) : (
                              ""
                            )}
                          </p>

                          <p>Ciudad: {agent.town}</p>
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

