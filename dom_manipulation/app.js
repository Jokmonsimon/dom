// DOM Manipulation

// GetElementById()
const title = document.getElementById('main-heading');
console.log('h1 tag with id=main-heading', title);

// GetElementByClassName()
const listItem = document.getElementsByClassName('list-items');
console.log('All list Items with className of list-items', listItem);

// getElementsByTagName()
const listItems = document.getElementsByTagName('li');
console.log('All li tags in the Document:', listItems);

// querySelector()
const container = document.querySelector('div');
console.log('Return the first element:', container);

// querySelectorAll()
const containerAll = document.querySelectorAll('div');
console.log('Return all div:', containerAll);
