let boxes  = document.querySelectorAll(".box");
let resterBtn = document.querySelector("#reset");
let msgContainer = document.querySelector(".msg_container");
let newGamebtn = document.querySelector("#restart");
let msg = document.querySelector("#msg");
let msg1 = document.querySelector("#msg1");

let turn0 = true; // player X , player 0

const winPat = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const reset = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if (turn0 === true){
            box.innerText = "O";
            box.style.color = "green";
            turn0 = false;
            
        } else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
        checkDraw();
    });
});
const checkDraw =() =>{
    let allBoxesFilled = true;
    boxes.forEach((box) => {
        if (box.innerText === ""){
            allBoxesFilled = false;
        }
    });
    if (allBoxesFilled) {
        msgContainer.classList.remove("hide");
        msg1.classList.remove("hide2");
        msg.classList.add("hide1");
    }
}
const checkWinner = () =>{
    for(let pattern of winPat){
        // console.log(pattern);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2].innerText]);
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if (pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};
const showWinner = (winner) => {
    msg.innerText = `Congratulations , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    msg.classList.remove("hide1");
    msg1.classList.add("hide2");
    disableBoxes();
};
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

resterBtn.addEventListener("click", reset);
newGamebtn.addEventListener("click",reset);