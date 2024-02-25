
export type gameProgress = {
    [K in 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9]: "x" | "0" | "";
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
    combinaciones.forEach((combi) => {

        console.log(combi[0]+":",game[combi[0]] ,combi[1]+":", game[combi[1]], combi[2]+":", game[combi[2]])
        
        if(game[combi[0]] === "x" && game[combi[1]] === "x" && game[combi[2]] === "x") {
            console.log("The winner is X")

        } else if (game[combi[0]] === "0" && game[combi[1]] === "0" && game[combi[2]] === "0"){
            console.log("The winner is 0")
        }
    })
    console.log("*****************************************************")
    
}