import {Task} from "../Task";
import {TaskType} from "../../App";

type TaskListProps = {
    tasks: TaskType[] | null
    onToggleTask: (taskId) => void
}
export const TaskList = ({tasks, onToggleTask}: TaskListProps) => {

    return (
        <ul>
            {
                tasks?.map((task, idx) => (
                    <Task key={task.id} task={task} onToggle={() => onToggleTask(idx)}/>
                ))
            }
        </ul>
    )
};