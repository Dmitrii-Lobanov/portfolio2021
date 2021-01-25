# Generators
Regular functions return only one, single value (or nothing).
Generators can return (“ **yield** ”) multiple values, one after another, on-demand. They work great with [iterables](https://javascript.info/iterable), allowing to create data streams with ease.

## Generator functions ##
To create a generator, we need a special syntax construct: function*, so-called “generator function”.

```js
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}
```

Generator functions behave differently from regular ones. When such function is called, it doesn’t run its code. Instead it **returns a special object**, called “generator object”, to manage the execution.

```js
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

// "generator function" creates "generator object"
let generator = generateSequence();
alert(generator); // [object Generator]
```

The function code execution **hasn’t started** yet:

![](image.png)

The main method of a generator is next(). When called, it runs the execution until the nearest yield <value> statement (value can be omitted, then it’s **undefined** ). Then the function execution pauses, and the yielded value is returned to the outer code.

The result of next() is always an **object with two properties**:
* value: the yielded value.
* done: true if the function code has finished, otherwise false.

For instance, here we create the generator and get its first yielded value:

```js
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

let generator = generateSequence();

let one = generator.next();
```

As of now, we got the first value only, and the function execution is on the second line:

![](image.png)

## Generators are iterable ##
We can loop over their values using for..of:

```js
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

let generator = generateSequence();

for(let value of generator) {
  alert(value); // 1, then 2
}
```

for..of iteration **ignores the last value**, when done: true. So, if we want all results to be shown by for..of, we must return them with yield. 

As generators are iterable, we can call all related functionality, e.g. the spread syntax ...:

```js
let sequence = [0, ...generateSequence()];
```

## Using generators for iterables ##
We can use a generator function for iteration by providing it as Symbol.iterator.

```js
let range = {
  from: 1,
  to: 5,

  *[Symbol.iterator]() { // a shorthand for [Symbol.iterator]: function*()
    for(let value = this.from; value <= this.to; value++) {
      yield value;
    }
  }
};

alert( [...range] ); // 1,2,3,4,5
```

## Generator composition ##
Generator composition is a special feature of generators that allows to transparently “embed” generators in each other.

In a regular function, to combine results from multiple other functions, we call them, store the results, and then join at the end.

For generators, there’s a special yield* syntax to “embed” (compose) one generator into another.

```js
function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generatePasswordCodes() {
  // 0..9
  yield* generateSequence(48, 57);

  // A..Z
  yield* generateSequence(65, 90);

  // a..z
  yield* generateSequence(97, 122);
}

let str = '';

for(let code of generatePasswordCodes()) {
  str += String.fromCharCode(code);
}

alert(str); // 0..9A..Za..z
```

The yield* directive **delegates the execution to another generator**. This term means that yield* gen iterates over the generator gen and transparently forwards its yields outside. As if the values were yielded by the outer generator.

The result is the same as if we inlined the code from nested generators:

```js
function* generateAlphaNum() {
  for (let i = 48; i <= 57; i++) yield i;

  for (let i = 65; i <= 90; i++) yield i;

  for (let i = 97; i <= 122; i++) yield i;
}
```

## "yield" is a two-way street ##
yield is a two-way street: it not only returns the result to the outside, but also **can pass the value inside the generator**.
To do so, we should call generator.next(arg), with an **argument**. That argument **becomes the result of yield**.

```js
function* gen() {
  // Pass a question to the outer code and wait for an answer
  let result = yield "2 + 2 = ?"; // (*)

  alert(result);
}

let generator = gen();

let question = generator.next().value; // <-- yield returns the value

generator.next(4); // --> pass the result into the generator
```

![](image.png)

1. The **first call** generator.next() **should be always made without an argument** (the argument is ignored if passed). It starts the execution and returns the result of the first yield "2+2=?". At this point the generator pauses the execution, while staying on the line (*).
2. Then, as shown at the picture above, the result of yield gets into the question variable in the calling code.
3. On generator.next(4), the generator resumes, and 4 gets in as the result: let result = 4.

## generator.throw ##
To pass an **error** into a yield, we should call generator.throw(err). In that case, the err is thrown in the line with that yield.

```js
function* gen() {
  try {
    let result = yield "2 + 2 = ?"; // (1)

    alert("The execution does not reach here, because the exception is thrown above");
  } catch(e) {
    alert(e); // shows the error
  }
}

let generator = gen();

let question = generator.next().value;

generator.throw(new Error("The answer is not found in my database")); // (2)
```

## Async generators ##
The syntax is simple: prepend function* with async. That makes the generator asynchronous.
And then use for await (...) to iterate over it.

```js
async function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    yield i;
  }
}

(async () => {
  let generator = generateSequence(1, 5);
  for await (let value of generator) {
    console.log(value); // 1, then 2, then 3, then 4, then 5 (with delay between)
  }
})();
```

For async generators, the generator.next() method is **asynchronous**, it **returns promises**.

In a regular generator we’d use result = generator.next() to get values. In an async generator, we should add await, like this:

```js
result = await generator.next(); // result = {value: ..., done: true/false}
```

Regular generators can be used as Symbol.iterator to make the iteration code shorter.
Similar to that, **async generators** can be used as Symbol.asyncIterator to implement the asynchronous iteration.

```js
let range = {
  from: 1,
  to: 5,

  // this line is same as [Symbol.asyncIterator]: async function*() {
  async *[Symbol.asyncIterator]() {
    for(let value = this.from; value <= this.to; value++) {

      // make a pause between values, wait for something
      await new Promise(resolve => setTimeout(resolve, 1000));

      yield value;
    }
  }
};

(async () => {
  for await (let value of range) {
    alert(value); // 1, then 2, then 3, then 4, then 5
  }
})();
```