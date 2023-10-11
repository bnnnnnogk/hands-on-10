import { Route, Routes } from "react-router-dom"
import "./App.css"
import FullPages from "./template/FullPages"
import MainPages from "./pages/MainPages"

function App() {
  return (
    <Routes>
      <Route path="/" element={<FullPages />} />
      <Route index element={<MainPages />} />
    </Routes>
  )
}

export default App
