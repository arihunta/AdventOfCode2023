
const day07_01 = (input) => {
    let hands = input.split('\n')
        .map(x => x.trim().split(" "))
    for (i = 0; i < hands.length; i++) {
        let counts = new Map()
        hands[i][0].split('').forEach(x => {
            if (counts.has(x)) {
                counts.set(x, counts.get(x) + 1)
            }
            else {
                counts.set(x, 1)
            }
        })
        let max_count = Math.max(... Array.from(counts.values()))
        if (counts.size == 1) {
            hands[i][0] = "6" + hands[i][0]
        } else if (counts.size == 2 && max_count == 4) {
            hands[i][0] = "5" + hands[i][0]
        } else if (counts.size == 2 && max_count == 3) {
            hands[i][0] = "4" + hands[i][0]
        } else if (counts.size == 3 && max_count == 3) {
            hands[i][0] = "3" + hands[i][0]
        } else if (counts.size == 3 && max_count == 2) {
            hands[i][0] = "2" + hands[i][0]
        } else if (counts.size == 4) {
            hands[i][0] = "1" + hands[i][0]
        } else if (counts.size == 5) {
            hands[i][0] = "0" + hands[i][0]
        }
        hands[i][0] = hands[i][0].replace(/A/g,'E').replace(/K/g,'D').replace(/Q/g,'C').replace(/J/g,'B').replace(/T/g,'A')
    }
    hands.sort()
    let sum = 0
    for (i = 0; i < hands.length; i++) {
        sum += (i + 1) * parseInt(hands[i][1])
    }
    return sum
}

const day07_02 = (input) => {
    let hands = input.split('\n')
        .map(x => x.trim().split(" "))
    for (i = 0; i < hands.length; i++) {
        let counts = new Map()
        hands[i][0].split('').forEach(x => {
            if (counts.has(x)) {
                counts.set(x, counts.get(x) + 1)
            }
            else {
                counts.set(x, 1)
            }
        })
        let js = 0
        if (counts.has('J')) {
            js = counts.get('J')
            counts.delete('J')
        }
        let max_count = Math.max(... Array.from(counts.values())) + js
        let num_letters = counts.size
        if (num_letters == 1 || num_letters == 0) {
            hands[i][0] = "6" + hands[i][0]
        } else if (num_letters == 2 && max_count == 4) {
            hands[i][0] = "5" + hands[i][0]
        } else if (num_letters == 2 && max_count == 3) {
            hands[i][0] = "4" + hands[i][0]
        } else if (num_letters == 3 && max_count == 3) {
            hands[i][0] = "3" + hands[i][0]
        } else if (num_letters == 3 && max_count == 2) {
            hands[i][0] = "2" + hands[i][0]
        } else if (num_letters == 4) {
            hands[i][0] = "1" + hands[i][0]
        } else if (num_letters == 5) {
            hands[i][0] = "0" + hands[i][0]
        }
        hands[i][0] = hands[i][0].replace(/A/g,'E').replace(/K/g,'D').replace(/Q/g,'C').replace(/J/g,'1').replace(/T/g,'A')
    }
    hands.sort()
    let sum = 0
    for (i = 0; i < hands.length; i++) {
        sum += (i + 1) * parseInt(hands[i][1])
    }
    return sum
}

module.exports = { day07_01, day07_02 }
