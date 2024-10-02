 import React from 'react'
import Login from './Components/Login'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
 
 const App = () => {
   return (<Router>
    <Routes>
      <Route path="/" element={ <Login/>}/>
      <Route path="/dashboard" element={<Dashboard  />}/>
    </Routes>
   </Router>
     

     
   );
 };
 
 export default App;
 