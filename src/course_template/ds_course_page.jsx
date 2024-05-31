import React from "react";
import Course_template from "./Course_template";
import datas_photo from '/course_images/datas.webp';
// import datastructure_photo from './course_images/datastructure.webp';
import { Link } from "react-router-dom";



const headdata = {
    title: "Data Structures And Algorithms Course Syllabus (with PDF)",
    date: "March 4, 2024",
    img: datas_photo,
    intro: "At codegnan Institute, our team of experts have trained 30,500+ students in different IT fields including data structures and algorithms. \nAnd, some of the often-asked questions our students ask before joining the training program are: <br/><ul>" +
    [
        "What is the course curriculum of the data structures training? ",
        "What topics and subjects are covered in your full-stack Java syllabus? ",
        "How long will it take to complete the course?",
        " And so on…",
        "So, we decided to create this complete course curriculum with a downloadable PDF syllabus for anyone who wants to learn data structures and algorithms."

    ].map((item, index) => (
        "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
    )).join('') +
    "</ul>"
};


const coursedata = {
    title: "Download the Data Structures and Algorithms course curriculum PDF",
    p: "<Link  to='/#'> Data structures and algorithms syllabus PDF</Link> \nIf you’re looking for one-on-one classroom training, then enroll in our ",
    linkText: "Vijayawada Data Structures training program.",
    syllabusLink: "/data-structures-and-algorithms-in-vijayawada"
};
 <h2>Data Structures and Algorithms Course Syllabus and Curriculum</h2>
const courseSections = [
    {
        title: "Data Structures and Algorithms Course Syllabus and Curriculum",
        intro: "",
        content: [
           
        ]
    },
    {
        title: "C language",
        intro: "The C programming language gives you the foundational knowledge of programming. This section of the course will start by introducing you to the origin of C programming, its history and its significance. Additionally, you will learn about its major features, applications, general structure of a program, executing C program, and keywords of C.",
        content: [
            " Introduction to C" ,
            " History of C" ,
            " Features of C" ,
            " Application areas of C" ,
            " Execution flow of C program" ,
            " Other translators" ,
            " Structure of C program with example" 
        ]
    },
    {
        title: "Basic concepts ",
        intro: "There are a few elements in C programming that you must know before starting to write a program. This section of the course covers the basics of C programming, including tokens, data types (int, char, void), variables and constants, identifiers, input and output functions, escape sequences, and more.",
        content: [
            " Tokens ",
            " Identifiers ",
            " Constants ",
            " Variables ",
            " Data types ",
            " Input and output functions ",
            " Qualifiers ",
            " Modifiers ",
            " Escape sequences "
        ]
    },
    {
        title: "Operators and Expressions",
        intro: "Operators and expressions in C language are of different types, including arithmetic, logical, relational, increment & decrement, assignment operators and more. Each of these operators is used within an expression to instruct the system to perform an operation.  You will learn the different operators and expressions in C, operators precedence and associativity, and how to evaluate expressions in this part of the course. ",
        content: [
             " Arithmetic operators ",
             " Relational operators ",
             " Logical operators ",
             " Assignment operators ",
             " Increment & Decrement operators ",
             " Conditional/ternary operator ",
             " Bitwise operator ",
             " Sizeof operator ",
             " Comma operator ",
             " Operators’ Precedence and Associativity ",
             " Expressions ",
             " Evaluation of expressions "
        ]
    },
    {
        title: "Control structures",
        intro: "While running a C program, you may need to execute a few sentences multiple times until a particular condition isn’t met. To control this execution, you can use control structures of C, which you will learn about in this part of the module. It covers three essential structures and statements, including Goto, Break and Continue, used to control the execution of instructions.",
        content: [
             " While " ,
             " For" ,
             " Do.. While" ,
             " Goto Statement" ,
             " Break and Continue Statement" 
        ]
    },
    {
        title: "Control/Decision-Making Statements",
        intro: "You can use statements within a program that allow the machine to decide whether to print a statement or move on to the next part of the program. This requires you to understand multiple decision-making statements used in C. You learn about them in this section of the course curriculum.",
        content: [
             " Simple if ",
             " if..else ",
             " Nested if ",
             " if..else ladder ",
             " Switch..Case Statement "
        ]
    },
    {
        title: "Math.h Library ",
        intro: "Whenever you need to do a mathematical operation within the program, you need to include math.h library functions. This instructs the machine to perform a particular mathematical function. \nFor example, if you use the sqrt() function, the machine will perform a square root operation on a particular value. You will learn about math.h library functions in this segment. ",
        content: [
             " abs(int x) ",
             " floor() ",
             " ceil() ",
             " sqrt() ",
             " pow() ",
             " exp() ",
             " log() and etc…. "
        ]
    },
    {
        title: "Arrays",
        intro: "When you have to store multiple variables of the same data type in C, you can use arrays. However, to implement them, you must understand the syntax and different types of arrays properly. In this section, you will learn about arrays and how they are implemented in C programming.",
        content: [
            " Introduction to arrays",
            " Types of arrays",
            " 1d array",
            " 2d array (matrix)"
        ]
    },
    {
        title: "string.h library",
        intro: "You might need to use different string functions within C programming; that’s when you need to understand the string.h library function. It comprises multiple string operations that you can directly call within your programming and perform its relevant operation. This part of the course will introduce you to some of the string functions within the library. ",
        content: [
             " strlen(str)",
             " strcpy(des_str, src_str)",
             " strcat(desc_str, src_str)",
             " strrev(str)",
             " strcmp(str1,str2)",
             " strlwr()",
             " strupr()"
        ]
    },
    {
        title: "Functions ",
        intro: "In C programming, you may need to repeat the same instructions multiple times to perform similar tasks. However, you can eliminate using these instructions repeatedly with functions (including built-in functions and user-defined functions). This part of the course curriculum will introduce you to different function types and how to call a function in a program.",
        content: [
            "Function types",
            "Built-in functions",
            "User-defined functions",
            "Recursive functions",
            "call by value and call by reference"
        ]
    },
    {
        title: "Recursions ",
        intro: "When a function calls itself directly or indirectly, we call it recursion. This part of the article will give you an in-depth knowledge of what recursion is and how to implement it in C programming.",
        content: [
            "Find the factorial of a given number by using a recursive function",
            "Find the sum of first n natural numbers by using recursion",
            "Find the gcd of two numbers by using recursion",
            "Find the root digit of the number by using recursion",
            "Program to calculate the power using recursion"
        ]
    },
    {
        title: "Storage classes ",
        intro: "You must understand where the variables are stored (within storage classes) and how long they can be accessed. This section will teach you the four main storage classes in C programming and their differences.",
        content: [
            " Auto",
            " Static",
            " Extern",
            " Register"
        ]
    },
    {
        title: "User defined datatypes ",
        intro: "Data types in C can be user-defined that are mostly taken from previous data types. You can customise your C programming according to your logic and implement user-defined functions for better coding. This section of the course describes the four user-defined datatypes.",
        content: [
            "Structure",
            "Union",
            "enum",
            "typedef"
        ]
    },
    {
        title: "Pointers ",
        intro: "Pointers in C programming are used to hold the address of a location that holds another variable. You will learn more about pointers and their basic syntax in this section, along with an in-depth understanding of how to implement pointers in your program. ",
        content: [
            "Pointer types",
            "Void pointer",
            "Null pointer",
            "Wild pointer",
            "Dangling pointer",
            "Array of pointers",
            "Pointer to pointer",
            "Pointer arithmetic"
        ]
    },
    {
        title: "Dynamic memory allocation ",
        intro: "You must specify how many elements are there within an array at compile time in C programming. Dynamic memory allocation allows your program to have extra memory space during compilation or release space if not used. This portion of the course curriculum will guide you through different dynamic memory allocation functions used for adding, deleting, and rearranging data during the runtime. ",
        content: [
            "malloc()",
            "calloc()",
            "realloc()",
            "free()"
        ]
    },
    {
        title: "Files ",
        intro: "After terminating your C program, the entire data gets deleted or lost. To preserve that data, you must store them in a file. This section will cover the concept of a file, its functions, and how to use them within your program",
        content: [
            "Concept of a file",
            "Streams",
            "Text File and Binary Files",
            "Opening and closing files",
            "File input/output functions",
            "Formatted input-output functions",
            "Character input-output functions",
            "Data Structures and Algorithms "
        ]
    },
    {
        title: " Stacks, Queues, Linked Lists, Trees, Heaps, Tries ",
        // intro: "After terminating your C program, the entire data gets deleted or lost. To preserve that data, you must store them in a file. This section will cover the concept of a file, its functions, and how to use them within your program",
        // content: [
        //     "Concept of a file",
        //     "Streams",
        //     "Text File and Binary Files",
        //     "Opening and closing files",
        //     "File input/output functions",
        //     "Formatted input-output functions",
        //     "Character input-output functions"
        // ]
    }
];

const course_brief = [

    {
        title: "1/ Stack",
        intro: () => (
            <>
                Stacks are a type of data structure that holds multiple items which are inserted or removed in a LIFO (Last-in, First-out) principle. You can implement a stack using an array and linked list, and each of these has different rules for inserting or removing elements from a stack. This part of the data structure module will give you an idea of stack implementation using an array and linked list.
                <div>
                    <ul>
                        {[
                            "Implementation of Stack using Arrays",
                            "Implementation of Stack using Linked List."
                        ].map((item, index) => (
                            <li key={index} className="list-items" style={{ marginLeft: '100px' }}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        )
    },
    {
        title: "2/ Queue",
        intro: () => (
            <>
                Queue data structure is used for storing and managing data in a particular order. You can insert or remove an element from a queue by following the FIFO (First-in, First-out) principle. These can be implemented using arrays, linked lists, and stacks. You will learn the process of queue implementation using different data structures in this module.
                <div>
                    <ul>
                        {[
                            "Implementation of Queue using Arrays",
                            "Implementation of Queue using Linked List",
                            "Implementation of Queue using Stack"
                        ].map((item, index) => (
                            <li key={index} className="list-items" style={{ marginLeft: '100px' }}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        )
    },
    {
        title: "3/ Circular Queue",
        intro: () => (
            <>
                This abstract data type allows you to add an element at the end of a queue and remove an element from the beginning of the queue. You will learn more about circular queues and their implementation, along with the understanding of double-ended queues. 
                <div>
                    <ul>
                        {[
                            "Implementation of Circular Queue",
                            "Double Ended Queue"
                        ].map((item, index) => (
                            <li key={index} className="list-items" style={{ marginLeft: '100px' }}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        )
    },
    {
        title: "4/ Priority Queues",
        intro: () => (
            <>
                Priority queues are special queues in the data structure where there is a priority factor associated with each element’s insertion and deletion from the queue. It can be implemented in multiple data structures, including arrays, linked lists, heaps and binary search. This part of the module will cover the knowledge of Heap data structure and the implementation of priority queues through Heap and Linked Lists. 
                <div>
                    <ul>
                        {[
                            "Min Heap",
                            "Max Heap",
                            "Basics of Linked Lists"
                        ].map((item, index) => (
                            <li key={index} className="list-items" style={{ marginLeft: '100px' }}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        )
    },
    {
        title: "5/ Types of Linked List",
        intro: () => (
            <>
               Linked list data structures comprise nodes where each of which contains data and a reference link to the next node in the sequence. There are multiple types of Linked list operations that you will learn in this section, along with how to clone a linked list.
                <div>
                    <ul>
                        {[
                                "Insertion Operation",
                                "Deletion Operation",
                                "Search Operation",
                                "Sorting Operation",
                                "Reverse Operation",
                                "Cloning a Linked List"
                        ].map((item, index) => (
                            <li key={index} className="list-items" style={{ marginLeft: '100px' }}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        )
    },
    {
        title: "6/ Basic of Trees",
        intro: () => (
            <>
                Trees are hierarchical data structures that consist of multiple nodes and are connected by links. It stems from a single root node and is connected to other subtrees. You can learn how to visit from one node to another (tree traversals), measure the height and depth of the tree, and about Complete Binary Tree (CBT) and Full Binary Tree (FBT).
                <div>
                    <ul>
                        {[
                            "Tree Traversals",
                            "Height and Depth of Tree",
                            "CBT and FBT"
                        ].map((item, index) => (
                            <li key={index} className="list-items" style={{ marginLeft: '100px' }}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        )
    },
    {
        title: "7/ Binary Search Trees (BST)",
        intro: () => (
            <>
                Binary Search Trees stores and organises data in a sorted way. These trees have two nodes that further break down into two and continue till you store all the data. This part of the module will teach you how to insert, delete, and search data in a BST and have hands-on practice with some problems on BST.
                <div>
                    <ul>
                        {[
                            "Insertion Operation",
                            "Deletion Operation",
                            "Search Operation",
                            "Problems on BST"
                        ].map((item, index) => (
                            <li key={index} className="list-items" style={{ marginLeft: '100px' }}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        )
    },
    {
        title: "8/ Trie Data Structure",
        intro: () => (
            <>
               Trie (derived from retrieval) is a multiway tree data structure that can store strings over an alphabet and is mainly used for prefix-based searching. Besides learning operations on Trie, you will get knowledge of dictionaries, prefix matching, and bit manipulation.
                <div>
                    <ul>
                        {[
                            "Dictionary",
                            "Prefix matching",
                            "Bit manipulation with Trie"
                        ].map((item, index) => (
                            <li key={index} className="list-items" style={{ marginLeft: '100px' }}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        )
    },
    {
        title: "17. Sorting, Searching, Hashing, Arrays, Strings  ",
        intro: () => (
            <>
                {/* Here are some of the <Link className="link-color" to='/'>Java projects</Link> you will get to complete at Codegnan’s Java training classroom. */}
                {/* <div>
                    <ul>
                        {[
                            "Hello Java world",
                            "Operators playground",
                            "OOPs Fundamentals",
                            "Inheritance showcase",
                            "Interface exploration",
                            "Java libraries showcase, etc."
                        ].map((item, index) => (
                            <li key={index} className="list-items" style={{ marginLeft: '100px' }}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div> */}
            </>
        )
    },
    {
        title: "1/ Sorting Techniques",
        intro: () => (
            <>
                At times, you need to rearrange the stored data within a data structure, and the process is known as Sorting. Sorting the elements in a list or array makes searching a particular item easier. There are different types of sorting that you will learn in this section. 
                <div>
                    <ul>
                        {[
                            "Bubble Sort",
                            "Insertion Sort",
                            "Selection Sort",
                            "Shell Sort",
                            "Merge Sort",
                            "Quick Sort",
                            "Radix Sort"
                        ].map((item, index) => (
                            <li key={index} className="list-items" style={{ marginLeft: '100px' }}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        )
    },
    {
        title: "2/ Searching Techniques",
        intro: () => (
            <>
                Searching refers to the process of finding a particular record from a data structure. A search process is successful when you can find the desired data. There are two main types of searching techniques, including linear or sequential search and binary search, that you will learn in this section of the course.
                <div>
                    <ul>
                        {[
                            "Linear Search",
                            "Binary Search"
                        ].map((item, index) => (
                            <li key={index} className="list-items" style={{ marginLeft: '100px' }}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        )
    },
    {
        title: "3/ Applications of Binary Search",
        intro: () => (
            <>
                Binary search is the most efficient and fastest searching technique in a data structure that requires a sorted list to find an element among a given set of items. To start applying the technique, you need to first understand a few terms and the way of finding frequency. This part of the module will help you know them, along with teaching you to solve multiple problems.
                <div>
                    <ul>
                        {[
                            " Lower Bound and Upper Bound",
                            " Finding Frequency",
                            " Optimization Problems"
                        ].map((item, index) => (
                            <li key={index} className="list-items" style={{ marginLeft: '100px' }}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        )
    },
    {
        title: "4/ Hashing",
        intro: () => (
            <>
                Hashing allows the efficient conversion of large or complex keys into smaller and fixed-size values, which are then used for indexing actual data stored in a hash table. This concept can be a little harder as you need to understand hashing techniques, collision resolution techniques, double hashing, two-pointer techniques, and more. You will learn all the necessary topics related to hashing from this section. 
                <div>
                    <ul>
                        {[
                           " Why Hashing",
                           " Hashing Techniques",
                           " Collision Resolution Techniques",
                           " Linear Probing",
                           " Quadratic Probing",
                           " Double Hashing",
                           " Rehashing",
                           " Two Pointer Techniques",
                           " Master’s Theorem"
                        ].map((item, index) => (
                            <li key={index} className="list-items" style={{ marginLeft: '100px' }}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        )
    },
    {
        title: "5/ string.h library",
        intro: () => (
            <>
                This part of the data structure and algorithm course curriculum covers the string.h library functions such that you can clearly understand their functions within a program.
                <div>
                    <ul>
                        {[
                            "strlen(str)",
                            "strcpy(des_str, src_str)",
                            "strcat(desc_str, src_str)",
                            "strrev(str)",
                            "strcmp(str1,str2)",
                            "strlwr()",
                            "strupr()"
                        ].map((item, index) => (
                            <li key={index} className="list-items" style={{ marginLeft: '100px' }}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        )
    },
    {
        title: "6/ Maps",
        intro: () => (
            <>
                Maps are data structures used to store multiple key-value pairs where each key is unique and allows easy access to a value. You will learn the use of Maps in the data structure, their syntax, and the concept of time complexities in relation to mapping in this part of the course.
                <div>
                    <ul>
                        {[
                           "Syntax of Maps",
                           "Usages of Maps",
                           "Time Complexities"
                        ].map((item, index) => (
                            <li key={index} className="list-items" style={{ marginLeft: '100px' }}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        )
    },
    {
        title: "7/ Sets",
        intro: () => (
            <>
                Sets are used in data structures to store unique elements of similar type in a sorted manner. Each value of a set is a key, and you can access each value using its value itself. However, this requires you to know the usage of sets and their basic syntax, which you can understand from this section.
                <div>
                    <ul>
                        {[
                           "Syntax of Sets",
                           "Usages of Sets",
                           "Time Complexities"
                        ].map((item, index) => (
                            <li key={index} className="list-items" style={{ marginLeft: '100px' }}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        )
    },
    {
        title: "18. Dynamic Programming and Graph Theory",
        intro: () => (
            <>
                {/* <div>
                    <ul>
                        {[
                            "Hello Java world",
                            "Operators playground",
                            "OOPs Fundamentals",
                            "Inheritance showcase",
                            "Interface exploration",
                            "Java libraries showcase, etc."
                        ].map((item, index) => (
                            <li key={index} className="list-items" style={{ marginLeft: '100px' }}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div> */}
            </>
        )
    },
    {
        title: "1/ Basics of Dynamic Programming",
        intro: () => (
            <>
                Dynamic programming is used in computer science to break down complex problems and then solve each sub-problem. This section will give you a basic understanding of dynamic programming, its memorisation and tabulation techniques and applications of the Fibonacci series.
                <div>
                    <ul>
                        {[
                            "Memorization",
                            "Tabulation",
                            "Applications of Fibonacci"
                        ].map((item, index) => (
                            <li key={index} className="list-items" style={{ marginLeft: '100px' }}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        )
    },
    {
        title: "2/ Subarrays and subsequences",
        intro: () => (
            <>
               Subarrays and subsequences both lie within an array and have an order, but they have different functions within a program. For example, if an array has four elements (1,2,3,4), then a subarray contains (1,2,3), and the subsequence is (1,2,4). You will understand these in-depth from this part of the course. 
                <div>
                    <ul>
                        {[
                            "Maximum Subarray sum",
                            "Non Adjacent Subsequence",
                            "Longest Increasing Subsequence"
                        ].map((item, index) => (
                            <li key={index} className="list-items" style={{ marginLeft: '100px' }}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        )
    },
    {
        title: "3/ Graph theory",
        intro: () => (
            <>
                Here are some of the <Link className="link-color" to='/'>Java projects</Link> you will get to complete at Codegnan’s Java training classroom.
                <div>
                    <ul>
                        {[
                            "Hello Java world",
                            "Operators playground",
                            "OOPs Fundamentals",
                            "Inheritance showcase",
                            "Interface exploration",
                            "Java libraries showcase, etc."
                        ].map((item, index) => (
                            <li key={index} className="list-items" style={{ marginLeft: '100px' }}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        )
    },
    {
        title: "4/ Stacks, Queues, Linked Lists, Trees, Heaps, Tries Stack",
        intro: () => (
            <>
                Learn stacks, queues, linked lists, trees, heaps, and tries stack from this section of the course with its knowledge of implementation in real life. 
                <div>
                    <ul>
                        {[
                            "Implementation of Stack using Arrays",
                            "Implementation of Stack using Linked List"
                        ].map((item, index) => (
                            <li key={index} className="list-items" style={{ marginLeft: '100px' }}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        )
    },
    {
        title: "5/ Graph Traversals",
        intro: () => (
            <>
                Graph traversals are used for searching nodes in a graph. This is usually done in two ways: DFS (Depth First Search) and BFS (Breadth First Search). You will learn them in depth from this part of the course. 
                <div>
                    <ul>
                        {[
                            "Depth First Search",
                            "Breadth First Search"
                        ].map((item, index) => (
                            <li key={index} className="list-items" style={{ marginLeft: '100px' }}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        )
    },
    {
        title: "6/ Important Graph Algorithms",
        intro: () => (
            <>
                There are multiple graph algorithms used to manipulate and analyse graphs in data structure and help in solving various problems. You can learn three of them, including Dijkstra’s algorithm, topological sorting, and Kruskal’s algorithm.
                <div>
                    <ul>
                        {[
                            "Dijkstra’s Algorithm",
                            "Topological Sorting",
                            "Kruskal Algorithm"
                        ].map((item, index) => (
                            <li key={index} className="list-items" style={{ marginLeft: '100px' }}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        )
    },
    {
    
        title: "Download the Data Structures and Algorithms course curriculum PDF",
        intro: () => (
            <>
                <img src="/syllabuspages/C-Data-Structures-and-Algorithm.jpg" alt="" width="100%" /><br/>
            </>
        )
    },

    {
        title: " Data structures and algorithms syllabus PDF",
        intro: () => (
            <>
                <br />
                <strong className="download_course_syllabus"><span className='show-right'> &#9758; </span> Download  <Link className="link-color" to='/'> Data structures and algorithms syllabus </Link>  (PDF) for free.</strong>
                <br />
                <p style={{ paddingTop: '10px' }}>If you’re looking for one-on-one classroom training, then enroll in our  <Link className="link-color" to='https://www.tiobe.com/tiobe-index/'>Vijayawada Data Structures training program. </Link></p>
            </>
        )
    },
    {
        title: "Hands-on projects included the Data Structures and Algorithms course syllabus",
        intro: " : <br/><ul>" +
            [
                "Execution of different C programs",
                "Observing the storage class behaviour",
                "Implementation of stacks, queues, linked lists, trees, heaps, tries ",
                "Implementation of sorting, searching, hashing, arrays, strings",
                "Hands-on practice of various pointer types",
                "Implementation of subarrays and subsequences, graph theory, graph traversals, and graph algorithms ",
                "Work on a project: Banking Management System"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },

    {
    
        title: "What is the salary of a Data Structures and Algorithm experts in India?",
        intro: () => (
            <>

            </>
        )
    },
 
    {
        title: "1. Learn a programming language",
        intro: () => (
            <>
                <p>The first step to learning data structure and algorithms is to learn at least one programming language. We start with learning C, as it is the base of all languages. However, you can choose any other languages of your choice, e.g., C++, Java, and Python.</p> 
                <p>You must start with learning the fundamentals of language, including its basic syntax, data types, variables, conditional statements, loops, functions and more. We will cover all the essential topics related to C programming in our course.  </p>
            </>
        )
    },
    {
        title: "2. Time and Space complexity of an algorithm ",
        intro: () => (
            <>
                <p>You must know the calculation of the time complexity of an algorithm that helps measure its performance. Another essential concept related to it is space complexity, which defines how much space or memory the algorithm is consuming. Having a clear understanding of time and space complexity ensures you can solve problems with the shortest and most efficient methods.  </p>
            </>
        )
    },
    {
        title: "3. Types of data structures",
        intro: () => (
            <>
                <p>There are multiple types of data structures used in programming languages. You need to learn them all, including arrays, linked lists, stacks, queues, trees, graphs, hash tables, and heaps. Each of these data structures is used to insert and store data in an organised manner so that it can be processed and retrieved quickly and easily. However, they follow different techniques for each operation, and you must know them before implementing them in real life. </p>
            </>
        )
    },
    {
        title: "4. Sorting and Searching techniques",
        intro: () => (
            <>
                <p>Data structure and algorithms are linked with each other. After you represent data using programming techniques, you need to use logical methods to manipulate them. To solve such problems, learning different sorting and searching techniques is essential. </p>

                <p>Sorting techniques (including bubble sort, insertion sort, quick sort, selection sort, and heap sort) are used to arrange elements in a data structure efficiently. This ensures your data are organised systematically. For example, you have a set of odd numbers 
                (1,3,7,5,9); after sorting, the data structure looks like (1,3,5,7,9).</p>

                <p>Searching techniques are mainly linear or sequential search and binary search that are used to locate an element in a data structure. Linear search is easy but a time-consuming process in comparison to binary search. However, you need to learn both of them: data structure and algorithm. </p>
            </>
        )
    },
    {
        title: "5. Other types of algorithms",
        intro: () => (
            <>
                <p>Besides Sorting and Searching algorithms, you need to master the techniques of several other algorithms. This includes divide and conquer algorithm, greedy methodology, backtracking algorithm, dynamic programming and more. Each of these algorithms uses different techniques and has varied time and space complexity.  </p>
            </>
        )
    },
    {
        title: "What is the Data Structures and Algorithms course duration?",
        intro: () => (
            <>
                <p>The Data Structure and Algorithms course duration is 3 months. During this period, you will learn core C programming along with Data Structures and Algorithms. We offer hands-on training after the completion of each module so that you can implement your theoretical knowledge into real-life projects. </p>
            </>
        )
    },
    {
        title: "What is the Data Structures and Algorithms course fee?",
        intro: () => (
            <>
                <p>The Data Structures and Algorithms course fee is ₹30,000. This can vary depending on multiple factors, including syllabus, trainers’ experience, quality of education, training facilities, and other features. </p>

                <p>We not only provide you with a certificate at the end of the data structure and algorithm course but also give you an opportunity to win a HackerRank certificate. This opens up your door to huge opportunities globally. </p>

                <p>Additionally, we don’t compromise with the quality of education and try to cover all the basic and core knowledge of C programming and data structure within the course. </p>
            </>
        )
    },
    {
        title: "What is the salary of a Data Structures and Algorithm experts in India?",
        intro: () => (
            <>
                <p>The salary of data structure and algorithm experts in India is ₹21.0 LPA on average. The minimum salary you can draw with the basic knowledge of these subjects is ₹15.8 LPA, and for professionals, it can range around ₹64.3 LPA. </p>
            </>
        )
    },
    {
        title: "Why enroll in codegnan’s Java training course?",
        intro: "There’s no one reason why anyone can enroll in Codegnan’s Java training course. Firstly, to enroll for our courses, you don’t need to be a professional in programming. But if you are one, doing a core Java course with us can improve your portfolio. What can you get at Codegnan? :<br/> <br/><ul>" +
            ["Course fees: ₹30,000",
                "Course duration: 3 months",
                "Classes availability: online and offline",
                "Training language: English ",
                "The course comprises C programming + Data Structures and Algorithms",
                "Hands-on training after completion of each module",
                "Earn industry-recognised certificate after course completion",
                "Get a chance to win HackerRank certification and badges",
                "Trained by IIT experts or professionals with years of experience",
                "Apply for the Job Accelerator Program after course completion to start your career early"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        intro: () => (
            <>
                <h4>Other course syllabus you might be interested in:</h4>
                <ul>
                    {[
                        { name: "Python course syllabus", link: "/python-course-syllabus"},
                        { name: "Core Java course syllabus", link: "/java_course_page"},
                        { name: "C language course syllabus", link: "/c-language-course-syllabus"},
                        { name: "Data science course syllabus", link: "/data-science-course-syllabus" },
                        { name: "React JS syllabus", link: "/react-js-course-syllabus" },
                        { name: "Full stack java course syllabus", link: "/data-structures-and-algorithms-course-syllabus"}
                    ].map((program, index) => (
                        <li className="list-items" key={index}>
                            <Link to={program.link} className="link-light-color">
                                {program.name}
                            </Link> 
                        </li>
                    ))}
                </ul>
                <br />
                <h5>Further resources</h5>
                <Link to=" " className="link-light-color">Differences between Python, PHP, and Java languages</Link><br />
                <Link to=" " className="link-light-color">Python career opportunities</Link>
            </>
        )

    }

];

const nav_interview = [
    {
        name: "The COMPLETE Full Stack Java Course Syllabus (2024 Session)",
        link: "/Java_fullstack_course_page"
    },
    {
        name:"Python Projects for Beginners 2024 (Shared by Experts)",
        link:"/python-projects"
    }
];

export default function JavaCoursePage() {
    return (
        <div>
            <Course_template head={headdata} course={coursedata} section={courseSections} coursep={course_brief} inter_links={nav_interview} />
        </div>
    );
}
