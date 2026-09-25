# JavaScript Learning Repository

A collection of hands-on exercises and mini-projects created while learning JavaScript. This repository is for **learning purposes only** — it documents my journey from the basics of the language to building event-driven web pages.

## Repository Structure

```
Javascript/
├── Fruits.js                      # Intro array example (mixed data types)
├── Fundamentals/                  # Core language concepts
│   ├── Variables/
│   ├── ConditionalStatement/
│   ├── LogicalOperators/
│   ├── Loops/
│   ├── Functions/
│   ├── Arrays/
│   ├── Objects/
│   ├── ES6Features/
│   ├── modular/                   # ES modules (import / export)
│   ├── DOM manipulation/
│   ├── EventHandling&UserInput/
│   ├── studentRegistrationForm/
│   ├── AsynchronousJavaScript/
│   └── API/fetchingAPI/
└── EventDrivenProgramming/        # Events and event-driven apps
    ├── BasicSyntax/
    ├── BasicEventDrivenWebPage/
    ├── EventDrivenWebPage/
    ├── EventDrivenApplication/
    ├── ButtonsAndEvevnts/
    ├── CustomEvent/
    ├── EventDelegationReview/
    ├── RemovingEventListener/
    ├── InteractiveCSSChanger/
    │   └── traffic-light/
    ├── ThemeSwitcher/
    └── GradeChecker/
```

## What's Covered

### Fundamentals

- **Variables** — declaring and working with data
- **Conditional Statements** — making decisions in code (`operators.js`, `script.js`)
- **Logical Operators** — `&&`, `||`, and `!` in practice
- **Loops** — repeating tasks efficiently, including looping over arrays
- **Functions** — reusable blocks of logic (e.g. `product.js`)
- **Arrays** — array basics, array methods, functions inside arrays, and REST parameters
- **Objects** — organizing and managing structured data
- **ES6 Features** — modern JavaScript syntax (template literals, destructuring, and more)
- **Modules** — splitting code across files with `import` / `export` (`math.js`, `student.js`, `main.js`)
- **DOM Manipulation** — selecting elements, changing text, styles, and HTML content
  - Mini-projects: `simpleStudentList`, `studentGreeting`, `colorChanger`, `counter`
- **Event Handling & User Input** — responding to clicks, input events, login forms, character counters, and an age checker
- **Student Registration Form** — combining inputs and DOM updates into a small form
- **Asynchronous JavaScript** — `setTimeout`, async functions, `try...catch`, and API calls
- **APIs** — fetching and consuming external data with `fetch`

### Event-Driven Programming

- **Basic Syntax** — the fundamentals of wiring up events
- **Basic & Full Event-Driven Web Pages** — building a page that reacts to user actions
- **Event-Driven Application** — a small app driven entirely by events
- **Buttons and Events** — click handling with styling
- **Custom Events** — creating and dispatching `CustomEvent` with a `detail` payload
- **Event Delegation** — handling events on a parent element instead of each child
- **Removing Event Listeners** — cleaning up handlers
- **Interactive CSS Changer** — changing styles from JavaScript (plus a `traffic-light` sub-project)
- **Theme Switcher** — toggling a light/dark theme
- **Grade Checker** — reading input and producing a result

## How to Use

Most topics live in their own folder containing simple `.html` and `.js` files. To explore an exercise:

1. Open the folder for a topic.
2. Open the `index.html` file in your browser — no build tools or dependencies required.

Alternatively, use a live server extension (e.g., VS Code Live Server) for auto-reloading as you edit the code.

### Notes

- Some folders (such as `AsynchronousJavaScript`, `LogicalOperators`, `CustomEvent`, `EventDelegationReview`, and `RemovingEventListener`) contain **only `.js` files** — these are console-based exercises. Run them with `node <file>.js` or load them from an HTML page and check the browser console.
- The `modular` folder uses ES modules, which require serving the files over HTTP (Live Server or similar) rather than opening the file directly — browsers block module imports from `file://`.

## Purpose

This repo is a personal study space for practicing core JavaScript concepts through small, self-contained examples. Feel free to browse or borrow ideas if you're learning too!
