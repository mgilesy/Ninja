import "./App.css";
import PostList from "./react-query/PostList";
import TodoForm from "./react-query/TodoForm";
import TodoList from "./react-query/TodoList";

function App() {
  return (
    <>
      <h1>Todos</h1>
      <TodoForm />
      <TodoList />
    </>
  );
}

export default App;

// Return fro the Post list work.
// <h1>Post List</h1>
// <PostList />
