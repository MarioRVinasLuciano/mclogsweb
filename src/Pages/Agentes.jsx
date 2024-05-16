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
    <div className="h-auto w-full font-quicksand">
      <div className="flex flex-col h-auto w-full items-center gap-y-6 pt-10 px-4 sm:px-10 md:px-20">
        <h1 className="text-4xl">Nuestros Agentes</h1>
        <p>Contamos con agentes en todos los continentes</p>
      </div>

      <div className="flex flex-col sm:flex-row h-auto w-full px-4 sm:px-10 md:px-20 pt-10 pb-20 sm:pb-56">
        <div className="flex flex-col w-full sm:w-80 h-auto gap-y-6 pb-10 pr-6">
          <div className="rounded-md shadow-md w-56 h-12">
            <input className="h-full w-full p-2" placeholder="Buscar" onChange={buscar} ></input>
          </div>
          <div className="bg-white rounded-sm shadow-md p-4  w-56">
            <div className="grid grid-cols-1 gap-2">
              <button
                className={`hover:bg-slate-100 w-full rounded-md ${selectedContinent === "" ? 'bg-slate-100' : ''}`}
                onClick={() => handleContinentClick("")}
              >
                Todos
              </button>
              {continents.map((continent, index) => (
                <button
                  key={index}
                  className={`hover:bg-slate-100 w-full rounded-md ${selectedContinent === continent ? 'bg-slate-100' : ''}`}
                  onClick={() => handleContinentClick(continent)}
                >
                  {continent}
                </button>
              ))}
            </div>
          </div>
        </div>


        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {uniqueCountryNames.length > 0 ? (
              uniqueCountryNames.map(countryName => (
                <div key={countryName}>
                  <h1>{countryName}</h1>
                  {agentsInContinent
                    .filter(agent => agent.country === countryName)
                    .map(agent => (
                      <div key={agent.oid} className="bg-white shadow-md rounded-md p-4 mb-4">
                        <p className="font-semibold">{agent.name}</p>
                        <p>Pagina:<a href={agent.web_page} className="text-blue-600">{agent.web_page}</a></p>
                        <p>Ciudad: {agent.town}</p>
                        <p>Email: {agent.email}</p>
                        <p>Tipo: {agent.type}</p>
                      </div>
                    ))}
                </div>
              ))
            ) : (
              <p>No se encontraron agentes.</p>
            )}
          </div>
        </div>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0" />
    </div>
  );
}

