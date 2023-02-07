import {render, screen} from "@testing-library/react";
import {NewPersonPage} from "./NewPersonPage";
import {MemoryRouter} from 'react-router-dom'

test("NewPersonPage renders correct title", async () => {
    render(
        <MemoryRouter>
            <NewPersonPage/>
        </MemoryRouter>
    );

    expect(screen.getByText(/New person/)).toBeInTheDocument();
});
