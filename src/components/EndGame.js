const EndGame = ({score, solution, letterStatus, onPlayAgain}) => {
    const wordGuessed = solution.word.split("").every(letter => letterStatus[letter]);
    const isGameOver = score <= -100 || wordGuessed;

    if (isGameOver) {
        const message = wordGuessed ? "Congratulations!" : "Game Over!";
        const additionalMessage = wordGuessed ? `Your score: ${score}` : `The secret word was: ${solution.word}`;

        return (
            <div>
                <h2>{message}</h2>
                <p>{additionalMessage}</p>
                <button onClick = {onPlayAgain}>Play Again</button>
            </div>
        );
    }
};

export default EndGame;
