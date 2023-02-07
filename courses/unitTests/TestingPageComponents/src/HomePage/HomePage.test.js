import {render, screen} from "@testing-library/react";
import {HomePage} from "./HomePage";
import {MemoryRouter} from 'react-router-dom'

test("HomePage renders app title", async () => {
    render(
        <MemoryRouter>
            <HomePage/>
        </MemoryRouter>
    );

    expect(screen.getByText(/My App/)).toBeInTheDocument();
});
