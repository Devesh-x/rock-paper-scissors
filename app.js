let userscore=0;
let comnputerscore=0;


    const choice = document.querySelectorAll(".first");
    const msg= document.querySelector("#msg");
    const userscorep= document.querySelector("#user-score");
    const compscorep= document.querySelector("#computer_score");
    const getcompchoice = () =>{
        //rock paper scissor
        const options=["rock", "paper", "scissors"];
        const randidx=Math.floor(Math.random()*3);
        return options[randidx];
    };
    
    const drawgame = () =>{
        console.log("game was draw");
        msg.innerText = "draw play again";
        msg.style.backgroundColor="aliceblue";

    }
    const showwinner = (userwin, userchoice, compchoice) =>{
        if(userwin){
            userscore++;
            userscorep.innerText=userscore;
            console.log("you win !");
            msg.innerText = `You win ${userchoice} beats ${compchoice}`;
            msg.style.backgroundColor="green";
        }
        else{
            comnputerscore++
            compscorep.innerText=comnputerscore;
            console.log("you lose");
            msg.innerText = `You lose ${compchoice} beats  ${userchoice}`;
            msg.style.backgroundColor="red";
        }
    }
    const playgame =(userchoice) =>{
        console.log("userchoice =", userchoice);
        //computer choice;
        const compchoice= getcompchoice();
        console.log("comp choice", compchoice);

        if(userchoice==compchoice){
            drawgame();

        }
        else{
            let userwin= true;
            if(userchoice== "rock"){
                userwin= compchoice=="paper" ? false : true;
            }
            else if(userchoice== "paper"){
                userwin = compchoice=="scissor" ?false : true;
            }
            else{
                userwin = compchoice=="rock" ? false : true;
            }
            showwinner(userwin, userchoice, compchoice);
        }

    };

    choice.forEach((choices) => {
        choices.addEventListener("click", () => {
            const choiceid = choices.getAttribute("id");
            console.log("choice was clicked", choiceid);
            playgame(choiceid);
        });
    });


