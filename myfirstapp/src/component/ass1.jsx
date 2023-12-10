import React from 'react'

function ass1() {
  return (
    <div>ass1

  {/* Ques1.What is Single Page Application (SPA)? */}
  Ans-A single page Application (SPA) is a web application that loads a single HTML page and dynamically updates its content as the user interacts with the app.
  This means that instead of loading entirely new pages from the server ,SPAs use Javascript  to update the page content without requiring a full page refresh.

  {/* Ques2.What is DNS and IP Address? */}
  ANS-DNS (Domain Name System) translates human-readable domain names (like google.com) into IP addresses, which are numerical identifiers used to locate and 
  communicate with devices on a network. In React.js, DNS is crucial for converting domain names into IP addresses, allowing the application to fetch data 
  from servers by resolving the domain names to their corresponding IP addresses.

  {/* Ques3.What Is DOM in JS? */}
  ANS-The Document Object Model (DOM) in JavaScript is a programming interface that represents the structure of a web page as a tree of objects. In React.js,
   the virtual DOM—a lightweight representation of the actual DOM—is used to optimize updates by efficiently tracking changes and updating only the necessary parts 
  of the real DOM, enhancing performance in rendering web applications.

  {/* Ques4.What is  React and why we use React instead of JS? */}
  ANS-React is a JavaScript library used for building user interfaces that are interactive and efficient. It's used instead of plain JavaScript for complex applications
   due to its component-based structure, making it easier to manage and reuse UI elements. For instance, in a social media app, React can help create reusable components
   like comment boxes or user profiles, simplifying development and enhancing maintainability.

   {/* Ques5.What is JSX and why do we use it instead of js? */}
   ANS-JSX is a syntax extension used in React that allows developers to write HTML-like code directly within JavaScript. It simplifies the creation of UI components by
    combining HTML structure with JavaScript functionality. JSX makes it easier to visualize and write UI elements alongside the logic needed to manage them, streamlining 
    the development process compared to writing separate HTML and JavaScript code.

    {/* Ques6.What is package.json? */}
    ANS-The package.json file in React.js (or any Node.js project) holds important information about the project, like its name, version, dependencies
     (external libraries used), and scripts to run tasks. It helps manage the project's setup, dependencies, and various commands needed for development and deployment,
      keeping everything organized and easily accessible for developers.

    {/* Ques7.What is the Difference between react and react native? Which one is library or framework? */}
    ANS-React is a JavaScript library used for building user interfaces for web applications. It's focused on creating UI components.

       React Native, on the other hand, is a framework based on React that enables the development of mobile applications for iOS and Android using React
       principles and components, allowing developers to write in JavaScript while building native mobile apps.
      
    {/* Ques8.What is difference between class and functional component? */}
    ANS-Class components are traditional React components defined using ES6 classes and are used for more complex functionalities like state management and lifecycle methods.

        Functional components are simpler and defined as JavaScript functions, using React hooks like useState and useEffect for managing state and lifecycle functionalities,
       making them more concise and easier to understand for simpler UI components.












    </div>
  )
}

export default ass1