import React from "react";
import FAQ from "./FAQ";

const data = [
  {
    head: "Introduction",
    p: `
        <p>  ● Introduction to C </p>
        <p>  ● History of C </p>
        <p>  ● Features of C </p>
        <p>  ● Application Areas of C </p>
        <p>  ● Execution flow of c program </p>
        <p>  ● Other translators </p>
        <p>  ● Structure of C Program with Example </p>
        <p>  ● Keywords </p>
      <p><b>‍‍Hands-On – Installations of compilers, IDES.</b></p>
    `
  },
  {
    head: "Basic Concepts",
    p: `
          <p> ● Tokens </p>
          <p> ● identifiers </p>
          <p> ● constants </p>
          <p> ● variables </p>
          <p> ● Data Types</p>
          <p> ● input and output functions </p>
          <p> ● Qualifiers </p>
          <p> ● Modifiers </p>
          <p> ● Escape sequences</p>
     <p><b>Hands-On -Execution of Basic Programs with different data types , i/o functions and other concepts. </b></p>
    `
  },
  {
    head: "Basic Concepts",
    p: `
            <p> ● Tokens  </p>
            <p> ● identifiers  </p>
            <p> ● constants  </p>
            <p> ● variables  </p>
            <p> ● Data Types </p>
            <p> ● input and output functions  </p>
            <p> ● Qualifiers  </p>
            <p> ● Modifiers  </p>
            <p> ● Escape sequences </p>

        <p><b>‍Hands-On -Execution of Basic Programs with different data types , i/o functions and other concepts. </b></p>
    `
  },
  {
    head: "Operators and Expressions",
    p: `
            <p> ● Arithmetic operators  </p>
            <p> ● Relational operators  </p>
            <p> ● Logical operators  </p>
            <p> ● Assignment operators </p>
            <p> ● Increment & decrement operators  </p>
            <p> ● Conditional/ternary operator  </p>
            <p> ● Bitwise operator  </p>
            <p> ● Size of operator  </p>
            <p> ● Comma operator  </p>
            <p> ● Operators Precedence and Associativity  </p>
            <p> ● Expressions  </p>
            <p> ● Evaluation of Expressions  </p>

        <p><b‍>Hands-On Execution of all types operators and explain how expressions are simplified. </b></p>
    `
  },
  {
    head: "Control /Decision Making Statements",
    p: `
          <p> ● Simple if  </p>
          <p> ● if..else  </p>
          <p> ● Nested if  </p>
          <p> ● if..else ladder  </p>
          <p> ● Switch..Case statement  </p>
      <p><b>‍‍Hands-On -Observation of above control flow statements with following suitable Examples.</b></p>
    `
  },
  {
    head: "Control Structures",
    p: `
            <p> ● While  </p>
            <p> ● For  </p>
            <p> ● Do..While  </p>
            <p> ● Goto Statement </p>
            <p> ● Break and Continue Statement  </p>

      <p><b>‍‍Hands-On – usage of Control Structures with different scenarios. </b></p>
    `
  },
  {
    head: "Math.h Library",
    p: `
            <p> ● abs(int x)  </p>
            <p> ● floor()  </p>
            <p> ● ceil()  </p>
            <p> ● sqrt()  </p>
            <p> ● pow()  </p>
            <p> ● exp()  </p>
            <p> ● log() and etc……  </p>

      <p><b>‍‍‍Hands-On – practice various built in functions of Math Library.  </b></p>
    `
  },
  {
    head: "Arrays",
    p: `
          <p> ● Introduction to arrays </p>
          <p> ● Types of arrays </p>
          <p> ● 1d array </p>
          <p> ● 2d array (matrix)</p>
          <p> ● find max element from array </p>
          <p> ● find 2 max element from array </p>
          <p> ● sort array elements by general approach </p>
          <p> ● bubble sort </p>
          <p> ● selection sort </p>
          <p> ● insertion sort </p>
          <p> ● searching an element </p>
          <p> ● linear search </p>
          <p> ● binary search </p>
          <p> ● trace & difference of sum of 2 opposite diagonals. </p>
          <p> ● Decimal to Binary conversion </p>
          <p> ● Repeated element and count </p>
          <p> ● Rotate the array elements k times(left & right)</p>

      <p><b>Hands-On – Observation of sorting,searching and rotating array.</b></p>
    `
  },
  {
    head: "Strings",
    p: `
          <p> ● String declaration and initialization </p>
          <p> ‍string.h library </p>
          <p> ‍● strlen(str) </p>
          <p> ● strcpy(des_str,src_st r) </p>
          <p> ● strcat(desc_str,src_str) </p>
          <p> ● strrev(str) </p>
          <p> ● strcmp(str1,str2) </p>
          <p> ● strlwr() </p>
          <p> ● strupr()</p>
    `
  },
  {
    head: "Functions",
    p: `
          <p> ● function types </p>
          <p> ● built in functions </p>
          <p> ● user defined functions </p>
          <p> ● Recursive functions </p>
          <p> ● call by value and call by reference</p>
    `
  },  
  {
    head: "Storage Classes",
    p: `
            <p> ● auto </p>
            <p> ● static</p>
            <p> ● extern </p>
            <p> ● register </p>
            <p><b> Others </b></p>
            <p>Command Line Arguments const preprocessor directive statements </p>

      <p><b>‍Hands-On -Observes the storage classes Behaviour.</b></p>
    `
  },
  {
    head: "User Defined Data Types",
    p: `
            <p> ● Structure </p>
            <p> ● Union </p>
            <p> ● enum </p>
            <p> ● typedef </p>

            <p><b>‍Hands-On – Observe the differences of Struct and Union with different examples. </b></p>
    `
  },
  {
    head: "Pointers",
    p: `
            <p> ● Pointer types </p>
            <p> ● Void Pointer </p>
            <p> ● Null Pointer </p>
            <p> ● Wild Pointer </p>
            <p> ● Dangling Pointer </p>
            <p> ● Array of Pointers </p>
            <p> ● Pointer to Pointer</p>
      <p><b>‍Hands-On -practice various pointer types.</b></p>
    `
  },
  {
    head: "Dynamic memory allocation",
    p: `
              <p> ● malloc() </p>
              <p> ● calloc() </p>
              <p> ● realloc() </p>
              <p> ● free() </p>
      <p><b>‍Hands-On – usage of above functions.</b></p>
    `
  },
  {
    head: "Files",
    p: `
              <p> ● Concept of a file </p>
              <p> ● Streams </p>
              <p> ● Text File and Binary Files </p>
              <p> ● Opening and Closing Files </p>
              <p> ● File Input / Output Functions </p>
              <p> ● Formatted Input-Output Functions </p>
              <p> ● Character Input-Output Functions </p>

         <p><b> Hands-On -Working with different file modes and file related functions.</b></p>
         <p><b> Hands-on : Project Implementation from scratch.  </b></p>
    `
  },
  {
    head: "FilesName: Project – Banking Management System uses following functionalities",
    p: `
            <p> ● menu() – This function shows a menu or welcome screen that allows you to execute the various banking tasks listed below.</p>
            <p> ● new acc() – Creates a new customer account using this function. It requests the customer’s name, date of birth, citizenship number, address, and phone number, among other personal and financial information.</p>
            <p> ● view list() – Displays a list of items. This feature allows you to access the customer’s banking information, including the account number, name, address, and phone number supplied when the account was created.</p>
            <p> ● edit() – This method has been used to update the address and phone number associated with a specific customer account.</p>
            <p> ●  transact() – This method allows you to deposit and withdraw funds from a specific client account.</p>
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
