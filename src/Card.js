import React, { useState } from "react";
import Img from "./assets/images/bg1.png"
import Loading from "./assets/images/load.gif"

const Card = ({ advice, handleClick }) => {
  const [inputText, setInputText] = useState("");

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const search = () => {
    if (inputText !== "") {
      handleClick(inputText);
    } else {
      handleClick();
    }
  };

  return (
    <div className="Card">
      <div className="inputField">
        <input
          type="text"
          onChange={handleChange}
          value={inputText}
          autoFocus
          placeholder="Enter any word :)"
          onKeyUp={(e) => e.code === "Enter" && search()}
        />

        {inputText !== "" ? (
          <button onClick={search}>
            <span>SEARCH</span>
          </button>
        ) : (
          <button onClick={handleClick}>
            <span>GIVE ME ADVICE!</span>
          </button>
        )}
      </div>
      {
advice?
      <h1>{advice}</h1>
      :
      <img className="loading" src={Loading} />
      }
      <img className="bg" src={Img}/>
    </div>
  );
};


export default Card;
