## Written Portion (40 min)
This part of the test is closed book!

1. You've started a project in JavaScript, but for some reason your runtime lacks the `map` function! Attach one to the `Array` prototype!

```js

/* As a reminder, `map` takes a callback function and returns a *new* array, with each new value created by the output of the callback function. So:

const arr = [1,2,3];
arr.map((val) => val * val) // [1,4,9]
*/

```

Please write your answer [here](./map.js)

2. What is a React `component`?

---
> A function that allows us to return the UI 
---

3. You can define a React component a few different ways, including (1) as a simple function or (2) as a class that extends the `Component` piece of the React library. How should you decide when to use which syntax?

---
> If you need to manage 'state', you should extend the 'Component' peice of the React library.
---

4. Please transpile the following JSX code into JavaScript that the browser can understand:

```js
<div>
    <h1 className='headline'>Hello Dojo!</h1>
</div>
```

---
> React.createElement('div', <h1 className='headline'>Hello Dojo!</h1>)
---

5. Reverse an array. Write a function that accepts an array and returns *the same array* with the values reversed.

```js
const arr = [1,2,3];
reverseArr(arr);
console.log(arr) // [3,2,1];
```

Please write your answer [here](./reverseArr.js)

6. How does using the `new` keyword affect a function's behavior in JavaScript?

---
> The 'new' keyword instantiates (runs constructor) and allows us to use 'this'. Binds function with calling object/function.
---

7. What is the best thing?
* A) Callbacks
* B) Objects
* C) Promises
* D) Pushing to Github

---
> I love them all equally. Before the memory game, I would have disincluded promises, but now they share a part of my heart as well.
---

Done! Time to start the [React app](./app-details.md)!