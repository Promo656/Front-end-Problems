import {Input} from "./components/Input";
import {TaskList} from "./components/TaskList";
import {useState} from "react";

export const App = () => {
    const [tasks, setTasks] = useState<Array<string>>([])
    const handleSubmit = (task) => setTasks([...tasks, task])
    return (
        <div>
            <Input onSubmit={handleSubmit}/>
            <TaskList tasks={tasks}/>
        </div>
    )
}