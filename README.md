# Data Structures and Algorithms - JavaScript

Implementation of Data Structures and Algorithms in JavaScript.
### Content
# Big O
# Big O Cheat Sheet:
- [Big Os](Big-O/)
    - [O(1)](Big-O/O(1).js) Constant- no loops
    - [O(n)](Big-O/O(n).js) Linear- for loops, while loops through n items
    - [O(n)-space-complexity](Big-O/O(n)-space-complexity.js) Linear- for loops, while loops through n items
    - [O(n log(n))](#) Log Liniear- usually sorting operations
    - [O(n^2)](Big-O/O(n^2).js) Quadratic- every element in a collection needs to be compared to ever other element. Two nested loops
    - [O(2^n)](Big-O/O(2^n).js) Exponential- recursive algorithms that solves a problem of size N
    - [O(n!)](Big-O/O(2^n).js) Factorial- you are adding a loop for every element
    - [O(a*b)](Big-O/O(a*b).js)
    - [O(a+b)](Big-O/O(a+b).js)
- Iterating through half a collection is still O(n)
- Two separate collections: O(a * b)

# What can cause time in a function?
 - Operations (+, -, *, /)
 - Comparisons (<, >, ==)
 - Looping (for, while)
 - Outside Function call (function())

# Rule Book

 - [Rule 1](#): Always worst Case
 - [Rule 2](#): Remove Constants
 - [Rule 3](#): Different inputs should have different variables. O(a+b). A and B arrays nested would be
 - O(a*b)
 - [+] for steps in order
 - [*] for nested steps
 - [Rule 4](#): Drop Non-dominant terms

# What causes Space complexity?
 - Variables
 - Data Structures
 - Function Call
 - Allocations