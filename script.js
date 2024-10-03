'use strict';

// Navbar toggle
const navIcon = document.getElementById('nav-icon');
const retroNavbar = document.getElementById('retro-navbar');

// Ensure navbar is hidden initially and appears after loading
document.addEventListener('DOMContentLoaded', () => {
  retroNavbar.style.display = 'none';
});

navIcon.addEventListener('click', () => {
  retroNavbar.style.display = 'block';
  retroNavbar.classList.toggle('open');
});

// Loading screen with 3-second delay
window.addEventListener('load', function() {
  setTimeout(() => {
    document.getElementById('loading-screen').style.display = 'none';
    retroNavbar.style.display = 'block'; // Show navbar after loading
  }, 3000); // 3 seconds delay
});

// Manage project expansion and shrinking with retro-style animation
'use strict';

// Manage project expansion and shrinking
const projects = document.querySelectorAll('.project');
const projectContents = document.querySelectorAll('.project-content');

projects.forEach((project, index) => {
  const content = document.getElementById(`project-${index + 1}`);

  project.addEventListener('click', () => {
    const isActive = content.classList.contains('active');

    // Close all other project contents
    projectContents.forEach(content => content.classList.remove('active'));
    projectContents.forEach(content => (content.style.display = 'none'));

    // If the clicked project is already open, close it
    if (isActive) {
      content.classList.remove('active');
      content.style.display = 'none';
    } else {
      // Otherwise, open the clicked project
      content.classList.add('active');
      content.style.display = 'block';
    }
  });

  // Handle double click to close the current project
  project.addEventListener('dblclick', () => {
    content.classList.remove('active');
    content.style.display = 'none';
  });
});

function redirect() {
  window.location.href = "mailto:bommireddynishant@gmail.com";
}
// Function to type the text retro-style
function typeText(textElement, textContent, speed) {
  let charIndex = 0;
  let typingInterval = setInterval(() => {
    textElement.textContent += textContent.charAt(charIndex);
    charIndex++;

    // Stop when all characters are typed
    if (charIndex === textContent.length) {
      clearInterval(typingInterval);
    }
  }, speed);
}

// Double-click event to reveal the entire text immediately
function revealText(textElement, textContent) {
  textElement.textContent = textContent;
}

// Target the paragraph
const aboutText = document.getElementById('about-text');
const fullText = aboutText.textContent; // Full content of the paragraph
aboutText.textContent = ''; // Clear text for typing effect

// Type the text on load
window.addEventListener('load', () => {
  typeText(aboutText, fullText, 100); // Adjust speed (milliseconds) for the typing effect
});

// Add double-click event to reveal full text instantly
aboutText.addEventListener('dblclick', () => {
  revealText(aboutText, fullText);
});
// Get the snow container
const snowContainer = document.querySelector('.snow-container');

// Generate 8-bit snowflakes
function createSnowflakes() {
  const snowflakeCount = 100; // Number of snowflakes
  for (let i = 0; i < snowflakeCount; i++) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');

    // Random horizontal position (within the screen width)
    snowflake.style.left = `${Math.random() * 100}vw`;

    // Random size for snowflakes
    const size = `${Math.random() * 10 + 5}px`; // Size between 5px and 15px
    snowflake.style.width = size;
    snowflake.style.height = size;

    // Random duration for the falling animation
    const duration = `${Math.random() * 5 + 3}s`; // Duration between 3s and 8s
    snowflake.style.animationDuration = duration;

    // Random delay for the falling animation
    const delay = `${Math.random() * 5}s`; // Delay between 0s and 5s
    snowflake.style.animationDelay = delay;

    // Add snowflake to the container
    snowContainer.appendChild(snowflake);
  }
}

// Call the function to create the snowflakes
createSnowflakes();
navIcon.addEventListener('click', () => {
  retroNavbar.classList.toggle('open');
});

// Loading screen with 3-second delay
window.addEventListener('load', function() {
  setTimeout(() => {
    document.getElementById('loading-screen').style.display = 'none';
  }, 1000); // 3 seconds delay
});

// // Manage project expansion and shrinking
// const projects = document.querySelectorAll('.project');
// const projectContents = document.querySelectorAll('.project-content');

projects.forEach((project, index) => {
  project.addEventListener('click', () => {
    const content = document.getElementById(`project-${index + 1}`);
    if (content.classList.contains('active')) {
      content.classList.remove('active');
    } else {
      projectContents.forEach(content => content.classList.remove('active'));
      content.classList.add('active');
    }
  });
});

// Manage award expansion and shrinking (like the projects section)
const awards = document.querySelectorAll('.award');
const awardContents = document.querySelectorAll('.award-content');

awards.forEach((award, index) => {
  award.addEventListener('click', () => {
    const content = document.getElementById(`award-${index + 1}`);
    if (content.classList.contains('active')) {
      content.classList.remove('active');
    } else {
      awardContents.forEach(content => content.classList.remove('active'));
      content.classList.add('active');
    }
  });
});

// Delayed display of experience items
const experienceItems = document.querySelectorAll('.experience-item');
experienceItems.forEach((item, index) => {
  item.style.animation = `fadeIn 2s ease-in-out ${index * 2}s forwards`;
});

// Retro scroll animation effect
const sections = document.querySelectorAll('.section');
window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;
    if (sectionTop < screenPosition) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
});
