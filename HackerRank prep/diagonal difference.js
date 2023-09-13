function diagonalDifference(arr) {
    let diaTop = 0
    let diaBot = 0

    for (let i = 0; i < arr.length; i++) {
        const row = arr[i]
        diaTop += row[i];
        diaBot += row[arr.length - 1 - i]
    }

    const answer = Math.abs(diaTop - diaBot)
    return answer
}
