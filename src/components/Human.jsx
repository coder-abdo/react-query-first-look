import React from "react";

export const Human = ({ people }) => {
  return (
    <div className="card">
      <h3 className="card__title">name: {people.name}</h3>
      <p className="card__subtitle">gender: {people.gender}</p>
      <p className="card__subtitle">year of birth: {people.birth_year}</p>
    </div>
  );
};
