import React from "react";
import { MDBCol } from "mdbreact";
import {  MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle} from 'mdbreact';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

const Recipies=(props)=>{
    
    return (
        <>
            
                <MDBCol size="12" lg="4" md="6" sm="12" className="">
                    <MDBCard style={{ width: "22rem" }} className="mx-auto my-2">
                        <MDBCardImage className="img-fluid w-100" src={props.img} waves />
                        <MDBCardBody>
                        <MDBCardTitle>{props.title}</MDBCardTitle>
                        <MDBDropdown>
                    <MDBDropdownToggle caret color="primary w-100">
                        Ingredient
                    </MDBDropdownToggle>
                    <MDBDropdownMenu basic className="w-100">
                        <MDBDropdownItem>{props.ingredient}</MDBDropdownItem>
                        
                       
                    </MDBDropdownMenu>
                    </MDBDropdown>
                        
                        </MDBCardBody>
                   </MDBCard>
                </MDBCol>
                
            
        </>
    )
}

export default Recipies;