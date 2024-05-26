import React, { useState, useEffect } from "react";

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

  const uniqueCountryNames = [...new Set(agentsInContinent.map(agent => agent.country))];


  return (
    <div className="h-auto w-full font-quicksand pt-32 px-10 sm:px-10 md:px-20 lg:px-40">
      <div className="flex flex-col h-auto w-full items-center gap-y-6 pt- ">
        <h1 className="lg:text-5xl text-4xl font-semibold">Nuestros Agentes</h1>
        <p>Contamos con agentes en todos los continentes</p>
      </div>

      <div className="flex flex-col h-auto w-full pt-10 pb-20 sm:pb-56">
        <div className="flex flex-col w-full  h-auto gap-y-6 pb-10">
          <div className="rounded-md w-full h-12 border-2 border-slate-400">
            <input className="h-full w-full rounded-md p-2 " placeholder="Buscar" onChange={buscar} ></input>
          </div>
          <div className="bg-white rounded-sm shadow-md p-4 w-full">
            <div className="grid lg:grid-cols-8 md:grid-cols-8 sm:grid-cols-4 sm:grid-rows-2 md:grid-rows-1 gap-y-6 grid-rows-auto gap-x-30 w-full justify-items-center">
              <button
                className={`hover:bg-lime-500 w-24 rounded-md ${selectedContinent === "" ? 'bg-lime-400' : ''}`}
                onClick={() => handleContinentClick("")}
              >
                Todos
              </button>
              {continents.map((continent, index) => (
                <button
                  key={index}
                  className={`hover:bg-lime-500 w-24 rounded-md ${selectedContinent === continent ? 'bg-lime-400' : ''}`}
                  onClick={() => handleContinentClick(continent)}
                >
                  {continent}
                </button>
              ))}
            </div>
          </div>

        </div>


        <div>
          <div className="flex flex-col w-auto h-auto gap-4">
            {uniqueCountryNames.length > 0 ? (
              uniqueCountryNames.map(countryName => (
                <div key={countryName}>
                  <h1 className="text-2xl font-semibold pb-6 text-blue-900">{countryName}</h1>
                  <div className="flex flex-wrap gap-4">
                    {agentsInContinent
                      .filter(agent => agent.country === countryName)
                      .map(agent => (
                        <div key={agent.oid} className="bg-white shadow-md rounded-md p-4 mb-4 w-72 h-56 overflow-auto">
                          <p className="font-semibold text-lime-500">{agent.name}</p>
                          <p>
                            {agent.web_page.length !== 0 ? (
                              <span>Pagina: <a href={agent.web_page} className="text-blue-600">{agent.web_page}</a></span>
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

