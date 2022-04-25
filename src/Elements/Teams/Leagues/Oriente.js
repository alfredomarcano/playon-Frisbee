import teams from "../teams.json";

export function LeagueOriente() {
  return (
    <div className="LeagueOri">
      <table>
        <caption>Región Oriente</caption>
        <thead>
          <tr>
            <th>Pos</th>
            <th>club</th>
            <th>PG</th>
            <th>PP</th>
            <th>Ptos</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((listCentro, i) => (
            <tr key={i}>
              <td>{listCentro.id}</td>
              <td>{listCentro.Prefix}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
