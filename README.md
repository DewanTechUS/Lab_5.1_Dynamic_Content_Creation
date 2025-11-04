# Lab 5.1 — Dynamic Content Creation Dynamic Shopping Cart 

# Author
Name: Dewan Farhad Mahmud
Cohort: Per Scholas 2025 | Software Engineer (MERN Stack)
GitHub: github.com/DewanTechUS
Portfolio: dewantech.com

# Overview
This project is a Dynamic Shopping Cart built using HTML, CSS, and JavaScript as part of the Document Object Model (DOM) module at Per Scholas Software Engineering (MERN) training.
The app allows users to add, display, and remove products dynamically while automatically updating the total price in real time.

# Learning Objectives

Dynamically create and manipulate DOM elements.
Update content dynamically based on user input.
Implement event handling for buttons and actions.
Maintain and update totals accurately.
Apply clean, responsive UI design with CSS.

# Features

Add items to the cart dynamically.
Automatically update total price.
Remove individual items.
Input validation for product name and price.
Responsive, modern gradient design using CSS.
Real-time DOM updates without reloading the page.

# Technologies Used
HTML5 for structure.
CSS3 for layout and modern gradient styling.
JavaScript (ES6) for DOM manipulation and event handling.

# Tools Used

Visual Studio Code (VS Code) — Code editor.
Google Chrome — Browser testing and developer tools.
Git & GitHub — Version control and repository hosting.
Live Server (VS Code Extension) — Local development testing.

# Operating System Support

Windows 10 / 11
macOS (latest versions)
Linux (Ubuntu / Fedora)
Compatible with all major browsers (Chrome, Edge, Firefox, Safari).

# File Structure
index.html — Main HTML structure
styles.css — Modern gradient styling
script.js — DOM logic and dynamic behavior

# Reflection

## How did you dynamically create and append new elements to the DOM?
I used the document.createElement() method to create new <li> elements for each product and then appended them to the cart <ul> using appendChild(). Each list item also contained a dynamically created “Remove” button that allowed users to remove products in real time.

## What steps did you take to ensure accurate updates to the total price?
I created a dedicated function called updateTotalPrice(amount) that adds or subtracts the price each time a product is added or removed. The function updates the displayed total using textContent and formats it to two decimal places using toFixed(2).

## How did you handle invalid input for product name or price?
Before adding any item to the cart, I added simple input validation. If the product name field was empty or the price was not a valid number (or zero), the program displayed an alert message asking the user to enter valid values. This prevented invalid entries from being added to the cart.

## What challenges did you face when implementing the remove functionality?
The main challenge was correctly identifying which item to remove and updating the total price accurately. I solved this by using the closest('li') method inside the removeItem() function to locate the clicked list item and subtract its price from the total before removing it from the DOM.

# What I learned:

How to create, append, and remove DOM elements dynamically.
How to validate user input in interactive applications.
How to combine functionality (JS) with styling (CSS) effectively.