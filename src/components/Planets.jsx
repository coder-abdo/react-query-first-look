import React from "react";
import { useFetch } from "../hooks/useFetch";
import { Planet } from "./Planet";
export const Planets = () => {
  const renderByStatus = (status, data) => {
    if (status === "error") {
      return (
        <div className="error">
          <p>error in fetching</p>
        </div>
      );
    } else if (status === "loading") {
      return (
        <div className="loading">
          <p>loading...!</p>
        </div>
      );
    } else {
      return data.results.map((planet) => (
        <Planet planet={planet} key={planet.name} />
      ));
    }
  };
  const { data, status, setPage, page } = useFetch(
    "http://swapi.dev/api/planets/?page=",
    "planets"
  );
  return (
    <>
      <h2 className="subtitle">planets</h2>
      <div className="btns-group">
        <button
          className="btn"
          onClick={() => {
            setPage(page > 1 ? page - 1 : 1);
          }}
          disabled={status.loading || page <= 1}
        >
          prev
        </button>
        <span className="index">{page}</span>
        <button
          className="btn"
          onClick={() =>
            setPage((old) => (!data || !data.next ? old : old + 1))
          }
          disabled={status.loading || !data || !data.next}
        >
          next
        </button>
      </div>
      {renderByStatus(status, data)}
    </>
  );
};
