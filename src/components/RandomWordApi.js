export function fetchRandomWord() {
    return fetch("https://random-words-api.vercel.app/word?ref=apislist.com")
        .then((response) => response.json())
        .then((data) => {
            if (data[0]) {
                return {
                    word: data[0].word.toUpperCase(),
                    hint: data[0].definition
                };
            }
        })
        .catch((error) => {
            console.error("Error fetching random word:", error);
            throw error;
        });
}

