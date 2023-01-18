import React, {useState} from "react";
import "./style.css"

export const Accordion = ({sections}) => {
    const [openSections, setOpenSections] = useState(new Set())
    const onClickHandler = (e) => {
        const target = e.target;
        const value = target.dataset.title
        if (target.tagName === "BUTTON") {
            const newSection = new Set(openSections)
            newSection.has(value)
                ? newSection.delete(value)
                : newSection.add(value)
            setOpenSections(newSection)
        }
    }
    return (
        <div onClick={onClickHandler}>
            {
                sections.map(({title, content}) => {
                    return (
                        <div key={title} className="accordion_item">
                            <div className="accordion_up">
                                <button data-title={title}>{title}</button>
                                <div className={openSections.has(title) ? "arrow" : ""}>+</div>
                            </div>
                            <span hidden={!openSections.has(title)}>{content}</span>
                        </div>
                    )
                })
            }
        </div>
    )
};