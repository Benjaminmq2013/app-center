import React, { useState } from 'react'
import { checkWinner, gameProgress, Digit } from "../modules/tic-tac-toe/checkWinner"

const TicTacToe = () => {

    const array:Digit[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const [ game, setGame ] = useState<gameProgress>({1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "", 9: ""})
    const [ turno, setTurno ] = useState<boolean>(true)
    
    const handleClick = (number:Digit) => {
        setTurno(!turno)

        if(turno === true && game[number] === "") {
            // Turno de las X
            setGame({...game, [number]: "x"});

        } else if (game[number] === "") {
            // Turno del 0
            setGame({ ...game, [number]: "0" })
        }

        checkWinner(game)
    }

  return (
    <section className="tic-tac-toe__section" >
        <div className="tic-tac-toe__container" >
            {array.map((num) => (
                <div 
                    className={`game-square square-${num}`} 
                    key={num} 
                    onClick={() => handleClick(num)}
                >{ game[num] }</div>
            ))}
            
        </div>
    </section>
    
  )
}

export default TicTacToe