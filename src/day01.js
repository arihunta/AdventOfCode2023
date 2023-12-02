
const day01_01 = (input) => {
    return input.split('\n')
        .map((x) => x.replace(/[a-zA-Z]/g, "").trim())
        .map((x) => `${x.slice(0, 1)}${x.slice(-1)}`)
        .map((x) => parseInt(x))
        .reduce((acc, val) => acc + val, 0)
}

const day01_02 = (input) => {
    const re = RegExp('one|two|three|four|five|six|seven|eight|nine|[0-9]', 'g');
    return input.split('\n')
        .map((x) => x.trim())
        .map((x) => {
            var results = [];
            while ( (mch = re.exec(x) ) != null ) {
                results.push( mch[0] );
                re.lastIndex = mch.index + 1
            }
            return results.map((y) => {
                switch (y) {
                    case "one": return "1"
                    case "two": return "2"
                    case "three": return "3"
                    case "four": return "4"
                    case "five": return "5"
                    case "six": return "6"
                    case "seven": return "7"
                    case "eight": return "8"
                    case "nine": return "9"
                    default: return y
                }
            }).join('')
        })
        .map((x) => x.replace(/[a-zA-Z]/g, "").trim())
        .map((x) => `${x.slice(0, 1)}${x.slice(-1)}`)
        .map((x) => parseInt(x))
        .reduce((acc, val) => acc + val, 0)
}

module.exports = { day01_01, day01_02 }
