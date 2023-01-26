import quotesList from "../static/quotes.json" assert { type: "json" };

export default function Quote() {
  const getRandomQuote = () => {
    return quotesList
      .quotes[Math.floor(Math.random() * quotesList.quotes.length)];
  };

  const handleNewQuote = () => {
    const newQuote = getRandomQuote();
    (document.getElementById("text") as HTMLElement).innerText = newQuote.quote;
    (document.getElementById("author") as HTMLElement).innerText =
      newQuote.author;
  };

  const quote = getRandomQuote();

  return (
    <div id="quote-box">
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
