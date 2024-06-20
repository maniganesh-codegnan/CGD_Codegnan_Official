import React from "react";
import Course_template from "./Course_template";
import Javainterviewquestions_photo from '/course_images/JAVA-Interview-Questions.webp';
import { Link } from "react-router-dom";

const headdata = {
    title: "120 Important Java Interview Questions and Answers (2024)",
    date: "January 31, 2024",
    img: Javainterviewquestions_photo ,
    intro: "There are endless questions asked in a Java interview depending on the job position and candidates with different skills, experience, and background knowledge. \nHowever, some common JAVA questions often get asked and answered repeatedly in Java interviews everywhere. \nThis is why we have asked our Java experts and mentors to share their top interview questions from beginner to experienced level. Also, we have shared the possible answers for each question so you can prepare well for your next interview in 2024. \nNo matter what Java position you’re applying for, these 120 Java interview questions and answers might help you showcase your expertise during the interview. \nBefore we dive into the interview questions, check out our one-on-one classroom and online Java courses:"
};

const coursedata = {
    title: "",
    p: " ",
    linkText: " ",
    syllabusLink: " "
};

const courseSections = [
   
    {
        title: "What is ReactJS ?",
        intro: "React.js is maintained by Facebook which is an open-source JavaScript library for creating desktop, web, and mobile application UIs. \nIn contrast to most of the websites, those who worked with React don’t have server-side rendering, they are rendered in the browser. \nThis implies users don’t need to wait for the server response to render another page. It’s a quicker experience, which is particularly significant for mobile applications. React’s tool library permits developers to fabricate components that are dropped onto a website page. \nThese components, which resemble custom HTML components, are what the clients see on the site. Components can be reused across applications and are a lot simpler to refresh and update than looking through lines of code. Organizations that use React incorporate Facebook (and Instagram), Uber, and Netflix, among others.<h3>Organizations that use ReactJS:</h3>",
        content: [
                "Facebook",
                "Instagram",
                "Netflix",
                "WhatsApp",
                "Twitter",
                "Uber",
                "Codecademy",
                "Dropbox",
                "Yahoo!",
                "MailAsana"
        ]
    },
    {
        title: " Write a Java program to draw a right triangle star pattern.‍",
        intro: `
        <pre> 
            
            *
            * *
            * * *
            * * * *
            * * * * *
            public class Codegnan
            {
            public static void RTriangle(int n)
            {
            int i, j;
            for(i=0; i<n; i++) //outer loop for number of rows(n)
            { for(j=2*(n-i); j>=0; j–) // inner loop for spaces
            {
            System.out.print(” “); // printing space
            }
            for(j=0; j<=i; j++) //  inner loop for columns
            {
            System.out.print(“* “); // print star
            }
            System.out.println(); // ending line after each row
            }
            }
            public static void main(String args[])
            {
            int n = 5;
            RTriangle(n);
            }
            }
            </pre>`,
            content: []
                },

            ];

const course_brief = [
    {
        intro: () => (
            <>
                <h4>Looking for more details about codegnan’s Core Java courses?</h4>
                <ul>
                    {[
                        { name: "‍Java full stack classroom training (with placement support): Vijayawada, Hyderabad, Bangalore", link: "/" },
                        { name: "Java training in Hyderabad location", link: "/" }
                    ].map((program, index) => (
                        <li className="list-items" key={index}>
                            <Link to={program.link} className="link-light-color">
                                {program.name}
                            </Link> ({program.duration})
                        </li>
                    ))}
                </ul>
                <br />
                <h5>Further resources</h5>
                <Link to=" " className="link-light-color">Differences between Python, PHP, and Java languages</Link><br />
                <Link to=" " className="link-light-color">Python career opportunities</Link>
            </>
        )
    },
    {
        title: "Java interview questions for beginners",
        intro:() =>(
            <>
            <h3>1. What is Java programming?</h3>
            <p>Java is the most popular and widely used programming language that is defined as a collection of objects. With the use of Java, we can develop software, games, desktop applications, web applications, etc.</p>

            <p>Learn about <Link to="/java-projects" onClick={() => window.scrollTo({ top: 0 })} className="link-color"> common Java projects for final-year students.</Link> </p>
            </>
        )

    },
    {
        title: "2. Why is Java called an Object-Oriented language?",
        intro: () => (
            <>
                <p>Java is a purely object-oriented programming language because it is impossible to write any Java program without a class or object. Java is not a pure programming language focused on objects. Java supports non-primitive types of data, such as int, float, boolean, double, long, etc.</p>
            </>
        )
    },
    {
        title: "3. State the difference between JDK and JRE?",
        intro: () => (
            <>
                <p>JDK is the acronym for Java Development Kit. It includes the tools and libraries that are used in the creation of Java software. Also, it contains the compilers and debuggers that are needed for Java program compilation.</p>

                <p>JRE, on the other hand, is an acronym for Java Runtime Environment. It comes with the installation package of JDK as JRE provides libraries and JVM that are used to execute a Java program.</p>
            </>
        )
    },
    {
        title: "4. Explain Java Virtual Machine.",
        intro: () => (
            <>
                <p>Java Virtual Machine or JVM in short is a conceptual (or abstract) machine that is used to execute bytecode. Both hardware and software platforms have different JVM and for this reason, JVM is platform-independent. JVM is responsible for verifying and executing the bytecode on a platform.</p>
            </>
        )
    },
    {
        title: "5. Explain the JIT compiler.",
        intro: () => (
            <>
                <p>JIT or Just in Time compiler in Java is used for performance enhancement. By default, it is enabled. It is a compilation achieved at execution time. The use of the JIT compiler was popularized by Java by using it in the JVM.</p>
            </>
        )
    },
    {
        title: "6. It is said that Java is a ‘write once and run anywhere’ language. Why is it called so?",
        intro: () => (
            <>
                <p>Windows helps you to write Java code and compile it on the Windows platform. As it is in the Unix environment, the class and jar files that you get from the Windows platform will run.</p>

                <p>So it’s a completely autonomous language of the platform. The Java byte code is behind all this portability. Java compiler-generated bytecode can be interpreted by any JVM. So writing programs in Java and expecting them to run on any platform is much simpler. The Javac Java compiler compiles Java code, and the Java JVM compiler runs that code.</p>
            </>
        )
    },
    {
        title: "7. Explain the working of class loaders in Java programming.",
        intro: () => (
            <>
                <p>In Java, a class loader is a class that is used to load files in JVM. Class loaders load files from their physical file locations e.g. Filesystem, Network location, etc.</p>

                <p>There are three main types of class loaders in Java.</p>

                <p>1. Bootstrap class loader: This is the first class loader. It loads classes from the rt.jar file.</p>
                <p>2. Extension class loader: It loads class files from JRE/lib/ext location.</p>
                <p>3. Application class loader: This class loader depends on CLASSPATH to find the location of class files. If you specify your jars in CLASSPATH, then this class loader will load them.</p>
            </>
        )
    },
    {
        title: "8. Is it possible to write the main method as public void static instead of the public static void?",
        intro: () => (
            <>
                <p>No, you cannot write it like this. Any method has to first specify the modifiers and then the return value. The order of modifiers can change. We can write static public void main() instead of public static void main().</p>
            </>
        )
    },
    {
        title: "9. In Java if no value is assigned to the local variables then what will be the default value of local variables?",
        intro: () => (
            <>
                <p>Java doesn’t initialize local variables with any default value. Therefore, these variables will be null by default.</p>
            </>
        )
    },
    {
        title: "10. State the main principles of OOPs in Java or OOPs in general.",
        intro: () => (
            <>
                <p>The following are the main principles of OOPs:</p>
                <p> Abstraction</p>
                <p> Encapsulation</p>
                <p> Inheritance</p>
                <p> Polymorphism</p>
            </>
        )
    },
    {
        title: "11. State the difference between Object-Oriented Programming and Object-Based Programming language.",
        intro: () => (
            <>
                <p>Languages in object-oriented programming such as Java and C++ adopt OOPS ideas such as Encapsulation, Abstraction, Polymorphism, Inheritance, etc. Object-based programming languages adopt certain OOPS functions, but support for polymorphism and inheritance is not provided, for eg. JavaScript, VBScript, etc. Object-based programming languages allow objects to be supported and you can construct objects from the builder.</p>

                <p>Encapsulation is also assisted by their languages. They are also regarded as languages that are Prototype-oriented.</p>
            </>
        )
    },
    {
        title: "12. What is the use of constructors in Java?",
        intro: () => (
            <>
                <p>Java is an object-oriented language, in which we create and use objects. A constructor is a piece of code similar to a method. It is used to create an object and set the initial state of the object. A constructor is a special function that has the same name as the class name.</p>
                <p>Without a constructor, there is no other way to create an object. By default, Java provides a default constructor for every object. If we overload a constructor then we have to implement a default constructor.</p>
            </>
        )
    },
    {
        title: "13. What value is returned by the constructor in Java?",
        intro: () => (
            <>
                <p>When a constructor is called in Java, it returns the object created by it. This is how new objects are created in Java.</p>
            </>
        )
    },
    {
        title: "14. What is the use of the ‘this’ keyword in the Java language?",
        intro: () => (
            <>
                <p>In Java,’ this’ keyword corresponds to the object’s current case. It is helpful for discriminating between local variables and instance variables. It can be used for calling constructors or you can use it to refer to an instance. In the case of the overriding method, this is used to drop the existing class method.</p>
            </>
        )
    },
    {
        title: "15. What is Inheritance Java?",
        intro: () => (
            <>
                <p>In Object-Oriented Programming, inheritance is an important concept. Any objects share similar attributes and behavior. We may place the typical actions and features in a base class, which is also known as the superclass, by using Inheritance. And then this base class inherits all properties with similar actions. It is also expressed by the relationship between IS and A. Inheritance enables duplication of code, override of methods, and polymorphism.</p>
            </>
        )
    },
    {
        title: "16. What is the reason that Java doesn’t support multiple inheritances?",
        intro: () => (
            <>
                <p>Multiple Inheritance suggests that two or more parent classes will inherit actions. The concern with Multiple Inheritance is that with the same form, all parent classes can have separate implementations. </p>

                <p>So they’ve got various ways to do the same thing. What implementation does the children’s class pick now? </p>

                <p>In Multiple Inheritance, this ends in complexity. This is the key explanation for Java not promoting the introduction of Multiple Inheritance. </p>

                <p>Let’s say you’ve got a TV class and another AtomBomb class. They all have the switchOn) (function, but only the TV has the switchOff) (function. If both classes are inherited from your class, then you have a dilemma.</p>

                <p>You should change all parents to switchOn), but switchOff can only switchOff TV. But in Java, you can implement several interfaces.</p>
            </>
        )
    },
    {
        title: "17. Java doesn’t support pointers. What is the reason behind this?",
        intro: () => (
            <>
                <p>In Java, instead of pointers, there are references. In memory, these references point to objects. But these memory sites do not provide easy entry. The JVM is free to transfer objects into the memory of the VM. The disappearance of pointers allows Java to efficiently handle memory and garbage collection. It also gives developers the ease of not caring about memory allocation and deallocation.</p>
            </>
        )
    },
    {
        title: "18. If there are no pointers in Java, then why do we getNullPointerException?",
        intro: () => (
            <>
                <p>In Java, the pointer equivalent is an Object reference. When we use a. (dot) it points to object reference. So JVM uses pointers but programmers only see object references. In case an object reference points to a null object, and we try to access a method or member variable on it, then we get a NullPointerException.</p>
            </>
        )
    },
    {
        title: "19. Why is it not a good practice to create static variables in Java?",
        intro: () => (
            <>
                <p> For all the objects in a class, static variables are common. There is no need to validate the value of a static variable whenever a new object is produced. Any code that uses a static variable can be in any state. It can be inside a new object or at the level of a class.</p>

                <p> In a Java class, the scope of the static variable is also open-ended. If we want better control on scope, then variables should be generated at the object development stage. Even specifying static variables is not a reasonable idea since they go against the ideals of Object-Oriented Programming.</p>
            </>
        )
    },
    {
        title: "20. What is the main method marked static in Java?",
        intro: () => (
            <>
                <p> In Java, the main method is labeled as static, so the JVM will call it to start the application. If the main method is not static, which builder would the Java process call?</p>

                <p> As such, labeling the key static method in Java is recognized as a convention. But if we delete the static, then the uncertainty will be there. The Java process could not understand which method to call a class to start the program. In the Java process, this convention helps to define the starting code for a class program that is transmitted as an argument to the Java process.</p>
            </>
        )
    },
    {
        title: "21. In which case do we use a static block?",
        intro: () => (
            <>
                <p>There is a class that has static member variables at times. Any complex initialization involves these variables. The static block at this time helps to initialize complex static member variable initialization as a function. The static block is executed long before the key block is executed. We may also often substitute a static block with a static class method.</p>
            </>
        )
    },    {
        title: "22. State the difference between a static method and an instance method in Java?",
        intro: () => (
            <>
                <p>Sometimes, for a class that is not dependent on member variables of an object, there is a need to specify actions. In a static system, such conduct is caught. If there is an action that depends on an object’s member variables, then we do not label it static, it stays as an instance process. We don’t need to construct an object in order to call the static process. We only mark it by the name of the class. But for an example procedure to be called, we need to first, build/get an object. A static procedure does not access instance member variables. But both instance variables and static variables can be named by an example process.</p>
            </>
        )
    },

    {
        title: "23. How will you implement method overloading Java?",
        intro: () => (
            <>
                <p>In Java, a class can have multiple methods with the same name but different arguments. It is called Method Overloading. To implement method overloading we have to create two methods with the same name in a class and do one/more of the following:</p>

                <p>1. Different number of parameters</p>
                <p>2. The different data type of parameters</p>
                <p>3. A different sequence of the data type of parameters</p>
            </>
        )
    },
    {
        title: "24. What are the types of argument variations allowed in method overloading in Java?",
        intro: () => (
            <>
                <p>Method Overloading allows two methods with the same name to differ in:</p>

                <p>1. Number of parameters</p>
                <p>2. The data type of parameters</p>
                <p>3. The sequence of the data type of parameters</p>
            </>
        )
    },
    {
        title: "25. Can we override a static method in Java?",
        intro: () => (
            <>
                <p>No, Java does not permit a static process to be overridden. If you build the same-named static method in the subset, it is a different method, not an overridden method.</p>
            </>
        )
    },
    {
        title: "26. State the difference between method overloading and method overriding in Java history?",
        intro: "Differences between method overloading and overriding are:<ul>" +
            [
                "Method overloading is static polymorphism. Method overriding is runtime polymorphism.",
                "Method overloading occurs within the same class. Method overriding happens in two classes with hierarchy relationships.",
                "Parameters must be different in method overloading. Parameters must be the same in method overriding.",
                "Method overloading is a compile-time concept. Method overriding is a runtime concept."
   
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "27. What is Runtime Polymorphism in Java?",
        intro: () => (
            <>
                <p>The polymorphism that occurs during runtime is Runtime Polymorphism or Dynamic Polymorphism. It is not understood which method will be called at runtime in the case of the overriding method. JVM specifies the exact method that should be titled, depending on the type of entity. So, it is not known at compile time which method would be called at runtime.</p>
            </>
        )
    },
 
    {
        title: " 28. State the difference between static and dynamic binding in Java?",
        intro: ` Static binding references are resolved at compile time. Dynamic binding references are resolved at Run time.<br/><br/> <b>For Example:</b>
            <pre> 
                Person p = new Person();
                p.walk(); // Java compiler resolves this binding at compile time.
                public void walk(Object o){
                ((Person) o).walk(); // this is dynamic binding.
                }
            </pre>`,
        content: []
    },
   
    {
        title: "29. How is abstraction different from encapsulation in Java?",
        intro: () => (
            <>
                <p>In class-level programming, abstraction exists. It helps in covering the specifics of the implementation. Encapsulation is often known as “Information Hiding”. An example of encapsulation is the private labelling of the member variables and having a getter and setter for these member variables.</p>
            </>
        )
    },
    {
        title: "30. Explain abstract class in Java?",
        intro: () => (
            <>
                <p>In Java, an abstract class has one or more abstract techniques. In the abstract class, an abstract method is only declared, but it is not implemented. In Java, an abstract class must be generalized and a child class must follow its abstract methods. Java also does not make a new instance of the Abstract type.</p>
            </>
        )
    },
    {
        title: "31. What is an interface in Java?",
        intro: () => (
            <>
                <p>An Interface in Java is an abstract type blueprint of a class. It requires the strategies a class must adopt. Like a protocol, it has signatures and frequent statements of the process.</p>
            </>
        )
    },
    {
        title: "32. Have you heard about marker interfaces? What is it?",
        intro: () => (
            <>
                <p>In Java, there are various interfaces that do not have any data members or methods. Such interfaces are called marker interfaces. Some examples are- serial, cloneable, remote, etc.</p>
            </>
        )
    },
    {
        title: "33. If we don’t want to use a marker interface, then what will we use?",
        intro: () => (
            <>
                <p>Annotations are the alternative to the marker interface.</p>
            </>
        )
    },
    {
        title: "34. State the difference between abstract class and interface in Java?",
        intro: "Several differences between abstract class and interface are as follows: <ul>" +
            [
                "An abstract class may have body methods (non-abstract techniques) applied. Only abstract approaches provide an interface. The interface will provide static/default methods in an applied form from Java 8 onwards.",
                "An abstract class can have instance member variables. An interface cannot have instance variables. It can only have constants.",
                "An abstract class will have a constructor. The interface can’t provide a constructor. Another class needs to execute it.",
                "A class can extend only one abstract class. A class can implement more than one interface."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 50px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "35. Is there any way to change the value of a final variable in Java?",
        intro: () => (
            <>
               <p>In Java, we cannot change the value of a final variable. Once the value is set or assigned, it cannot be changed.</p>
            </>
        )
    },
    {
        title: "36. How can we create a final method in Java?",
        intro: () => (
            <>
                <p>To create a final method in Java, you need to add a modifier final to that method. A final method cannot be overridden by a child class.</p>
            </>
        )
    },
    {
        title: "37. Why is the Integer class final in Java?",
        intro: () => (
            <>
                <p>Integer class is a wrapper for int. If an integer class is not marked final then any other class can extend it and modify the behavior of integer operations. To avoid this scenario, the integer class is marked as final.</p>
            </>
        )
    },
    {
        title: "38. What is the motive or purpose of using packages in Java?",
        intro: () => (
            <>
                <p>A package is used to encapsulate a group of classes, interfaces, and sub-packages. Often, it is a hierarchical structure for storing information. It is easier to organize the related classes and sub-packages in this manner.</p>
                <p>A Package also provides access protection for classes and interfaces. A package also helps in removing naming collisions.</p>
            </>
        )
    },
    {
        title: "Java Interview Questions for Intermediates",
        intro: () => (
            <>
                <h3>39. Explain chain exceptions in Java.</h3>
                <p>If the first exception allows another exception to be executed in a program, the Chained Exception is considered such a condition. Chained exceptions help to find the root cause of the exception that happens when the application is executed.</p>
                <p>Following are the constructors that support chained exceptions in Throwable classes:</p>
                <p>1. Throwable initiate (Throwable)</p>
                <p>2. Throwable (Throwable)</p>
                <p>3. Throwable (String, Throwable)</p>
                <p>4. Throwable getCause()</p>
            </>
        )
    },
    {
        title: "40. What is the difference between JAR and WAR files in Java?",
        intro: "Following are the differences between the JAR file and the WAR file are the following: <br/><ul>" +
            [
                "JAR file stands for Java Archive file which allows us to combine many files into a single file. Whereas, WAR files stand for Web Application Archive files that store XML, java classes, and JavaServer pages, etc., for Web Application purposes.",
                "JAR files hold Java classes in a library. Whereas, WAR files store the files in the ‘lib’ directory of the web application.",
                "All the enterprise Java Bean classes and EJB deployment descriptors present in the EJB module are packed and stored in a JAR file with a .jar extension. Whereas, the WAR file contains the web modules such as Servlet classes, GIFs, HTML files, JSP files, etc., with .war extension"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 50px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "41. What is the working of HashMap in Java?",
        intro: () => (
            <>
                <p>Through storing key-value pairs, a HashMap in Java works. HashMap uses a hash function to bring items into a collection and extract them from the collection using the hashCode and equals methods. The HashMap determines the hash value of the key on the invocation of the put) (method and then stores the pair within the array in the specific index. </p>
                <p>Where there is a key, the value of the key is changed with the new value. Some significant features of a HashMap are its ability, its load factor, and the resizing of the threshold.</p>
            </>
        )
    },
    {
        title: "42. State the difference between HashMap and HashTable.",
        intro: " <ul>" +
            [
                "Hashtable is synchronized while HashMap is not synchronized. For the same reason, HashMap works better in non-threaded applications, because unsynchronized objects typically perform better than synchronized ones.",
                "Hashtable does not allow null keys or null values whereas HashMap allows one null key and any number of null values.",
                "One of the subclasses of HashMap is LinkedHashMap, so if we want a predictable iteration order in the event, we can easily swap out the HashMap for a LinkedHashMap. But, this would not be as easy using Hashtable."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 50px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "43. Explain the role of System.gc() and Runtime.gc() methods in Java.",
        intro: () => (
            <>
                <p>The system class includes a static function named GC() to request the Garbage Collector to be run by JVM. Using Runtime .getRuntime() .gc() method, the Runtime class allows the application to interact with the JVM in which the application is running. Both the System.gc() and Runtime.GC() (methods help give the JVM a hint such that the JVM can start a set of garbage.</p>
                <p>It is up to the Java Virtual Machine (JVM), however, to start the garbage collector immediately or later in time.</p>
                
            </>
        )
    },
    {
        title: "44. What happens when we create an object in Java?",
        intro: "Following things take place during the creation of an object in Java: <ul>" +
            [
                "Memory allocation: Memory allocation is carried out to store all the class instance variables and the object’s implementation-specific data.",
                "Initialization: Initialization takes place to initialize the default values of the objects.",
                "Constructor: For their parent classes, constructors invoke the constructors. This method continues until the java.langObject function Object() { [native code] } is called. For all objects in Java, the java.lang. Object class is the foundation class.",
                "Execution: Before the body of the function Object() { [native code] } is executed, all instance variables should be initialised and all initialization blocks must be executed. After that, the function Object() { [native code] }’s body is executed."
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 50px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "45. In Java, we can use String in two variations- as a literal and a new operator. What is the difference?",
        intro: () => (
            <>
                <p>When we create an object of String in Java using a new() operator, it is created in a heap memory area and not into the String pool. But when we create a String using literal, then it gets stored in the String pool itself. The String pool exists in the PermGen area of heap memory.</p>
                <p>For example,</p>
                <p>String str = new String(“java”);</p>
                <p>The above statement does not put the String object str in the String pool. We need to call the String. intern() method to put the String objects into the String pool explicitly. It is only possible when we create a String object as String literal.</p>

                <p>For example,</p>
                <p>String str1 = “java”;</p>

                <p>Java automatically puts the String object into the String pool.</p>
                
            </>
        )
    },
    {
        title: "46. What is the java.lang package?",
        intro: () => (
            <>
                <p>The java.lang package in Java includes the classes that are important for Java programming language design. The Object Class is the most critical class in this set. It also includes classes of wrappers including- Integer, Boolean, Character, etc. It offers a math class with mathematical activities.</p>
                
            </>
        )
    },
    {
        title: "47. Which is the most important class in Java?",
        intro: () => (
            <>
                <p>With several answers, it is an open-ended question. In my opinion, the most important Java programming language class is the object class. In Java, it is the origin of all the classes. It offers certain strategies that are really necessary and basic.</p>
                
            </>
        )
    },
    {
        title: " 48. Is it necessary to import the java.lang package every time?",
        intro: `No. JVM is loaded internally by default.
                When you compile and run a Java program, the Java compiler automatically imports the java.lang package by default, even if there is no import statement for java.lang.
                Therefore, classes like String, System, and Thread are available by default without needing to be imported.

                <b>For example:</b>
            <pre> 
                public class Main {
                public static void main(String[] args) {
                String text = "Hello World"; // String is available
                System.out.println(text); // System is available
                }
                }
            </pre>`,
        content: []
    },
    {
        title: "49. In Java, can we import the same package or class twice?",
        intro: () => (
            <>
                <p>If we import the same package into a class several times, the compiler only includes it once. So neither JVM nor Compiler gives several times error/warnings on adding a package. If you have two classes of the same name, you can get a name collision when you incorrectly import the class. Internally, the JVM only loads the class once.</p>
                
            </>
        )
    },
    {
        title: "50. Explain the locale.",
        intro: () => (
            <>
                <p>In Java, a Locale object represents a specific geographical, political, or cultural region. It is used for locale-sensitive operations in Java. It helps by following the local conventions of a country, a native of the region. These conventions can be for formatting the dates, money, numbers, etc.</p>
                
            </>
        )
    },
    {
        title: "",
        intro: () => (
            <>
                <p>👉 If you want to expand your Java knowledge, <Link to="/java-course-syllabus" onClick={() => window.scrollTo({ top: 0 })} className="link-color"> download our Core Java syllabus </Link> and prepare your learning roadmap accordingly.</p>
                
            </>
        )
    },
    {
        title: " Pattern Programs in Java",
        intro: `<h3>51. Write a Java program to draw a pyramid.</h3>
            <pre> 
                *
                * *
                * * *
                * * * *
                * * * * *
                public class Codegnan
                {
                public static void PyramidPattern(int n)
                {
                for (int i=0; i<n; i++) //outer loop for number of rows(n)
                { for (int j=n-i; j>1; j–) //inner loop for spaces
                {
                System.out.print(” “); //print space
                }
                for (int j=0; j<=i; j++ ) //inner loop for number of columns
                {
                System.out.print(“* “); //print star
                }
                System.out.println(); //ending line after each row
                }
                }
                public static void main(String args[]) //driver function
                {
                int n = 5;
                PyramidPattern(n);
                }
                }
            </pre>`,
        content: []
    },
    {
        title: "52. Write a Java program to draw a right triangle star pattern.‍",
        intro: `<pre> 
                    *
                    * *
                    * * *
                    * * * *
                    * * * * *
                    public class Codegnan
                    {
                    public static void RTriangle(int n)
                    {
                    int i, j;
                    for(i=0; i<n; i++) //outer loop for number of rows(n)
                    { for(j=2*(n-i); j>=0; j–) // inner loop for spaces
                    {
                    System.out.print(” “); // printing space
                    }
                    for(j=0; j<=i; j++) //  inner loop for columns
                    {
                    System.out.print(“* “); // print star
                    }
                    System.out.println(); // ending line after each row
                    }
                    }
                    public static void main(String args[])
                    {
                    int n = 5;
                    RTriangle(n);
                    }
                    }
                </pre>`,
        content: []
    },
    {
        title: "53. Write a Java program to draw a left triangle star pattern.",
        intro: `
            <pre> 
                *
                * *
                * * *
                * * * *
                * * * * *
                public class Codegnan
                {
                public static void printStars(int n)
                {
                int i, j;
                for(i=0; i>n; i++) //outer loop for number of rows(n)
                { for(j=2*(n-i); j>=0; j–) // inner loop for spaces
                {
                System.out.print(” “); // printing space
                }
                for(j=0; j<=i; j++) //  inner loop for columns
                {
                System.out.print(“* “); // print star
                }
                System.out.println(); // ending line after each row
                }
                }
                public static void main(String args[])
                {
                int n = 5;
                printStars(n);
                }
                }
            </pre>`,
        content: []
    },
    {
        title: "54. Write a Java program to draw a diamond pattern with 5 rows given.",
        intro: `
            <pre> 
                *
                ***
                *****
                ****************
                *******
                *****
                ***
                *
                import java.util.Scanner;
                public class Codegnan
                {
                public static void main(String args[])
                {
                int n, i, j, space = 1;
                System.out.print(“Enter the number of rows: “);
                Scanner s = new Scanner(System.in);
                n = s.nextInt();
                space = n – 1;
                for (j = 1; j<= n; j++)
                {
                for (i = 1; i<= space; i++)
                {
                System.out.print(” “);
                }
                space–;
                for (i = 1; i <= 2 * j – 1; i++)
                {
                System.out.print(“*”);
                }
                System.out.println(“”);
                }
                space = 1;
                for (j = 1; j<= n – 1; j++)
                {
                for (i = 1; i<= space; i++)
                {
                System.out.print(” “);
                }
                space++;
                for (i = 1; i<= 2 * (n – j) – 1; i++)
                {
                System.out.print(“*”);
                }
                System.out.println(“”);
                }
                }
                }
            </pre>`,
        content: []
    },
    {
        title: "55. Write a Java program to draw a downward triangle star pattern with 5 rows given.",
        intro: `
            <pre> 
                * * * * *
                * * * *
                * * *
                * *
                *
                import java.util.Scanner;
                public class Codegnan
                {
                public static void main(String[] args)
                {
                Scanner sc = new Scanner(System.in);
                System.out.println(“Enter the number of rows: “); //takes input from user
                int rows = sc.nextInt();
                for (int i= rows-1; i>=0 ; i–)
                {
                for (int j=0; j<=i; j++)
                {
                System.out.print(“*” + ” “);
                }
                System.out.println();
                }
                sc.close();
                }
                }
            </pre>`,
        content: []
    },
    {
        title: " 56. Write a Java program to draw a reversed pyramid star pattern with 5 rows given.",
        intro: `
            <pre> 
                * * * * *
                * * * *
                * * *
                * *
                *
                import java.util.Scanner;
                public class Codegnan
                {
                public static void main(String[] args)
                {
                Scanner sc = new Scanner(System.in);
                System.out.println(“Enter the number of rows: “);
                int rows = sc.nextInt();
                for (int i= 0; i<= rows-1 ; i++)
                {
                for (int j=0; j<=i; j++)
                {
                System.out.print(” “);
                }
                for (int k=0; k<=rows-1-i; k++)
                {
                System.out.print(“*” + ” “);
                }
                System.out.println();
                }
                sc.close();
                }
                }
            </pre>`,
        content: []
    },
    {
        title: "57. Write a Java program to draw a right-down mirror star pattern with 5 rows given.",
        intro: `
            <pre> 
                *****
                ****
                ***
                **
                *
                import java.util.Scanner;
                public class Codegnan
                {
                public static void main(String[] args)
                {
                Scanner sc = new Scanner(System.in); // takes input
                System.out.println(“Enter number of rows: “);
                int rows = sc.nextInt();
                for (int i= rows; i>= 1; i–)
                {
                for (int j=rows; j>i;j–)
                {
                System.out.print(” “);
                }
                for (int k=1;k<=i;k++)
                {
                System.out.print(“*”);
                }
                System.out.println(“”);
                }
                sc.close();
                }
                }
            </pre>`,
        content: []
    },
    {
        title: "58. Write a Java program to draw a right Pascal’s triangle star pattern with 5 rows given.",
        intro: `
            <pre> 
                *
                * *
                * * *
                * * * *
                * * * * *
                * * * *
                * * *
                * *
                *
                import java.util.Scanner;
                public class Codegnan
                {
                public static void main(String[] args)
                {
                Scanner sc = new Scanner(System.in);
                System.out.println(“Enter the number of rows: “);
                int rows = sc.nextInt();
                for (int i= 0; i<= rows-1 ; i++)
                {
                for (int j=0; j<=i; j++)
                {
                System.out.print(“*”+ ” “);
                }
                System.out.println(“”);
                }
                for (int i=rows-1; i>=0; i–)
                {
                for(int j=0; j <= i-1;j++)
                {
                System.out.print(“*”+ ” “);
                }
                System.out.println(“”);
                }
                sc.close();
                }
                }
            </pre>`,
        content: []
    },
    {
        title: "59. Write a Java program to draw a left Pascal’s triangle star pattern with 5 rows given.",
        intro: `
            <pre> 
                *
                **
                ***
                *********
                ****
                ***
                **
                *
                import java.util.Scanner;
                public class Codegnan
                {
                public static void main(String[] args)
                {
                Scanner sc = new Scanner(System.in);
                System.out.println(“Enter the number of rows: “);
                int rows = sc.nextInt();
                for (int i= 1; i<= rows ; i++)
                {
                for (int j=i; j <rows ;j++)
                {
                System.out.print(” “);
                }
                for (int k=1; k<=i;k++)
                {
                System.out.print(“*”);
                }
                System.out.println(“”);
                }
                for (int i=rows; i>=1; i–)
                {
                for(int j=i; j<=rows;j++)
                {
                System.out.print(” “);
                }
                for(int k=1; k<i ;k++)
                {
                System.out.print(“*”);
                }
                System.out.println(“”);
                }
                sc.close();
                }
                }
            </pre>`,
        content: []
    },
    {
        title: "60. Write a Java program to print alphabet A.",
        intro: `
            <pre> 
                import java.util.Scanner;
                public class Codegnan
                {
                // Java program to print alphabet A
                void display(int n)
                {
                // Outer for loop for number of lines
                for (int i = 0; i<=n; i++)
                {
                // Inner for loop for logic execution
                for (int j = 0; j<= n / 2; j++)
                {
                // prints two column lines
                if ((j == 0 || j == n / 2) && i != 0 ||
                // print first line of alphabet
                i == 0  && j != n / 2 ||
                // prints middle line
                i == n / 2)
                System.out.print(“*”);
                else
                System.out.print(” “);
                }
                System.out.println();
                }
                }
                public static void main(String[] args)
                {
                Scanner sc = new Scanner(System.in);
                Edureka a = new Edureka();    a.display(7);
                }
                }
            </pre>`,
        content: []
    },
    {
        title: " 61. Write a Java program to print an empty triangle.",
        intro: `
            <pre> 
                *
                * *
                * * *
                * * * *
                * * * * * *
                import java.util.Scanner;
                public class Codegnan
                {
                public static void main(String[] args)
                {
                Scanner sc = new Scanner(System.in);
                System.out.println(“Enter the number of rows: “);
                int rows = sc.nextInt();
                for (int i=1; i<= rows ; i++)
                {
                for (int j = i; j < rows ; j++)
                {
                System.out.print(” “);
                }
                for (int k = 1; k <= (2*i -1) ;k++)
                {                    if( k==1 || i == rows || k==(2*i-1))
                {
                System.out.print(“*”);
                }
                else
                {
                System.out.print(” “);
                }
                }
                System.out.println(“”);
                }
                sc.close();
                }
                }
            </pre>`,
        content: []
    },
    {
        title: "62. Write a Java program to print an empty downward triangle.",
        intro: `
            <pre> 
                *********
                *     *
                *   *
                * *
                *
                import java.util.Scanner;
                public class Codegnan
                {
                public static void main(String[] args)
                {
                Scanner sc = new Scanner(System.in);
                System.out.println(“Enter the number of rows: “);
                int rows = sc.nextInt();
                for (int i=rows; i>= 1 ; i–)
                {
                for (int j = i; j < rows ; j++)
                {
                System.out.print(” “);
                }
                for (int k = 1; k <= (2*i -1) ;k++)
                {
                if( k==1 || i == rows || k==(2*i-1))
                {
                System.out.print(“*”);
                }
                else
                {
                System.out.print(” “);
                }
                }
                System.out.println(“”);
                }
                sc.close();
                }
                }
            </pre>`,
        content: []
    },
    {
        title: " 63. Write a Java program to print an empty diamond pattern.",
        intro: `
            <pre> 
                *
                * *
                *
                * *
                **
                * *
                *  *
                *
                * *
                *
                import java.util.Scanner;
                public class Codegnan
                {
                public static void main(String[] args)
                {
                Scanner sc = new Scanner(System.in);
                System.out.println(“Enter the number of rows: “);
                int rows = sc.nextInt();
                for (int i=1; i<= rows ; i++)
                {
                for (int j = rows; j > i ; j–)
                {
                System.out.print(” “);
                }
                System.out.print(“*”);
                for (int k = 1; k < 2*(i -1) ;k++)
                {
                System.out.print(” “);
                }
                if( i==1) { System.out.println(“”);
                }
                else
                {
                System.out.println(“*”);
                }
                }
                for (int i=rows-1; i>= 1 ; i–)
                {
                for (int j = rows; j > i ; j–)
                {
                System.out.print(” “);
                }
                System.out.print(“*”);
                for (int k = 1; k < 2*(i -1) ;k++)
                {
                System.out.print(” “);
                }
                if( i==1)
                System.out.println(“”);
                else
                System.out.println(“*”);
                }
                sc.close();
                }
                }
            </pre>`,
        content: []
    },
    {
        title: "64. Write a Java program to print the following number pattern.",
        intro: `
            <pre> 
               *
                * *
                * * *
                * * * *
                * * * * *
                public class Codegnan
                {
                public static void printNums(int n)
                {
                int i, j,num;
                for(i=0; i<n; i++) // outer loop for rows
                {
                num=1;
                for(j=0; j<=i; j++) // inner loop for rows
                {
                // printing num with a space
                System.out.print(num+ ” “);
                //incrementing value of num
                num++;
                }
                // ending line after each row
                System.out.println();
                }
                }
                public static void main(String args[])
                {
                int n = 5;
                printNums(n);
                }
                }
            </pre>`,
        content: []
    },
    {
        title: " 65. Write a Java program to print the following number pattern.",
        intro: `
            <pre> 
                1
                2 3
                4 5 6
                7 8 9 10
                11 12 13 14 15
                import java.util.Scanner;
                public class Codegnan
                {
                public static void main(String[] args)
                {
                int i, j, k = 1;
                for (i = 1; i <= 5; i++){
                for (j = 1; j< i + 1; j++){
                System.out.print(k++ + ” “);
                }
                System.out.println();
                }
                }
                }
            </pre>`,
        content: []
    },
    {
        title: "66. Write a Java program to print the following number pattern.",
        intro: `
            <pre> 
                1
                1   1
                1   2   1
                1   3   3   1
                1   4   6   4   1
                import java.util.Scanner;
                public class Codegnan
                {
                public static void main(String[] args) {
                int n = 5;
                for (int i = 0; i < n; i++) {
                int number = 1;
                System.out.printf(“%” + (n – i) * 2 + “s”, “”);
                for (int j = 0; j <= i; j++) {
                System.out.printf(“%4d”, number);
                number = number * (i – j) / (j + 1);
                }
                System.out.println();
                }
                }
                }
            </pre>`,
        content: []
    },
    {
        title: "67. Write a Java program to print the following number pattern.",
        intro: `
            <pre> 
                1
                2 2
                3 3 3
                4 4 4 4
                5 5 5 5 5
                import java.util.Scanner;
                public class Codegnan
                {
                public static void main(String[] args)
                {
                Scanner sc = new Scanner(System.in); //Taking rows value from the user
                System.out.println(“Enter the number of rows: “);
                int rows = sc.nextInt();
                for (int i = 1; i <= rows; i++)
                {
                for (int j = 1; j <= i; j++)
                {
                System.out.print(i+” “);
                }
                System.out.println();
                }
                sc.close();
                }
                }
            </pre>`,
        content: []
    },
    {
        title: "68. Write a Java program to print the following number pattern.",
        intro: `
            <pre> 
                5
                5 4
                5 4 3
                5 4 3 2
                5 4 3 2 1
                import java.util.Scanner;
                public class Codegnan
                {
                public static void main(String[] args)
                {
                Scanner sc = new Scanner(System.in); //Taking rows value from the user
                System.out.println(“Enter the number of rows: “);
                int rows = sc.nextInt();for (int i = rows; i >= 1; i–)
                {
                for (int j = rows; j >= i; j–)
                {
                System.out.print(j+” “);
                }
                System.out.println();}sc.close();
                }
                }
            </pre>`,
        content: []
    },
    {
        title: "69. Write a Java program to print the following number pattern.",
        intro: `
            <pre> 
                1
                2 1
                3 2 1
                4 3 2 1
                5 4 3 2 1
                import java.util.Scanner;
                public class Codegnan
                {
                public static void main(String[] args)
                {
                Scanner sc = new Scanner(System.in);
                System.out.println(“Enter the number of rows: “);
                int rows = sc.nextInt();
                for (int i = 1; i <= rows; i++)
                {
                for (int j = i; j >= 1; j–)
                {
                System.out.print(j+” “);
                }
                System.out.println();
                }
                sc.close();
                }
                }
            </pre>`,
        content: []
    },
    {
        title: "70. Write a Java program to print the following binary numbers pattern.",
        intro: `
            <pre> 
                10101
                01010
                10101
                01010
                10101
                import java.util.Scanner;
                public class Codegnan
                {
                public static void main(String[] args)
                {
                Scanner sc = new Scanner(System.in);
                System.out.println(“Enter the number of rows: “);
                int rows = sc.nextInt();
                for (int i = 1; i <= rows; i++)
                {
                int num;
                if(i%2 == 0)
                {
                num = 0;
                for (int j = 1; j <= rows; j++)
                {
                System.out.print(num);
                num = (num == 0)? 1 : 0;
                }
                }
                else
                {
                num = 1;
                for (int j = 1; j <= rows; j++)
                {
                System.out.print(num);
                num = (num == 0)? 1 : 0;
                }
                }
                System.out.println();
                }
                sc.close();
                }
                }
            </pre>`,
        content: []
    },
    {
        title: "71. Write a Java program to print the following binary numbers pattern.",
        intro: `
            <pre> 
                1
                10
                101
                1010
                10101
                import java.util.Scanner;
                public class Codegnan
                {
                public static void main(String[] args)
                {
                Scanner sc = new Scanner(System.in);
                System.out.println(“Enter the number of rows: “);
                int rows = sc.nextInt();
                for (int i = 1; i <= rows; i++)
                {
                for (int j = 1; j <= i; j++)
                {
                if(j%2 == 0)
                {
                System.out.print(0);
                }
                else
                {
                System.out.print(1);
                }
                }
                System.out.println();
                }
                sc.close();
                }
                }
            </pre>`,
        content: []
    },
    {
        title: "72. Write a Java program to print Floyd’s pattern.",
        intro: `
            <pre> 
                1
                2 3
                4 5 6
                7 8 9 10
                public class Floyd
                {
                public static void main(String[] args)
                {
                int rows = 4, number = 1;
                for(int i = 1; i <= rows; i++)
                {
                for(int j = 1; j <= i; j++)
                {
                System.out.print(number + ” “);
                ++number;
                }
                System.out.println();
                }
                }
                }
            </pre>`,
        content: []
    },
    {
        title: "Java Logical Interview Questions",
        intro: `<h3>73. Write a Java program to reverse a string without using string built-in methods.</h3>
            <pre> 
                public class ReverseString
                {
                public static void main(String[] args)
                {
                String str = “Reversed String”;
                StringBuilder str2 = new StringBuilder();
                str2.append(str);
                str2 = str2.reverse();
                // used string builder to reverse
                System.out.println(str2);
                }
                }
            </pre>`,
        content: []
    },
    {
        title: "74. Write a Java program to swap two variables using the third variable.",
        intro: `
            <pre> 
                import java.util.Scanner;
                public class SwapTwoNumbers
                {
                public static void main(String[] args)
                {
                int x, y, temp;
                System.out.println(“Enter x and y”);
                Scanner in = new Scanner(System.in);
                x = in.nextInt();
                y = in.nextInt();
                System.out.println(“Before Swapping” + x + y);
                temp = x;
                x = y;
                y = temp;
                System.out.println(“After Swapping” + x + y);
                }
                }
            </pre>`,
        content: []
    },
    {
        title: "75. Write a Java program to swap two variables without using the third variable.",
        intro: `
            <pre> 
                import java.util.Scanner;
                class SwapNum
                {
                public static void main(String args[])
                {
                int x, y;
                System.out.println(“Enter x and y”);
                Scanner in = new Scanner(System.in);
                x = in.nextInt();
                y = in.nextInt();
                System.out.println(“Before Swapping /nx = “+x+” /ny = “+y);
                x = x + y;
                y = x – y;
                x = x – y;
                System.out.println(“After Swapping without third variable/nx = “+x+”/ny = “+y);
                }
                }
            </pre>`,
        content: []
    },
    {
        title: "76. Write a Java program to find a prime number.",
        intro: `
            <pre> 
                import java.util.Scanner;
                public class Prime
                {
                public static void main(String[] args)
                {
                int temp, num;
                boolean isPrime = true;
                Scanner in = new Scanner(System.in);
                num = in.nextInt();
                in.close();
                for (int i = 2; i&lt;= num/2; i++)
                {
                temp = num%i;
                if (temp == 0)
                {
                isPrime = false;
                break;
                }
                }
                if(isPrime)
                System.out.println(num + “number is prime”);
                else
                System.out.println(num + “number is not a prime”);
                }
                }
            </pre>`,
        content: []
    },
    {
        title: "77. Write a Java program to find whether a number is palindrome or not.",
        intro: `
            <pre> 
                import java.util.Scanner;
                public class Palindrome
                {
                public static void main (String[] args)
                {
                String original, reverse = “”;
                Scanner in = new Scanner(System.in);
                int length;
                System.out.println(“Enter the number or String”);
                original = in.nextLine();
                length = original.length();
                for (int i =length -1; i>;=0; i–)
                {
                reverse = reverse + original.charAt(i);
                }
                System.out.println(“reverse is:” +reverse);
                if(original.equals(reverse))
                System.out.println(“The number is palindrome”);
                else
                System.out.println(“The number is not a palindrome”);
                }
                }
            </pre>`,
        content: []
    },
    {
        title: "78. Write a Java program to find Fibonacci series.",
        intro: `
            <pre> 
                import java.util.Scanner;
                public class Fibonacci
                {
                public static void main(String[] args)
                {
                int num, a = 0,b=0, c =1;
                Scanner in = new Scanner(System.in);
                System.out.println(“Enter the number of times”);
                num = in.nextInt();
                System.out.println(“Fibonacci Series of the number is:”);
                for (int i=0; i<num; i++)
                {
                a = b;
                b = c;
                c = a+b;
                System.out.println(a + “”);
                //if you want to print on the same line, use print()
                }
                }
                }
            </pre>`,
        content: []
    },
    {
        title: "79. Write a Java program to find duplicate characters in a string.",
        intro: `
            <pre> 
                public class DuplicateCharacters
                {
                public static void main(String[] args)
                {
                String str = new String(“Sakkett”);
                int count = 0;
                char[] chars = str.toCharArray();
                System.out.println(“Duplicate characters are:”);
                for (int i=0; i&lt;str.length();i++)
                {
                for(int j=i+1; j&lt;str.length();j++)
                {
                if (chars[i] == chars[j])
                {                                                    
                System.out.println(chars[j]);
                count++;
                break;
                }
                }
                }
                }
                }
            </pre>`,
        content: []
    },
    {
        title: "80. Write a Java program to check Armstrong number.",
        intro: `
            <pre> 
                class Armstrong
                {
                public static void main(String[] args)
                {
                int c=0,a,temp;
                int n=153;//It is the number to check Armstrong
                temp=n;
                while(n&gt;0)
                {
                a=n%10;
                n=n/10;
                c=c+(a*a*a);
                }
                if(temp==c)
                System.out.println(“armstrong number”);
                else
                System.out.println(“Not armstrong number”);
                }
                }
            </pre>`,
        content: []
    },
    {
        title: "81. Explain the Armstrong number concept. ",
        intro: () => (
            <>
                <p>Armstrong number is the number which is the sum of the cubes of all its units, tens and hundreds digits for three-digit numbers.</p>
                <p>153 = 1*1*1 + 5*5*5 + 3*3*3 = 1 + 125 + 27 = 153</p>
                <p>If you have a four-digit number, for example:</p>
                <p>1634 = 1*1*1*1 + 6*6*6*6 + 3*3*3*3 + 4*4*4*4 = 1 + 1296 + 81 + 256 = 1634</p>
                <p>Now, in this program, we have a temp and integers declared. We have initialized c with the value 0. Then, we need to assign the integer value which we are going to check for Armstrong (in our case, let us say 153). Then we have assigned our temp variable with that number which we are going to check.</p>

                <p>Thereafter, we used conditional check where the remainder is assigned to a and the number is divided by 10 and assigned to n. Now, our c variable which was set to zero initially is assigned with c+ (a*a*a). Suppose we have to evaluate a four-digit number then c should be assigned with c + (a*a*a*a).</p>
                <p>Finally, we have put an if-else statement for conditional checking where we have compared the value contained in c against temp (which has the actual number stored at this point). If it matches, then the number is Armstrong otherwise not.</p>
            </>
        )
    },
    {
        title: "82. Write a Java program to remove all spaces from the string using replace() function.",
        intro: `
            <pre> 
                class Codegnan
                {
                public static void main(String[] args)
                {
                String str1 = “Remove    the white      spaces  from    here.”;
                //Using replaceAll() function
                String str2 = str1.replaceAll(“\\s”, “”);
                System.out.println(str2);
                }
                }
                }
            </pre>`,
        content: []
    },
    {
        title: "Java Interview Questions for Experienced ",
        intro: () => (
            <>
                <h3>83. How can you run a Java application on the command line and set the classpath with multiple jars?</h3>
                <p> Use the -cp or -classpath option to specify the classpath. You can include multiple JAR files separated by the system path separator (: on Linux/macOS, ; on Windows):</p>
                <p> java -cp /dev/myapp.jar:/dev/mydependency.jar com.Codegnan.MyApp</p>
                <p> Here are some additional points you could discuss to elaborate on your example command for an interview:</p>
            </>
        )
    },
    {
        title: "Explain what the -cp option does:",
        intro: "<ul>" +
            [
                "Sets the classpath for the java command, allowing you to specify which JARs and directories are searched for classes and resources",
                "Discuss the advantages of using -cp over CLASSPATH env variable:",
                "Allows you to set classpath explicitly for each command, without modifying global CLASSPATH var",
                "Overrides CLASSPATH rather than extending it, giving more control",
                "Can be used to test classpath changes easily without impacting other processes"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 50px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Best practices for structuring the classpath:",
        intro: "<ul>" +
            [
                "Keep application JARs separate from library JARs",
                "Order from most application-specific to most general ",
                "Use a common convention like putting libs in a `lib` directory"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 50px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Discuss organizing code into modules/JARs:",
        intro: "<ul>" +
            [
                "Keeps classes and resources together for dependencies",
                "Allows versioning of modules",
                "Improves encapsulation and reusability",
                "Manages class visibility with exported packages",
                "Talk about manifest files and setting classpath there",
                "Discuss pros/cons of using wildcards on classpath",
                "Mention Java 9+ modules as a newer alternative to JARs"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 50px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "84. State the difference between final, finalize, and finally methods.",
        intro: () => (
            <>
                <p>Final is a Java keyword used to indicate that either a method cannot override in a subclass, or a class cannot be extended or a field cannot be modified. finalize is a method that gets called on an instance of an Object when it is garbage collected. finally is a Java keyword used in exception handling to indicate a block of code that should always be run whether an exception is thrown or not.</p>
            </>
        )
    },
    {
        title: "85. State the difference between ClassNotFoundException and NoClassDefFoundError.",
        intro: () => (
            <>
                <p>A ClassNotFoundException means the class file for a requested class is not on the classpath of the application. A NoClassDefFoundErrormeans that the class file exists at runtime, but for some reason, the class could not be turned into a Class definition. A common cause is an exception being thrown in static initialization blocks.</p>
            </>
        )
    },
    {
        title: "86. State the difference between equals and hashCode of an object. ",
        intro: () => (
            <>
                <p> The only obligation is that for any objects o1 and o2 then if o1.equals(o2) is true then o1.hashCode() == o2.hashCode() is true.</p>
                <p> Note that this relationship goes only one way: for any o1, o2 of some class C, where none of o1 and o2 are null, then it can happen that o1.hashCode() == o2.hashCode() is true BUT o1.equals(o2) is false.</p>
            </>
        )
    },
    {
        title: "87. Explain the concept of serialization.",
        intro: () => (
            <>
                <p>Serialization is a method that transforms an object into an array of bytes. This byte array displays the class, variant, and internal condition object. JVM can transmit/read the object over a network with this byte array.</p>
            </>
        )
    },
    {
        title: "88. Why should we use serialization in Java?",
        intro: "Following are the use cases of serialization: <ul>" +
            [
                "Communication: used for networking of an object between two devices.",
                "Persistence: The object state will be stored and then recovered from the database into a database.",
                "Caching: Caching can be used to boost output using serialization. We might have to create an object for ten minutes, but de-serializing it will take only ten seconds.",
                "Cross jvm syncing: It can be used on different jvm architectures in the same way."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 50px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "89. What is Deserialization?",
        intro: () => (
            <>
                <p>Deserialization is the process of reconstructing the object from the serialized state. It is the reverse process of serialization.</p>
            </>
        )
    },
    {
        title: "90. In Java, is it allowed to mark a method as transient?",
        intro: () => (
            <>
                <p>No, Java does not allow marking a method as transient. The transient keyword is valid only for member variables. Member variables of an object are marked transient to indicate that they should not be serialized. During the serialization process, the transient variables are not considered part of the persistent state of an object.</p>
            </>
        )
    },
    {
        title: "91. State the difference between a Serializable and an Externalizable interface.",
        intro: () => (
            <>
                <p>Serializable is a marker interface but Externalizable is not a marker interface. When we implement a Serializable interface, the class is serialized automatically by default. We can override writeObject() and readObject() methods to control more complex object Serialization processes.</p>
                <p>In the case of Externalizable, we use readExternal() and writeExternal() methods to give control to the class for the serialization process of a class.</p>
                <p>A serializable interface is based on a recursive algorithm. Serializable gives you two options. One option is to provide a custom way of serialization, and the other default way. In Externalizable, you have to always implement readExternal() and writeExternal() methods. </p>

                <p>A public no-arg constructor is needed while using an Externalizable interface. In Serialization, we need to define serialVersionUID. If it is not explicitly defined it will be generated automatically based on all the fields, and methods of the class.</p>
            </>
        )
    },
    {
        title: "92. In Java, How can we access the private methods of a class from outside the class?",
        intro: `We can use Reflection to access private methods of a class from outside the class. In Java, we use getDeclaredMethod() to get instances of a private method. Then we mark this method accessible and finally invoke it.
        In the following sample code, we are accessing the private method message() of class Foo by Reflection. The file name is Foo.java
            <pre> 
                public class Foo
                {
                private void message()
                {
                System.out.println(“hello java”);
                }
                }FileName: FooMethodCall.java
                import java.lang.reflect.Method;
                public class FooMethodCall
                {
                public static void main(String[] args)throws Exception
                {
                Class c = Class.forName(“Foo”);
                Object o= c.newInstance();
                Method m =c.getDeclaredMethod(“message”, null);
                m.setAccessible(true);
                m.invoke(o, null);}}
            </pre>`,
        content: []
    },
    {
        title: "93. Explain the concept of garbage collection in Java.",
        intro: () => (
            <>
                <p> The mechanism by which Java programs perform automated memory storage is Java garbage collection. Java programs are compiled into bytecodes that can be executed on a virtual Java machine or for short, a JVM. </p>
                <p> As Java programs run on the JVM, objects are generated on the heap, which is the dedicated portion of the program’s memory.</p>
            </>
        )
    },
    {
        title: "94. How can an object be unreferenced? ",
        intro: ` In Java, there are many ways to do that, for example:
                 <b>• By nulling the reference</b>
            <pre>
                Employee e=new Employee();
                e=null;
                • By assigning a reference to another
                Employee e1=new Employee();
                Employee e2=new Employee();
                e1=e2;//now the first object referred by e1 is available for garbage collection
                • By anonymous object
                new Employee();
            </pre>`,
        content: []
    },
    {
        title: "95. Write a program to give a simple example of garbage collection in Java.",
        intro: `
            <pre> 
                public class TestGarbage1
                {
                public void finalize()
                {
                System.out.println(“object is garbage collected”);
                }
                public static void main(String args[])
                {
                TestGarbage1 s1=new TestGarbage1();
                TestGarbage1 s2=new TestGarbage1();
                s1=null;
                s2=null;
                System.gc();
                }
                }
            </pre>`,
        content: []
    },
    {
        title: "96. What exactly is the purpose of a garbage collector?",
        intro: () => (
            <>
                <p>There are no pointers in Java. Control and Utilization of Memory is achieved by JVM. Because it is automatic to assign memory after some JVM could go low on memory time. JVM must be free at the moment so that memory from objects that are unused. </p>
                <p>To aid in the method of Java offers an automatic method called reclaiming memories, called Collector of Garbage.</p>
            </>
        )
    },
    {
        title: "97. What is GC()?",
        intro: () => (
            <>
                <p>Two methods are supported by Java: System.gc() and Runtime.gc()  to order the JVM to run the garbage collection. Programmers can directly submit requests for garbage collection when using these tools. But the JVM process will deny this request and wait for the GC to run for some time.</p>
            </>
        )
    },
    {
        title: "98. Explain the types of references in Java?",
        intro: () => (
            <>
                <p> In Java, there are four types of references:</p>

                <p>1. Strong Reference</p>
                <p>2. Soft Reference</p>
                <p>3. Weak Reference</p>
                <p>4. Phantom Reference</p>
            </>
        )
    },
    {
        title: "99. What is the purpose of the Runtime class in Java?",
        intro: () => (
            <>
                <p> The purpose of the Runtime class is to provide access to the Java Runtime system. This class provides certain important methods like:</p>
                <p><b>Runtime. free memory()</b> – This method returns the value of free memory in JVM</p>
                <p><b>Runtime. max memory()</b> – This method returns the value of maximum memory that JVM can use.</p>
                <p> Runtime.gc() – This method can invoke garbage collection.</p>
            </>
        )
    },
    {
        title: "100. How many types of nested classes are supported in Java?",
        intro: () => (
            <>
                <p> Java supports four types of nested classes:</p>
                <p>1. Member inner class</p>
                <p>2. Local inner class</p>
                <p>3.  Anonymous inner class</p>
                <p>4. Static nested class</p>
            </>
        )
    },
    {
        title: "101. What is the difference between nested class and inner class in Java?",
        intro: () => (
            <>
                <p>Java’s Inner Class is a non-static class. It is a type of nested class that is identified with a Static modifier in another class but is not eligible. </p>
                <p>A Nested class is either a Static Nested class or a non-Static Inner class that may be a class. An Inner Class shall have access, even if declared confidential, to all members of the Enclosing Class. The other members of the enclosing class cannot be accessed by a Static Nesting class.</p>
            </>
        )
    },
    {
        title: "102. If I am saying Immutable in the context of string, what does it mean?",
        intro: () => (
            <>
                <p>You cannot edit or alter an Immutable Object in Java. The String is an Immutable Java class. It cannot be modified once the String object is formed. A new object is generated when we allocate a string to a new value.</p>
                <p>Let say there are 2 String variables A and B that reference a String object “TestData”. All these variables refer to the same String literal. If one reference variable A changes the value of the String literal from “TestData” to “real data”, then it will affect the other variable as well. </p>
                <p>Due to which String is considered Immutable. In this case, if one variable A changes the value to “real data”, then a new String literal with “real data” is created and A will point to a new String literal. While B will keep pointing to “TestData”.</p>
            </>
        )
    },
    {
        title: "103. How many objects does the following code create?",
        intro: () => (
            <>
                <p> String s1=”HelloWorld”;</p>
                <p> String s2=” HelloWorld “;</p>
                <p> String s3=” HelloWorld “;</p>
                <p> The above code creates only one object. Since there is only one String Literal “HelloWorld” created, all the references point to the same object.</p>
            </>
        )
    },
    {
        title: "104. How many objects does the following code create?",
        intro: () => (
            <>
                <p>String s = new String(“HelloWorld”);</p>
                <p>The above code creates two objects. One object is created in a String constant pool and the other is created on the heap in a non-pool area.</p>
            </>
        )
    },
    {
        title: "105. State the difference between a String and StringBuffer object?",
        intro: () => (
            <>
                <p>The string is an immutable object. Its value cannot change after creation. StringBuffer is a mutable object. We can keep appending or modifying the contents of a StringBuffer in Java.</p>
            </>
        )
    },
    {
        title: "106. How can you create an immutable class in Java?",
        intro: () => (
            <>
                <p>In Java, we can declare a class final to make it immutable. Following are the detailed steps to make it Immutable:</p>
                <p>1. Add final modifier to class to prevent it from getting extended</p>
                <p>2. Add private modifier to all the fields to prevent direct access</p>
                <p>3. Do not provide any setter methods for member variables</p>
                <p>4. Add final modifier to all the mutable fields to assign value only once</p>
                <p>5. Use Deep Copy to initialize all the fields by a constructor</p>
                <p>6. In the clone method, return a copy of the object instead of the actual object reference</p>
            </>
        )
    },    {
        title: "107. State the use case of the String() method in Java?",
        intro: () => (
            <>
                <p>In Java, the Object class has a toString() method. This method can be used to return the String representation of an Object. When we print an object, Java implicitly calls the toString() method. Java provides a default implementation for the toString() method. But we can override this method to return the format that we want to print.</p>
            </>
        )
    },
    {
        title: "108. Explain the concept of exception handling in Java?",
        intro: () => (
            <>
                <p>Java provides an Exception Handling mechanism to handle runtime errors that occur in JVM. There are checked exceptions in a program that we expect to occur in certain situations. The exception handling mechanism catches these checked exceptions and takes relevant actions.</p>
            </>
        )
    },
    {
        title: "109. State-checked and unchecked exceptions in Java?",
        intro: () => (
            <>
                <p>Checked Exceptions extend Throwable class, but they do not extend RuntimeException or Error classes. UncheckedException extends RuntimeException class. Checked Exceptions are checked at compile time in Java. Unchecked Exceptions happen at Runtime, so they are not checked at compile time.</p>
                <p>IOException, SQLException, etc. are examples of Checked Exceptions. NullPointerException, ArithmeticException, etc. are examples of Unchecked Exceptions.</p>
            </>
        )
    },
    {
        title: "110. What is the base class for Error and Exception classes in Java?",
        intro: () => (
            <>
                <p>Error, as well as the Exception class, is derived from the Throwable class in Java.</p>
            </>
        )
    },
    {
        title: "111. What is a final block in Java?",
        intro: () => (
            <>
                <p>=Java provides a final block with a try block. This is an optional block. But finally the block is always executed after the execution of the try block. A final block includes all the critical statements that must be executed whether an exception exists or not. </p>
                <p>=The statements present in this block will still execute regardless of whether an exception exists in a try block or not such as closing a connection, stream, etc.</p>
            </>
        )
    },
    {
        title: "112. In what scenarios, a final block will not be executed??",
        intro: "There are two main scenarios in which finally block is not executed: <ul>" +
            [
                "Program exits by calling the system. exit() call",
                "A fatal error causes JVM to crash"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 50px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "113. Is it possible to re-throw an exception in Java?",
        intro: `
            <pre> 
                <b>1. Using throw keyword:</b>

                try {

                // code that throws exception
                } catch (Exception e) {

                // handle exception

                throw e; // rethrows same exception

                }
                <b>2. Calling throw on exception instance:</b>

                try {

                // code that throws exception 

                } catch (Exception e) {

                // handle exception

                throw e; // rethrows caught exception

                }
                <b>3. Creating new exception and passing original as cause:</b>

                try {

                // code that throws exception

                } catch (IOException e) {

                throw new CustomException("Error message", e); // Wraps and rethrows

                }
            </pre>`,
        content: []
    },
    {
        title: "114. State the difference between throw and throws in Java?",
        intro: () => (
            <>
                <p> Sr. No.<br/> 
                Key <br/> 
                throw <br/> 
                throws</p>

                <h5>1. Definition</h5>
                <p> Throws is a keyword used in the method signature used to declare an exception that might get thrown by the function while executing the code.</p>
                <p> The throw is a keyword that is used to throw an exception explicitly in the program inside a function or inside a block of code.</p>

                <h5>2. Internal implementation</h5>

                <p> Internally, the throw is implemented as it is allowed to throw only a single exception at a time i.e we cannot throw multiple exceptions with a throw keyword.</p>
                <p> The throw is a keyword that is used to throw an exception explicitly in the program inside a function or inside a block of code.</p>

                <h5>3. Type of exception</h5>
                <p> Throws is a keyword used in the method signature used to declare an exception that might get thrown by the function while executing the code.</p>
                <p> The throw is a keyword that is used to throw an exception explicitly in the program inside a function or inside a block of code.</p>

                <h5>4. Syntax</h5>

                <p> Throws is a keyword used in the method signature used to declare an exception that might get thrown by the function while executing the code.</p>
                <p> The throw is a keyword that is used to throw an exception explicitly in the program inside a function or inside a block of code.</p>

                <h5>5. Declaration</h5>

                <p> Throws is a keyword used in the method signature used to declare an exception that might get thrown by the function while executing the code.</p>
                <p> The throw is a keyword that is used to throw an exception explicitly in the program inside a function or inside a block of code.</p>
            </>
        )
    },
    {
        title: "115. State the difference between collection and collections framework in Java? ",
        intro: () => (
            <>
                <p>In Java, an object containing many similar elements in a single unit is an array. You may access these few objects by means of an object from the list. A framework that provides standard architecture to build, upgrade and access various types of collections is part of the Java Collections Framework. There are common methods in the collections system that developers mostly use to operate on an item in the array.</p>
            </>
        )
    },
    {
        title: "116. State the Thread-safe classes in Java Collections framework?",
        intro: "The Thread-safe classes in the Java Collections framework are: <br/><ul>" +
            [
                "Stack",
                "Properties",
                "Vector",
                "Hashtable",
                "Blocking",
                "Queue",
                "ConcurrentMap",
                "ConcurrentNavigableMap"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 50px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "117. What are the advantages of using JSP in web architecture?",
        intro: "The Thread-safe classes in the Java Collections framework are: <br/><ul>" +
            [
                "<strong>Performance:</strong> JSP works very well since it designs many requests with the same code.",
                "<strong>Fast:</strong> As JSP has been pre-compiled, the server will easily serve pages.",
                "<strong>Extendable:</strong> JSP is Java-based. This allows JSP architecture to be expanded using other Java technologies such as JDBC, JMS, JNDI etc.",
                "<strong>Build:</strong> The user interface for JSP is easier to design since the interface is similar to HTML. UI designers can create a mock data JSP, and developers can implement dynamic data at a later date."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 50px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "118. What is ‘Extra lazy fetching’ in Hibernate??",
        intro: () => (
            <>
                <p>In Extra lazy fetching, the database only gathers individual components of a set as necessary.  Hibernate does not recall the whole set in this technique until it is necessary. This is a good technique for fetching large object arrays.</p>
            </>
        )
    },
    {
        title: "119. What command will you use to package your Maven project?",
        intro: () => (
            <>
                <p>To package a project into a distributable format we use the following command:
                mvn -package</p>
            </>
        )
    },
    {
        title: "120. State the primary use cases of the Maven plugin?",
        intro: () => (
            <>
                <p>Maven is mainly a plugin execution framework. At the core of Maven, all the work is done by plugins. A Maven plugin can be used for the following purposes:</p>
                <p>1. Cleaning up the code</p>
                <p>2. Compiling the code</p>
                <p>3. Creating a JAR file</p>
                <p>4. Deploying the artifacts</p>
                <p>5. Running the unit tests</p>
                <p>6. Documenting the project</p>
                <p>7. Generating the site of a project</p>
                <p>8. Generating a WAR file</p>
                <p>9. Generate a checkstyle report</p>
                <p>Learn about <Link to="/blog/react-js-projects" onClick={() => window.scrollTo({ top: 0 })} className="link-color">React JS projects.</Link> </p>
            </>
        )
    }
];

const nav_interview = [
    {
        name: "The Complete Core Java Course Syllabus 2024",
        link: "/java-course-syllabus/"
    },
    {
        name:"React Js vs Angular – Which is the Best JavaScript Framework?",
        link:"/blog/react-js-vs-angular-which-is-best-javascript-framework/"
    }
];

export default function JavaCoursePage() {
    return (
        <div>
            <Course_template head={headdata} course={coursedata} section={courseSections} coursep={course_brief} inter_links={nav_interview} />
        </div>
    );
}
