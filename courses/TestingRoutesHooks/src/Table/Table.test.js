import React from "react";
import {render, screen} from "@testing-library/react";
import {Table} from "courses/TestingRoutesHooks/src/Table/Table";

test("headings are rendered with the columns passed in", () => {
    render(
        <Table
            data={[
                {field1: "A", field2: 1},
                {field1: "B", field2: 2},
            ]}
            columns={[
                {name: "field1", caption: "Field 1"},
                {name: "field2", caption: "Field 2"},
            ]}
        />
    );
    const headings = screen.getAllByRole("columnheader")
        .map(el => el.textContent)

    expect(headings).toHaveLength(2)
    expect(headings).toStrictEqual(["Field 1", "Field 2"])
});

test("cells are rendered with the data passed in", () => {
    render(
        <Table
            data={[
                {field1: "A", field2: 1},
                {field1: "B", field2: 2},
            ]}
            columns={[
                {name: "field1", caption: "Field 1"},
                {name: "field2", caption: "Field 2"},
            ]}
        />
    );
    const cells = screen.getAllByRole("cell")
        .map(el => el.textContent)
    expect(cells).toStrictEqual(["A", "1", "B", "2"])
});

test("Heading & cell alignment is left if not defined", () => {
    render(
        <Table
            data={[{field1: "A"}]}
            columns={[{name: "field1", caption: "Field 1"}]}
        />
    );
    // const head = screen.getByRole("columnheader").style.textAlign;
    // const cell = screen.getByRole("cell").style.textAlign;
    // expect(head).toBe("left")
    // expect(cell).toBe("left")

    // or

    const head = screen.getByRole("columnheader")
    const cell = screen.getByRole("cell")
    expect(head).toHaveStyle({textAlign:"left"})
    expect(cell).toHaveStyle({textAlign:"left"})
});

test("Heading & cell alignment is correct when defined", () => {
    render(
        <Table
            data={[{field1: "A"}]}
            columns={[{name: "field1", caption: "Field 1", align: "center"}]}
        />
    );
    const head = screen.getByRole("columnheader")
    const cell = screen.getByRole("cell")

    expect(head).toHaveStyle({textAlign:"center"})
    expect(cell).toHaveStyle({textAlign:"center"})
});
