/*

For n = 1, we add (n-1 = 0) to each side of the square resulting to 1 square in total
For n = 2, we add (n-1 = 1) squares to each side of the square resulting into 5 squares in total
For n = 3, we add (n-1 = 2) squares to each side of the square resulting into 13 squares in total

    A = Area of the original square * Area of the squares around it
    A = (n*n) + (n-1 * n-1)

 */
function solution(n) {
    return n * n + (n - 1) * (n - 1);
}
