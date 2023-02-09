import {render, screen} from "@testing-library/react";
import {SearchForm} from "./SearchForm";
import userEvent from "@testing-library/user-event";
import {act} from "@testing-library/react-hooks";

test("Submitting a search with no criteria should render validation error", async () => {
    const user = userEvent.setup();

    render(<SearchForm/>);
    await act(async () => await user.click(screen.getByText("Search")))

    expect(
        await screen.findByText("You must enter some search criteria")
    ).toBeInTheDocument();
});

test("Submitting a search with criteria should render correct results", async () => {
    const {keyboard, click} = userEvent.setup()
    render(<SearchForm/>);
    await screen.getByPlaceholderText("Enter search criteria").focus()
    await keyboard("app")
    await act(async () => await click(screen.getByText("Search")))
    expect(await screen.findByText("Apple")).toBeInTheDocument()

});

test("Search indicator should show during search request", async () => {
    const {keyboard, click} = userEvent.setup()
    render(<SearchForm/>);
    screen.getByPlaceholderText("Enter search criteria").focus()
    await keyboard("app")
    await act(async () => await click(screen.getByText("Search")))
    expect(await screen.findByText("Searching ...")).toBeInTheDocument()
    await screen.findByText("Apple")
    expect(screen.queryByText("Searching ...")).not.toBeInTheDocument()
});

test("Submitting a search with criteria that does not match should render not found message", async () => {
    const {keyboard, click} = userEvent.setup()
    render(<SearchForm/>);
    screen.getByPlaceholderText("Enter search criteria").focus()
    await keyboard("asasas")
    await act(async () => await click(screen.getByText("Search")))
    expect(await screen.findByText(/none found/i)).toBeInTheDocument()
});

test("Clicking Clear button should clear criteria and results", async () => {
    const {click, keyboard} = userEvent.setup()
    render(<SearchForm/>);
    screen.getByPlaceholderText("Enter search criteria").focus()
    await keyboard("app")
    await act(async ()=>await click(screen.getByText("Search")))
    await screen.findByText("Apple")
    await act(async ()=>await click(screen.getByText("Clear")))
    expect(screen.queryByText("Apple")).not.toBeInTheDocument()
    expect(screen.getByPlaceholderText("Enter search criteria")).toHaveValue("")
});
