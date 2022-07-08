import { useEffect, useState } from "react"
import { Link } from "react-router-dom"



export default function Game({myChoice,score,setScore}) {

    const [house, setHouse] = useState('')
    const [playerWin , setPlayerWin] = useState('')
    const [counter, setCounter] = useState(3)

    
        
   

    
  

    const newHousePicK = () => {
        const choices= ['rock' , 'paper' , 'scissors' , 'lizard' , 'spock']
        setHouse(choices[Math.floor(Math.random() * 5 )])
    }

    useEffect(() => {
        newHousePicK()
    }, [])

    const Result = () => {
        if(myChoice === 'rock' && house === 'scissors'){
            setPlayerWin('Win')
            setScore(score +1)
        }else if (myChoice === 'paper' && house === 'rock'){
            setPlayerWin('Win')
            setScore(score +1)
        }else if (myChoice === 'scissors' &&  house === 'paper'){
            setPlayerWin('Win')
            setScore(score +1)
        }else if (myChoice === 'rock' && house === 'lizard') {
            setPlayerWin('Win')
            setScore(score +1)
        }else if (myChoice === 'lizard' && house === 'spock') {
            setPlayerWin('Win')
            setScore(score +1)
        }else if (myChoice === 'spock' && house === 'scissors') {
            setPlayerWin('Win')
            setScore(score +1)
        }else if (myChoice === 'scissors' && house === 'lizard' ) {
            setPlayerWin('Win')
            setScore(score +1)
        }else if (myChoice === 'lizard' && house === 'paper') {
            setPlayerWin('Win')
            setScore(score +1)
        }else if (myChoice === 'paper' && house === 'spock') {
            setPlayerWin('Win')
            setScore(score +1)
        }else if (myChoice === 'spock' && house === 'rock') {
            setPlayerWin('Win')
            setScore(score +1)
        } else if(myChoice === 'scissors' && house === 'rock'){
            setPlayerWin('lose')
            setScore(score -1)
        }else if (myChoice === 'rock' && house === 'paper'){
            setPlayerWin('lose')
            setScore(score -1)
        }else if (myChoice === 'paper' &&  house === 'scissors'){
            setPlayerWin('lose')
            setScore(score -1)
        }else if (myChoice === 'lizard' && house === 'rock') {
            setPlayerWin('lose')
            setScore(score -1)
        }else if (myChoice === 'spock' && house === 'lizard') {
            setPlayerWin('lose')
            setScore(score -1)
        }else if (myChoice === 'scissors' && house === 'spock') {
            setPlayerWin('lose')
            setScore(score -1)
        }else if (myChoice === 'lizard' && house === 'scissors' ) {
            setPlayerWin('lose')
            setScore(score -1)
        }else if (myChoice === 'paper' && house === 'lizard') {
            setPlayerWin('lose')
            setScore(score -1)
        }else if (myChoice === 'spock' && house === 'paper') {
            setPlayerWin('lose')
            setScore(score -1)
        }else if (myChoice === 'rock' && house === 'spock') {
            setPlayerWin('lose')
            setScore(score -1)
        }else {
            setPlayerWin('Draw')
        }
    }

    useEffect(() => {
        const timer = counter> 0 ? setInterval(() => {
            setCounter(counter-1)
        },1000) : Result();


        return () => {
            clearInterval(timer)
        }
    } , [counter,house])
    return (
        <div className="game">
                <div className="game-you">

                    <span className="text">You Picked</span>
                    <div className={`icon icon-${myChoice}`} ></div>
                </div>

                {playerWin === 'Win' &&   <div className="result_play">
                        <span className="text">You Win</span>
                            <Link to= '/' className="play-again" onClick={() => setHouse()}>Play Again</Link>

                    </div>  }
                {playerWin === 'lose' &&   <div className="result_play">
                        <span className="text">You lose</span>
                            <Link to= '/' className="play-again" onClick={() => setHouse()}>Play Again</Link>

                    </div>  }
                {playerWin === 'Draw' &&   <div className="result_play">
                        <span className="text">Draw</span>
                            <Link to= '/' className="play-again" onClick={() => setHouse()}>Play Again</Link>

                    </div>  }

                    <div className="game-house">

<span className="text">The House Picked</span>
{
    counter === 0 ? <div className={`icon icon-${house}`}></div> : <div className="counter">{counter}</div>
}
</div>

        </div>
    )
}




