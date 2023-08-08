import "./styles/App.css";
import Score from "./components/Score";
import Solution from "./components/Solution";
import Letters from "./components/Letters";
import {useState} from "react";
import EndGame from "./components/EndGame";

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

    const handlePlayAgain = () => {
        setLetterStatus(generateLetterStatuses());
        setScore(0);
    };

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
            <EndGame score = {score} solution = {solution} letterStatus = {letterStatus}
                     onPlayAgain = {handlePlayAgain}/>
        </div>
    );
}

export default App;
