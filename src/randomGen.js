import { useState } from "react";

const RandomGen = () => {
  const [password, setPassword] = useState("");
  const num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const lowLet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  const upLet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];
  const symbols = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "(",
    ")",
    "-",
    ":",
    ";",
    ",",
    "<",
    ".",
    ">",
    "/",
    "?"
  ];

  let ranGen = [num, lowLet, upLet, symbols];

  let pass = [];

  const clickHandler = (e) => {
    e.preventDefault();
    for (let i = 0; i < 16; i++) {
      const figure = ranGen[Math.floor(Math.random() * ranGen.length)];
      pass.push(figure[Math.floor(Math.random() * figure.length)]);
    }
    const newPassword = pass.join("");
    console.log(newPassword);
    setPassword(newPassword);
  };

  return (
    <>
      <button onClick={clickHandler}>CLICK ME</button>
      <div className="password">{password}</div>
    </>
  );
};

export default RandomGen;
