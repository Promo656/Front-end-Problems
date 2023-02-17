import {updateTask, createTask, getTasks} from "./index"
import fetch from "jest-fetch-mock";

describe('#createTask', () => {
    it("must create task", async () => {
        fetch.mockResponseOnce(JSON.stringify({id: 1, label: 'Do this', completed: false}))
        const result = await createTask("Do this")
        expect(result).toStrictEqual({id: 1, label: 'Do this', completed: false})
        expect(fetch).toHaveBeenCalledWith(expect.stringMatching(/tasks/), {
            method: "POST",
            body: JSON.stringify({label: "Do this", completed: false})
        })
    })
});

describe('#updateTask', () => {
    it("must update tasks", async () => {
        fetch.mockResponseOnce(JSON.stringify({id: 1, label: 'Do this', completed: true}))
        const result = await updateTask({id: 1, label: 'Do this', completed: true})
        expect(result).toStrictEqual({id: 1, label: 'Do this', completed: true})
        expect(fetch).toHaveBeenCalledWith(expect.stringMatching(/tasks\/1/), {
            method: "PUT",
            body: JSON.stringify({id: 1, label: 'Do this', completed: true})
        })
    })
});

describe('#getTasks', () => {
    it('must get tasks', async () => {
        fetch.mockResponseOnce(JSON.stringify([{id: 1, label: '1', completed: true}]));
        const result = await getTasks()
        expect(result).toHaveLength(1)
        expect(result[0]).toEqual({id: 1, label: '1', completed: true})
        expect(fetch).toHaveBeenCalledWith(expect.stringMatching(/tasks/))
    })
});