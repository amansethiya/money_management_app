import React from "react";
import Navbar from "./components/navbar";
import TotalView from "./components/totalView";
import List from "./components/list";
import Income from "./components/Incomeorexpences";

const App = () => {
  return (
    <>
      <Navbar />
      <TotalView />
      <List />
    </>
  );
};

export default App;
