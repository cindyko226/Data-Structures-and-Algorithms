//
// At Quora, we have aggregate graphs that track the number of upvotes we get each day.

// As we looked at patterns across windows of certain sizes, we thought about ways to track trends such as non - decreasing and non - increasing subranges as efficiently as possible.

// For this problem, you are given N days of upvote count data, and a fixed window size K.For each window of K days, from left to right, find the number of non - decreasing subranges within the window minus the number of non - increasing subranges within the window.

// A window of days is defined as contiguous range of days.Thus, there are exactly 𝑁−𝐾+1 windows where this metric needs to be computed.A non - decreasing subrange is defined as a contiguous range of indices[𝑎, 𝑏], 𝑎<𝑏, where each element is at least as large as the previous element.A non - increasing subrange is similarly defined, except each element is at least as large as the next.There are up to 𝐾(𝐾−1) /2 of these respective subranges within a window, so the metric is bounded by [−𝐾(𝐾−1)/2,𝐾(𝐾−1)/2].

// Constraints
// 1≤𝑁≤100, 000 days
// 1≤𝐾≤𝑁 days

// Input Format
// Line 1: Two integers, 𝑁 and 𝐾

// Line 2: 𝑁 positive integers of upvote counts, each integer less than or equal to 109.

// Output Format
// Line 1..: 𝑁−𝐾+1 integers, one integer for each window's result on each line

// Sample Input
// 5 3
// 1 2 3 1 1


// Sample Output
// 3
// 0
//     - 2


// Explanation
// For the first window of[1, 2, 3], there are 3 non - decreasing subranges and 0
// non - increasing, so the answer is 3. For the second window of[2, 3, 1], there is 1 non - decreasing subrange and 1 non - increasing, so the answer is 0. For the third window of[3, 1, 1], there is 1 non - decreasing subrange and 3 non - increasing, so the answer is - 2.
//



function uniquePaths(arr) {
    let pairs = getSet(arr);
    console.log(pairs);
    let nonIncrease = 0
    let nonDecrease = 0
    pairs.forEach(pair => {
        if(count(pair) > 0) {
            nonDecrease+=1;
        }
        if(count(pair) < 0 ){
            nonIncrease+=1;
        }
    })
    console.log(nonDecrease);
    console.log(nonIncrease)
    return nonDecrease - nonIncrease;
};

function getSet(arr){
    let newArr = [];
    for(let i = 0; i < arr.length - 1 ; i++){
        for(let j = i + 2; j <= arr.length; j++){
            subArr = arr.slice(i, j);
            newArr.push(subArr);
        }
    }
    return newArr
}


function count(arr){
    let table = [];
    let count = 0;
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i+1] > arr[i]){
            count+= 1;
            table.push(count);
        }
        if(arr[i+1] < arr[i]){
            count-= 1;
            table.push(count);
        }
    }
    return table[table.length - 1];
}

console.log(uniquePaths([3,1,1]));
console.log(count([1,2,3]))
