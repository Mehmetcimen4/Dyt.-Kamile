import { Login } from './Login/Login'
import {Route,Routes} from 'react-router-dom'
import { Navbar } from './total/Navbar'
import {Footer} from './total/Footer'
import {Form} from './components/Form'
import './App.css'
import './Form.css'
import {About} from './Login/About'
import {Contact} from './Login/Contact'
import { Form2 } from './components/Form2'
function App() {
 

  return (
    <div>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' exact element ={<Login></Login>}></Route>
      <Route path='/about' exact element={<About></About>}></Route>
      <Route path='/contact' exact element={<Contact/>}></Route>
      <Route path='/form' exact element ={<Form/>}></Route>
      <Route path='/form-2' exact element ={<Form2/>}></Route>
    </Routes>
    <Footer></Footer>
    </div>
  )
}

export default App
