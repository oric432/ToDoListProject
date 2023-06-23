import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { tasksFetch } from "./utils";
import { toast } from "react-toastify";

export const useFetchTasks = () => {
  const { isLoading, error, data } = useQuery(["tasks"], () =>
    tasksFetch.get("/")
  );

  return { isLoading, error, data };
};

export const useCreateTask = () => {
  const queryClient = useQueryClient();

  const { mutate: createTask, isLoading } = useMutation({
    mutationFn: ({ title, completed }) =>
      tasksFetch.post("/", { title, completed }),
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
      toast.success("task added successfully");
    },
    onError: (error) => {
      toast.error(`Error: ${error.response.data.msg}`);
    },
  });

  return { createTask, isLoading };
};

export const useEditTask = () => {
  const queryClient = useQueryClient();

  const { mutate: editTask, isLoading } = useMutation({
    mutationFn: ({ taskId, completed }) =>
      tasksFetch.patch(`/${taskId}`, { completed }),
    onSuccess: () => queryClient.invalidateQueries(),
    onError: (error) => toast.error(`Error: ${error.response.data.msg}`),
  });

  return { editTask, isLoading };
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteTask, isLoading } = useMutation({
    mutationFn: ({ taskId }) => tasksFetch.delete(`/${taskId}`),
    onSuccess: () => {
      queryClient.invalidateQueries();
      toast.success("task has been successfully deleted");
    },
    onError: (error) => toast.error(`Error: ${error.response.data.msg}`),
  });

  return { deleteTask, isLoading };
};
