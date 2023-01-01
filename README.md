# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshots

![](./images/desktop_view.png)
![](./images/desktop_view_error.png)
![](./images/mobile_view.png)
![](./images/mobile_view_error.png)

### Links

- Solution URL: [Code](https://github.com/nicolasfig/intro-component-with-signup-form)
- Live Site URL: [Live site](https://nicolasfig.github.io/intro-component-with-signup-form)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla javascript

### What I learned

How to position certain items, mostly the error icon for the wrong/empty inputs, I had to use an image and place it as a placeholder, ended up using some tricky css+javascript code to make it work.

```css
.info-form > input {
  padding: var(--s-16) var(--s-24);
  margin-bottom: var(--s-8);
  border-radius: var(--s-8);
  border: 1px solid var(--grayish-blue);
  background-image: "";
  background-size: var(--s-24) var(--s-24);
  background-repeat: no-repeat;
  background-position: 95% 50%;
}
```

```js
if (email.value === "") {
  msgEmail.innerHTML = "Email cannot be empty";
  email.style.border = "2px solid var(--dark-red)";
  email.placeholder = "";
  email.style.backgroundImage = "url(./images/circle-exclamation-solid.svg)";
} else {
  msgEmail.innerHTML = "";
}
```

### Continued development

I'm getting better with javascript and DOM manipulation but I need to improve a lot

### Useful resources

- [This](https://stackoverflow.com/questions/35821279/positioning-an-image-inside-a-text-input-box) stackoverflow question helped me figure how to place the error icon.
- [Flexbox Malven](https://flexbox.malven.co/)
- [MDN docs](https://developer.mozilla.org/en-US/)

## Author

- Frontend Mentor - [@nicolasfig](https://www.frontendmentor.io/profile/nicolasfig)
- Github - [@nicolasfig](https://github.com/nicolasfig/)
