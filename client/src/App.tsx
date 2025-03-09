// Dependencies
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home.tsx"
import Visuals from "./pages/Visuals/Visuals.tsx";

// CSS
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/visuals" element={<Visuals/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
