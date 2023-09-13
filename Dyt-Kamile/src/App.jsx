import { Login } from './Login/Login'
import {Route,Routes} from 'react-router-dom'
import { Navbar } from './total/Navbar'
import {Footer} from './total/Footer'
import {Form} from './components/Form'
import './App.css'
import {About} from './Login/About'
import {Contact} from './Login/Contact'
function App() {
 

  return (
    <div>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element ={<Login></Login>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/form' element ={<Form/>}></Route>
    </Routes>
    <Footer></Footer>
    </div>
  )
}

export default App
