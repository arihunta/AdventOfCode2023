
const day04_01 = (input) => {
    return input.split('\n')
        .map(line => line.replace(/Card\s+[0-9]+\: /, "").split(" | ").map(x => x.trim()))
        .map(card => [
            new Set(card[0].split(/\s+/).map(x => parseInt(x.trim()))),
            new Set(card[1].split(/\s+/).map(x => parseInt(x.trim())))
        ])
        .map(card => {
            let mine = Array.from(card[1]).filter(x => card[0].has(x))
            return mine.length > 0 ? Math.pow(2, mine.length - 1) : 0
        })
        .reduce((acc, val) => acc + val, 0)
}

const day04_02 = (input) => {
    let wins = input.split('\n')
        .map(line => line.replace(/Card\s+[0-9]+\: /, "").split(" | ").map(x => x.trim()))
        .map(card => [
            new Set(card[0].split(/\s+/).map(x => parseInt(x.trim()))),
            new Set(card[1].split(/\s+/).map(x => parseInt(x.trim())))
        ])
        .map(card => Array.from(card[1]).filter(x => card[0].has(x)).length)
    let cardnums = new Array(wins.length).fill(1);
    for (idx = 0; idx < wins.length; idx++) {
        for (nxt = idx + 1; nxt < idx + 1 + wins[idx]; nxt++) {
            cardnums[nxt] += cardnums[idx]
        }
    }
    return cardnums.reduce((acc, val) => acc + val, 0)
}

module.exports = { day04_01, day04_02 }
