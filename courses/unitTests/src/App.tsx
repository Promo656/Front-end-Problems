import {Input} from "./components/Input";
import {TaskList} from "./components/TaskList";

export const App = () => {
    return (
        <div>
            <Input onSubmit={()=>{}}/>
            <TaskList tasks={["A","B","C"]}/>
        </div>
    )
}