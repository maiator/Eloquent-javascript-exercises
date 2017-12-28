
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

This is the solution that I came up with which produced the correct result.

```Javascript
for (i=1; i<=100; i++)
{
  if (i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz");
  else if (i % 3 == 0) console.log("Fizz");
  else if (i % 5 == 0) console.log("Buzz");
  else
 console.log(i); 
}
```
The author's solution is a clever solution because of the variable output and the or "||" in the console.log().

```Javascript
for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0)
    output += "Fizz";
  if (n % 5 == 0)
    output += "Buzz";
  console.log(output || n);
};
```
>Exercise 3

My solution to exercise 3 is incomplete, but this is what I have so far:
```Javascript
var grid = "";
for (i = 1; i <= 8; i++)
{ if (i % 2 == 0) 
grid = grid + " ";
 
 else grid = grid + "#"; 
}
console.log(grid);
```

