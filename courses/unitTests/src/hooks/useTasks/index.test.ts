import {act, renderHook} from "@testing-library/react-hooks"
import {useTasks} from "./index"
import {getTasks, updateTask, createTask} from "../../api"

jest.mock("../../api")

describe('#useTasks', () => {
    it('must request tasks', async () => {
        const {result, waitForNextUpdate} = renderHook(() => useTasks())
        expect(result.current[0]).toBeNull()

        await waitForNextUpdate()

        expect(result.current[0]?.length).toBe(2);
        expect(result.current[0]?.[0].label).toBe('Do this');
        expect(getTasks).toHaveBeenCalled();
    });

    it('must create tasks', async () => {
        const {result, waitForNextUpdate} = renderHook(() => useTasks());
        await waitForNextUpdate();

        const [_, {addTask}] = result.current;
        await act(() => addTask('New task!'));

        const [tasks] = result.current;
        if (tasks) {
            expect(tasks[tasks.length - 1]).toEqual({id: expect.anything(), label: 'New task!', completed: false});
        }
        expect(createTask).toHaveBeenCalledWith('New task!');
    });

    it('must update tasks', async () => {
        const {result, waitForNextUpdate} = renderHook(() => useTasks());
        await waitForNextUpdate();
        const [tasks, {toggleTask}] = result.current;

        await act(() => toggleTask(0));
        if (tasks) {
            expect(updateTask).toHaveBeenCalledWith({...tasks[0], completed: !tasks[0].completed});
        }
    });
});