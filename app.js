let userscore=0;
let comnputerscore=0;


    const choice = document.querySelectorAll(".first");

    choice.forEach((choices) => {
        choices.addEventListener("click", () => {
            const choiceid = choices.getAttribute("id");
            console.log("choice was clicked", choiceid);
        });
    });

