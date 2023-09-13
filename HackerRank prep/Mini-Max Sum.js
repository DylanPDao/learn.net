const allSums = []

    arr.forEach((num) => {
        let sum = 0
        for(let j = 0; j < arr.length; j++) {
            sum += arr[j]
        }
        sum -= num
        allSums.push(sum)
    })
    const sorted = allSums.sort()
    const lowest = sorted[0]
    const highest = sorted[arr.length - 1]
    console.log(lowest, highest)
