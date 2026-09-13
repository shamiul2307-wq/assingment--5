</>Markdown

# Dev Stack

A simple and interactive **Development Stack Builder** built with React and TypeScript.

This project allows users to explore different development technologies and create their own custom development stack.

## Technologies Used

- React
- TypeScript
- CSS
- Vite
- JSON

##  Features

-  Add technologies to your own stack
- Remove technologies from your stack
- Show notifications when technologies are added or removed

---

# React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript/TypeScript.

It makes React components easier to write and understand.

---

## 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component.

**State** is data managed inside a component that can change over time.

---

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to store and update data inside a React component.

In this project, I used it in `App.tsx` to store:

- The list of technologies
- The user's selected stack
- The loading status

Example:

```tsx
const [stack, setStack] = useState<Technology[]>([]);




5. Why does every item in a .map() list need a unique key prop?

React uses the key to identify each item in a list.

A unique key helps React understand which item was added, removed, or changed.

Example:

{technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))}
6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

I used it in YourStack.tsx to show an empty message when the stack has no technologies.

{stack.length === 0 ? (
  <div className="empty-stack">
    <h3>Your Stack is Empty</h3>
    <p>Add technologies from the list to build your stack.</p>
  </div>
) : (
  <div className="stack-list">
    {/* Selected technologies */}
  </div>
)}
7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using props.

The child can send information back by calling a function passed through props.

For example, App.tsx passes technology and onAdd to TechnologyCard.

<TechnologyCard
  technology={technology}
  onAdd={handleAdd}
/>

The child calls the function:

<button onClick={() => onAdd(technology)}>
  Add to Stack
</button>

So the data flow is:

Parent → Props → Child → Function → Parent

Author

Md Rabid
