import React, { useContext,useState, useEffect } from "react";
import { MDBContainer,MDBRow,MDBDropdownItem } from "mdbreact";
import axios from "axios";
import {Searching} from "./Searchbar";
import Recipies from "./Recipies";


const Recipieslist=()=>{
    const [res,setres]=useState([])
    const constsearch=useContext(Searching)

   

    useEffect(()=>{
        const getdata=async()=>{       
            const YOUR_APP_ID="bc3615ac";
            const YOUR_APP_KEY="f1f3abd3689212e99dc7958beef86974";
            const data=await axios.get(`https://api.edamam.com/search?q=${constsearch}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`);
            setres(data.data.hits);
        }
        getdata();
    },[constsearch])
    
    
    return (
        <>
        <MDBContainer className="my-4">
        <MDBRow>
            
        {res.map((data,index)=>(
            <Recipies
            key={index}
            img={data.recipe.image}
            title={data.recipe.label}
            ingredient={data.recipe.ingredientLines.map((data,index)=>(
                <MDBDropdownItem className="text-info text-wrap" key={index}>{data}</MDBDropdownItem>
            ))}
            />
        ))}
        </MDBRow>
        </MDBContainer>
       

        </>
    )
}

export default Recipieslist;