import Letter from "./Letter";

const Letters = ({letterStatus}) => {
    return (
        <div>
            <div>Available letters</div>
            {Object.keys(letterStatus).map((letter) => (
                <Letter key = {letter} letter = {letter} letterStatus = {letterStatus[letter]}/>
            ))}
        </div>
    );
};

export default Letters;
