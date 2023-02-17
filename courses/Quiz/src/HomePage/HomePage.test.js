import {MemoryRouter} from "react-router-dom";
import {render, screen, waitForElementToBeRemoved} from "@testing-library/react";
import {HomePage} from "courses/Quiz/src/HomePage/HomePage";
import userEvent from "@testing-library/user-event";
import {App} from "courses/Quiz/src/App";

test("The correct page title is rendered", async () => {
    jest.spyOn(window, "fetch");
    fetch.mockResolvedValue(
        new Response(JSON.stringify([
            {
                "id": 1,
                "note": "This is an important note."
            }
        ]), {status: 200})
    );

    render(
        <MemoryRouter>
            <HomePage/>
        </MemoryRouter>
    );

    expect(await screen.findByText("Notes")).toBeInTheDocument();
    fetch.mockRestore();
})

test("A loading message is rendered when data is being fetched", async () => {
    jest.spyOn(window, "fetch");
    fetch.mockResolvedValue(
        new Response(JSON.stringify([
            {
                "id": 1,
                "note": "This is an important note."
            }
        ]), {status: 200})
    );

    render(
        <MemoryRouter>
            <HomePage/>
        </MemoryRouter>
    );

    expect(screen.getByText("Loading notes ...")).toBeInTheDocument();

    await screen.findByText(/important note/);

    expect(screen.queryByText("Loading notes ...")).not.toBeInTheDocument();
    expect(fetch).toHaveBeenCalledTimes(1);

    fetch.mockRestore();
})

test("The notes table has the correct content after data has been fetched", async () => {
    jest.spyOn(window, "fetch");
    fetch.mockResolvedValue(
        new Response(JSON.stringify([
            {
                "id": 1,
                "note": "This is an important note."
            }
        ]), {status: 200})
    );

    render(
        <MemoryRouter>
            <HomePage/>
        </MemoryRouter>
    );

    await waitForElementToBeRemoved(() => screen.queryByText("Loading notes ..."));

    const cells = screen.getAllByRole("cell").map((cell) => cell.textContent);

    expect(cells).toStrictEqual(["1", "This is an important note."]);
    expect(fetch).toHaveBeenCalledTimes(1);

    fetch.mockRestore();
})

test("Should open New Note page when Add button is clicked", async () => {
    const user = userEvent.setup();

    jest.spyOn(window, "fetch");
    fetch.mockResolvedValue(
        new Response(JSON.stringify([
            {
                "id": 1,
                "note": "This is an important note."
            }
        ]), { status: 200 })
    );

    render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );

    await user.click(screen.getByText("Add new note"));

    expect(await screen.findByText("New Note")).toBeInTheDocument();

    fetch.mockRestore();
});