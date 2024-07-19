
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import Auth from './Components/auth/Auth'


function App() {
  

  return (
    <>
   <Routes>
  
    <Route path='/' element={<Home/>}/>
    <Route path='/auth' element={<Auth/>} />
   </Routes>
    </>
  )
}

export default App
