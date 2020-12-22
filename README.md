 Scrimba Javascripmas Challenges
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
*chunkyMonkey (["a", "b", "c", "d"], 2) should return [["a","b"],["c","d"]]
*chunkyMonkey ([0,1,2,3,4,5],4) should return [[1,2,3],[4,5]]

@@@@@@@@@@@ JAVASCRIPTMAS CHALLENGES DAY 4 @@@@@@@@@@@@@@

@@@@@ PROBLEM
 Century From Year
Given a year, return the century it is in. The first century spans from the years 1 up to and including the year 100
the second - from the year 101 up to and including the year 200, etc
Example
*For year = 1905, the output should be centuryFrom(year) = 20
*For year = 1700, the output should be centuryFrom(year) = 17

@@@@@@@@@@@ JAVASCRIPTMAS CHALLENGES DAY 5 @@@@@@@@@@@@@@

@@@@@ PROBLEM
Reverse a string
You may need to turn the string into a array before reversing it.
Example
*reverseAString("hello") return "olleh"
*reverseAString("Howdy") return "ydwoH"

@@@@@@@@@@@ JAVASCRIPTMAS CHALLENGES DAY 6 @@@@@@@@@@@@@@

@@@@@ PROBLEM
Sort By Length
Given an array of strings, sort them in the order of increasing lengths. If two 
strings have the same length their relative order must be the same as in the initial
array.
Example
*inputArray = ["abc","","aaa","a","zz",]
*output should be sortByLength(inputArray) = ["","a","zz","abc","aaa"]

@@@@@@@@@@@ JAVASCRIPTMAS CHALLENGES DAY 7 @@@@@@@@@@@@@@

@@@@@ PROBLEM
Count Vowel Consonant
You are given a string s that consists of only lowerCase English letters. If vowel
("a","e","i","o", and "u") are given a value of 1 and consonants are given a value of 2.
Return the sum of the letters in the input String
Example
*For s = "abcde" the output should ne countedVowelConsonants = 8

@@@@@@@@@@@ JAVASCRIPTMAS CHALLENGES DAY 8 @@@@@@@@@@@@@@

@@@@@ PROBLEM
Rolling Dice
DESCRIPTION:
In this challenge a casino has asked you to make an online dice that works just like
it wold in real life. Using the pre-made dice face that represents ‘one’, make the
faces for ‘two’, ‘three’, ‘four’, ‘five’ and ‘six’. Now when the users clicks the
dice on the screen the dice is expected to show one of the faces randomly.

DETAILED INSTRUCTIONS
1.pick out the neccesary elements from the HTML
2. Create other 5 dice faces in CSS
3. use eventlisteners on the appropriate div
4. Display dice faces randomly on click

STRETCH GOALS:
-Can you show the number you rolled as a integer along-side the dice face?
-Can you improve the overall design?

@@@@@@@@@@@ JAVASCRIPTMAS CHALLENGES DAY 9 @@@@@@@@@@@@@@
@@@@@ PROBLEM
Sum Odd Fibonacci Numbers
DESCRIPTION:
Given a positive num, return the sum of all odd Fibonacci numbers that are less
than or equal to num. The first two numbers in the Fibonacci sequence are 1 and 1.
Every additional number in the sequence is the sum of the two previous numbers.
The first six numbers of the Fibonacci sequence are 1,1,2,3,5 and 8.

For example sumFibs(10) should return 10 because all odd Fibonacci numbers less
than or equal to 10 are 1,1,3, and 5

Example
*sumOddFibonacciNums(10) should return 10
*sumOddFibonacciNums(1000) should return 1785
*umOddFibonacciNums(4000000 ) should return 4613732

@@@@@@@@@@@ JAVASCRIPTMAS CHALLENGES DAY 10 @@@@@@@@@@@@@@

@@@@@ PROBLEM
Adjacent Elements Product

Given an array of integers, find the pair of adjacent elements that has the largest and return
that product
Example:
For inputArray = [3,6,-2,-5,7,3] the output should be adjacentElementProduct(inputArray) = 21. 7 and 3 produce the
largest product.

@@@@@@@@@@@ JAVASCRIPTMAS CHALLENGES DAY 11 @@@@@@@@@@@@@@

@@@@@ PROBLEM  
Avoid Obstacles

You are given an array of integers representing coordinates of obstacles situated in a straight line.

Assume you are jumping from the point with coordinate of 0 to the right. You are allowed to make jumps of the same lengths
represented by some integers.

Find the minimal length of the jump enough to avoid all the obstacles.
For inputArray = [5,3,6,7,9] the output should be avoidObstacles(inputArray) = 4. // Hint sort(), every()

@@@@@@@@@@@ JAVASCRIPTMAS CHALLENGES DAY 12 @@@@@@@@@@@@@@

@@@@@ PROBLEM  
Valid Time

Check if the given string is a correct time representation of the 24-hour clock

Example:
*For time = "13:58", the output should be validTime(Time) = true;
*For time = "25:51", the output should be validTime(Time) = false;
*For time = "02:76", the output should be validTime(Time) = false;
// hint parseInt(), split()

@@@@@@@@@@@ JAVASCRIPTMAS CHALLENGES DAY 13 @@@@@@@@@@@@@@

@@@@@ PROBLEM  
 Extraact Each Kth

Given array of integers, remove each kth element from it

Example:
*For inputArray = [1,2,3,4,5,6,7,8,9,10] and k = 3, the output should be
extractEachKth (inputArray, k) = [1,2,4,5,7,8,10]
// hint filter()

@@@@@@@@@@@ JAVASCRIPTMAS CHALLENGES DAY 14 @@@@@@@@@@@@@@

@@@@@ PROBLEM  
 Maximal Adjacent Difference

Given an array of integers, find the minimal absolute difference between any
two of its adjacent elements.

Example:
*For inputArray = [2,4,1,0] the output should be arrayMaximalAdjacentDifference(inputArray) = 3

* For inputArray = [2,9,1,0] the output should be arrayMaximalAdjacentDifference(inputArray) = 8
// hint Math.abs()

@@@@@@@@@@@ JAVASCRIPTMAS CHALLENGES DAY 15 @@@@@@@@@@@@@@

@@@@@ PROBLEM  
 Javascript Carousel
HTML
CSS
JS

@@@@@@@@@@@ JAVASCRIPTMAS CHALLENGES DAY 16 @@@@@@@@@@@@@@

@@@@@ PROBLEM  
 Insert Dashes
Transform a given sentence into a new one with dashes between each two consecutive
letters

Example
for input = "aba caba", the output should be "a-b-a c-a-b-a"

@@@@@@@@@@@ JAVASCRIPTMAS CHALLENGES DAY 17 @@@@@@@@@@@@@@

@@@@@ PROBLEM  
 Different symbols naive

Given a string, find the number of different characters in it

Example
for s = "cabca", the output should be 3. There are 3 different characters a,b and c

Hints: includes(). split().push()

@@@@@@@@@@@ JAVASCRIPTMAS CHALLENGES DAY 18 @@@@@@@@@@@@@@

@@@@@ PROBLEM  
 Array Previous Less

Given an array of integers, for each position, search among the previous positions
for the last (from the left) position that contains a samller value. Store the value
at position i in the answer. If no such value can be found, store -1 instead.

Example
for item = [3,5,2,4,5], the output should be [-1,3,-1,2,4].
Hints: unshift()

@@@@@@@@@@@ JAVASCRIPTMAS CHALLENGES DAY 19 @@@@@@@@@@@@@@

@@@@@ PROBLEM  
 Array Previous Less

Given an array of integers, for each position, search among the previous positions
for the last (from the left) position that contains a samller value. Store the value
at position i in the answer. If no such value can be found, store -1 instead.

Example
for item = [3,5,2,4,5], the output should be [-1,3,-1,2,4].

Hints: unshift()

@@@@@@@@@@@ JAVASCRIPTMAS CHALLENGES DAY 19 @@@@@@@@@@@@@@

@@@@@ PROBLEM  
 Alphabet Subsequence
Check whether the given string is a subsequence of the plaintext alphabet

Example
for s = "effg"  or s = "cdce" the output should be alphabetSubsequence(s) = false

for s = "ace"  or s = "bxz" the output should be alphabetSubsequence(s) = true
Hints:split(), charCodeAt(), size property.

@@@@@@@@@@@ JAVASCRIPTMAS CHALLENGES DAY 20 @@@@@@@@@@@@@@

@@@@@ PROBLEM  
 Domain Type
GoDaddy makes a lot of different top-level domains available to its customers. A top-level
domain is one that goes directly after the last dot(".") in the domain name, for example
.com in example.com. To help the users choose from available domains GoDaddy is
introducing a new feature that shows the type of the chosen top-level domain. You have to
implement this feature. To begin with, you want to write a function that labels the domains
as "commercial", "organisation", "network", or "information" for .com, .org, .net or .infor
respectively. For the given list of domains return the list of their labels.

Example
*For domains = ["en,wiki,org", "codefights.com", "happy.net", "code.info"], the output
 domainType(domains) = ["organization", "commercial", "network", "information"]
Hints
*split()
*push()

@@@@@@@@@@@ JAVASCRIPTMAS CHALLENGES DAY 21 @@@@@@@@@@@@@@

@@@@@ PROBLEM  
 Sum of 2
You have two integer arrays, a and b, and an integer target value v. Determine
whether there is a pair of numbers, where one number is taken from a and the other
from b, that can be added together to get a sun of v. Return true if such a pair exists.
Otherwise return false

Example
*For a = [1,2,3], b = [10,20,30,40], and v = 42. The output should be sumOfTwo(a,b,v) = true;
Hints
*hasOwnProperty

@@@@@@@@@@@ JAVASCRIPTMAS CHALLENGES DAY 22 @@@@@@@@@@@@@@

@@@@@ PROBLEM  
 Extract Matrix Column
Given a rectanglar matrix and an integer column, return an array containing the elements
of the columnth column of the given matrix (the lefmost column is the 0th one)

Example
*For matrix = [[1,1,1,2],[0,5,0,4,],[2,1,3,6]] and column = 2. The output should be extractMatrixColumn(matrix,column) = [1,0,3];
Hints
*push()

@@@@@@@@@@@ JAVASCRIPTMAS CHALLENGES DAY 23 @@@@@@@@@@@@@@

@@@@@ PROBLEM  
 Social media input challenge
Use JS to count characters
Dynamically show the characters used/ characters remaining
Disable the tweet button if maximum character limit is exceeded

Example
*keydown event listener
*input.value.length property