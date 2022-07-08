import { Link } from "react-router-dom";
import pentagon from '../../images/bg-pentagon.svg'
import paper from '../../images/icon-paper.svg'
import rock from '../../images/icon-rock.svg'
import scissors from '../../images/icon-scissors.svg'
import lizard from '../../images/icon-lizard.svg'
import spock from '../../images/icon-spock.svg'

    export default function Play({setMyChoice}) {

    const setChoice= (e) => {
        setMyChoice(e.target.dataset.id)
    }

    return (
       <div className="play">
        <img src={pentagon} alt=""  className="pentagon" />

            <div className="items"> 
            
            <Link to='/game'>

                
        <div data-id="paper" onClick={setChoice} className="icon icon-paper" style={{backgroundImage: `url(${paper})` }}>
        
        
        </div>
        </Link>

        <Link to='/game'>
        <div data-id="scissors" onClick={setChoice} className="icon icon-scissors" style={{backgroundImage: `url(${scissors})` }}>
        
        </div>
        </Link>
        <Link to='/game'>
        <div data-id="rock" onClick={setChoice} className="icon icon-rock"  style={{backgroundImage: `url(${rock})` }}>
        
        </div>
        </Link>
        <Link   Link to='/game'>
        <div data-id="lizard" onClick={setChoice} className="icon icon-lizard" style={{backgroundImage: `url(${lizard})` }} >
        
        </div>
        </Link>
        <Link to='/game'>
        <div data-id="spock" onClick={setChoice} className="icon icon-spock" style={{backgroundImage: `url(${spock})` }}>
        
        </div>
        </Link>
            
            
            </div>
       
       </div>
    )
}