import React, { useState } from "react"


export default function ColorForm({ addColor }) {

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      addColor(e.target[0].value)
      e.target[0].value = ""
    }}>
      <input type="text" placeholder="Add a new color..." />
      <input type="submit"/>
    </form>
  )
}