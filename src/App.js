import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Search from './components/Search/Search';
import Filter from './components/Filter/Filter';
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';
import Pagination from './components/Pagination/Pagination';
import './App.css';

import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";

function App(){
  return (
    <Router>
      <div className="App">
      <Navbar />
      </div>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/episodes" element = {<Episodes />}/>
        <Route path = "/location" element = {<Location />}/>
      </Routes>
    </Router>
  )
}

const Home = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let [search ,setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [gender,setGender] =  useState("");
  const [species, setSpecies] = useState("");

  const [fetchedData, updateFetchedData] = useState([])
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  let {info , results} = fetchedData;
  useEffect(() => {

    (async function () {
      let data = await fetch(api).then(res => res.json());
      updateFetchedData(data);
}())
  }, [api]);
  return (
      <div className="App">
        
          <Search setPageNumber = {setPageNumber} setSearch = {setSearch}></Search>
        <div className="container">
          <div className="row">
            <Filter 
            setStatus = {setStatus} 
            setPageNumber = {setPageNumber}
            setGender = {setGender}
            setSpecies = {setSpecies}
            />
            <div className="col-8">
              <div className="row">
                <Card  results = {results} />
              </div>
            </div>
          </div>
        </div>
        <Pagination info ={info} pageNumber = {pageNumber} setPageNumber = {setPageNumber}></Pagination>
      </div>
  );
}

export default App;
