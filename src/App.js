import "./styles/App.css";
import Score from "./components/Score";
import Solution from "./components/Solution";
import Letters from "./components/Letters";
import {useState} from "react";
import EndGame from "./components/EndGame";
import {generateLetterStatuses} from "./components/LettersInitializer";

function App() {
    const [letterStatus, setLetterStatus] = useState(generateLetterStatuses());
    const [score, setScore] = useState(0);
    const [solution, setSolution] = useState({
        word: "BABE",
        hint: "Hint for the word"
    });

    const handlePlayAgain = () => {
        setLetterStatus(generateLetterStatuses());
        setScore(0);
    };

    const selectLetter = (letter) => {
        const updatedLetterStatus = {...letterStatus};
        updatedLetterStatus[letter] = true;

        setLetterStatus(updatedLetterStatus);

        const scoreChange = solution.word.includes(letter) ? 20 : -20;

        setScore(score => score + scoreChange);
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
