import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import "./App.css";

const App = () => {
  useState();
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = async (value) => {
    try {
      let a = typeof value === "undefined";
      let b = typeof value === "object";
      if (a === false && b === false) {
        const responce = await axios.get(
          `https://api.adviceslip.com/advice/search/${value}`
        );
        if (responce.data.message) {
          setAdvice(responce.data.message.text);
        } else {
          let random = Math.floor(Math.random() * responce.data.slips.length);
          setAdvice(responce.data.slips[random].advice);
        }
      } else {
        const responce = await axios.get("https://api.adviceslip.com/advice");
        setAdvice(responce.data.slip.advice);
      }
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <div className="app">
      <Card advice={advice} handleClick={fetchAdvice} />
    </div>
  );
};

export default App;
