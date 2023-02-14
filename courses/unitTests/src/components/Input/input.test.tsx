import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import {Input} from "./index";

describe("Input", () => {
    const placeholder = "Enter new task"
    it("should be render in the document", () => {
        render(
            <Input onSubmit={() => {
            }}/>
        )
        expect(screen.queryByPlaceholderText(placeholder)).toBeInTheDocument()
    })

    it("should submit the form", async () => {
        const {keyboard} = userEvent.setup()
        const mockOnSubmit = jest.fn()
        render(<Input onSubmit={mockOnSubmit}/>)
        screen.getByPlaceholderText(placeholder).focus()
        await keyboard("new task!{enter}")
        expect(mockOnSubmit).toHaveBeenCalled()
        expect(mockOnSubmit).toHaveBeenCalledTimes(1)
        expect(mockOnSubmit).toHaveBeenCalledWith("new task!")
    })
})