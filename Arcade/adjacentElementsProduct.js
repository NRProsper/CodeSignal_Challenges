function solution(inputArray) {
    return Math.max(...inputArray.slice(1).map((num, i) => num*inputArray[i]))
}
