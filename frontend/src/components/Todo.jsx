import { useDeleteTask, useEditTask } from "../CustomFetchHooks";

const Todo = ({ _id, title, completed }) => {
  const { editTask, isEditLoading } = useEditTask();
  const { deleteTask, isDeleteLoading } = useDeleteTask();

  const handleCheckboxChange = async () => {
    try {
      // Disable the checkbox during the request
      // to provide immediate visual feedback
      if (!isEditLoading) {
        await editTask({ taskId: _id, completed: !completed });
      }
    } catch (error) {
      // Handle error if needed
    }
  };

  return (
    <div className="todo">
      <input
        type="checkbox"
        name="complete"
        id="complete"
        disabled={isEditLoading}
        checked={completed}
        onChange={handleCheckboxChange}
      />
      <h5 style={{ textDecoration: completed ? "line-through" : "" }}>
        {title}
      </h5>
      <button
        className="btn alert-danger"
        disabled={isDeleteLoading}
        onClick={() => deleteTask({ taskId: _id })}
      >
        delete
      </button>
    </div>
  );
};
export default Todo;
