/* Fibonacci While Loop//
PROBLEM: Write a while loop that calculates the first 10 values (including 0) of the Fibonacci sequence and stores them in an array called fibArr.

NOTE: The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. Ex: 0,1,1,2,3,5...

To ensure the functionality of your while loop, it is recommended to declare certain global variables beforehand that will be utilized within the while loop to calculate and store the first 10 values (including 0) of the Fibonacci sequence in your array, fibArr. */

let count = 2;
let fibArr = [];

let oddIndexTerm = 0;
let evenIndexTerm = 1;

fibArr = [oddIndexTerm, evenIndexTerm];

while(count < 10) {

    const nextTerm = oddIndexTerm + evenIndexTerm;

    fibArr.push(nextTerm)

    oddIndexTerm = evenIndexTerm;

    evenIndexTerm = nextTerm;

    count++;
}
