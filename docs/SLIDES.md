---
title: "React for People in a Hurry"
author: "Michael DeMarco"
institute: "TOHacks 2022"
topic: "Intermediate Web Development"
theme: "Pittsburgh"
colortheme: "crane"
fontsize: 12pt
urlcolor: blue
linkstyle: bold
aspectratio: 169
date: May 27th, 2022
lang: en-US
section-titles: true
toc: false
---

# Welcome!

## Who am I?

- Michael DeMarco
- 3rd year Honors Computer Science, minor in Data Science at UBC (go T-birds!)
- I'm currently an SDE Intern @ Amazon (writing React!); formerly worked at Samsung (writing Node...), start-ups (writing everything)
- Super excited to join you all for TOHacks!

------------------

![Samsung](images/samsung-team.png)

------------------

![Amazon](images/amazon1.png)

## Goals for today

- "Intermediate web development" meaning let's step beyond HTML, CSS, and JS and into your (first?) framework
- Focus on React, because it's _very_ popular; many other good choices I'll touch on later
- I'll emphasize applications for the hackathon as well
- We're going to move... fast! I'm not going to make you a React expert; my goal is to spark interest more than anything

------------------

![You're late!](images/were-late.png)

## Expectations

- A bit of familiarity with reading programs, but not a ton more than that
- In case anyone here has used React before, I'll try to splash in some more advanced tidbits and tricks to keep things engaging
  - (Also feel free to nitpick in case anything seems off... I don't mind!)
- Again, expect an "appetizer"-style workshop; I'll keep things light and high-level

## Schedule

1. So... what's a React?!
2. What makes React tick?
3. Cool... how do I use it?
4. Where do I go from here?

# So... what's a React?!

## What's React?

- Open-source, made by ~~Facebook~~ Meta (yawn)
- React makes building responsive websites **much** easier
  - This isn't helpful for your static dog-with-a-blog website, _but_ it's a much nicer alternative to vanilla JS
- Enables logic to live alongside UI code with "JSX" (more on this later)
- Used everywhere, including at Amazon, but also Facebook, Instagram, Twitter, Netflix, Khan Academy... and many, many more
  - React is great for online stores, feeds, dashboards, etc.

## Why is everyone obsessed with it?!

- It has a **great** community around it
- Generally speaking, it's easy to learn
- It's performant... enough ("blazingly fast?!")
- Great developer tools and ecosystem

## What features does it add?

- React is "declarative," meaning it allows you to describe how you want the page to look, and it will determine the "how"
- It leverages "components" (more on this in a moment!)
- It _only_ updates what it needs to, instead of just re-writing (or completely refreshing) the page

## Splitting up your application

- React allows you to break down your application into _components_, instead of other more "traditional" frontend patterns
- They feel like fancy functions, that return some UI code (...a bit like HTML); they can take arguments (usually called "properties" or `props`)
- Components are a new way of thinking about your app, and it's easier to "show" than tell

------------------

![Amazon.ca](images/amazon-ca.png)

------------------

![Amazon.ca, product](images/amazon-ca-product.png)

# What makes React tick?

## Firstly... how websites work!

- HTML is "translated" in the DOM (Document Object Model), which is a data representation of web content
- It's what the browser renders, and it's accessible with JavaScript code
- React abstracts this into a "virtual DOM" (...this gets a lil' complicated), which allows it to be fast

## Making in `react`-ive

- While components can take arguments, they're not allowed to modify those arguments
- Instead, they can maintain internal state, _and_ they'll re-render if their arguments change (auto-magically)
- We can write normal JavaScript functions for various events, such as a mouse click, and modify state appropriately; React will render the component as expected

## Writing React

- JSX feels like writing HTML, but it's actually an extension of JavaScript
- It allows writing really easy to read and debug React code, mixing UI elements with component logic
- (It's not technically needed; if you're curious how this works in-depth, check out the React tutorial!)

------------------

- Here's a bit of JSX to tie everything together

```jsx
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Welcome name="Sara" />;
root.render(element);
```

## The "lifecycle" of React

- A component has a "life" with various events
- In your life: you're born, you graduate, you get a house (maybe), you die
- For a component: it's "constructed" (initializing state), its render method is called, it's "mounted," (it may re-render), and it unmounts
- This allows us to build dynamic components and enables asynchronous behavior, e.g., an API call

------------------

![Circle of life](images/circle-of-life.png)

## Very briefly, hooks

- Hooks are powerful encapsulations of logic that are essential to React development
- Some built-in hooks include `useState` for persisting state across re-renders and `useEffect` for "side effects" when state changes
- You can actually write your own hooks too!

------------------

```jsx
import { useState } from "react"

function App() {
  let count = 0;

  function handleClick() { count = count + 1; }

  return (<>
      <button onClick={handleClick} />
      {/* Render the count on the screen */}
      <span>{count}</span>
    </>)
}
```

------------------

```jsx
import { useState } from "react"

function App() {
  // On a re-render of <App />, state will persist!
  const [count, setCount] = useState(0)

  function handleClick() { setCount(count + 1) }

  return (<>
      <button onClick={handleClick} />
      {/* Render the count on the screen */}
      <span>{count}</span>
    </>)
}
```

# Cool... how do I use it?

## Show... don't tell

- Let's do a lightning quick demo :-)
- We're going to extend the previous example... this is the foundation of a basic calculator project!

# Where do I go from here?

## React tooling

- Here, I've of course just scratched the surface of how to use React
- `create-react-app` is a command-line tool from the maintainers that allows you to quickly spin up a project
- There are tons of UI libraries out there that allow you to quickly make a pretty app (...great for hackathons!); check out Material-UI or React-Bootstrap for a start
- Various tools out there can level up your React game; check out Webpack, ESLint, Prettier, Sass, Tailwind and more!

## React at TOHacks

- Using the tools I mentioned before, it's really easy to get started with making an app _fast_
- There's a few basic skills that I didn't have time to cover here but are usually essential in any app; in no particular order...
  - Make an API call
  - Creating a form
  - Creating multiple pages
- Find some friends who are willing to do backend; have them build a custom API and that's the layout of almost any project

## React projects

- Here are some ideas to get you started!
  - Visualizations; there are tons of open data sets out there with public APIs, try displaying their data in graphs or charts!
  - Music players; Spotify's web SDK is awesome to work with, lots of cool stuff you could do with that
  - Productivity hacks; a "to-do list" is a classic frontend project... could you extend it in any way to make it better for yourself?

## Beyond React itself

- There are tools you can use with React, like Next, Gatsby, and Remix
- There are also frameworks entirely! You might be interested in Vue or Svelte instead
- When you're learning, don't be afraid to experiment and try new things; curiosity fuels great learning

# That's all folks!

## Further resources

- [React in an hour or your money back](https://www.youtube.com/watch?v=1PFXBpJjjoc) by Anson Yu and Jacky Zhao at Hack The North
- [The official reactjs.org tutorial](https://reactjs.org/tutorial/tutorial.html) by the React team
- [Complete Intro to React, v7](https://frontendmasters.com/courses/complete-react-v7/) by Brian Holt (free for students!)

## Thanks for coming

- Questions?
- Feel free out **@michaelfromyeg** on all the things
  - I can tell you have to make your editor pretty :-)
- Good luck this weekend; don't hesitate to reach out on Discord if you're stuck at michaelfromyeg#9050
