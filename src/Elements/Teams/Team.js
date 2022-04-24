export function Team({ listTeam }) {
  return (
    <div className="Team">
      <img src={require("./Escudos/logo.png")} alt={listTeam.Nombre} width="100%" height="100%"/>
      <h4>{listTeam.Nombre}</h4>
    </div>
  );
}
