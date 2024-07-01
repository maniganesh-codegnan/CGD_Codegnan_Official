import React from "react";
import FAQ from "./FAQ";

const data = [
  {
    head: "ReactJs Introduction",
    p: `
        <p>  1. Overview of ReactJs</p>
        <p>  2. Scope of ReactJs</p>
        <p>  3. Props & Cons of ReactJs</p>
    `
  },
  {
    head: "ReactJs setup",
    p: `
        <p>  1. Regarding Nodejs</p>
        <p>  2. Npm and Setting Environment for ReactJS projects.</p>
    `
  },
  {
    head: "ReactJs Components",
    p: `
         <p>  1. Types of Components Functional</p>
         <p>  2. Class Components & difference between those two components.</p>
    `
  },
  {
    head: "ReactJs State",
    p: `
       <p>  1. What is a state</p>
       <p>  2. How to use state</p>
       <p>  3. What’s the role of the state in ReactJs projects.</p>
    `
  },
  {
    head: "ReactJs Props",
    p: `
       <p>  1. What are props</p>
       <p>  2. Props validation</p>
       <p>  3. Passing data to multiple components</p>
    `
  },
  {
    head: "ReactJs Component Lifecycle",
    p: `
       <p>  Types of lifecycle methods in ReactJs.</p>
    `
  },
  {
    head: "ReactJs forms, events",
    p: `
       <p>  1. Form validation</p>
       <p>  2. Preventing data submission while page refresh also.</p>
    `
  },
  {
    head: "ReactJs refs, fragments",
    p: `
       <p>  Using refs concept for pausing and playing videos in ReactJs.</p>
    `
  },
  {
    head: "ReactJs Lists, Keys",
    p: `
       <p>  1. How to store data in one order</p>
       <p>  2. How to pass data in a loop using ES6 concepts.</p>
    `
  },  
  {
    head: "ReactJs Router",
    p: `
       <p>  Connecting from one page to other pages to react without using a tag.</p>
    `
  },
  {
    head: "ReactJs Flux",
    p: `
       <p>  Using Flux and the difference between the flux and normal MVC.</p>
    `
  },
  {
    head: "ReactJs Redux",
    p: `
       <p>  How to use Redux in ReactJs.using of react-redux package.</p>
    `
  },
  {
    head: "ReactJs with DB",
    p: `
       <p>  1. Connecting the front-end ReactJs application with server like Express.js</p>
       <p>  2. Firebase</p>
       <p>  3. MySql.</p>
    `
  }

];

const App = () => {
  return (
    <div>
      <br /><br /><br /><br />
      {/* <h1>FAQs</h1> */}
      <FAQ data={data} />
    </div>
  );
};

export default App;
