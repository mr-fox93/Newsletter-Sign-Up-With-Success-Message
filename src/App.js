import { Route, Routes } from "react-router-dom";
import "./App.css";
import Confirm from "./Confirm";
import Main from "./Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/confirm" element={<Confirm />} />
    </Routes>
  );
}

export default App;
