Sure! Let’s dive deep into **JavaScript data types** — one of the most important foundational concepts.

---

## 🔹 What are Data Types?

**Data types** define the kind of value a variable can hold in JavaScript. There are two main categories:

### ✅ 1. **Primitive Data Types** (immutable)

* string
* number
* boolean
* null
* undefined
* BigInt *(rare, advanced)*
* symbol *(rare, advanced)*

### ✅ 2. **Non-Primitive (Reference) Data Types**

* object
* array (which is a type of object)
* function (also an object)

Let’s explore the **main ones** you asked about:
**string, number, boolean, null, undefined, object**

---

## 🔸 1. `String`

A **string** represents textual data and is written in quotes.

```javascript
let name = "Alice";
let greeting = 'Hello';
let sentence = `Hello, ${name}!`; // template literal
```

### ✅ Characteristics:

* Can be enclosed in `" "`, `' '`, or backticks `` ` ``
* Can use `+` to concatenate:

  ```js
  "Hello " + "World"  // "Hello World"
  ```
* Use **template literals** with `${}` for cleaner syntax.

---

## 🔸 2. `Number`

Represents both integers and floating-point numbers.

```javascript
let age = 25;
let price = 99.99;
let temperature = -5;
```

### ✅ Special Number Values:

* `Infinity`
* `-Infinity`
* `NaN` *(Not a Number)*

```javascript
console.log(10 / 0);    // Infinity
console.log("abc" - 2); // NaN
```

---

## 🔸 3. `Boolean`

Represents **true** or **false** — often used in conditionals.

```javascript
let isOnline = true;
let hasPaid = false;
```

### ✅ Common use:

```javascript
if (isOnline) {
  console.log("User is online");
}
```

---

## 🔸 4. `null`

Represents an **intentional absence of value**. You assign it when you want to indicate "nothing".

```javascript
let user = null;
```

### ✅ Notes:

* It is of **object** type due to a historical bug in JavaScript.
* Use `null` when you want to **manually clear** or reset a variable.

---

## 🔸 5. `undefined`

A variable is `undefined` when:

* It is declared but not assigned a value
* A function doesn't return anything
* A property doesn’t exist

```javascript
let result;
console.log(result); // undefined

function doSomething() {}
console.log(doSomething()); // undefined
```

### ✅ Difference from `null`:

* `undefined`: system-defined (not assigned a value yet)
* `null`: developer-defined (intentionally empty)

---

## 🔸 6. `object`

Used to store **collections of key-value pairs**.

```javascript
let person = {
  name: "John",
  age: 30,
  isAdmin: true
};
```

### ✅ Accessing data:

```javascript
console.log(person.name);     // "John"
console.log(person["age"]);   // 30
```

### ✅ Nested object:

```javascript
let user = {
  name: "Alice",
  address: {
    city: "New York",
    zip: 10001
  }
};
console.log(user.address.city); // "New York"
```

---

## 🔸 typeof Operator

You can use `typeof` to check a variable’s type:

```javascript
typeof "hello";       // "string"
typeof 42;            // "number"
typeof true;          // "boolean"
typeof null;          // "object"   ⚠️ bug
typeof undefined;     // "undefined"
typeof { a: 1 };      // "object"
```

---

## 🔹 Summary Table

| Type      | Example            | Description             | typeof result |
| --------- | ------------------ | ----------------------- | ------------- |
| string    | `"hello"`          | Textual data            | `"string"`    |
| number    | `42`, `3.14`       | Numeric values          | `"number"`    |
| boolean   | `true`, `false`    | Logical values          | `"boolean"`   |
| null      | `null`             | Intentional empty value | `"object"` ⚠️ |
| undefined | `let x;`           | Not assigned            | `"undefined"` |
| object    | `{ name: "John" }` | Key-value collection    | `"object"`    |

---

## 🔸 Want to Test Yourself?

Here’s a quick quiz:

```javascript
let a = "5";
let b = 5;

console.log(typeof a);  // ?
console.log(typeof b);  // ?
console.log(a == b);    // ?
console.log(a === b);   // ?
```

> Want the answers explained too?

Great! Let’s go over the quiz and **explain** the answers step by step:

---

### Quiz Code:

```javascript
let a = "5";
let b = 5;

console.log(typeof a);  // ?
console.log(typeof b);  // ?
console.log(a == b);    // ?
console.log(a === b);   // ?
```

---

### ✅ 1. `typeof a`

```javascript
typeof a; // "string"
```

* `a` is assigned `"5"` — a string (text, inside quotes).
* So, `typeof a` returns `"string"`.

---

### ✅ 2. `typeof b`

```javascript
typeof b; // "number"
```

* `b` is assigned `5` — a number (no quotes).
* So, `typeof b` returns `"number"`.

---

### ✅ 3. `a == b`

```javascript
a == b; // true ✅
```

* This is a **loose equality** check (`==`).
* JavaScript **coerces** types when using `==`.
* `"5"` (string) is converted to `5` (number), so the comparison becomes:

  ```javascript
  5 == 5  // true
  ```

---

### ✅ 4. `a === b`

```javascript
a === b; // false ❌
```

* This is a **strict equality** check (`===`).
* No type conversion happens.
* `"5"` is a **string**, `5` is a **number**.

  ```javascript
  "5" === 5  // false (different types)
  ```

---

### 🔹 Summary of Answers:

```javascript
typeof a;     // "string"
typeof b;     // "number"
a == b;       // true   ✅ loose comparison
a === b;      // false  ❌ strict comparison
```

---

### 🧠 Key Takeaways:

* `==` → compares **value**, with **type coercion**
* `===` → compares **value and type**, no coercion
* Use `===` in most cases to avoid unexpected behavior

