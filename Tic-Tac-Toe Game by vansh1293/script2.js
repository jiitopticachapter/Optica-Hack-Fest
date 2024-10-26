let data = document.querySelector(".data");
let chance = 1;
let box = document.querySelectorAll(".box");
let element = document.querySelectorAll(".element");
let game_end = false;
// we created a 2-D array.
// these 2-D array elements are the position at which we wanna
// check the innerText to get the winner.
let windecider = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];
const checkwin = ((ch) => {
    if (ch % 2 === 1) {
        for (let e of windecider) {
            if (element[e[0] - 1].innerText === "X" && element[e[1] - 1].innerText === "X" && element[e[2] - 1].innerText === "X") {
                console.log("x");
                return 1;
            }
        }
    }
    else if (ch % 2 === 0) {
        for (let e of windecider) {
            if (element[e[0] - 1].innerText === "O" && element[e[1] - 1].innerText === "O" && element[e[2] - 1].innerText === "O") {
                console.log("0");
                return 1;
            }
        }
    }
    return 0;
})
const display_turn = ((x) => {
    if (data.innerText) {
        data.innerText = "";
    }
    if (x == 1) {
        let s1 = localStorage.getItem("input1");
        let t = `${s1}'s Turn`;
        data.innerText = t;
    }
    else {
        let s2 = localStorage.getItem("input2");
        let t = `${s2}'s Turn`;
        data.innerText = t;
    }
});
const turn = (() => {
    let v = Math.random();
    if (v <= 0.5)
        return 1;
    else
        return 2;
});
const display_winner = ((x) => {
    if (data.innerText) {
        data.innerText = "";
    }
    if (x == 1) {
        let s1 = localStorage.getItem("input1");
        let t = `${s1} Won`;
        data.innerText = t;
    }
    else {
        let s2 = localStorage.getItem("input2");
        let t = `${s2} Won`;
        data.innerText = t;
    }
    document.querySelector(".btn").style.visibility = "visible";
});
const handle_event = ((i) => {
    if (game_end) {
        return;
    }
    let xyz = element[i].getAttribute("xyz");
    if (chance % 2 === 1 && xyz === "0") {
        element[i].innerText = "X";
        element[i].style.visibility = "visible";
        v = checkwin(chance);
        if (v === 1) {
            game_end = true;
            display_winner(t);
            return;
        }
        if (chance === 9) {
            data.innerText = "Draw";
            document.querySelector(".btn").style.visibility = "visible";
            return;
        }
        chance++;
        element[i].setAttribute("xyz", "1");
        if (t === 1) {
            display_turn(2);
            t = 2;
        }
        else {
            display_turn(1);
            t = 1;
        }
    }
    else if (chance % 2 === 0 && xyz === "0") {
        element[i].innerText = "O";
        element[i].style.visibility = "visible";
        let v = checkwin(chance);
        if (v === 1) {
            game_end = true;
            display_winner(t);
            return;
        }
        if (chance === 9) {
            data.innerText = "Draw";
            document.querySelector(".btn").style.visibility = "visible";
            return;
        }
        chance++;
        element[i].setAttribute("xyz", "1");
        if (t === 1) {
            display_turn(2);
            t = 2;
        }
        else {
            display_turn(1);
            t = 1;
        }
    }
})
const setupEventListeners = (() => {
    let v;
    for (let i = 0; i < box.length; i++) {

        box[i].addEventListener("click", () => {
            handle_event(i);
        });
    }
});
const setupEventListeners2 = (() => {
    let btn1 = document.querySelector(".restart");
    let btn2 = document.querySelector(".end");
    btn1.addEventListener("click", (() => {
        location.reload();
    }));
    btn2.addEventListener("click", (() => {
        window.location.replace("index.html");
    }));
});
let t = turn();
display_turn(t);
setupEventListeners();
setupEventListeners2();