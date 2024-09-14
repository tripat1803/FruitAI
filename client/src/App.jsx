
import Login from './components/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Homepage'
import About from './components/About'
function App() {

  return (
    <>
    <Router>
      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path="/homepage" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </Router>
    </>
  )
}

export default App
