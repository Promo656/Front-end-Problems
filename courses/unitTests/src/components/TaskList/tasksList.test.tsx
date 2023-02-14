import {render, screen} from "@testing-library/react";
import {TaskList} from "./index";

describe("TasksList",()=>{
    it("should render tasks",()=>{
        const tasks = ["A","B","C"]
        render(<TaskList tasks={tasks}/>)
        const renderTask = tasks.map(task=>screen.getByText(task).textContent)
        expect(renderTask).toHaveLength(3)
        expect(renderTask).toStrictEqual(tasks)
    })
})