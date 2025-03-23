import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);
    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount)

    }
    const conuterStyle = {
        border: '2px solid black',
        borderRadius: '20px',
        outerWidth: '775px'
    }
    return (
        <>
            <div style={conuterStyle}>
                <h3>Counter: {count}</h3>
                <button onClick={handleAdd}>Add</button>
            </div>
        </>

    )
}