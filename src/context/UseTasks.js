import { useContext } from "react";
import { TaskContext } from "./TasksProvider";

export function useTasks() {
    return useContext(TaskContext)
}