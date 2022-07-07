import React, { useState } from "react";
import Modal from "./components/modal";
import "./styles.css";

export default function App() {
  const [isOpen, setIsopen] = useState(false);
  const [selectedValue, setSelectedValue] = useState();
  
  const avengers = [
    "Iron Man",
    "Captain America",
    "Spider Man",
    "Hulk",
    "Thor"
  ];

  const handleClick = (e) => {
    e.preventDefault();
    setIsopen(true);
    setSelectedValue(e.target.value);
    alert(`superhero is: ${e.target.value}`)
  }

  return (
    <div id="app" className="App">
      <div>
        {/* ToDo 1 */}
        {avengers.map(val => (<li>{val}</li>))}
        {avengers.map(val => (<button value={val} onClick={handleClick}>{val}</button>))}

      
      {isOpen && <Modal selectedValue = {selectedValue} closeModal = {() => setIsopen(!isOpen)}/>}
      <div className="superheroes"></div>
    </div>
  );
}
