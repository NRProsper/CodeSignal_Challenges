
function solution(arr) {
    const minSize = Math.min(...arr);
    const maxSize = Math.max(...arr);
    return (maxSize - minSize + 1) - arr.length;
}

//Or



function solution(arr) {
    let additionStatues = 0;
    arr.sort((a, b) => a -b );

    for (let i = 1; i < arr.length; i++) {
        const gap = arr[i] - arr[i - 1] - 1;
        additionStatues += Math.max(gap, 0);
    }

    return additionStatues;
}