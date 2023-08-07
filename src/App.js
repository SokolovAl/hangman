import "./App.css";
import Score from "./components/Score";
import Solution from "./components/Solution";
import Letters from "./components/Letters";
import {useState} from "react";

function App() {
    const generateLetterStatuses = () => {
        let letterStatus = {};
        for (let i = 65; i < 91; i++) {
            letterStatus[String.fromCharCode(i)] = false;
        }
        return letterStatus;
    };

    const [letterStatus, setLetterStatus] = useState(generateLetterStatuses());
    const [score, setScore] = useState(0);
    const [solution, setSolution] = useState({
        word: "CALM",
        hint: "hint"
    });

    return (
        <div className = "App">
            <Score score = {score}/>
            <Solution letterStatus = {letterStatus} solution = {solution}/>
            <Letters letterStatus = {letterStatus}/>
        </div>
    );
}

export default App;
