Great question! Understanding the **difference between function declarations and function expressions** is crucial in JavaScript. Both are used to define functions, but they behave differently in terms of **hoisting**, **syntax**, and **usage**.

Let’s break it down clearly:

---

# 🔹 Function Declarations vs Function Expressions in JavaScript

---

## ✅ 1. **Function Declaration**

A **function declaration** defines a named function using the `function` keyword.

### 📌 Syntax:

```javascript
function greet(name) {
  return "Hello, " + name;
}
```

### ✅ Example:

```javascript
console.log(greet("Alice"));  // "Hello, Alice"

function greet(name) {
  return "Hello, " + name;
}
```

### 🔍 Key Features:

* The function is **hoisted** — this means you can call it **before it's defined** in the code.
* Always has a **name**.
* Best when you want to define a function globally or reuse it multiple times.

---

## ✅ 2. **Function Expression**

A **function expression** defines a function and assigns it to a variable. It can be **named or anonymous**.

### 📌 Syntax:

```javascript
const greet = function(name) {
  return "Hello, " + name;
};
```

### ✅ Example:

```javascript
console.log(greet("Bob"));  // "Hello, Bob"

const greet = function(name) {
  return "Hello, " + name;
};
```

### ⚠️ This will cause an error if you call `greet()` before the assignment because:

> Function expressions are **not hoisted** like declarations.
> The variable (`greet`) is hoisted, but the **function value is not initialized** until runtime.

---

## 🔁 Function Expression with Arrow Function (ES6)

You can also use **arrow functions** for function expressions:

```javascript
const greet = (name) => "Hello, " + name;
```

Arrow functions are always **expressions**, and:

* They are **not hoisted**
* Have no `this` binding (more on that when you learn about context and objects)

---

## 🧠 Summary Table

| Feature               | Function Declaration      | Function Expression                         |
| --------------------- | ------------------------- | ------------------------------------------- |
| Syntax                | `function name() {}`      | `const name = function() {}`                |
| Hoisted               | ✅ Yes                     | ❌ No                                        |
| Named Function        | ✅ Yes                     | ✅ Optional (often anonymous)                |
| Usable Before Defined | ✅ Yes                     | ❌ No                                        |
| Use Case              | General-purpose, reusable | Assigning functions to variables, callbacks |

---

## 🧪 Quick Example Comparison:

```javascript
sayHi();       // ✅ Works

function sayHi() {
  console.log("Hi!");
}
```

```javascript
sayHello();    // ❌ Error: Cannot access 'sayHello' before initialization

const sayHello = function() {
  console.log("Hello!");
};
```

---

## ✅ Best Practices

* Use **function declarations** when you want to define reusable functions globally or organize code clearly.
* Use **function expressions** (especially arrow functions) for inline or short callback functions, like in `.forEach()` or `.map()`.

---

