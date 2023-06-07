import { useState, useEffect } from 'react';
import './style.css';

function Home() {

    const [count, setCount] = useState(10);

    //did mount
    useEffect(() => {
        alert("Carreguei");
    }, [])

    //did update
    useEffect(() => {
        if(count != 10) 
            alert("Mudou o count");
    }, [count])

    return (
        <>
            <h1>Contador</h1>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>+</button>
        </>
    )
}

export default Home;