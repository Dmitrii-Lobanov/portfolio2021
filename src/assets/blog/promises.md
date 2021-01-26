# Promises, async/await
## Callback-based style
This approach applied in asynchronous programming before Promises appeared.
A function that does something asynchronously should provide a **callback argument** where we put the function to run after it is complete. 

```js
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
  console.log(`Cool, the script ${script.src} is loaded`);
});
```

You can add as many callback functions as you want but it can lead to **callback hell** (known also as **pyramid of doom** ). 

## Promises
The constructor syntax for a promise object is:

```js
const promise = new Promise(function(resolve, reject) {
  // executor (the producing code, "singer")
});
```

The function passed to new Promise is called the *executor*. When new Promise is created, the executor runs automatically. It contains the producing code which should eventually produce the result.

When the executor obtains the result, be it soon or late, doesn’t matter, it should call one of these callbacks:
* resolve(value) — if the job finished successfully, with result value.
* reject(error) — if an error occurred, error is the error object.

The promise object returned by the new Promise constructor has these **internal properties**:
* state — initially "pending", then changes to either "fulfilled" when resolve is called or "rejected" when reject is called.
* result — initially **undefined**, then **changes to value** when resolve(value) called or error when reject(error) is called.

NB! The state and result of the Promise object are internal. We cannot directly access them. We can use methods .then, .catch, or .finally for that.

So the executor eventually moves promise to one of these states:

![](image.png)

Example:

```js
const promise =  new Promise((resolve, reject) => {
  setTimeout(() => resolve('done'), 1000);
})

promise; // 'done'
```

![](image.png)

A promise that either resolved or rejected is called **settled**, as opposed to an initially **pending** promise.

NB! The executor should call **only one** resolve or one reject. All further calls of resolve and reject are **ignored**. 
Also, resolve/reject expect **only one argument (or none)** and will ignore additional arguments. 

**Consumers: then, catch, finally**
A Promise object serves as a link between the executor and the **consuming functions**, which will receive the result or error. 

## then

```js
promise.then(
  function(result) { /* handle a successful result */ },
  function(error) { /* handle an error */ }
);
```

The **first argument** of .then is a function that runs when the promise is **resolved**, and receives the **result**. 
The **second argument** of .then is a function that runs when the promise is **rejected**, and receives the **error**.
If we are interested only in successful completion, then we can provide only one function argument to .then.

## catch
If we are interested only in errors, then we can use null as the first argument.

```js
promise.then(null, errorHandlingFunction);
```

Or we can use .catch(errorHandlingFunction), which is exactly the same.

## finally
The call .finally(f) is similar to .then(f, f) in the sense that f always runs when the promise is settled.
There are subtle differences between finally() and then():
1. A finally() handler has **no arguments**. Its goal is to perform general finalizing procedures no matter whether the promise successful or not. 

As a good practice, an asynchronous action should always return a promise. That makes it possible to plan actions after it; even if we don’t plan to extend the chain now, we may need it later.

![](image.png)

## Error Handling with Promises
When a promise rejects, the control jumps to the **closest rejection handler**. 
For instance, in the code below the URL to fetch is wrong (no such site) and .catch handles the error:

```js
fetch('https://no-such-server.blabla') // rejects
  .then(response => response.json())
  .catch(err => alert(err)) // TypeError: failed to fetch (the text may vary)
```

The easiest way to catch all errors is to append .catch to the end of chain.

## Implicit try... catch
The code of a promise executor and promise handlers has an "invisible try..catch" around it. If an exception happens, it gets caught and treated as a rejection.
For instance, this code:

```js
new Promise((resolve, reject) => {
  throw new Error("Whoops!");
}).catch(alert); // Error: Whoops!
```

…Works exactly the same as this:

```js
new Promise((resolve, reject) => {
  reject(new Error("Whoops!"));
}).catch(alert); // Error: Whoops!
```

## Rethrowing
If we throw inside catch(), then the control goes to the next closest error handler. And we handle the error and finish normally, then it continues to the **next** closest successful then() handler. 
In the example below the .catch successfully handles the error:

```js
new Promise((resolve, reject) => {
  throw new Error("Whoops!");
})
    .catch(function(error) {
       alert("The error is handled, continue normally");
    })
    .then(() => alert("Next successful handler runs"));
```

## Unhandled Rejections
What happens when an error is not handled? For instance, we forgot to append .catch to the end of the chain.
What happens when a regular error occurs and is not caught by try...catch? The script dies with a message in the console. A similar thing happens with unhandled promise rejections.
In any case we should have the unhandledrejection event handler (for browsers, and analogs for other environments) to track unhandled errors and inform the user (and probably our server) about them, so that our app never “just dies”.

```js
window.addEventListener('unhandledrejection', function(event) {
  // the event object has two special properties:
  alert(event.promise); // [object Promise] - the promise that generated the error
  alert(event.reason); // Error: Whoops! - the unhandled error object
});

new Promise(function() {
  throw new Error("Whoops!");
}); // no catch to handle the error
```

## Promise API
There are **6 static methods** in the Promise class. 

### Promise.all
Syntax:

```js
const promise = Promise.all([promises]);
```

It takes an array of promises and returns a new promise.
The new promise resolved **when all listed promises are settled**, and the array of its results becomes its result. 

Please note that the order of the resulting array members is the same as in its source promises. Even though the first promise takes the longest time to resolve, it’s still first in the array of results.

If any of the promises is **rejected**, the promise returned by Promise.all immediately rejects with that error.

If one promise rejects, Promise.all immediately rejects, completely forgetting about the other ones in the list. Their results are ignored.

### Promise.allSettled
Promise.allSettled just waits for all promises to settle, regardless of the result. The resulting array has:

* {status:"fulfilled", value:result} for successful responses,
* {status:"rejected", reason:error} for errors.

```js
let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://no-such-url'
];

Promise.allSettled(urls.map(url => fetch(url)))
  .then(results => {
    results.forEach((result, num) => {
      if (result.status == "fulfilled") {
        console.log(`${urls[num]}: ${result.value.status}`);
      }
      if (result.status == "rejected") {
        console.log(`${urls[num]}: ${result.reason}`);
      }
    });
  });
```

### Promise.race
Similar to Promise.all, but **waits only for the first settled promise** and gets its result (or error).

Syntax:

```js
const promise = Promise.race(iterable);
```

### Promise.any
Promise.any() takes an iterable of [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) objects and, as soon as one of the promises in the iterable fulfills, returns a single promise that resolves with the value from that promise. If no promises in the iterable fulfill (if all of the given promises are rejected), then the returned promise is rejected with an [AggregateError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError), a new subclass of [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) that groups together individual errors. Essentially, this method is the opposite of [Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all).

### Promise.resolve
Promise.resolve(value) creates a resolved promise with the result value.

Syntax:

```js
const promise = Promise.resolve(resolve => resolve(value));
```

Example:

```js
let cache = new Map();

function loadCached(url) {
  if (cache.has(url)) {
    return Promise.resolve(cache.get(url)); // (*)
  }

  return fetch(url)
    .then(response => response.text())
    .then(text => {
      cache.set(url,text);
      return text;
    });
}
```

### Promise.reject
Promise.reject(error) creates a rejected promise with **error**.

Syntax:

```js
const promise = Promise.reject((resolve, reject) => reject(error));
```

## Promisification
Useful source: [https://www.freecodecamp.org/news/write-your-own-promisify-function-from-scratch](https://www.freecodecamp.org/news/write-your-own-promisify-function-from-scratch) /

It is the conversion of a function that accepts a callback into a function that returns a promise.

```js
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}
```

Let's promisify it.

```js
let loadScriptPromise = function(src) {
  return new Promise((resolve, reject) => {
    loadScript(src, (err, script) => {
      if (err) reject(err)
      else resolve(script);
    });
  })
}
```

In practice we may need to promisify more than one function, so it makes sense to use a **helper**.

```js
function promisify(f) {
  return function (...args) { // return a wrapper-function (*)
    return new Promise((resolve, reject) => {
      function callback(err, result) { // our custom callback for f (**)
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }

      args.push(callback); // append our custom callback to the end of f arguments

      f.call(this, ...args); // call the original function
    });
  };
};

// usage:
let loadScriptPromise = promisify(loadScript);
loadScriptPromise(...).then(...);
```

## Microtasks Queue
Asynchronous tasks need proper management. For that, the ECMA standard specifies an internal queue PromiseJobs, more often referred to as the “microtask queue” (ES8 term).

## Async / await
It is a special syntax to work with promises in a more comfortable fashion.
The word async before a function means that the function **always returns a promise**. 

The keyword await makes JS wait until the promise settles and returns its result.

## Error handling
If a promise resolves normally, then await promise returns the result. But in the case of a rejection, it throws the error, just as if there were a throw statement at that line.
This code:

```js
async function f() {
  await Promise.reject(new Error("Whoops!"));
}
```

…is the same as this:

```js
async function f() {
  throw new Error("Whoops!");
}
```

In real situations, the promise may take some time before it rejects. In that case there will be a delay before await throws an error.
We can catch that error using try...catch, the same way as a regular throw:

```js
async function f() {
  try {
    let response = await fetch('http://no-such-url');
  } catch(err) {
    alert(err); // TypeError: failed to fetch
  }
}

f();
```

If we don’t have try..catch, then the promise generated by the call of the async function f() becomes rejected. We can append .catch to handle it:

```js
async function f() {
  let response = await fetch('http://no-such-url');
}

// f() becomes a rejected promise
f().catch(alert);
```

![](image.png)