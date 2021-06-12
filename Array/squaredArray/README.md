# Sorted squared array

```
Ex :- arr = [-2, -1]
      output = [1,4]

      Optimal time complexity = O(n)
      Space complexity = O(1)
```

### Solution 1 

#### Traversing and Sorting output array 

```
Ex :- arr = [-7,-5,-4,3,6,8,9]

Step 1 :- Traverse array and do square and put in new array - time - O(n), space O(n)
Step 2 :- Use Sorted algorithm - Good sorted algorithm take O(n(log(n)))

Time complexity - O(n) + O(n(log(n))) - O(n(log(n)))
Space complecity - O(n)      
```

### Solution 2

This solution is optimal as takes O(n) time complexity but works for only if an array is sorted.

#### Absolute value concept 

```
Ex :- arr = [-7,-5,-4,3,6,8,9]

Negative value is smaller but there square is always greater (its not negative).

Step 1 :- Create empty array, fill indices with 0 in each element in array length [0,0,0,0,0,0,0]
Step 2 :- Make pointer in start of an original array 
          start = -7
Step 3 :- Make pointer in end of an original array
          end = 9
Step 4 :- Compare absolute value of start and end of an array 
          |-7|, |9|
Step 5 :- Greater number square we will put in the end of an array where its pointing
          [0,0,0,0,0,0,81]
          [0,0,0,0,0,64,81]
          [0,0,0,0,49,64,81]
          [0,0,0,36,49,64,81]
          [0,0,25,36,49,64,81]
          [0,16,25,36,49,64,81]
          [9,16,25,36,49,64,81]
```