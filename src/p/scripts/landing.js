import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap"
import { ArrowDownCircle } from "react-bootstrap-icons";
import logo from "../assets/logo.png";

export const Landing = () => {
  const textChar =
    "I'm multi talented and here's a portfolio of my skills.";

  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random()*100);
  const period = 100000000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  const tick = () => {
    let updatedText = textChar.substring(0, text.length + 1);
    setText(updatedText);
    if (updatedText === textChar) {
      setDelta(period);
    }

  };

  return (
    <div className="landing" id="home">
        <img src={logo} alt="logo" className="header-img"/>
      <span className="tag-line">
        <h1>hey! I'm Acto</h1>
        <p className="wrap" >{text}</p>
      </span>
      <span className="landing-button" >
        <button onClick={() => console.log("clicked")}>
          Explore <ArrowDownCircle size={25} />
        </button>
      </span>
    </div>
  );
};
