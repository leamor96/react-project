import { useState, useEffect } from "react";
import "./Quotes.css";
const Quotes = () => {
  const [quotes, setQuotes] = useState({ text: "", author: "" });
  const getQuotes = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        let randNum = Math.floor(Math.random() * data.length);
        setQuotes(data[randNum]);
      });
  };
  useEffect(() => {
    getQuotes();
  }, []);
  return (
    <div className="quoteContainer">
      <div className="quote">
        <p>"{quotes.text}"</p>
        <p>{quotes.author}</p>
        <div className="btnContainer">
            <button onClick={getQuotes} className="btnQuote">Get Quote</button>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
