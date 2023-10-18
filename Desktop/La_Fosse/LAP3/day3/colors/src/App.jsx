import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"
import { Home, Color, NewColor } from "./pages"


export default function App() {

  const [colorArr, setColorArr] = useState(["red", "yellow", "blue", "green"])
  const addColor = (color) => {
    if (colorArr.includes(color)) {
      console.log("color already added")
    } else {
      setColorArr([...colorArr, color])
    }
  }

  return (
    <>

      <Routes>
        <Route path="/colors" element={<Home colorArr={colorArr} addColor={addColor} />} />
        {colorArr.map((el, i) =>
          <Route path={`colors/${el}`} element={<Color colorCode={el} />} key={i} />
        )}
        <Route path='/colors/new' element={
          <NewColor addColor={addColor}/>
        } />
        <Route path="*" element={<Home colorArr={colorArr} addColor={addColor} />} />
      </Routes>
    </>
  )
}