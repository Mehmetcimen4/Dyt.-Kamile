import { Login } from './Login/Login'
import {Route,Routes} from 'react-router-dom'
import { Navbar } from './total/Navbar'
import {Form} from './components/Form'
import './App.css'
import {About} from './Login/About'
function App() {
 

  return (
    <div>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element ={<Login></Login>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/form' element ={<Form/>}></Route>
    </Routes>
    </div>
  )
}

export default App
