# carouselatana
Dynamic carousel written in HTML, CSS and JS, with a touch of ES6.
The aim of this mini-project is to create a reusable content widget in the form of responsive carousel. After loading, the users should be able to interact with the different content the main app/webpage would provide, which is rendered in different carousel "cards".

The heart of the app is the ES6 Carousel class, which renders the given data formatted as an array of objects.
The constructor class renders data in form of a div, which serves as container for the text and images content, as seen in JS script file.

The IIFE function made for carousel functionality is imagined to be easily integrated in the existing apps, as it would work in its own scope.

However, the full functionality of the carousel is not achieved at this moment; I was working on event listeners that would render the carousel units (the content divs) by dynamically interacting with element's CSS properties through the classList, updating it on click. I'm stuck on transition function, which is supposed to restart the carousel functionality, thus creating the effect of endless carousel. Working on the functionality, my main aim was to create a dynamical component, that would render the elements no matter how much data was given (given the data was formatted in a same way as in the original example).
The lternative approach was to turn HTML collection of divs created to an array, and to manage functionality using the array methods, such as array.push(array.shift()); the idea was to shift the element[0] each time event fires, simultaneously pushing it to the end of array. The alternative to alternative was to initialize an empty array, that would seve as a "medium" for the elements that are supposed to change array index from zero to array.length -1. 
