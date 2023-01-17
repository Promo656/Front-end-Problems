const root = document.getElementsByClassName("accordion")[0];
(() => {
    const contents = root.getElementsByTagName("span");
    for (let el of contents) {
        el.hidden = true
    }
})()
root.addEventListener("click", (event) => {
    const target = event.target;
    if (target.tagName === "BUTTON") {
        const content = target.nextElementSibling;
        content.hidden = !content.hidden
    }
})