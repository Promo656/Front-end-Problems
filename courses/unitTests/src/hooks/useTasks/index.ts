import {useEffect, useState} from 'react';
import {createTask, getTasks, updateTask} from '../../api';
import {TaskType} from "../../App";

type UseTasksType = [
    tasks: TaskType[] | null,
    fns: {
        toggleTask: (index: number) => void
        addTask: (taskName: string) => void
    }
]
export const useTasks = (): UseTasksType => {
    const [tasks, setTasks] = useState<TaskType[] | null>(null);
    const refreshTasks = async () => {
        setTasks(await getTasks());
    };
    const toggleTask = async (index) => {
        if (tasks) {
            const newTask = {...tasks[index], completed: !tasks[index].completed};
            await updateTask(newTask);
            setTasks(await getTasks());
        }
    };
    const addTask = async (taskName) => {
        const newTask = await createTask(taskName);
        setTasks(tasks ? [...tasks, newTask] : [newTask]);
    };
    useEffect(() => {
        refreshTasks()
    }, []);

    return [tasks, {toggleTask, addTask}]
}
