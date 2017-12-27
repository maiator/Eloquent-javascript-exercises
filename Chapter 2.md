
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
