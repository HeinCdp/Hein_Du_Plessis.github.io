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
