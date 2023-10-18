import React from "react"
import { ColorForm } from "../../components"
import { useNavigate } from "react-router-dom"

export default function NewColor ({addColor}) {
const navigate = useNavigate()
  return (
    <>
      <ColorForm addColor={addColor}/>
      <button className="back-btn" onClick={()=> navigate('/colors')}>Back to Home</button>
    </>
  )
}