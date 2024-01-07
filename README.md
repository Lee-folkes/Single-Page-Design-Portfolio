# Frontend Mentor - Single-page design portfolio solution

This is a solution to the [Single-page design portfolio challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/singlepage-design-portfolio-2MMhyhfKVo). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

![](./img/SS/Screenshot%201.png)
![](./img/SS/Screenshot%202.png)
![](./img/SS/Screenshot%203.png)
![](./img/SS/Screenshot%204.png)
![](./img/SS/Screenshot%205.png)
![](./img/SS/Screenshot%206.png)


### Links

- Solution URL: [Github](https://github.com/Lee-folkes/Single-Page-Design-Portfolio)
- Live Site URL: [Github Pages](https://lee-folkes.github.io/Single-Page-Design-Portfolio/)

## My process

### Built with

- CSS custom properties
- Flexbox
- CSS Grid
- [SwiperJS](https://swiperjs.com/) - Swiper JS library


### What I learned

During this challege I improved my usage of CSS custom properties, using them to pre-define font sizes for different layouts. I also learnt how to customise the swiper to make it resposive by editing the values for different breakpoints in JS. See Code snippets below:

CSS Custom Properties Snippet:
```css
 --fs-body: var(--fs-300);
    --fs-heading-l: var(--fs-900);
    --fs-heading-m: var(--fs-700);
    --fs-heading-s: var(--fs-500);
    --fs-hero: var(--fs-400);
    
    --fs-body-tablet: var(--fs-350);
    --fs-heading-l-tablet: var(--fs-800);
    --fs-heading-m-tablet: var(--fs-500);

    --fs-heading-l-mobile: var(--fs-600);
    --fs-heading-m-mobile: var(--fs-450);
    --fs-heading-s-mobile: var(--fs-400);
```

JS Snippet:
```js
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.5,
      spaceBetween: 5
    },
    // when window width is >= 500px
    500: {
      slidesPerView: 1.5,
      spaceBetween: 5
    },
    // when window width is >= 880px
    880: {
      slidesPerView: 2.5,
      spaceBetween: 20
    }
  }
```


### Continued development

Going forward i'd like to focus on accesibility, mobile first design and improve my understanding of JS.


## Author

- Frontend Mentor - [@Lee-Folkes](https://www.frontendmentor.io/profile/Lee-folkes)

