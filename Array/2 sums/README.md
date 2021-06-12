# 2 sum

### Solution 1 

Using 2 for loop
```
Time complexity - O(n^2)
Space Complexity - O(1)
```

### Solution 2

Using hash table

```
Time complexity - O(n)
Space complexity - O(n) // hash table space complexity
```

##### example 
```
arr = [11, 1, -1, 6]
target = 10
 
x + y = 10;
x -> current element in for loop. 

find value of y as y = 10 - x.

hash_table = {};
step 1 :-  y = 10 - 11 = -1 (not present in hash table)
        hash_table = {11: true}
step 2 :-  y = 10 - 1 = 9 (not present in hash table)
        hash_table = {11: true,1: true}
step 3 :-  y = 10 - (-1) = 11 (11 is present in hash table)
        return [11,-1]
```

### Solution 3

Using sorting algorithm

```
Time complexity - O(nlog(n))
Space complexity - O(1)
```

#### example
Good sorting algorithm like quick sort will take O(nlog(n)) Time complexity.
```
arr = [11, 1, -1, 6]
target = 10

step 1 :- sort arr.
step 2 :- leftIndex = 0; rightIndex = array.length - 1
step 3 :- arr[leftIndex] + arr[rightIndex] < target. Increment leftIndex
          -1 + 11 < 10 (no)
step 4 :- arr[leftIndex] + arr[rightIndex] > target. Decrease rightIndex
          -1 + 11 > 10 (no)
step 5 :- If equal return the value [-1,11]
```