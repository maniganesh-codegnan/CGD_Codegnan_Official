import React from "react";
import Course_template from "./Course_template";
import c_langauge_photo from '/course_images/c-langauge.png';
import { Link } from "react-router-dom";



const headdata = {
    title: "C Language syllabus and subjects for 2024 (with free PDF)",
    date: "March 23, 2024",
    img: c_langauge_photo,
    intro: "Learning C language provides the easiest way to understand high-level languages like Java and Python. It gives coders the basic knowledge of how to start programming and learn about loops, conditional statements and more. \nExperts say C is the mother or base for other programming languages. Even if you aren’t using the C language professionally, knowing its working is valuable for dealing with low-level APIs, external libraries, and hardware for any other programming language. \n Anyone who is starting a career in programming or pursuing BCA, MCA, BE/BTech can learn C programming. Do you want to take up a C programming course? Then, you must know what it covers, the programming structure, operators, loops, and more.\n This guide will give you an overview of the C language syllabus and curriculum for beginners."
    
};

const coursedata = {
    title: " ",
    p: "",
    // linkText: "full syllabus details here.",
    // syllabusLink: "/full-syllabus-details"
    
};

const courseSections = [

];

const course_brief = [
    {
        title: "Complete C Language Syllabus and Curriculum for Beginners ",
        intro: () => (
            <>
            <img src="/syllabuspages/codegnan-c-syllabus.png" alt="image" width="100%" /><br/>
            <p><Link className="link-color" to='#'>Download the C language syllabus (PDF)  →</Link>
             for free. Below, I have listed the overview of the full syllabus.</p>
            </>
        )
    },
    {
        title: "1. C language",
        intro: "This section introduces you to the C programming language, its origin, history, and significance. Additionally, you can explore the features, applications, execution, general structure and keywords of C<br/> <br/><ul>" +
            [
                "Introduction to C",
                "History of C",
                "Features of C",
                "Application areas of C",
                "Execution flow of C program",
                "Other translators",
                "Structure of C program with example",
                "Keywords"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "2. Basic concepts",
        intro: "C language has certain elements that you must know before you start coding. This section covers the basics of C programming, including data types (Char, int, void), variables, constants, identifiers, input and output functions, and more.  <br/> <br/><ul>" +
            [
                "Tokens",
                "Identifiers",
                "Constants",
                "Variables",
                "Data types",
                "Input and output functions",
                "Qualifiers",
                "Modifiers",
                "Escape sequences"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "3. Operators and Expressions",
        intro: "Operators and expressions instruct the machine to perform an arithmetic or logical operation on data and variables. To understand the function of each symbol, you need to thoroughly go through this section that covers all the operators and expressions used in a C program.<br/> <br/><ul>" +
            [
                "Arithmetic operators",
                "Relational operators",
                "Logical operators",
                "Assignment operators",
                "Increment & Decrement operators",
                "Conditional/ternary operator",
                "Bitwise operator",
                "Size of operator",
                "Comma operator",
                "Operators’ Precedence and associativity",
                "Expressions",
                "Evaluation of expressions"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "4. Control structures",
        intro: "C program allows you to use structures that can print statements iteratively until it meet a specified instruction. This section will cover the three important loop structures and the essential statements (Goto, Break and Continue) that can control the execution of instructions automatically.<br/> <br/><ul>" +
            [
                "While ",
                "For",
                "Do.. While",
                "Goto Statement",
                "Break and Continue Statement"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "  5. Control/Decision-Making Statements",
        intro: "A program can use statements that allow the machine to decide when to execute a statement as per instruction. This requires you to understand different decision-making statements where if a condition is true, execution of an immediate instruction happens otherwise, another statement gets executed. You will be introduced to such statements in this section of the C programming course curriculum.<br/> <br/><ul>" +
            [
              
                "Simple if",
                "if..else",
                "Nested if",
                "if..else ladder",
                "Switch..Case statement"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " 6. Math.h Library",
        intro: " The math.h library holds different mathematical functions that, if you use them within a program, directly instruct the machine on what mathematical operation to perform. For example, sqrt() is used for square root operation, log() for natural logarithm of a number. This part of the course will help with advanced c language programming.  <br/> <br/><ul>" +
            [
                "abs(int x)",
                "floor()",
                "ceil()",
                "sqrt()",
                "pow()",
                "exp()",
                "log() and etc…."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "  7. Arrays",
        intro: "Arrays can store more than one variable of the same data type, but you must understand their syntax properly. This section will give an overview of types of arrays and how they are used in C programming. <br/> <br/><ul>" +
            [
                "Introduction to arrays",
                "Types of arrays",
                "1d array",
                "2d array (matrix)"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " 8. string.h library",
        intro: " As a C programmer, you need to know different string functions and the string.h library contains a set of functions that perform various string operations. This course will introduce you to some standard functions in the library and their use in a C program.<br/> <br/><ul>" +
            [
            
                "strlen(str)",
                "strcpy(des_str, src_str)",
                "strcat(desc_str, src_str)",
                "strrev(str)",
                "strcmp(str1,str2)",
                "strlwr()",
                "strupr()"
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " 9. Functions",
        intro: "  You don’t need to repeat the same instruction for the same tasks within a C program, instead use functions. This section will introduce you to different functions and their purposes. <br/> <br/><ul>" +
            [
                "Function types",
                "Built-in functions",
                "User-defined functions",
                "Recursive functions",
                "call by value and call by reference"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "10. Recursions",
        intro: "Recursion is the process where a function calls itself either directly or indirectly. This section of the course will not only clear your basic knowledge but also implement the concept of recursion into real C programs. <br/> <br/><ul>" +
            [
                "Find the factorial of a given number by using a recursive function",
                "Find the sum of first n natural numbers by using recursion",
                "Find the gcd of two numbers by using recursion",
                "Find the root digit of the number by using recursion",
                "Program to calculate the power using recursion"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "11. Storage classes",
        intro: "  You must understand where all your variables are getting stored and how long you can access them. This section will teach you the four main storage classes in C and define how they are different from each other. <br/> <br/><ul>" +
            [
                "Auto",
                "Static",
                "Extern",
                "Register"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "12. User defined datatypes",
        intro: "Users define some data types and are mostly derived from existing data types; these are user-defined data types. They enable customisation in your C code and implement functions like encapsulation. You will learn the four types of user-defined datatypes in this section of the curriculum. <br/> <br/><ul>" +
            [
                "Structure",
                "Union",
                "enum",
                "typedef"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "13. Pointers",
        intro: " Pointers are variables that hold the address of a location that contains another variable. This section gives a brief overview of pointers, their types, syntax and implementation in C programming. <br/> <br/><ul>" +
            [
                "Pointer types",
                "Void pointer",
                "Null pointer",
                "Wild pointer",
                "Dangling pointer",
                "Array of pointers",
                "Pointer to pointer",
                "Pointer arithmetic"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " 14. Dynamic memory allocation",
        intro: " According to the rules of C programming, you need to specify the number of elements in an array at compile time. Dynamic memory allocation allows programs to get more memory space while compiling or releasing it if not used. This section will guide you through the functions used for adding, deleting or rearranging data during the runtime.<br/> <br/><ul>" +
            [
                "malloc()",
                "calloc()",
                "realloc()",
                "free()"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "15. Files",
        intro: "  Once you terminate a c program, your entire data gets lost to preserve that data, you need to store it in a file. This section will give you an in-depth view of files used in C and its relative functions. <br/> <br/><ul>" +
            [
                "Concept of a file",
                "Streams",
                "Text File and Binary Files",
                "Opening and closing files",
                "File input/output functions",
                "Formatted input-output functions",
                "Character input-output functions"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "16. Others",
        intro: "Here are a few things that you must know, as without them, your C compiler will keep showing errors when you execute a program. <br/> <br/><ul>" +
            [
                "Command Line Arguments",
                "const",
                "preprocessor directive statements"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "C programming course curriculum at a glance",
        intro: () => (
            <>
                <p>C programming course curriculum comprises all core topics covering C’s syntax, data types, program structure, pointers, functions, operators, loops, libraries, arrays, and strings. If you are starting new with programming or entering into BCA, MCA, BE, and BTECH courses, C programming is a must-to-learn subject. It makes your programming base clear and prepares you for higher-level coding languages.</p>
               
            </>
        )
    },
    {
        title: "C language course subjects and topics to learn",
        intro: () => (
            <>
                {/* <p>C programming course curriculum comprises all core topics covering C’s syntax, data types, program structure, pointers, functions, operators, loops, libraries, arrays, and strings. If you are starting new with programming or entering into BCA, MCA, BE, and BTECH courses, C programming is a must-to-learn subject. It makes your programming base clear and prepares you for higher-level coding languages.</p> */}
                
            </>
        )
    },
    {
        title: "1. Basics of C Program",
        intro: "You must first understand the need for C programming and its history and evaluation. Secondly, you need to focus on the structure of a C program. There are multiple sections in a C program, including documentation, header files, definition, global variables declaration, main program, and user-defined function sections. All of these have different purposes and functions within a C program. You must understand them before starting to code.\n But understanding the structure is not sufficient, you need to understand a few more things. <br/> <br/><ul>" +
            [
                "Variables and their declaration syntax ",
                "Datatypes of C (Char, int, float, double, void) "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
            
    },
    {
        title: " ",
        intro: () => (
            <>
                 <iframe width="560" height="315" src="https://www.youtube.com/embed/RDNHewsIl_g?si=D2G2G7FiORE_53QK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="video"></iframe>
            </>
        )
    },
    {
        title: "2. Operators in C language",
        intro: "Operators used in C programs tell the machine to perform mathematical or logical manipulation of data and variables. There are multiple operators used in writing a C program, and each has its function. These are : <br/> <br/><ul>" +
            [
                "Arithmetic operators(+,-,*,/,%)",
                "Relational operators(<,<=,>,>=,==,!=)",
                "Logical operators(&&, !!, !)",
                "Bitwise operators",
                "Assignment operators (=)",
                "Ternary/Conditional operator ",
                "Increment/Decrement operators (++a, a++, –a, a–)",
                "Comma operator",
                "Sizeof operator"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
            
    },
    {
        title: " ",
        intro: () => (
            <>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/L1Ar1UsOpnI?si=Ht1pJWaXTg7LMqW4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="video"></iframe>
            </>
        )
    },
    {
        title: "3. Looping Statements in C",
        intro: "Looping statements in C makes coding easy and faster. When you put something inside a loop, the instructions keep executing until a specific condition is reached. Such statements control how many times a particular operation or sequence of operations needs to be performed in succession. These loops are classified as <br/> <br/><ul>" +
            [
                "entry-control loop (for, while)",
                "exit-control loop ( do-while)"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
            
    },
    {
        title: " ",
        intro: () => (
            <>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/QP2pok2lh-0?si=kXCoydfNEtXYeui8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="video"></iframe>
            </>
        )
    },
    {
        title: "4. Functions",
        intro: "A function in C programming is a self-contained block of statements that instructs the machine to perform coherent tasks of some kind. They can be built-in functions or user-defined functions. You need to understand these functions, especially when you’re doing C projects where you need to perform the same calculation or similar tasks multiple times. Instead of writing the same line of code multiple times, using functions can be helpful. Here, you need to cover a few things, like <br/> <br/><ul>" +
            [
                "Function types",
                "Components of functions",
                "Call by value and call by reference"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
            
    },
    {
        title: " ",
        intro: () => (
            <>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/D_L1ujxEbcE?si=EG2s-1xoe0MtFYId" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="video"></iframe>
            </>
        )
    },
    
    {
        title: " 5. Recursion",
        intro: () => (
            <>
                <p> In C programming, recursion is the technique of how a function can call itself. This can be classified as direct and indirect recursions, where either a function calls itself directly or uses another function to call itself. You need to learn these techniques separately so that you do not implement the wrong base condition for a recursive call and confine it into an infinite loop. Here, you also need the concept of “STACK” data structure.</p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/QP2pok2lh-0?si=kXCoydfNEtXYeui8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="video"></iframe>
            </>
        )
    },
    {
        title: "6. Storage classes in C",
        intro: "You must understand where your variables are getting stored and how long you can access them. In C, there are mainly four storage classes: automatic, static, external, and register. Each of them has different characteristics that you need to understand before implementing them. Here are a few things you need to know about them:<br/> <br/><ul>" +
            [
                "Different storage areas, ",
                "Keywords used to represent them, ",
                "Default value of variables created under each storage class",
                "Scope of the storage classes",
                "Their lifetime",
                "Syntax",
                "Implementation in C program",
                "https://www.youtube.com/@codegnan-destination"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
            
    },
  
    {
        title: "7. Array",
        intro: "It is a collection of variables of similar data types and can be called using a common name. All C programmers need to learn arrays because no other data type can contain more than one variable, but an array can. For example, you want to store the first 10 odd numbers in one place. This isn’t possible with a char, int, or float, but an array can store as many variables as you want. Arrays can be either single-dimensional or multi-dimensional. You need to learn a few things about them, like<br/> <br/><ul>" +
            [
                "Array declaration,",
                "Array initialisation",
                "Accessing elements of an array",
                "Entering data into an array",
                "Reading/accessing data from an array",
                "Use of array in C programming "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
            
    },
    {
        title: " ",
        intro: () => (
            <>
               <iframe width="560" height="315" src="https://www.youtube.com/embed/KY2TFIpZUdI?si=lz4H4ERLd_44uzyP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="video"></iframe>
            </>
        )
    },
   
    {
        title: "8. Strings ",
        intro: () => (
            <>
            <p>Strings are a one-dimensional array used to store a group of characters that ends with a null (‘\O’). C doesn’t have a String type to create or store string variables like several other programming languages. You must understand the string declaration syntax and the different ways of initialising a string. These string functions are bundled in the string.h library, and therefore, you must know how to define them in your program. </p><br/>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/3hLDzrbf3-k?si=fllzWb_71-L28Ilf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="video"></iframe>
            </>
        )
    },
    {
        title: "9. Pointers in C programming  ",
        intro: () => (
            <>
                <p>Pointers are the variables in your C program that store a memory address. This address is the location of another variable stored in memory. There are multiple types of pointers, like null, void, wild, and dangling pointers. Each of them has a different purpose and function that you must know.</p><br/>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/RDNHewsIl_g?si=Pvfl87cFoPpq27tn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="video"></iframe>
            </>
        )
    },

    {
        title: "C language course syllabus, subjects, and modules at a glance",
        intro: () => (
            <>
             
                <br />
               
                <table className="salary-table">
                    <thead>
                        <tr>
                            <th> Module No	</th>
                            <th> Topic	</th>
                            <th> Subtopics</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr>  
                            <td>1	</td>
                            <td>Introduction to C	</td>
                            <td>Origin and history, – Features and applications, – Execution flow</td>
                        </tr>
                        <tr>  
                            <td>2	</td>
                            <td>Basic Concepts</td>
                            <td>Data types, – Variables, Constants, and Identifiers, – Input/Output functions</td>
                        </tr>
                        <tr>  
                            <td>3	</td>
                            <td>Operators and Expressions</td>
                            <td>Arithmetic, Relational, Logical, Bitwise operators, – Expressions</td>
                        </tr>
                        <tr>  
                            <td>4	</td>
                            <td> Control Structures	</td>
                            <td> While, For, Do…While loops, – Goto, Break, Continue statements</td>
                        </tr>
                        <tr>  
                            <td>5	</td>
                            <td> Decision-Making Statements	</td>
                            <td> Types, Syntax, and Implementation in C programs</td>
                        </tr>
                        <tr>  
                            <td>6	</td>
                            <td> Math.h Library	</td>
                            <td> Common mathematical functions in math.h library</td>
                        </tr>
                        <tr>  
                            <td>7	</td>
                            <td> Arrays	</td>
                            <td> Introduction of arrays, – Types (1D, 2D), – Array manipulation in C</td>
                        </tr>
                        <tr>  
                            <td>8	</td>
                            <td> string.h Library	</td>
                            <td> Standard string functions and their usage in C</td>
                        </tr>
                        <tr>  
                            <td>9	</td>
                            <td> Functions	</td>
                            <td> Function types, – Built-in and User-defined functions, – Recursive functions</td>
                        </tr>
                        <tr>  
                            <td>10</td>
                            <td> Recursions	</td>
                            <td> Implementing recursion in C programs</td>
                        </tr>
                        <tr>  
                            <td>11</td>
                            <td> Storage Classes	</td>
                            <td> – Auto, Static, Extern, Register, – Scope and lifetime of variables</td>
                        </tr>
                        <tr>  
                            <td>12</td>
                            <td> User Defined Datatypes	</td>
                            <td> Structure, Union, Enum, Typedef</td>
                        </tr>
                        <tr>  
                            <td>13</td>
                            <td> Pointers	</td>
                            <td> Types, Syntax, and Implementation in C programs</td>
                        </tr>
                        <tr>  
                            <td>14</td>
                            <td> Dynamic Memory Allocation	</td>
                            <td> malloc(), calloc(), realloc(), free()</td>
                        </tr>
                        <tr>  
                            <td>15</td>
                            <td>Files	</td>
                            <td>Concepts of files, – Text and Binary files, – File I/O functions</td>
                        </tr>
                        <tr>  
                            <td>16</td>
                            <td> Other Essentials	</td>
                            <td> Command Line Arguments, – const, – Preprocessor directives</td>
                        </tr>
                        
                    </tbody>
                   
                </table><br/>
            </>
        )
    },
    
   
    {
        title: "Become a C programming language expert in 1 month with codegnan",
        intro: "Codegnan offers the complete C programming syllabus for engineering or anyone having C language in their curriculum. What makes our training program different? <br/> <br/><ul>" +
            [
                " <b>Course fees</b>: 3500",
                " <b>Course duration</b>: 1 month",
                " Theoretical knowledge + hands-on practical skills",
                " Taught by experts in the industry",
                " Receive industry-accredited certificates on successful completion",
                " Both online and offline classes are available ",
                " Trusted by 20,000+ students globally ",
                " <b>Ratings</b>: 4.8/5 based on 2200+ students",
                " Codegnan learners got placed in 1250+ companies",
               

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p>Here’s what our students are saying:</p>
                 <img src="/syllabuspages/2-1.png" alt="" width="30%"/>
                 <img src="/syllabuspages/3-1.png" alt="" width="30%"/>
                 <img src="/syllabuspages/1-1.png" alt="" width="30%"/>

                <p>Ready to start your career in coding then enroll in codegnan’s 1-month . <Link to="/C-programming-in-vijayawada" onClick={() => window.scrollTo({ top: 0 })} className="link-color"> C language training in Vijayawada </Link> </p>
                <p><Link to="/contact_us" onClick={() => window.scrollTo({ top: 0 })} className="link-color"> Contact our team </Link>  for the online training facility.</p><br/><br/>
            </>
        )
    },
    {
        title: "C programming language FAQs ",
        intro: () => (
            <>
                <h2>What is the C language course fee?</h2>
                <p>At Codegnan, you can complete a C language course in 1 month, and it will cost you ₹5000 for both online and offline classes. But, you can avail of their discounted rate of ₹3500 for a limited period offer. </p>
            </>
        )
    },
    {
        title: "Is the C language very difficult?",
        intro: () => (
            <>
                <p>According to experts in the domain, the C language isn’t easy for beginners. It mainly doesn’t do anything on your behalf, which means you need in-depth knowledge of how computers work. The use of pointers and memory allocation can be the most difficult task in C programming. </p>
            </>
        )
    },
    {
        title: "What is the best way to learn the C language?",
        intro: () => (
            <>
                <p>The best way to learn C language is to gain core knowledge from experts and practically implement your knowledge under their expertise. This is exactly what Codegnan offers: you get theoretical and hands-on practice with C programming under the supervision of industry experts.  </p>
            </>
        )
    }

];

const nav_interview = [
    {
        name: "15 React JS Projects for Beginners 2024",
        link: "/"
    },
    {
        name:"17 C Language Projects For Beginners with Source Code",
        link:"/"
    }
];

export default function JavaCoursePage() {
    return (
        <div>
            <Course_template head={headdata} course={coursedata} section={courseSections} coursep={course_brief} inter_links={nav_interview} />
        </div>
    );
}
