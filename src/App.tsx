import { Route, Routes } from "react-router-dom"
import "./App.css"
import FullPages from "./template/Fullpages"

function App() {
  return (
    <Routes>
      <Route path="/" element={<FullPages />} />
    </Routes>
  )
}

export default App
