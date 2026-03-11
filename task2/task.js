export function countDifferentLetters(sentence) {
    const letters = []

    for (let kar of sentence.toLowerCase()) {
        if (kar >= 'a' && kar <= 'z') {
            if (!letters.includes(kar)) {
                letters.push(kar)
            }
        }
    }
    return letters.length
}