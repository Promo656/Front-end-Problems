import {useState} from "react";

export const Input = ({onSubmit}) => {
    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(value)
        setValue("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter new task"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </form>
    )
}