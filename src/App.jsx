import { useReducer } from "react";
import { quotesReducer } from "./lib/reducer";
import AddQuotes from './components/AddQuotes'
import ListQuotes from './components/ListQuotes'

function App() {

  const [quote, dispatch] = useReducer(quotesReducer, [{
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
    dispatch({ type: "add", payload: title });
  }

  const handleDelete = (id) => {
    dispatch({ type: "delete", payload: id });
  }


  const handleLike = (id) => {
    dispatch({ type: "like", payload: id });
  }


  const handleDislike = (id) => {
    dispatch({ type: "dislike", payload: id });
  }

  const onSort = () => {
    dispatch({ type: "sort" });
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