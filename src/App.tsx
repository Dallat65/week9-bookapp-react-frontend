import { Routes, Route} from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Error404 from "./Error404"
import Welcome from "./pages/welcome"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/login" element= {<Login />} />
        <Route path="/register" element= {<Register />} />
        <Route path="/welcome" element= {<Welcome />} />
        <Route path="*" element= {<Error404 />} />

      </Routes>
    </>
  )
}

export default App
