import "./styles/App.css";
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
        word: "BYTES",
        hint: "Hint for the word"
    });

    const selectLetter = (letter) => {
        if (solution.word.includes(letter)) {
            const updatedLetterStatus = {...letterStatus};
            updatedLetterStatus[letter] = true;
            setLetterStatus(updatedLetterStatus);

            setScore(score + 20);
        } else {
            const updatedLetterStatus = {...letterStatus};
            updatedLetterStatus[letter] = true;
            setLetterStatus(updatedLetterStatus);

            setScore(score - 20);
        }
    };
    return (
        <div className = "App">
            <Score score = {score}/>
            <Solution solution = {solution} letterStatus = {letterStatus}/>
            <Letters letterStatus = {letterStatus} onLetterClick = {selectLetter}/>
        </div>
    );
}

export default App;
