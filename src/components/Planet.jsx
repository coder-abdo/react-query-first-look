import React from "react";

export const Planet = ({ planet }) => {
  return (
    <div className="card">
      <h3 className="card__title">{planet.name}</h3>
      <p className="card__subtitle">Population: {planet.population}</p>
      <p className="card__subtitle">Terrain: {planet.terrain}</p>
    </div>
  );
};
