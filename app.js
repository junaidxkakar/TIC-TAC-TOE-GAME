let boxes = document.querySelectorAll(".box");
let restbtn = document.querySelector(".rest");
let turnO = true;
let winpettrn = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6]];
boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
        } else{
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;
        chekwinner();
    });
});
 const showwinner =(winner) =>{
    alert("CONGRATULATION YOU WIN!")
    box.disabled = true;
    disableboxes();
 }
const restgame = () =>{
turnO = true;
enableboxes();

}

 const disableboxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
 }
 const enableboxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
 }


const chekwinner = () =>{
    for( pettrn of winpettrn){
        let pos1val = boxes[pettrn[0]].innerText;
        let pos2val = boxes[pettrn[1]].innerText;
        let pos3val = boxes[pettrn[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val)
                // alert("CONGRATILATION WINNER IS", pos1val)
            showwinner(pos1val);
        }

    }
}

const rest = () =>{
    turnO = true;
    
}
restbtn.addEventListener("click",restgame);