import { Login } from './Login/login'
import {Route,Routes} from 'react-router-dom'
import { Navbar } from './total/Navbar'
import './App.css'
function App() {
 

  return (
    <div>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element ={<Login></Login>}></Route>
    </Routes>
    </div>
  )
}

export default App
