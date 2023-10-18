import React from "react"
import "./ColorPage.css"
import { useNavigate } from "react-router-dom"

export default function Color({colorCode}) {
  const navigate = useNavigate()
  console.log(colorCode)
  return (
    <>
    <div className="color" style={{ backgroundColor: colorCode }}></div>
    <button className="back-btn" onClick={()=> navigate('/colors')}>Back to Home</button>
    </>
  )
}