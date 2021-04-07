import React, { useState } from "react";
import QuoteForm from "../forms/QuoteForm";

function QuotePage() {
  const [quote, setQuote] = useState("");

  const handleQuote = (quote) => {
    setQuote(quote);
  };

  return (
    <>
      {quote && <h1>Your Quote is: £{quote}</h1>}
      <QuoteForm handleQuote={handleQuote}></QuoteForm>
    </>
  );
}

export default QuotePage;
