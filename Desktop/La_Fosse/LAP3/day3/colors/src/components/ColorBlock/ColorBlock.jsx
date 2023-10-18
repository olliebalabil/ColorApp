import React from "react"
import "./ColorBlock.css"
import { useNavigate } from "react-router-dom"

export default function ColorBlock({ colorCode }) {
  const navigate = useNavigate()
  return (
    <div className="block" onClick={()=>navigate(`/colors/${colorCode}`)}>
      <div className="color-div" style={{ backgroundColor: colorCode }}></div>
      <h2 className="block-h1">{colorCode}</h2>
    </div>

  )
}