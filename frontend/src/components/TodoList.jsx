import { useQuery } from "@tanstack/react-query";
import Todo from "./Todo";
import { tasksFetch } from "../utils";
import { useFetchTasks } from "../CustomFetchHooks";

const TodoList = () => {
  const { isLoading, error, data } = useFetchTasks();

  if (isLoading) {
    return <p>Tasks Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.response.data}</p>;
  }

  return (
    <div className="todo-container">
      {data.data.map((todo) => {
        return <Todo key={todo._id} {...todo} />;
      })}
    </div>
  );
};
export default TodoList;
