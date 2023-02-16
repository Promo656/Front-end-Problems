import {Task} from './index';
import {render, screen} from '@testing-library/react'
import userEvent from "@testing-library/user-event";


describe('Task', () => {
    const completedTask = {
        label: 'Do this',
        completed: true,
        id: 1
    };
    const uncompletedTask = {
        label: 'Do that',
        completed: false,
        id: 2
    };
    it('renders the task', () => {
        render(<Task task={completedTask} onToggle={() => {
        }}/>)
        expect(screen.getByText(completedTask.label)).toBeInTheDocument()
    });

    it('assigns completed class', () => {
        render(<Task task={completedTask} onToggle={() => {
        }}/>)
        expect(screen.getByText(completedTask.label)).toHaveClass("completed")

        render(<Task task={uncompletedTask} onToggle={() => {
        }}/>)
        expect(screen.getByText(uncompletedTask.label)).not.toHaveClass("completed")
    })
    it('fires onToggle callback', async () => {
        const {click} = userEvent.setup()
        const mockOnToggle = jest.fn()
        render(<Task task={uncompletedTask} onToggle={mockOnToggle}/>)
        await click(screen.getByText(uncompletedTask.label))
        expect(mockOnToggle).toHaveBeenCalled()
        expect(mockOnToggle).toHaveBeenCalledTimes(1)
    })
});