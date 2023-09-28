function rockChosen(){
    startWar(1);
}

function paperChosen(){
    startWar(2);
}

function scisorChosen(){
    startWar(3);
}

let userPoint = 0;
let computerPoint = 0;

function calculateComputersChoice(){
    
    const computerChoice = Math.floor(Math.random() * 3) + 1;

    switch(computerChoice){
        case 1:
            document.getElementById('computerChoice').innerHTML = 'Rock';
            break;
        case 2:
            document.getElementById('computerChoice').innerHTML = 'Paper';
             break;
        case 3:
            document.getElementById('computerChoice').innerHTML = 'Scisors';
            break;
        
    }
    return computerChoice;
}

function startWar(userChoice){
    document.getElementById('winner').classList.remove("win","lost");

    let computerChoice = calculateComputersChoice();
    
    if(userChoice == computerChoice){
        document.getElementById('winner').innerHTML = 'DRAW! 😐';
    }else if (userChoice == 1 && computerChoice == 2 ||
              userChoice == 2 && computerChoice == 3 ||
              userChoice == 3 && computerChoice == 1){
                document.getElementById('winner').innerHTML = 'YOU LOST! 😒';
                document.getElementById('winner').classList.add("lost");
                computerPoint++;
               } else {
                document.getElementById('winner').innerHTML = 'YOU WON! 😀';
                document.getElementById('winner').classList.add("win");
                userPoint++;
               }
    
    document.getElementById('userPoint').innerHTML = userPoint;
    document.getElementById('computerPoint').innerHTML = computerPoint;
}

