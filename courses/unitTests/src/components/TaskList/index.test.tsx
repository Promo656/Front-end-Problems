import {render, screen} from "@testing-library/react";
import {TaskList} from "./index";
import {TaskType} from "../../App";
import userEvent from "@testing-library/user-event";

describe("TasksList", () => {
    const tasks: TaskType[] = [
        {label: 'Do this', completed: false, id: 1},
        {label: 'Do that', completed: false, id: 2},
        {label: 'Do nothing', completed: true, id: 3}
    ]
    it("should render tasks", () => {
        const mockToggle = jest.fn()

        render(<TaskList tasks={tasks} onToggleTask={mockToggle}/>)
        const renderTask = tasks.map(task => screen.getByText(task.label))
        expect(renderTask).toHaveLength(3)
    })

    it('must fire on toggle callback', async () => {
        const {click} = userEvent.setup()
        const mockToggle = jest.fn()
        render(<TaskList tasks={tasks} onToggleTask={mockToggle}/>)
        const renderedTasks = tasks.map(el => screen.getByText(el.label))
        await click(renderedTasks[1])
        expect(mockToggle).toHaveBeenCalled()
        expect(mockToggle).toHaveBeenCalledTimes(1)
    })
})