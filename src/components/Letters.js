import Letter from "./Letter";

const Letters = ({letterStatus, onLetterClick}) => {
    return (
        <div>
            <div>Available letters</div>
            {Object.keys(letterStatus).map((letter) => (
                <Letter key = {letter} letter = {letter} letterStatus = {letterStatus[letter]}
                        onClick = {onLetterClick}/>
            ))}
        </div>
    );
};

export default Letters;
