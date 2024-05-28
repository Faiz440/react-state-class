import { useEffect, useState } from "react";

export default function Test() { 
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState();
    
    useEffect(() => {
        setCalculation(count * 2);
    },[count]);
    return(
        <div>
            <h1>{count}</h1>
                <p>Calculation :-{calculation}</p> 
                <button onClick={() => setCount(count + 1)}>+</button>
                <button onClick={() => setCount(count - 1)}>-</button>

        </div>
        
    );
  
}
