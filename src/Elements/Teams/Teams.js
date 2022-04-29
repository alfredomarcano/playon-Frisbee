import React from "react";
import "../stylesheels/Teams.css";
import teams from "./teams.json";
import { LeagueCentro } from "./Leagues/Centro";
import { LeagueOccidente } from "./Leagues/Occidente";
import { LeagueOriente } from "./Leagues/Oriente";
import { Team } from "./Team";

export function Teams() {
  return (
    <div className="ListTeams">
      <div className="Leagues">
        <h1>Ligas</h1>
        <LeagueCentro />
        <LeagueOccidente />
        <LeagueOriente />
      </div>
      <div className="Teams">
        <h1>Equipos</h1>
        {teams.map((listTeam) => (
          <Team key={listTeam.id} listTeam={listTeam} />
        ))}
      </div>
    </div>
  );
}
