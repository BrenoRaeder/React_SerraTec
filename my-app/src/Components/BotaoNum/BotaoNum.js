import React, {useState} from 'react';
import './style.css'

function BotaoNum () {
    const [num, setNum] = useState(0);
    const somaNum = () => {
        setNum(num + 1);
    }
    const subtraiNum = () => {
        setNum(num - 1);
    }

    return (
        <div className="btn-num">
            <p>Olha um número: {num}</p>
            <div>
                <button onClick={subtraiNum}>-</button>
                <button onClick={somaNum}>+</button>
            </div>
        </div>
    )
}

export default BotaoNum;