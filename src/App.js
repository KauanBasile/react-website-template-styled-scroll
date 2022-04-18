import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"

import Home from "./pages";
import SigninPage from "./pages/signin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} exact />
        <Route index element={<Home />} />
        <Route path="/signin" element={<SigninPage />} exact />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
