import { useState } from "preact/hooks";
import quotesList from "../static/quotes.json" assert { type: "json" };

export default function Quote() {
  const getRandomQuote = () => {
    return quotesList
      .quotes[Math.floor(Math.random() * quotesList.quotes.length)];
  };

  const [quote, setQuote] = useState(getRandomQuote);

  const handleNewQuote = () => setQuote(getRandomQuote());

  return (
    <div
      id="quote-box"
      style={{ margin: "0 auto", width: "50%", textAlign: "center" }}
    >
      <div id="text">
        {quote.quote}
      </div>
      <div id="author">
        {quote.author}
      </div>
      <button
        id="new-quote"
        onClick={handleNewQuote}
      >
        New Quote
      </button>
      <a
        id="tweet-quote"
        href="twitter.com/intent/tweet"
        target="_blank"
      >
        Tweet
      </a>
    </div>
  );
}
