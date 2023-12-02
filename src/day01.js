
const day01_01 = (input) => {
    return input.split('\n')
        .map((x) => x.replace(/[a-zA-Z]/g, "").trim())
        .map((x) => `${x.slice(0,1)}${x.slice(-1)}`)
        .map((x) => parseInt(x))
        .reduce((acc, val) => acc + val, 0)
}

module.exports = day01_01
