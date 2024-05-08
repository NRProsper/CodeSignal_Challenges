function solution(str) {
    let length = str.length
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[length - 1 -i]) {
            return false;
        }
    }
    return true;
}