import Letter from "./Letter";

const Solution = ({solution, letterStatus}) => {
    return (
        <div>
            <div>
                {solution.word.split("").map((letter, index) => (
                    <Letter key = {index} solutionStatus = {letterStatus[letter] ? letter : "_"}/>
                ))}
            </div>
            <br/>
            <div>
                <em>
                    {solution.hint}
                </em>
            </div>
            <br/>
        </div>
    );
};

export default Solution;
