import "../Score.css";

const Score = ({score}) => {
    let scoreClass;
    if (score >= 80) {
        scoreClass = "high-score";
    } else if (score >= 50) {
        scoreClass = "medium-score";
    } else {
        scoreClass = "low-score";
    }

    return (
        <div className = {`score ${scoreClass}`}>
            <div>Score: {score}</div>
            <br/>
        </div>
    );
};

export default Score;
