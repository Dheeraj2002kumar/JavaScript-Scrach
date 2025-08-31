Awesome! Here’s a **quick quiz + coding challenge** to test your understanding of **function declarations vs expressions** in JavaScript. Try them out, then scroll down for the answers and explanations.

---

## 🧠 **Quick Quiz – What’s the Output?**

### 🔹 Q1:

```javascript
greet("Alice");

function greet(name) {
  console.log("Hello, " + name);
}
```

What will this output?

---

### 🔹 Q2:

```javascript
sayHi("Bob");

const sayHi = function(name) {
  console.log("Hi, " + name);
};
```

What happens here?

---

### 🔹 Q3:

```javascript
const sayHello = function greet(name) {
  console.log("Hello, " + name);
};

sayHello("Charlie");
```

Will this work? What is the function's name?

---

### 🔹 Q4:

```javascript
const add = (a, b) => a + b;

console.log(add(3, 4));
```

What is this function style called?

---

---

## 🧪 **Coding Challenge – Function Declaration vs Expression**

Write **two versions** of a function that calculates the square of a number:

### ✅ Version 1: Function Declaration

```javascript
// squareDeclaration(n)
```

### ✅ Version 2: Function Expression (arrow function)

```javascript
// squareExpression(n)
```

Test both by logging:

```javascript
console.log(squareDeclaration(5));  // 25
console.log(squareExpression(5));  // 25
```

---

Let me know once you’ve tried it, or scroll down for the **answers and explanations**!

Great! Let’s go through the **quiz answers** and the **coding challenge solutions**, with clear explanations 👇

---

## ✅ Quiz Answers & Explanations

---

### 🔹 Q1:

```javascript
greet("Alice");

function greet(name) {
  console.log("Hello, " + name);
}
```

✅ **Answer:**

```
Hello, Alice
```

**Explanation:**
This works because **function declarations are hoisted**. The whole function is moved to the top of the scope during compilation, so you can call it before its definition.

---

### 🔹 Q2:

```javascript
sayHi("Bob");

const sayHi = function(name) {
  console.log("Hi, " + name);
};
```

❌ **Answer:**
**ReferenceError: Cannot access 'sayHi' before initialization**

**Explanation:**

* This is a **function expression** assigned to a `const`.
* Variables declared with `const` are **not initialized until runtime**.
* So calling it before assignment throws a **ReferenceError** (not just undefined).

---

### 🔹 Q3:

```javascript
const sayHello = function greet(name) {
  console.log("Hello, " + name);
};

sayHello("Charlie");
```

✅ **Answer:**

```
Hello, Charlie
```

**Explanation:**

* `greet` is a **named function expression**.
* You call it using `sayHello`, not `greet` (which is only available inside the function).
* Yes, it works!

---

### 🔹 Q4:

```javascript
const add = (a, b) => a + b;

console.log(add(3, 4));
```

✅ **Answer:**

```
7
```

**Explanation:**
This is an **arrow function** — a shorthand for writing function expressions introduced in **ES6**. It works just like a regular function here but with shorter syntax.

---

## 🧪 Coding Challenge: Square Function

### ✅ Version 1: **Function Declaration**

```javascript
function squareDeclaration(n) {
  return n * n;
}
```

### ✅ Version 2: **Function Expression (Arrow Function)**

```javascript
const squareExpression = (n) => n * n;
```

### ✅ Test:

```javascript
console.log(squareDeclaration(5));  // 25
console.log(squareExpression(5));  // 25
```

---

## 🔁 Summary: When to Use What?

| Feature                   | Function Declaration | Function Expression (incl. arrow) |
| ------------------------- | -------------------- | --------------------------------- |
| Hoisted                   | ✅ Yes                | ❌ No                              |
| Can be anonymous          | ❌ No                 | ✅ Yes                             |
| Good for reusable logic   | ✅ Yes                | ✅ Yes                             |
| Good for inline callbacks | ❌ No                 | ✅ Yes                             |

---

Would you like to try a **slightly harder function challenge** or move on to another topic like **arrays**, **objects**, or **scope**?

Awesome! Here's a **slightly harder function challenge** to level up your understanding of **functions, expressions, and logic** in JavaScript 👇

---

## 💡 Challenge: Calculator Function

### 🧠 Problem:

Create a function called `calculate` that takes **three arguments**:

```javascript
calculate(num1, operator, num2)
```

Where:

* `num1` and `num2` are numbers
* `operator` is a string: `"+"`, `"-"`, `"*"`, or `"/"`

### ✅ Requirements:

* Use a `switch` statement inside the function to determine the operation.
* Return the result of the operation.
* If the operator is not recognized, return `"Invalid operator"`.

---

### ✍️ Example Calls:

```javascript
console.log(calculate(10, "+", 5));  // 15
console.log(calculate(10, "-", 5));  // 5
console.log(calculate(10, "*", 5));  // 50
console.log(calculate(10, "/", 2));  // 5
console.log(calculate(10, "x", 2));  // "Invalid operator"
```

---

💡 **Bonus:** Try writing it both as:

* A **function declaration**
* A **function expression (arrow function)**

---

Would you like to give it a shot first, or should I show you the solution?
