import { useState } from "react";
import AddQuotes from './components/AddQuotes'
import ListQuotes from './components/ListQuotes'

function App() {
  const [quote, setQuote] = useState([{
    id: 1,
    likes: 5,
    title: "I am a Quote",
  }, {
    id: 2,
    likes: 5,
    title: "life is short",
  }
  ]);
  const handleQuote = (title) => {
    const quote = {
      title,
      likes: 0,
      id: crypto.randomUUID()
    };
    setQuote((prev) => [quote, ...prev]);
  }

  const handleDelete = (id) => {
    setQuote((prev) => prev.filter((quote) => quote.id !== id));
  }


  const handleLike = (id) => {
    setQuote((prev) => prev.map((quote) => {
      quote.id === id ? { ...quote, likes: quote.likes + 1 } : quote
    }));
  }


  const handleDislike = (id) => {
    setQuote((prev) => prev.map((quote) => {
      quote.id === id ? { ...quote, likes: quote.likes - 1 } : quote
    }));
  }

  const onSort = () => {
    setQuote((prev) => prev.sort((a, b) => b.likes - a.likes));
  }

  return (
    <div className="max-w-96 mx-auto p-2 ">
      <h1 className="text-3xl text-center font-bold my-5 ">Quotes</h1>
      <AddQuotes onSubmit={handleQuote} onSort={onSort} />
      <ListQuotes quotes={quote} handleDelete={handleDelete} onLike={handleLike} onDislike={handleDislike} />
    </div>
  );
}

export default App;