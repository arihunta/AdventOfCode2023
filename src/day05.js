const { reverse } = require("dns");

const day05_01 = (input) => {
    let mappings = input.replace('seeds:', '')
        .split(/[a-z\-]+ map\:\r\n/)
        .map(section => section.trim()
            .split("\r\n")
            .map(row => row.split(" ")
                .map(number => parseInt(number.trim()))
            )
        )

    // the first section isn't a mapping, it's the list of seeds
    let seeds = mappings.shift().shift()

    results = seeds.map(element => {
        let num = element
        mappings.forEach(mapping => num = map_number(num, mapping))
        return num
    }).sort((a, b) => a - b);

    return results[0]
}

function map_number(number, mapping) {
    for (const row of mapping) {
        if (number >= row[1] && number < row[1] + row[2]) {
            return row[0] + number - row[1]
        }
    }
    return number
}

const day05_02 = (input) => {
    let mappings = input.replace('seeds:', '')
        .split(/[a-z\-]+ map\:\r\n/)
        .map(section => section.trim()
            .split("\r\n")
            .map(row => row.split(" ")
                .map(number => parseInt(number.trim()))
            )
        )

    // the first section isn't a mapping, it's the list of ranges of seeds
    let seed_ranges = mappings.shift().shift()
    // reverse the mappings, as we'll be working backwords
    mappings.reverse()

    // start at zero, work up until we find a number that reverse-maps to a valid seed range
    let current = 0
    while (true) {
        // reverse-map to a potential seed number
        let seed = current
        for (stack of mappings) {
            seed = reverse_map_number(seed, stack)
        }

        // check the seed ranges to see if we have a valid seed
        for (i = 0; i < seed_ranges.length; i += 2) {
            if (seed >= seed_ranges[i] && seed < seed_ranges[i] + seed_ranges[i + 1]) {
                // we have a valid seed; return it
                return current
            }
        }
        // move on to checking the next number
        current++
    }
}

function reverse_map_number(number, mapping) {
    for (const row of mapping) {
        if (number >= row[0] && number < row[0] + row[2]) {
            return row[1] + number - row[0]
        }
    }
    return number
}


const day05_02_old = (input) => {
    let stacks = input.replace('seeds:', '')
        .split(/[a-z\-]+ map\:\r\n/)
        .map(section => section.trim()
            .split("\r\n")
            .map(row => row.split(" ")
                .map(number => parseInt(number.trim()))
            )
        )

    let seeds = stacks.shift().shift()

    // console.log(seeds)
    // console.log(stacks)

    let results = []

    for (idx = 0; idx < seeds.length; idx += 2) {
        for (element = seeds[idx]; element < seeds[idx] + seeds[idx + 1]; element++) {
            let num = element
            stacks.forEach(stack => num = map_number(num, stack))
            results.push(num)
        }
    }
    results.sort((a, b) => a - b);
    // console.log(results)

    return results[0]
}

module.exports = { day05_01, day05_02 }
