
const day03_01 = (input) => {
    let re = /[0-9]+/g
    lines = input.split('\n')
        .map(x => x.trim())
    let sum = 0

    for (let y = 0; y < lines.length; y++) {
        let line = lines[y]
        while ((mch = re.exec(line)) !== null) {
            let num = parseInt(mch[0])
            let border = [[mch.index - 1, y], [re.lastIndex, y]]
            for (let x2 = mch.index - 1; x2 <= re.lastIndex; x2++) {
                border.push([x2, y - 1], [x2, y + 1])
            }
            chrs = border.filter(x => x[0] >= 0 && x[1] >= 0 && x[0] < line.length && x[1] < lines.length)
                .map(x => lines[x[1]][x[0]])
                .filter(x => x.match(/([^0-9\.])/))
            if (chrs.length > 0) {
                sum += num
            }
        }
    }
    return sum
}

const day03_02 = (input) => {
    let num_re = /[0-9]+/g
    let gear_re = /\*/g
    lines = input.split('\n')
        .map(x => x.trim())
    let sum = 0

    let numbers = []

    for (let y = 0; y < lines.length; y++) {
        let line = lines[y]
        while ((mch = num_re.exec(line)) !== null) {
            let num = parseInt(mch[0])
            let start = [mch.index, y]
            let end = [num_re.lastIndex, y]
            numbers.push([start, end, num])
        }
    }

    for (let y = 0; y < lines.length; y++) {
        let line = lines[y]
        while ((mch = gear_re.exec(line)) !== null) {
            border = [
                [mch.index - 1, y - 1],
                [mch.index, y - 1],
                [mch.index + 1, y - 1],
                [mch.index - 1, y],
                [mch.index + 1, y],
                [mch.index - 1, y + 1],
                [mch.index, y + 1],
                [mch.index + 1, y + 1]
            ].filter(x => x[0] >= 0 && x[1] >= 0 && x[0] < line.length && x[1] < lines.length)
            adj_numbers = numbers.filter(num =>
                border.filter(bcoord =>
                    bcoord[1] == num[0][1] && bcoord[0] >= num[0][0] && bcoord[0] < num[1][0]
                ).length > 0
            )
            if (adj_numbers.length == 2) {
                sum += adj_numbers[0][2] * adj_numbers[1][2]
            }
        }
    }

    return sum
}

module.exports = { day03_01, day03_02 }
