
export interface gameProgress {
    1: "x" | "0" | "",
    2: "x" | "0" | "",
    3: "x" | "0" | "",
    4: "x" | "0" | "",
    5: "x" | "0" | "",
    6: "x" | "0" | "",
    7: "x" | "0" | "",
    8: "x" | "0" | "",
    9: "x" | "0" | "",
}

const combinaciones = {
    combi_1: [1, 2, 3],
    combi_2: [4, 5, 6],
    combi_3: [7, 8, 9],
    combi_4: [1, 5, 9],
    combi_5: [3, 5, 7],
    combi_6: [1, 2, 3],
}

export const checkWinner = (game:gameProgress) => {
    
}