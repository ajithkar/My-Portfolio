// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Dynamic Year in Footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // 2. Smooth Scroll for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // 3. Download CV Button Logic
  const cvButton = document.getElementById('download-cv');
  cvButton.addEventListener('click', () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = 'CV_Ajithkar.pdf'; // ⚠️ REPLACE WITH YOUR ACTUAL CV FILE PATH
    link.download = 'YourName_CV.pdf'; // Filename shown to user
    link.target = '_blank';
    
    // Append to body, click, then remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });

  // 4. Contact Form Handling (Frontend only)
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // In a real app, you'd send data to a backend or use EmailJS/Formspree
    const btn = contactForm.querySelector('button');
    const originalText = btn.textContent;
    
    btn.textContent = 'Message Sent!';
    btn.style.background = '#16a34a';
    contactForm.reset();

    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
    }, 3000);
  });

  // 5. Active Nav Highlight on Scroll
  const sections = document.querySelectorAll('section, header');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });
});