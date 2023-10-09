<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: `{}`

<i>Explain the question :    </i>
  The console output is an empty object A:`{}`. In this code  declare a variable called `greeting` and declare a object called `greetign` and console the `greetign` object . the variable `greeting` is not same  as `greetign`. This is two different variables;
</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: c: `"12"`

<i>explanation :  </i>
  This is a function and the function have two parameters `a` and `b`. And the function return `sum of a+b`. The sum function call and pass to arguments `1 and "2"` . First argument is a number and second argument is a string . We know that number and string `sum` is not same as e normal sum equation . So the function sum is return a string . The string value is `"12"`
</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: `['🍕', '🍫', '🥑', '🍔']`

<i> Explanation  :</i>
Here, an array called food is declared and initialized with four food emoji strings: 🍕, 🍫, 🥑, and 🍔.  Then declared an object called info and initialized with a single property `favoriteFood` which is assigned to the first element of `food` array and the next line update the favoriteFood property of info is "🍝"; So the info.favoriteFood property is changed but this is change the info `object` does not food `array`. so when console the food array the array is save to declare
</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: `Hi there, undefined`

<i>Explanation  : </i>
 This is a  sayHi function. The function takes one parameter called `name` and return a template string value and the value take a dynamic value; The function called and passing no arguments. So the output is Hi there, undefined ;
</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: 3

<i>Explanation : </i>
The nums array containing four elements [0,1,2,3].` 0` is a falsy value; and others 3 elements is truthy value; When the foreach loop is increment  `count` by 1 for each of the truthy values (1, 2, and 3), resulting in a total count of 3. So the output is `3`
</p>
</details>
