import {TaskType} from "../../App";
import "./style.css"

type TaskProps = {
    task: TaskType
    onToggle: () => void
}
export const Task = ({task: {completed, label}, onToggle}: TaskProps) => {
    return (
        <li className={completed ? "completed" : ""} onClick={onToggle}>{label}</li>
    )
}