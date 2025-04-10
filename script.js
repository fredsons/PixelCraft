     // Mobile menu toggle
     const menuToggle = document.getElementById('menuToggle');
     const mobileMenu = document.getElementById('mobileMenu');
     
     menuToggle.addEventListener('click', () => {
         mobileMenu.classList.toggle('hidden');
     });
     
     // Navbar scroll effect
     const navbar = document.getElementById('navbar');
     
     window.addEventListener('scroll', () => {
         if (window.scrollY > 50) {
             navbar.classList.add('bg-white', 'shadow-lg', 'py-2');
             navbar.classList.remove('py-4');
         } else {
             navbar.classList.remove('bg-white', 'shadow-lg', 'py-2');
             navbar.classList.add('py-4');
         }
     });
     
     // Scroll to top button
     const scrollToTop = document.getElementById('scrollToTop');
     
     if (scrollToTop) {
         window.addEventListener('scroll', () => {
             if (window.scrollY > 300) {
                scrollToTop.classList.add('active');
             } else {
                scrollToTop.classList.remove('active');
             }
         });
         
         scrollToTop.addEventListener('click', () => {
             window.scrollTo({
                 top: 0,
                 behavior: 'smooth'
             });
         });
     } else {
         console.error('Element with ID "scrollToTop" not found in the DOM.');
     }
     
     // Smooth scrolling for anchor links
     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
         anchor.addEventListener('click', function(e) {
             e.preventDefault();
             
             const targetId = this.getAttribute('href');
             const targetElement = document.querySelector(targetId);
             
             if (targetElement) {
                 // Close mobile menu if it's open
                 if (!mobileMenu.classList.contains('hidden')) {
                     mobileMenu.classList.add('hidden');
                 }
                 
                 // Calculate position with offset for fixed navbar
                 const navbarHeight = navbar.offsetHeight;
                 const targetPosition = targetElement.offsetTop - navbarHeight;
                 
                 window.scrollTo({
                     top: targetPosition,
                     behavior: 'smooth'
                 });
             }
         });
     });
     
     // Contact form submission
     const contactForm = document.getElementById('contactForm');
     
     contactForm.addEventListener('submit', (e) => {
         e.preventDefault();
         
         // In real-world scenario, you'd send this data to a server
         
         // Reset form
         contactForm.reset();
         
         // Show success message (in real implementation, you might use a modal or toast)
         alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
     });
     
     // Newsletter form
     const newsletterForm = document.getElementById('newsletterForm');
     
     newsletterForm.addEventListener('submit', (e) => {
         e.preventDefault();
         
         const email = newsletterForm.querySelector('input[type="email"]').value;
         
         // Basic email validation
         if (email && email.includes('@')) {
             // In real-world scenario, you'd send this email to your newsletter service
             
             // Reset form
             newsletterForm.reset();
             
             // Show success message
             alert('Obrigado por se inscrever na nossa newsletter!');
         } else {
             alert('Por favor, insira um email válido.');
         }
     });