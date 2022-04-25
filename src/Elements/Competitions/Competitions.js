import React from "react";
import dateFormat from "dateformat";
import "../stylesheels/Competitions.css";
import competitons from "./competitions.json";

export function Competitions() {
  return (
    <div className="Competiciones">
      {competitons.map(ListComp => (
        <div className="Compet-event" key={ListComp.id}>
          <img src={require('../../../public/imagenes/'+ ListComp.icon)} alt="" width="100%" height="100%" />
          <div>
            <h3>{ListComp.name_comp}</h3>
            <h5>{ListComp.lugar}</h5>
            <h6>{dateFormat(ListComp.date_event, "ddd, mmm d, yyyy, h:MM TT")}</h6>
          </div>
        </div>
      ))}
    </div>
  );
}
