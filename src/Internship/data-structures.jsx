import React from "react";
import './internship.css';
import { Link } from "react-router-dom";
import Inter_dropdown from "./Intern_dropdown/Inter_dropdown.jsx";
import FormComponent from '../Form/Form.jsx';
import InternsyllabusComp from './Java_syllabus/Intern_syllabus.jsx';
import { useState } from "react";
import style from '/training/heading-separator.png';

const  data2 = [
  {
    head: "Introduction",
    p: (
      <>
      <ul>
         <li> Introduction to C </li>
         <li> History of C </li>
         <li> Features of C </li>
         <li> Application Areas of C </li>
         <li> Execution flow of c program </li>
         <li> Other translators </li>
         <li> Structure of C Program with Example </li>
         <li> Keywords </li>

      <p><b>‍Hands-On – Installations of compilers, IDES.</b></p>
    </ul>
    </>
    )
  },
  {
    head: "Basic Concepts",
    p: (
    <>
    <ul>
          <li> Tokens </li>
          <li> identifiers </li>
          <li> constants </li>
          <li> variables </li>
          <li> Data Types</li>
          <li> input and output functions </li>
          <li> Qualifiers </li>
          <li> Modifiers </li>
          <li> Escape sequences</li>
     <p><b>Hands-On -Execution of Basic Programs with different data types , i/o functions and other concepts. </b></p>
    </ul>
    </>
    )
  },
  {
    head: "Operators and Expressions",
    p: (
      <>
      <ul>
            <li> Arithmetic operators </li>
            <li> Relational operators </li>
            <li> Logical operators </li>
            <li> Assignment operators</li>
            <li> Increment & decrement operators </li>
            <li> Conditional/ternary operator </li>
            <li> Bitwise operator </li>
            <li> Size of operator </li>
            <li> Comma operator </li>
            <li> Operators Precedence and Associativity </li>
            <li> Expressions </li>
            <li> Evaluation of Expressions </li>
    </ul>
    <p><b>‍Hands-On Execution of all types operators and explain how expressions are simplified . </b></p>
    </>
    )
  },
  {
    head: "Control /Decision Making Statements",
    p: (
    <>
      <ul>
            <li> Simple if </li>
            <li> if..else </li>
            <li> Nested if </li>
            <li> if..else ladder </li>
            <li> Switch..Case statement </li>
      </ul>
      <p><b>‍Hands-On -Observation of above control flow statements with following suitable Examples.</b></p>
    </>
    )
  },
  {
    head: "Control Structures",
    p: (
      <>
      <ul>
          <li> While </li>
          <li> For </li>
          <li> Do..While </li>
          <li> Goto Statement</li>
          <li> Break and Continue Statement </li>
    </ul>
    <p><b>‍Hands-On – usage of Control Structures with different scenarios.</b></p>
    </>
    )
  },
  {
    head: "Math.h Library",
    p: (
    <>
      <ul>
          <li> abs(int x) </li>
          <li> floor() </li>
          <li> ceil() </li>
          <li> sqrt() </li>
          <li> pow() </li>
          <li> exp() </li>
          <li> log() and etc…… </li>
      </ul>
      <p><b>‍Hands-On – practice various built in functions of Math Library. </b></p>
    </>
    )
  },
  {
    head: "Arrays",
    p: (
      <>
      <ul>
          <li> Introduction to arrays </li>
          <li> Types of arrays </li>
          <li> 1d array </li>
          <li> 2d array (matrix)</li>
          <li> find max element from array </li>
          <li> find 2 max element from array </li>
          <li> sort array elements by general approach </li>
          <li> bubble sort </li>
          <li> selection sort </li>
          <li> insertion sort </li>
          <li> searching an element </li>
          <li> linear search </li>
          <li> binary search </li>
          <li> trace & difference of sum of 2 opposite diagonals. </li>
          <li> Decimal to Binary conversion </li>
          <li> Repeated element and count </li>
          <li> Rotate the array elements k times(left & right)</li>
      </ul>
      <p><b>Hands-On – Observation of sorting,searching and rotating array.</b></p>
    </>
    )
  },
  {
    head: "Strings",
    p: (
    <>
    <ul>
          <li> String declaration and initialization </li>
          <p> ‍string.h library </p>
          <li>  strlen(str) </li>
          <li> strcpy(des_str,src_st r) </li>
          <li> strcat(desc_str,src_str) </li>
          <li> strrev(str) </li>
          <li> strcmp(str1,str2) </li>
          <li> strlwr() </li>
          <li> strupr()</li>
    </ul>
    </>
    )
  },
  {
    head: "Functions",
    p: (
      <>
      <ul>
          <li> function types </li>
          <li> built in functions </li>
          <li> user defined functions </li>
          <li> Recursive functions </li>
          <li> call by value and call by reference</li>
      </ul>
    </>
    )
  },  
  {
    head: "Storage Classes",
    p: (
      <>
      <ul>
            <li> auto </li>
            <li> static</li>
            <li> extern </li>
            <li> register </li>
            <li> Others </li>
      </ul>
      <p>Command Line Arguments const preprocessor directive statements </p>
      <p><b>‍Hands-On -Observes the storage classes Behaviour.</b></p>
    </>
    )
  },
  {
    head: "User Defined Data Types",
    p: (
    <>
      <ul>
          <li> Structure </li>
          <li> Union </li>
          <li> enum </li>
          <li> typedef </li>
      </ul>
      <p><b>‍Hands-On – Observe the differences of Struct and Union with different examples. </b></p>
    </>
    )
  },
  {
    head: "Pointers",
    p: (
      <>
      <ul>
          <li> Pointer types </li>
          <li> Void Pointer </li>
          <li> Null Pointer </li>
          <li> Wild Pointer </li>
          <li> Dangling Pointer </li>
          <li> Array of Pointers </li>
          <li> Pointer to Pointer</li>
      </ul>
      <p><b>‍Hands-On -practice various pointer types.</b></p>
    </>
    )
  },
  {
    head: "Dynamic memory allocation",
    p: (
    <>
      <ul>
          <li> malloc() </li>
          <li> calloc() </li>
          <li> realloc() </li>
          <li> free() </li>
      </ul>
      <p><b>‍Hands-On – usage of above functions.</b></p>
    </>
    )
  },
  {
    head: "Files",
    p: (
      <>
      <ul>
          <li> Concept of a file </li>
          <li> Streams </li>
          <li> Text File and Binary Files </li>
          <li> Opening and Closing Files </li>
          <li> File Input / Output Functions </li>
          <li> Formatted Input-Output Functions </li>
          <li> Character Input-Output Functions </li>
      </ul>
      <p><b> ‍Hands-On -Working with different file modes and file related functions.</b></p>
      <p><b> Hands-on : Project Implementation from scratch.  </b></p>
    </>
    )
  },
  {
    head: "Stack",
    p: (
    <>
      <ul>
          <li> Implementation of Stack using Arrays.</li>
          <li> Implementation of Stack using Linked List</li>
      </ul>
    </>
    )
  },
  {
    head: "Queue",
    p: (
      <>
        <ul>
            <li> Implementation of Queue using Arrays</li>
            <li> Implementation of Queue using Linked List</li>
            <li> Implementation of Queue using Stack</li>
        </ul>
    </>
    )
  },
  {
    head: "Circular Queue",
    p: (
    <>
      <ul>
          <li> Implementation of Circular Queue</li>
          <li> Double Ended Queue</li>
      </ul>
    </>
    )
  },
  {
    head: "Priority Queues",
    p: (
      <>
      <ul>
          <li> Min Heap</li>
          <li> Max Heap</li>
    </ul>
    </>
    )
  },
  {
    head: "Basics Of Linked Lists",
    p: (
    <>
    <ul>
        <li> Types of Linked List</li>
        <li> Insertion Operation.</li>
        <li> Deletion Operation</li>
        <li> Search Operation</li>
        <li> Sorting Operation</li>
        <li> Reverse Operation</li>
        <li> Cloning a Linked List</li>
    </ul>
    </>
    )
  },
  {
    head: "Basic of Trees",
    p: (
      <>
      <ul>
        <li> Tree Traversals</li>
        <li> Height and Depth of Tree</li>
        <li> CBT and FBT</li>
    </ul>
    </>
    )
  },
  {
    head: "Binary Search Trees (BST)",
    p: (
    <>
    <ul>
        <li>  Insertion Operation</li>
        <li>  Deletion Operation</li>
        <li>  Search Operation</li>
        <li>  Problems on BST</li>
    </ul>
    <p><b>Hands-On -Observes the storage classes Behaviour.</b></p>
    </>
    )
  },
  {
    head: "Trie Data Structure",
    p: (
      <>
      <ul>
          <li>  Dictionary</li>
          <li>  Prefix matching</li>
          <li>  Bit manipulation with Trie</li>
      </ul>
      <p><b>Hands-on Implementation for every concept</b></p>
    </>
    )
  },
  {
    head: "Sorting Techniques",
    p: (
    <>
      <ul>
        <li> Bubble Sort</li>
        <li> Insertion Sort</li>
        <li> Selection Sort</li>
        <li> Shell Sort</li>
        <li> Merge Sort</li>
        <li> Quick Sort</li>
        <li> Radix Sort</li>
      </ul>
    </>
    )
  },
  {
    head: "Searching Techniques",
    p: (
      <>
        <ul>
          <li> Linear Search</li>
          <li> Binanry Search</li>
        </ul>
    </>
    )
  },
  {
    head: "Applications of Binary Search",
    p: (
    <>
        <ul>
            <li> Lower Bound and Upper Bound</li>
            <li> Finding Frequency</li>
            <li> Optimization Problems</li>
        </ul>
    </>
    )
  },
  {
    head: "Hashing",
    p: (
      <>
        <ul>
          <li>  Why Hashing</li>
          <li>  Hashing Techniques</li>
          <li>  Collision Resolution Techniques</li>
          <li>  Linear Probing</li>
          <li>  Quadratic Probing</li>
          <li>  Double Hashing</li>
          <li>  Rehashing</li>
          <li>  Two Pointer Techniques</li>
          <li>  Master’s Theorem</li>
        </ul>
    </>
    )
  },
  {
    head: "string.h library",
    p: (
    <>
      <ul>
        <li>  strlen(str)</li>
        <li>  strcpy(des_str,src_st r)</li>
        <li>  strcat (desc_str,src_str)</li>
        <li>  strrev(str)</li>
        <li>  strcmp(str1,str2)</li>
        <li>  ✓strlwr()</li>
        <li>  strupr()</li>
      </ul>
    </>
    )
  },
  {
    head: "Maps",
    p: (
      <>
        <ul>
          <li>  Syntax of Maps</li>
          <li>  Usages of Maps</li>
          <li>  Time Complexities</li>
        </ul>
    </>
    )
  },
  {
    head: "Sets",
    p: (
    <>
      <ul>
          <li>  Syntax of Sets</li>
          <li>  Usages of Sets</li>
          <li>  Time Complexities</li>
      </ul>
      <p><b>Hands-on Implementation for every concept</b></p>
    </>
    )
  },
  {
    head: "Basics of Dynamic Programming",
    p: (
      <>
      <ul>
          <li>  Memoization</li>
          <li>  Tabulation</li>
          <li>  Applications of Fibonacci</li>
      </ul>
      <p><b>Hands-On -practice various pointer types.</b></p>
    </>
    )
  },
  {
    head: "Subarrays and subsequences",
    p: (
    <>
      <ul>
          <li>  Maximum Sub array sum</li>
          <li>  Non Adjacent Subsequence</li>
          <li>  Longest Increasing Subsequence</li>
      </ul>
    </>
    )
  },
  {
    head: "Graph Theory",
    p: (
      <>
      <ul>
          <li>  Definition of Graph</li>
          <li>  Graph Representation</li>
      </ul>
    </>
    )
  }

];

const syllabusdata = [
    {
        head: " ",
        p: (
            <>
                <h2 style={{ color :"black" }}>Data Structures and Algorithms course <span style={{ color :"red" }} >Curriculum in Vijayawada </span></h2><br />
                <Inter_dropdown data={data2} />
               
            </>
        )
    }

]

const syllabus2data = [
    {
        head: "",
        p: ( 
            <>
            <h2 style={{ color :"black" }}>Learning outcomes of our <span style={{ color :"red" }} >Data Science and Algorithms course in Vijayawada </span></h2><br />

                <p>Wondering what you will learn from Codegnan’s C & data structures and algorithms course? Here’s a glimpse of it.</p>
                <ul>
                    {[
                        "Fundamentals of C language.",
                        "Basic concepts like Tokens, Constants, Variables, Data types, Escape sequences and so on.",
                        "All types of operators and how expressions are simplified.",
                        "Usage of control structures with different scenarios.",
                        "Control/decision-making statements.",
                        "Performing the set operations in a program.",
                        "Hands-on practice of different Math Library and string.h Library.",
                        "Storage classes and their behaviour.",
                        "User-defined data types."
                    ].map((item, index) => (
                        <li key={index} style={{ marginLeft: "10px" }}>{item}</li>
                    ))}
                </ul>

            
            </>
        )
    }

]

export default function Intern_Page() {
    const [year, setYear] = useState('2nd');
    // alert('asadfgds')
    return (
        <div className="inter_container">

            {/* <div className="inter_inner_div">
                <span className="home-intern">
                    <Link className="Linkcolor" to="/">Home</Link>&nbsp; &gt; &nbsp;<strong>Internship</strong>
                </span>
                <div className="intern-home-1">
                    <h4><span className="Linkcolor">#1</span> Setting A Benchmark</h4>
                    <h4>In Providing <span className="Linkcolor">"TECH GNAN"</span></h4>
                    <p>
                        Dive into the world of technology and gain valuable insights through hands-on experience. Expand your knowledge and skills with CODE GNAN's internship program.<br /><br />Time to Invest in Your Skills:-
                    </p>

                    <ul>
                        <li>2 months program Frontend</li>
                        <li>6 months program Backend</li>
                    </ul>
                    <br />
                    <div>
                        <span className="internship_rating">( 183 Rating)</span>
                        <i className="fas fa-star star_t_t"></i>
                        <i className="fas fa-star star_t_t"></i>
                        <i className="fas fa-star star_t_t"></i>
                        <i className="fas fa-star star_t_t"></i>
                        <i className="fas fa-star star_t_t"></i>
                        <br /><br /><br />


                    </div>
                    <div>
                        <Link to="your_destination_url" className="explore-button">
                            Explore Program <i className="fas fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>
                <center>
                    <div className="services_provided1">
                        {data.map((service, index) => (
                            <div key={index} className='each_service_intern'>
                                <img src={service.img} alt="service icon" />
                                <br />
                                <div className="services_text">
                                    <h4>{service.head}</h4>
                                    <p>{service.p}</p>
                                </div>

                            </div>
                        ))}

                    </div>
                </center>
            </div> */}


            <div className="intern-home3">
                <div className="intern-home-form">
                   
                    <div className="all_year_syllabus">
                        <div className="syllabus-button-container">
                        <button onClick={() => setYear('2nd')}>
                        Course Curriculum
                        </button>
                        <button onClick={() => setYear('3rd')}>
                        Skills covered
                        </button>
                        </div>
                        <hr />
                        <div className="inside_syllabus_container">
                        {year === '2nd' && <InternsyllabusComp data={syllabusdata} />}
                        {year === '3rd' && <InternsyllabusComp data={syllabus2data} />}
                        </div>
                        
                    </div>
                    <div className="intern_from">
                        <h2 className="Linkcolor">Become a Data Structures and Algorithms developer </h2><br />
                        <p>Talk to our expert Data structures and algorithms  mentors and learn how our training programs in Vijayawada can help you become a Data structures and algorithms  developer and get a high-paying job.</p><br /><br />
                        <FormComponent />
                    </div>
                </div>
            </div><br /><br />
            
            {/* <div className="intern-home2">
                <center>
                    <h1>Questions Generally Asked About  <span className="Linkcolor">Internship</span></h1>
                    <img src={style} alt="" />
                </center>
                <div className="intern-home-drop">
                    <Inter_dropdown data={data2} />
                </div>
            </div> */}

        </div>
    );
}
