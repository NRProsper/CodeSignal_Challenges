/*

To determine whether a strictly increasing sequence can be obtained by removing no more than one element from an array, you can follow this approach:

Iterate through the array and find the first instance where the current element is not less than the next element.
When you find such an instance, you have two choices to try to make the sequence strictly increasing:
Remove the current element.
Remove the next element.
Check if either of these choices leads to a strictly increasing sequence.
If you can achieve a strictly increasing sequence with at most one removal, return true; otherwise, return false.

 */

function solution(arr) {
    let isFound = false;
    for(let i = 0; i < arr.length - 1; i++) {
        if (arr[i] >= arr[i+1]) {
            if (isFound) {
                return false
            }
            isFound = true;
            if(i > 0 && arr[i-1] >= arr[i+1] && i+2 < arr.length && arr[i] >= arr[i+2]) {
                return false;
            }
        }
    }
    return true;
}