import {Input} from "./components/Input";
import {TaskList} from "./components/TaskList";
import {useState} from "react";

export type TaskType = {
    label: string
    completed: boolean
    id: number
}
export const App = () => {
    const [tasks, setTasks] = useState<TaskType[]>([])
    const handleSubmit = (label) => setTasks([...tasks, {id: Math.random() * tasks.length, label, completed: false}])

    const handleToggleTask = (taskIdx) => {
        debugger
        const newTasks = [...tasks];
        newTasks[taskIdx] = {...newTasks[taskIdx], completed: !newTasks[taskIdx].completed};
        setTasks(newTasks);
    };

    return (
        <div>
            <Input onSubmit={handleSubmit}/>
            <TaskList tasks={tasks} onToggleTask={handleToggleTask}/>
        </div>
    )
}