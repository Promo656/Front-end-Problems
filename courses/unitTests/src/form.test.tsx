import {render, screen, waitFor} from "@testing-library/react";
import {FormWrap} from "./Form";
import userEvent from "@testing-library/user-event";

test("From render", async () => {
    const {keyboard} = userEvent.setup()
    render(<FormWrap/>)
    // screen.getByPlaceholderText("login").focus()
    // await keyboard("test{enter}")
    await waitFor(() => expect(screen.getByDisplayValue('egor')).toBeInTheDocument(),{timeout:3000})

})