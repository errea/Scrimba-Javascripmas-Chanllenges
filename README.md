# Scrimba-Javascripmas-Chanllenges
Solutions to Day 1 to 24 of the 24 Days of #JavaScriptmas  Scrimba challenges

@@@@@@@@@@@ JAVASCRIPTMAS CHALLENGES DAY 1@@@@@@@@@@@@@@

@@@@@ PROBLEM 
n children have got m pieces of candy. They want to eat as much candy as the can, but each child mush eat exactly the same 
amount of candy as an other child. Determine how many pieces f candy will be eaten by all children together. Individual pieces of candy cannot
be split.
Example: for n=3 and m=10, the output should be candies(n,m) = 9
Each child would eat three pieces and the answer is 9'



@@@@@@@@@@@ JAVASCRIPTMAS CHALLENGES DAY 2 @@@@@@@@@@@@@@

@@@@@ PROBLEM 
You have deposited a certain/specific amount of dollars into your account. Each year your balance increases as the same growth rate.
Find out how much it would take for your balance to have a specific threshold with the assumption that you dont make any additional depoits.
Example 
for deposit = 100, rate = 200 and threshold = 170 the output should be depositProfit(deposit, rate, threshold) = 3
Each year the amount of money on your acount increases by 20%. it means that throughout the year your balance would be
*year 0:100
*year 1:120
*year 2:144
*year 3: 1728


@@@@@@@@@@@ JAVASCRIPTMAS CHALLENGES DAY 3 @@@@@@@@@@@@@@

@@@@@ PROBLEM 
 Chunky Monkey
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
Example
* chunkyMonkey (["a", "b", "c", "d"], 2) should return [["a","b"],["c","d"]]
* chunkyMonkey ([0,1,2,3,4,5],4) should return [[1,2,3],[4,5]]


@@@@@@@@@@@ JAVASCRIPTMAS CHALLENGES DAY 4 @@@@@@@@@@@@@@

@@@@@ PROBLEM 
 Century From Year
Given a year, return the century it is in. The first century spans from the years 1 up to and including the year 100
the second - from the year 101 up to and including the year 200, etc
Example
* For year = 1905, the output should be centuryFrom(year) = 20
* For year = 1700, the output should be centuryFrom(year) = 17



@@@@@@@@@@@ JAVASCRIPTMAS CHALLENGES DAY 5 @@@@@@@@@@@@@@

@@@@@ PROBLEM 
Reverse a string 
You may need to turn the string into a array before reversing it.
Example
* reverseAString("hello") return "olleh"
* reverseAString("Howdy") return "ydwoH"



@@@@@@@@@@@ JAVASCRIPTMAS CHALLENGES DAY 6 @@@@@@@@@@@@@@

@@@@@ PROBLEM 
Sort By Length 
Given an array of strings, sort them in the order of increasing lengths. If two 
strings have the same length their relative order must be the same as in the initial
array.
Example
* inputArray = ["abc","","aaa","a","zz",]
* output should be sortByLength(inputArray) = ["","a","zz","abc","aaa"]



@@@@@@@@@@@ JAVASCRIPTMAS CHALLENGES DAY 7 @@@@@@@@@@@@@@

@@@@@ PROBLEM 
Count Vowel Consonant
You are given a string s that consists of only lowerCase English letters. If vowel
("a","e","i","o", and "u") are given a value of 1 and consonants are given a value of 2.
Return the sum of the letters in the input String 
Example
* For s = "abcde" the output should ne countedVowelConsonants = 8


@@@@@@@@@@@ JAVASCRIPTMAS CHALLENGES DAY 8 @@@@@@@@@@@@@@

@@@@@ PROBLEM 
Rolling Dice 
*
DESCRIPTION:
In this challenge a casino has asked you to make an online dice that works just like 
it wold in real life. Using the pre-made dice face that represents ‘one’, make the 
faces for ‘two’, ‘three’, ‘four’, ‘five’ and ‘six’. Now when the users clicks the 
dice on the screen the dice is expected to show one of the faces randomly.

DETAILED INSTRUCTIONS
1. pick out the neccesary elements from the HTML
2. Create other 5 dice faces in CSS
3. use eventlisteners on the appropriate div
4. Display dice faces randomly on click

STRETCH GOALS:
- Can you show the number you rolled as a integer along-side the dice face?
- Can you improve the overall design?
*/




@@@@@ PROBLEM 
Sum Odd Fibonacci Numbers 	
*
DESCRIPTION:
Given a positive num, return the sum of all odd Fibonacci numbers that are less 
than or equal to num. The first two numbers in the Fibonacci sequence are 1 and 1.
Every additional number in the sequence is the sum of the two previous numbers. 
The first six numbers of the Fibonacci sequence are 1,1,2,3,5 and 8.

For example sumFibs(10) should return 10 because all odd Fibonacci numbers less 
than or equal to 10 are 1,1,3, and 5

Example
* sumOddFibonacciNums(10) should return 10
* sumOddFibonacciNums(1000) should return 1785
* sumOddFibonacciNums(4000000 ) should return 4613732



@@@@@@@@@@@ JAVASCRIPTMAS CHALLENGES DAY 10 @@@@@@@@@@@@@@

@@@@@ PROBLEM
Adjacent Elements Product

Given an array of integers, find the pair of adjacent elements that has the largest and return 
that product
Example:
For inputArray = [3,6,-2,-5,7,3] the output should be adjacentElementProduct(inputArray) = 21. 7 and 3 produce the 
largest product.

