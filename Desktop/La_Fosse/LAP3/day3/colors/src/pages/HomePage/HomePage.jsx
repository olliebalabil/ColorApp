import React from "react"
import { ColorBlock, ColorForm } from "../../components"
import "./HomePage.css"
import { useNavigate } from "react-router-dom"

export default function Home({ colorArr, addColor }) {
  const navigate = useNavigate()
  return (
    <>
    <button onClick={()=> navigate('/colors/new')}>Add a new color!</button>
      <div className="home-div">
        {colorArr.map((el, i) => <ColorBlock colorCode={el} key={i} />)}
      </div>

    </>

  )
}