# Chapter 3 Exercises and Solutions
>Exercise 1

This was a pretty easy concept. The thing I did wrong initially in the if statement was to return console.log(a) instead of just return a;.

```Javascript
function min(a, b) {
  if (a < b)  return a;
else return b;
}
console.log(min(0, 10));

console.log(min(0, -10));
```
