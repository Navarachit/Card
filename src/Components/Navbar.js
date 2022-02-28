import React from "react"
import mypic from "../Images/IMG_20210724_132708.jpg"

export default function Navbar(){
    return(
        <div>
        <img src= {mypic} width="500px" className="mypic"></img>
        <div className="About">
        <h1>Navrachit Kulshrestha</h1>
        <h3>React Developer</h3>
       </div>
        <div className="website">        
            <p>nrk.website</p>   
        </div>
        </div>   
    )
}