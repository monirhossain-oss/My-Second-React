import { useState } from "react"
export default function Batsman() {
    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0)
    const handleSix = () => {
        const updatedRuns = runs + 6;
        const updatedSixes = sixes + 1;
        setSixes(updatedSixes)
        setRuns(updatedRuns)
    }
    const handleFour = () => {
        const updatedRuns = runs + 4;
        setRuns(updatedRuns)
    }
    const handleSingle = () => {
        const updatedRuns = runs + 1;
        setRuns(updatedRuns);
    }
    return (
        <div>
            <h2>Batsman From Bangladesh</h2>
            <p><small>six : {sixes}</small></p>
            {
                runs > 50 && <p>Your score : 50</p>

            }
            <h3>Score: {runs}</h3>
            <button onClick={handleSingle}>Singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )

}

