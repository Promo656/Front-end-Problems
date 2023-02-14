import React from "react";
import css from "courses/Quiz/src/Common/ErrorMessage/ErrorMessage.module.css";
import cross from "courses/Quiz/src/Common/ErrorMessage/cross.png";

export function ErrorMessage({ message }) {
  return (
    <div className={css.saveerror}>
      <img src={cross} alt="cross" />
      {message}
    </div>
  );
}
