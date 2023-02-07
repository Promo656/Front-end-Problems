import React from "react";
import {Link} from "react-router-dom";
import css from "./HomePage.module.css";
import {useTitle} from "../hooks/useTitle";

export function HomePage() {
    useTitle("My App - Home")
    return (
        <>
            <h3 className={css.title}>My App</h3>
            <Link to="/newperson" className={css.addbutton}>
                Add new person
            </Link>
        </>
    );
}
