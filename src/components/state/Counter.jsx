import { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(99);
    return (
        <>
            <input type="number" value={count}/>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </>
    )
}

export default Counter;