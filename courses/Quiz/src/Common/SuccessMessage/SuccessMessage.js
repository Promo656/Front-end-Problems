import React from "react";
import css from "courses/Quiz/src/Common/SuccessMessage/SuccessMessage.module.css";
import tick from "courses/Quiz/src/Common/SuccessMessage/tick.png";

export function SuccessMessage({ message }) {
  return (
    <div className={css.savesuccess}>
      <img src={tick} alt="tick" />
      {message}
    </div>
  );
}
