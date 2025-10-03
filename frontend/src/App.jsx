import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"
import CreatePage from "./pages/createPage"
import UpdateCard from "./pages/UpdateCard"

function App() {

  return (
    <div data-theme="dracula">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/create" element={<CreatePage/>} />
          <Route path="/update/:id" element={<UpdateCard/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
