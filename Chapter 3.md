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
>Exercise 2
```Javascript
function isEven(N) {
  if ( N == 0) return true;
  else if (N == 1) return false;
  else if (N < 0) return isEven(-N);
  else return isEven(N-2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false
```
