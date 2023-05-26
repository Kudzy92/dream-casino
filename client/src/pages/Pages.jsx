import React from 'react'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Header from '../components/Header'

import Home from './Home'
import NotFound from './NotFound'


const Pages = () => {
  return (
  <>
  <Router>
  <Header/>
  <Routes>
  <Route exact path='/' element={<Home/>} />
          <Route exact path='/' element={<Home/>} />
         <Route path="*" element={<NotFound/>}/>
  </Routes>
 
  </Router>
  </>
  )
}

export default Pages