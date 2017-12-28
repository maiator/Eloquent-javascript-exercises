
# Chapter 2 answers

>Exercise 1

The official answer by the author is:

```javascript
for (var line = "#"; line.length < 8; line += "#")
  console.log(line);
  ```
  
  My answer produced the correct result but wasn't as cleverly written.
  
  ```javascript
var hTag = "";
for (i = 0; i < 7; i++) {
    console.log(hTag += "#"); 
  ```

>Exercise 2

This is the solution that I came up with which produced the correc result.

```Javascript
for (i=1; i<101; i++)
{
  if (i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz");
  else if (i % 3 == 0) console.log("Fizz");
  else if (i % 5 == 0) console.log("Buzz");
  else
 console.log(i); 
};
```
