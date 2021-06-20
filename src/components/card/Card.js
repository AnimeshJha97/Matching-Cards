import React, { useState, useContext } from 'react'
import "./Card.css"
import { dataContext } from './../../App'

function Card({ indx }) {
    const [state, setState] = useState(false)
    const [cardText, flag, setFlag, clicked, setclicked] = useContext(dataContext)

    const matcHandler = () => {
        setState(true)
        if (flag === "") {
            setFlag(cardText[indx])
        }
        else {
            if (flag !== cardText[indx]) {
                setTimeout(() => { setState(false) }, 500)
            }
            else {
                setFlag("")
            }
        }
    }
    return (
        <div className={state ? "card visible" : "card"} onClick={matcHandler} key={indx}>
            <div className="card-face card-face-front" >
                <h1>{cardText[indx]}</h1>
            </div>
            <div className="card-face card-face-back" >
                {clicked[indx]}
            </div>
        </div>
    )
}

export default Card;