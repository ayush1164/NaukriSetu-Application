import { Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import Jobs from './Components/Jobs'
import Login from './Components/Login'
import NotFound from './Components/Not Found'
import ProtectedRoute from './Components/Protected Route'
import JobDetails from './Components/JobsDetails'
import './App.css'

const App = () => {


  return (

    <Routes>


          <Route path='/' element = {<ProtectedRoute Component = {Home} />}></Route>
          <Route path='/jobs' element = {<ProtectedRoute Component = {Jobs} />}></Route>
          <Route path='/login' element = {<Login/>}></Route>
          <Route path='/jobs/:id' element = { <ProtectedRoute Component = { JobDetails } /> }></Route>
          <Route path='/*' element = {<NotFound/>}></Route>


    </Routes>

  )

}


export default App