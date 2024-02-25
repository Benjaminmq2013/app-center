import { useEffect } from "react";
import { toast } from 'alert';

export type gameProgress = {
    [K in 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9]: "x" | "0" | "";
}

declare global {
    interface Window {
      Confetti: any;
    }
  }

export type Digit = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

const combinaciones:Digit[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],

    [1, 5, 9],
    [3, 5, 7],

    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
]

export const checkWinner = (game:gameProgress) => {

    const activateConfetti = () => {
        let confetti = new window.Confetti('tic-tac-toe__container');
            confetti.setCount(75);
            confetti.setSize(1);
            confetti.setPower(25);
            confetti.setFade(false);
            confetti.destroyTarget(false);
    }

    useEffect(() => {       

        // Winner logic

        combinaciones.forEach((combi) => {

            if(game[combi[0]] === "x" && game[combi[1]] === "x" && game[combi[2]] === "x") {                
                toast('The winner is X.')
                activateConfetti()
    
            } else if (game[combi[0]] === "0" && game[combi[1]] === "0" && game[combi[2]] === "0"){
                toast("The winner is 0")
                activateConfetti()
            }
        })
    }, [game]);
  
    
}