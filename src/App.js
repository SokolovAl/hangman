import "./styles/App.css";
import Score from "./components/Score";
import Solution from "./components/Solution";
import Letters from "./components/Letters";
import {useState} from "react";
import EndGame from "./components/EndGame";
import {generateLetterStatuses} from "./components/LettersInitializer";
import {fetchRandomWord} from "./components/RandomWordApi";

function App() {
    const [letterStatus, setLetterStatus] = useState(generateLetterStatuses());
    const [score, setScore] = useState(0);
    const [solution, setSolution] = useState({
        word: "",
        hint: ""
    });

    const fetchInitialWord = () => {
        fetchRandomWord()
            .then((newSolution) => {
                setSolution(newSolution);
            })
            .catch((error) => {
                console.error("Error setting initial solution:", error);
            });
    };

    if (!solution.word) {
        fetchInitialWord();
    }

    const handlePlayAgain = () => {
        setLetterStatus(generateLetterStatuses());
        setScore(0);
        fetchInitialWord();

    };
    const selectLetter = (letter) => {
        setLetterStatus((prevLetterStatus) => ({
            ...prevLetterStatus,
            [letter]: true
        }));
        setScore((prevScore) =>
            prevScore + (solution.word.includes(letter) ? 20 : -20)
        );

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
