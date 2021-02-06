import React,{createContext, useState} from "react";
import { MDBBtn } from "mdbreact";
import Recipieslist from "./Recipieslist";


const Searching=createContext();






const Searchbar=()=>{
    const [search,setsearch]=useState("chicken");
    const inputevent=(e)=>setsearch(e.target.value);
    const [constsearch,setconsearch]=useState();

    const searchrecipies=()=>{
        setconsearch(search)
        
    };

    return (
        <>
        <div className="container-fluid bg-danger py-5">
            <div className="back-color text-center">
                <h3> Search any food</h3>
                <input type="search" value={search} onChange={inputevent} className="w-75 py-3 text-center" name="search" id="" placeholder="search recipies here"/>
                <br/>
                <MDBBtn color="primary" onClick={searchrecipies} rounded>Search</MDBBtn>
            </div>
        </div>

        <Searching.Provider value={constsearch}>
            <Recipieslist/>
        </Searching.Provider>
        
       
        
        </>
    )
}

export default Searchbar;
export {Searching};