import "../Letter.css";

const Letter = ({letter, letterStatus, solutionStatus, onClick}) => {
    const letterStyle = letterStatus ? "selected" : "unselected";

    return (
        <span className = {`letter ${letterStyle}`} onClick = {() => onClick(letter)}>
            {letter}{solutionStatus}
        </span>
    );
};

export default Letter;
