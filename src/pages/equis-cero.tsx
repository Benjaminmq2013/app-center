import React, { useState } from 'react'
import { checkWinner, gameProgress, Digit } from "../modules/tic-tac-toe/checkWinner"
import Icon from '@/components/Icon';

const TicTacToe = () => {

    const array:Digit[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const [ game, setGame ] = useState<gameProgress>({1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "", 9: ""})
    const [ turno, setTurno ] = useState<boolean>(true);

    // useEffect:
    checkWinner(game)
    
    const handleClick = (number:Digit) => {
        
        if(turno === true && game[number] === "") {
            // Turno de las X
            setGame({...game, [number]: "x"});
            setTurno(!turno)

        } else if (game[number] === "") {
            // Turno del 0
            setGame({ ...game, [number]: "0" })
            setTurno(!turno)
        }        
    }

  return (
    <main className="tic-tac-toe__section" >
        <div className="tic-tac-toe__container" id="tic-tac-toe__container" >
            {array.map((num) => (
                <div 
                    className={`game-square square-${num}`} 
                    key={num} 
                    onClick={() => handleClick(num)}
                >{ game[num] }</div>
            ))}
            
        </div>

        <Icon imageUrl='/assets/AppIcons/reload.svg' title='New Game' onClick={ () => location.reload() } />

        <div className="early-access--tag" >Early Access</div>
    </main>
    
  )
}

export default TicTacToe