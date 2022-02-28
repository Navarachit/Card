import React from "react"
import ReactDOM from "react-dom"
import Navbar from "./Components/Navbar"
import Button from "./Components/Button"
import Content from "./Components/Content"


export default function App(){
    return(
        <div className="container">
        <Navbar />
        <Button />
        <Content />
        </div>
    )
}