Sure! Let’s dive deep into **conditionals** in JavaScript. Conditionals let you execute code based on whether certain conditions are true or false. They’re fundamental for controlling the flow of your program.

---

# 🔹 JavaScript Conditionals

## 1. `if` Statement

The `if` statement executes a block of code **only if** a specified condition evaluates to `true`.

### Syntax:

```javascript
if (condition) {
  // code to run if condition is true
}
```

### Example:

```javascript
let age = 20;

if (age >= 18) {
  console.log("You are an adult.");
}
```

Here, the message is printed **only if** `age` is 18 or more.

---

## 2. `if...else` Statement

Use `else` to run code when the condition in the `if` is **false**.

### Syntax:

```javascript
if (condition) {
  // runs if condition is true
} else {
  // runs if condition is false
}
```

### Example:

```javascript
let age = 16;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
```

---

## 3. `if...else if...else` Chain

For multiple conditions, use `else if` to check additional conditions sequentially.

### Syntax:

```javascript
if (condition1) {
  // if condition1 true
} else if (condition2) {
  // if condition1 false but condition2 true
} else {
  // if none of above are true
}
```

### Example:

```javascript
let score = 75;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 75) {
  console.log("Grade B");
} else if (score >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}
```

---

## 4. `switch` Statement

The `switch` statement is a cleaner way to check one value against many possible cases. It compares the expression to each `case` and executes the matching block.

### Syntax:

```javascript
switch (expression) {
  case value1:
    // code block
    break;
  case value2:
    // code block
    break;
  default:
    // code block if no cases match
}
```

### Important Notes:

* Each `case` ends with a `break;` to prevent **fall-through** (executing all subsequent cases).
* `default` runs if no cases match.

### Example:

```javascript
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Another day");
}
```

Output: `"Wednesday"`

---

## 5. Condition Expressions

In all conditionals, the condition can be **any expression** that evaluates to `true` or `false`.

Examples:

* Comparison:

  ```javascript
  if (score > 90) { ... }
  ```

* Logical:

  ```javascript
  if (age >= 18 && hasID) { ... }
  ```

* Checking existence:

  ```javascript
  if (user) { ... }  // runs if user is not null/undefined/false/0/empty string
  ```

---

## 6. Truthy and Falsy Values in Conditionals

JavaScript treats some values as **truthy** (considered true) or **falsy** (considered false) when evaluated in conditions.

| Falsy Values      | Examples    |
| ----------------- | ----------- |
| false             | `false`     |
| 0                 | `0`         |
| "" (empty string) | `""`        |
| null              | `null`      |
| undefined         | `undefined` |
| NaN               | `NaN`       |

All other values are **truthy**.

Example:

```javascript
if ("hello") {
  console.log("This runs because non-empty strings are truthy.");
}

if (0) {
  console.log("This won't run because 0 is falsy.");
}
```

---

## 7. Ternary Operator (Conditional Expression)

A shorter way to write simple `if...else`:

```javascript
condition ? expressionIfTrue : expressionIfFalse;
```

### Example:

```javascript
let age = 18;
let message = (age >= 18) ? "Adult" : "Minor";
console.log(message); // "Adult"
```

---

## Summary Table

| Conditional           | Purpose                                      | Example                                          |
| --------------------- | -------------------------------------------- | ------------------------------------------------ |
| `if`                  | Run if condition is true                     | `if (x > 5) { ... }`                             |
| `if...else`           | Run one of two blocks depending on condition | `if (x>5) {...} else {...}`                      |
| `if...else if...else` | Multiple conditional checks                  | `if (x>10) {...} else if (x>5) {...} else {...}` |
| `switch`              | Check one value against many cases           | `switch(x) { case 1: ...; break; ...}`           |
| Ternary (`? :`)       | Short `if...else`                            | `x > 5 ? 'big' : 'small'`                        |

---

### Would you like me to give you a few exercises to practice conditionals?

Sweet! Here are some exercises to practice **conditionals** in JavaScript. Try to solve them on your own first, then I can walk you through the answers if you want.

---

## 📝 Exercises: Conditionals Practice

---

### 1. **Check Even or Odd**

Write a function `isEven` that takes a number and returns `"Even"` if the number is even, otherwise `"Odd"`.

```javascript
function isEven(num) {
  // your code here
}

// Tests:
console.log(isEven(4));  // "Even"
console.log(isEven(7));  // "Odd"
```

---

### 2. **Grade Calculator**

Write a function `gradeCalculator` that takes a score (0-100) and returns the grade based on:

* 90 and above → `"A"`
* 80 to 89 → `"B"`
* 70 to 79 → `"C"`
* 60 to 69 → `"D"`
* Below 60 → `"F"`

```javascript
function gradeCalculator(score) {
  // your code here
}

// Tests:
console.log(gradeCalculator(85));  // "B"
console.log(gradeCalculator(72));  // "C"
console.log(gradeCalculator(59));  // "F"
```

---

### 3. **Day of the Week**

Write a function `getDayName` that takes a number (1 to 7) and returns the corresponding day name:

1 → Monday
2 → Tuesday
3 → Wednesday
4 → Thursday
5 → Friday
6 → Saturday
7 → Sunday

Use a `switch` statement.

```javascript
function getDayName(dayNumber) {
  // your code here
}

// Tests:
console.log(getDayName(3));  // "Wednesday"
console.log(getDayName(7));  // "Sunday"
```

---

### 4. **Login Check with Ternary**

Write a function `checkLogin` that takes a Boolean `isLoggedIn` and returns:

* `"Welcome back!"` if `true`
* `"Please log in."` if `false`

Use the **ternary operator**.

```javascript
function checkLogin(isLoggedIn) {
  // your code here
}

// Tests:
console.log(checkLogin(true));   // "Welcome back!"
console.log(checkLogin(false));  // "Please log in."
```

---

---

Want me to check your solutions or provide hints? Or should I share the answers now?

Got it! I’ll share the **answers with explanations** for all four exercises below. Feel free to compare with your solutions and ask questions!

---

## 📝 Exercise Answers

---

### 1. **Check Even or Odd**

```javascript
function isEven(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// Test
console.log(isEven(4));  // "Even"
console.log(isEven(7));  // "Odd"
```

**Explanation:**

* `%` is the modulus operator (remainder).
* If remainder when divided by 2 is 0 → even, else odd.

---

### 2. **Grade Calculator**

```javascript
function gradeCalculator(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// Tests
console.log(gradeCalculator(85));  // "B"
console.log(gradeCalculator(72));  // "C"
console.log(gradeCalculator(59));  // "F"
```

**Explanation:**

* Conditions checked from highest grade to lowest.
* If a condition is true, rest are skipped.

---

### 3. **Day of the Week**

```javascript
function getDayName(dayNumber) {
  switch (dayNumber) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "Invalid day number";
  }
}

// Tests
console.log(getDayName(3));  // "Wednesday"
console.log(getDayName(7));  // "Sunday"
```

**Explanation:**

* `switch` checks each case for a match.
* `default` handles invalid input.

---

### 4. **Login Check with Ternary**

```javascript
function checkLogin(isLoggedIn) {
  return isLoggedIn ? "Welcome back!" : "Please log in.";
}

// Tests
console.log(checkLogin(true));   // "Welcome back!"
console.log(checkLogin(false));  // "Please log in."
```

**Explanation:**

* Ternary operator: `condition ? exprIfTrue : exprIfFalse`.
* Returns message based on `isLoggedIn` boolean.

---
