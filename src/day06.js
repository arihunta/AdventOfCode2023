
const day06_01 = (input) => {
    let times = input.split('\n')[0].replace("Time:", "").trim().split(/ +/).map(x => parseInt(x.trim()))
    let distances = input.split('\n')[1].replace("Distance:", "").trim().split(/ +/).map(x => parseInt(x.trim()))
    answer = 1
    for (let i = 0; i < times.length; i++) {
        win_strategies = 0
        for (let delay = 0; delay <= times[i]; delay++) {
            if (delay * (times[i] - delay) > distances[i]) win_strategies++
        }
        if (win_strategies > 0) answer *= win_strategies
    }
    return answer
}

const day06_02 = (input) => {
    let time = parseInt(input.split('\n')[0].replace("Time:", "").trim().replace(/ /g, ""))
    let distance = parseInt(input.split('\n')[1].replace("Distance:", "").trim().replace(/ /g, ""))
    win_strategies = 0
    for (let delay = 0; delay <= time; delay++) {
        if (delay * (time - delay) > distance) win_strategies++
    }
    if (win_strategies > 0) answer *= win_strategies
    return win_strategies
}

module.exports = { day06_01, day06_02 }
