export const generateLetterStatuses = () => {
    let letterStatus = {};
    for (let i = 65; i < 91; i++) {
        letterStatus[String.fromCharCode(i)] = false;
    }
    return letterStatus;
};
