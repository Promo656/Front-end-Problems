// import fetch from "jest-fetch-mock";
import {TaskType} from "../App";

const url = "http://localhost:3001"
export const HEADERS = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
};
export const createTask = async (taskName) => {
    const newTask = {
        label: taskName,
        completed: false
    };
    try {
        const response = await fetch(url + "/tasks", {
            method: "POST",
            body: JSON.stringify(newTask),
            headers: HEADERS,
        })
        return response.json()
    } catch (e) {
        console.log(e)
    }
}

export const updateTask = async (updatedTask: TaskType) => {
    try {
        const response = await fetch(url + "/tasks" + `/${updatedTask.id}`, {
            method: "PUT",
            body: JSON.stringify(updatedTask),
            headers: HEADERS,
        })
        return response.json()
    } catch (e) {
        console.log(e)
    }
}

export const getTasks = async () => {
    try {
        const response = await fetch(url + "/tasks")
        return response.json()
    } catch (e) {
        console.log(e)
    }
}