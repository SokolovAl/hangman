import "../Letter.css";

const Letter = ({letter, letterStatus, solutionStatus}) => {
    const letterStyle = letterStatus ? 'selected' : 'unselected';

    return <span className={`letter ${letterStyle}`}>{letter}{solutionStatus}</span>;
};

export default Letter;
