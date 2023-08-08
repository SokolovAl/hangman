import "./App.css";
import Score from "./components/Score";
import Solution from "./components/Solution";
import Letters from "./components/Letters";
import {useState} from "react";

function App() {
    // const generateLetterStatuses = () => {
    //     let letterStatus = {};
    //     for (let i = 65; i < 91; i++) {
    //         letterStatus[String.fromCharCode(i)] = false;
    //     }
    //     return letterStatus;
    // };
    //
    // const [letterStatus, setLetterStatus] = useState(generateLetterStatuses());
    const [letterStatus, setLetterStatus] = useState({
        A: false,
        B: false,
        C: false,
        D: false,
        E: true,
        F: false,
        G: false,
        H: false,
        I: false,
        J: false,
        K: false,
        L: false,
        M: false,
        N: false,
        O: false,
        P: false,
        Q: false,
        R: false,
        S: true,
        T: false,
        U: false,
        V: false,
        W: false,
        X: false,
        Y: true,
        Z: false
    });

    const [score, setScore] = useState(0);
    const [solution, setSolution] = useState({
        word: "BYTES",
        hint: "Hint for the word"
    });

    return (
        <div className = "App">
            <Score score = {score}/>
            <Solution solution = {solution} letterStatus = {letterStatus}/>
            <Letters letterStatus = {letterStatus}/>
        </div>
    );
}

export default App;
