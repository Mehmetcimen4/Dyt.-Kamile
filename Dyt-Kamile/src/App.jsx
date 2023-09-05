import { Login } from './Login/login'
import {Route,Routes} from 'react-router-dom'
import { Navbar } from './total/Navbar'
import {Form} from './components/Form'
import './App.css'
function App() {
 

  return (
    <div>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element ={<Login></Login>}></Route>
      <Route path='/form' element ={<Form/>}></Route>
    </Routes>
    </div>
  )
}

export default App
