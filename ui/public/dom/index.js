/**
 * Element search methods
 * */

/**
 * document.getElementById()
 * */
function changeColor(color) {
    const elem = document.getElementById("test");
    if (elem.style.color === "red") {
        elem.style.color = "black"
    } else {
        elem.style.color = color
    }
}

/**
 * document.getElementsByClassName()
 * */
const cn = document.getElementById("parent-id");
const el = cn.getElementsByClassName("test");

/**
 * document.getElementsByName()
 * */
const n = document.getElementsByName("input1");

/**
 * document.getElementsByTagName()
 * */
function getAllParaElems() {
    let allParas = document.getElementsByTagName("p");
    let num = allParas.length;
    alert("There are " + num + " paragraph in this document");
}

function div1ParaElems() {
    let div1 = document.getElementById("div1");
    let div1Paras = div1.getElementsByTagName("p");
    let num = div1Paras.length;
    alert("There are " + num + " paragraph in #div1");
}

function div2ParaElems() {
    let div2 = document.getElementById("div2");
    let div2Paras = div2.getElementsByTagName("p");
    let num = div2Paras.length;
    alert("There are " + num + " paragraph in #div2");
}

/**
 * document.querySelector()
 * */
const qs1 = document.querySelector("#foo\\:bar"); // for id
const qs2 = document.querySelector("[name='input1']"); // for name
const qs3 = document.querySelector("input[name='input2']"); // for name of specific type by name attribute
const qs4 = document.querySelector("label"); // for tag name
const qs5 = document.querySelector(".p"); // for class name
const qs6 = document.querySelector("#parent-id .p") // for id and class name
const qs7 = document.querySelector("#parent-id input[name='input2']") // for id and specific type by name attribute

/**
 * document.querySelectorAll()
 * */
const qsa1 = document.querySelectorAll("#div1 p");
const qsa2 = document.querySelectorAll("div");