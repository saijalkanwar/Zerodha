import React from "react";
import Hero from "./Hero";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Awards from "./Awards";
import Education from "./Education";
import OpenAccount from "../OpenAccount";
import Footer from "../Footer";
import Navbar from "../Navbar";

function Homepage(){
    return(
        <div>
           
            <Hero/>
            <Awards/>
            <Stats/>    
            <Pricing/>
            <Education/>
            <OpenAccount/>
            
                
        </div>

    );
}   
export default Homepage;