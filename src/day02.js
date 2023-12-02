
const day02_01 = (input) => {
    const expected = { red: 12, green: 13, blue: 14 }
    return input.split('\n')
        .map((game) => game.trim())
        .map((game) => {
            const rounds = game.split(/\: |; /)
            const game_id = parseInt(rounds.shift().replace('Game ', ''))
            const roundObjects = rounds.map((round) => round.split(', '))
                .map((round) => {
                    let roundObj = { red: 0, green: 0, blue: 0 }
                    round.forEach(colour => {
                        if (colour.includes(' red')) {
                            roundObj.red += parseInt(colour.replace(' red', ''))
                        } else if (colour.includes(' green')) {
                            roundObj.green += parseInt(colour.replace(' green', ''))
                        } else if (colour.includes(' blue')) {
                            roundObj.blue += parseInt(colour.replace(' blue', ''))
                        }
                    });
                    return roundObj;
                })
            return [game_id, roundObjects]
        })
        .filter(game =>
            game[1].filter(round => round.red > expected.red || round.green > expected.green || round.blue > expected.blue).length == 0
        )
        .map(game => game[0])
        .reduce((acc, val) => acc + val, 0);
}

const day02_02 = (input) => {
    return input.split('\n')
        .map((game) => game.trim())
        .map((game) => {
            const rounds = game.split(/\: |; /)
            const game_id = parseInt(rounds.shift().replace('Game ', ''))
            const roundObjects = rounds.map((round) => round.split(', '))
                .map((round) => {
                    let roundObj = { red: 0, green: 0, blue: 0 }
                    round.forEach(colour => {
                        if (colour.includes(' red')) {
                            roundObj.red += parseInt(colour.replace(' red', ''))
                        } else if (colour.includes(' green')) {
                            roundObj.green += parseInt(colour.replace(' green', ''))
                        } else if (colour.includes(' blue')) {
                            roundObj.blue += parseInt(colour.replace(' blue', ''))
                        }
                    });
                    return roundObj;
                })
            return roundObjects
        })
        .map(rounds => {
            let minimal_round = { red: 0, green: 0, blue: 0 }
            rounds.forEach(round => { 
                minimal_round.red = Math.max(minimal_round.red, round.red)
                minimal_round.green = Math.max(minimal_round.green, round.green)
                minimal_round.blue = Math.max(minimal_round.blue, round.blue)
            })
            return minimal_round.red * minimal_round.blue * minimal_round.green
        })
        .reduce((acc, val) => acc + val, 0);
}

module.exports = { day02_01, day02_02 }
