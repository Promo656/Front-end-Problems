import React from "react";
import {Link} from "react-router-dom";
import css from "courses/TestingRoutesHooks/src/HomePage/HomePage.module.css";
import {useTitle} from "courses/TestingRoutesHooks/src/hooks/useTitle/useTitle";

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
