import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container">
      <h1>To Do List</h1>
      <ToastContainer />
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
