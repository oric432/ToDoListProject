import { useState } from "react";
import { useCreateTask } from "../CustomFetchHooks";

const Form = () => {
  const [taskName, setTaskName] = useState("");

  const { createTask, isLoading } = useCreateTask();

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(
      { title: taskName, completed: false },
      {
        onSuccess: () => setTaskName(""),
      }
    );
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="task-name"
        id="task-name"
        className="form-input"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button className="btn btn-add" type="submit" disabled={isLoading}>
        Add Task
      </button>
    </form>
  );
};
export default Form;
