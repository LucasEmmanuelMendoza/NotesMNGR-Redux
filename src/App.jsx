import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { MainView } from "./components/MainView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/notes" element={<MainView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
