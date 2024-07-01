import React from "react";
import FAQ from "./FAQ";

const data = [
  {
    head: "JAVA Introduction",
    p: `
          <p> ● History</p>
          <p> ● Features</p>
    `
  },
  {
    head: "Java Basics & Introduction to Eclipse",
    p: `
        <p> ● Post Install Configuration</p>
        <p> ● Writing a simple program</p>
        <p> ● compiling and executing</p>
        <p> ● Data types</p>
        <p> ● Variables and Arrays</p>
        <p> ● Using Eclipse</p>
        <p> ● Create packaged classes</p>
        <p> ● Eclipse shortcuts</p>
    `
  },
  {
    head: "Operators & Expressions",
    p: `
        <p> ●  Arithmetic Operators</p>
        <p> ●  Boolean Operators</p>
        <p> ●  Logical Operators</p>
        <p> ●  Binary Operators</p>

    `
  },
  {
    head: "Control Statements",
    p: `
        <p> ●  Branching Statements</p>
        <p> ●  Iterative Statements</p>
        <p> ●  Break & Continue with enhancements</p>
        <p> ●  While</p>
        <p> ●  For</p>
        <p> ●  Do..While</p>
        <p> ●  Break and Continue Statement</p>
    `
  },
  {
    head: "Java Object Oriented Programming",
    p: `
        <p> ● Basics of OOPs</p>
        <p> ● Fundamentals of class & object</p>
        <p> ● new keyword</p>
        <p> ● Reference variables</p>
        <p> ● Member methods of a class</p>
        <p> ● Constructors</p>
        <p> ● Finalize method</p>
        <p> ● Overloading member methods</p>
        <p> ● Overloading constructors</p>
        <p> ● Passing and returning objects with methods</p>
        <p> ● Access Control</p>
        <p> ● Static Methods</p>
        <p> ● Static Variables</p>
        <p> ● Static Block</p>
        <p> ● Using final keyword</p>
        <p> ● Unit Testing using Junit-5</p>
    `
  },
  {
    head: "Inheritance",
    p: `
      <p> ●  Basics of Inheritance</p>
      <p> ●  Members accessibility in inheritance</p>
      <p> ●  Using super keyword</p>
      <p> ●  The sequence of execution of constructors in inheritance</p>
      <p> ●  Method Overriding</p>
      <p> ●  Dynamic Method Dispatch</p>
      <p> ●  Abstract classes</p>
      <p> ●  Preventing overriding</p>
      <p> ●  Preventing inheritance</p>
    `
  },
  {
    head: "Exception Handling",
    p: `
        <p> ●  Fundamentals of Exceptions</p>
        <p> ●  Types of exceptions</p>
        <p> ●  Using try and catch keywords</p>
        <p> ●  Multiple catches</p>
        <p> ●  Nesting of try blocks</p>
        <p> ●  Using throw keyword</p>
        <p> ●  Using throws keyword</p>
        <p> ●  Finally block</p>
        <p> ●  Some predefined exceptions and their usage</p>
        <p> ●  User defined exceptions</p>
    `
  },
  {
    head: "Interfaces",
    p: `
        <p> ●  Purpose of Interface</p>
        <p> ●  Defining an interface</p>
        <p> ●  Implementing interfaces</p>
        <p> ●  Interface reference variables</p>
        <p> ●  Interface with variables</p>
        <p> ●  Extending interfaces</p>
    `
  },
  {
    head: "Multi Threaded programming",
    p: `
          <p> ●   Basics of threads</p>
          <p> ●   Java threaded model</p>
          <p> ●   Defining threads using Runnable interface</p>
          <p> ●   Defining threads using Thread superclass</p>
          <p> ●   Multiple threads</p>
          <p> ●   Thread Priority values</p>
          <p> ●   Thread Synchronization using synchronized methods</p>
      <br/>
      <p>Thread Synchronization using synchronized blocks</p>
    `
  },  
  {
    head: "Predefined Libraries",
    p: `
          <p> ●   Using String class</p>
          <p> ●   Using java.lang package</p>
          <p> ●   Working with Data & Time</p>
          <p> ●   Utility framework</p>
          <p> ●   Collection framework</p>
          <p> ●   I/O framework</p>
    `
  },
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
