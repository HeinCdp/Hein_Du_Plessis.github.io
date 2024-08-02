// script.js

const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
  sections.forEach((section) => {
    const position = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 2;

    if (position <= screenPosition) {
      section.classList.add('scroll-reveal');
    } else {
      section.classList.remove('scroll-reveal');
    }
  });
});

const downloadButton = document.getElementById('download-cv');

downloadButton.addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = 'Hein C Du Plessis_CV_RESUME.pdf';
  link.target = '_blank'; // Open in new tab
  link.rel = 'noopener noreferrer'; // Add rel attribute for security
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

  const objects = document.getElementById('tool-list > li > svg > circle.cbar');

  // Create an Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    // Loop through each entry
    entries.forEach((entry) => {
      // If the object is visible
      if (entry.isIntersecting) {
        // Edit the object (e.g., change its color)
        objects.style.strokeWidth = '4px';
        objects.style.stroke = getComputedStyle(document.documentElement).getPropertyValue('--good-circle-theme');
        const mathPi = getComputedStyle(document.documentElement).getPropertyValue('--MATH-PI');
        const percent = getComputedStyle(document.documentElement).getPropertyValue('--percent');
        objects.style.strokeDashoffset = `calc(${mathPi} * 45 * 2 * (1 - ${percent}))`;
        // Stop observing the object
        observer.unobserve(entry.target);
      }
    });
  }, {
    // Options for the observer
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  });

  // Observe each object
  objects.forEach((object) => {
    observer.observe(object);
  });
  function toggleMenu() {
  const menu = document.getElementById('menu');
  const navOptions = document.getElementById('nav-options');
  const menuIcon = document.getElementById('menu-icon');
  
  if (menu.style.display === 'none') {
    menu.style.display = 'block';
    navOptions.style.display = 'none';
    menuIcon.innerHTML = '<span></span><span></span><span></span>';
  } else {
    menu.style.display = 'none';
    navOptions.style.display = 'flex';
    menuIcon.innerHTML = '<span></span><span></span><span></span>';
  }
}

// Check if nav options fit
function checkNavOptions() {
  const navOptions = document.getElementById('nav-options');
  const navBar = document.getElementById('nav');
  
  if (navOptions.offsetWidth > navBar.offsetWidth) {
    toggleMenu();
  }
}

// Call checkNavOptions on window resize
window.addEventListener('resize', checkNavOptions);

// Call checkNavOptions on page load
checkNavOptions();
