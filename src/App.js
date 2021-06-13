import React from "react";
import { Navbar } from "./components/Navbar";
import { Planets } from "./components/Planets";
import { People } from "./components/People";
function App() {
  const [page, setPage] = React.useState("planets");
  return (
    <div className="container">
      <h1 className="title">Star War Info</h1>
      <Navbar setPage={setPage} />
      {page === "planets" ? <Planets /> : <People />}
    </div>
  );
}

export default App;
