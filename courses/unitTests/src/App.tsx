import {Input} from "./components/Input";
import {TaskList} from "./components/TaskList";
import {useTasks} from "./hooks/useTasks";

export type TaskType = {
    label: string
    completed: boolean
    id: number
}
export const App = () => {
    const [tasks,{addTask,toggleTask}] = useTasks();

    return (
        <div>
            <Input onSubmit={addTask}/>
            <TaskList tasks={tasks} onToggleTask={toggleTask}/>
        </div>
    )
}