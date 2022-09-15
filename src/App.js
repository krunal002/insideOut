import React, { useState } from "react";
import "./styles.css";

var emojiLibrary = {
  "😊": "Smiling Face",
  "🤣": "Rolling on the Floor Laughing",
  "😉": "Winking Face",
  "🙃": "Upside-Down Face",
  "🦍": "Gorilla",
  "🐯": "Tiger Face",
  "🦄": "Unicorn",
  "🐼": "Panda Face",
  "🍍": "Pineapple",
  "🍏": "Green Apple",
  "🍅": "Tomato",
  "🍄": "Mushroom",
  "❤️": "Red Heart",
  "✨": "Sparkles",
  "🚴": "Person Biking",
  "🎌": "Flags"
};

var emojiKnown = Object.keys(emojiLibrary);

export default function App() {
  const [standsFor, setStandsFor] = useState("");

  return (
    <div className="App">
      <h1 id="heading">Inside Outtt</h1>
      <input onChange={inputChangeHandeler} id="input"></input>

      <div>
        <h4>Get Meaning</h4>
        <h3>{standsFor}</h3>
      </div>
      <div id="emoji">
        {emojiKnown.map(function (emoji) {
          return (
            <span
              key={emoji}
              onClick={() => clickHandeler(emoji)}
              style={{ padding: "1rem", cursor: "pointer" }}
            >
              {" "}
              {emoji}{" "}
            </span>
          );
        })}
      </div>
    </div>
  );

  function clickHandeler(emoji) {
    //proccessing
    var standsFor = emojiLibrary[emoji];
    setStandsFor(standsFor);
  }

  function inputChangeHandeler(event) {
    //proccessing
    var userInput = event.target.value;
    var standsFor = emojiLibrary[userInput];
    if (standsFor === undefined) standsFor = "Away from our library";
    setStandsFor(standsFor);
  }
}
