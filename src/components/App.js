import React from 'react';
import ReactDOM from 'react-dom';
import "./App.css"
import PetDB from './petDB.json'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home';
import Form from '../pages/Form';
import Catalog from '../pages/Catalog';
import PetPage from '../pages/Pet';



const reactRoot = document.getElementById("root");

function App() {
  return (

    <Router>
      <Routes>
        <Route path='/' element={<Home data={PetDB}></Home>}>
        </Route>
        <Route path='/form/:id' element={<Form data={PetDB}/>}>
        </Route>
        <Route path='/catalog' element={<Catalog data={PetDB} />}>
        </Route>
        <Route path='/pet/:id' element={<PetPage data={PetDB}></PetPage>}>
        </Route>
      </Routes>
    </Router>

  )
}


ReactDOM.render(<App />, reactRoot);



export default App; // מה שזה אומר הוא שהקוד כאן יהיה נגיש לקבצים אחרים בפרוייקט שלנו

//  <SearchBarSave placeholder="Enter your animal..." data={PetDB}></SearchBarSave>
// <Home></Home>
//<Submit></Submit>
