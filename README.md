## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

A responsive and interactive FAQ Design Component

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./design/Final%20Design%20Desktop%20Preview.png)
![](./design/Final%20Design%20Mobile%20Preview.png)
![](./design/Final%20Design%20Tablet%20Preview.png)

### Links

- Solution URL:(https://github.com/undrthegraveyard/FAQ-accordion.git)
- Live Site URL:(https://undrthegraveyard.github.io/FAQ-accordion/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript
- Mobile-first workflow

### What I learned
```js
document.querySelectorAll('.faq__content').forEach(item => {
  item.addEventListener('click', () => {
    const answer = item.querySelector('.faq__answer');
    const plusIcon = item.querySelector('.faq__plus-icon');
    const minusIcon = item.querySelector('.faq__minus-icon');

    // Toggle the display of the answer
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
      plusIcon.style.display = 'block';
      minusIcon.style.display = 'none';
    } else {
      answer.style.display = 'block';
      plusIcon.style.display = 'none';
      minusIcon.style.display = 'block';
    }
  });
});
```

## Author

- Website - [Shivam Agarwal](https://www.shivamagarwal.au)
- Frontend Mentor - [@undrthegraveyard](https://www.frontendmentor.io/profile undrthegraveyard)
- Twitter - [@shivam_agarwaal](https://twitter.com/shivam_agarwaal)