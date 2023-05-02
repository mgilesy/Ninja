import useTodos from "./hooks/useTodos";

const TodoList = () => {
  //MG useQuery would return a query object but destructuring here because for now we only need the data
  const { data: todos, error, isLoading } = useTodos();

  if (isLoading) return <p>Is Loading</p>;

  if (error) return <p>{error.message}</p>;

  //MG in below return - question mark after todos indicates an option of what should be returned but it could also be an error
  return (
    <ul className="list-group">
      {todos?.map((todo) => (
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

//MG Notes - this new react-query implementation now gives us
//           auto-retries (configurable), auto-refresh (after a period of time),
//           auto-caching
//   Also - the compiler knows that the 'type' of the todos as it is typed
//          in data: todos coming back from the useTodos has a typed return.
