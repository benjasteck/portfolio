const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const target = entry.target;

        if (entry.isIntersecting) {
            // If it's a '.services' element, apply staggered delay
            
            // Handle other elements with 'hidden' and 'hidden2'
             if (target.classList.contains('hidden')) {
                target.classList.add('show');
            } else if (target.classList.contains('hidden2')) {
                target.classList.add('show2');
            }
        } else {
            // If the element goes out of view, reset it
            if (target.classList.contains('services')) {
                if (window.innerWidth > 1761) {
                target.classList.remove('show');
                target.style.transitionDelay = '0ms'; // Reset delay when it's no longer visible
            }
         } else {
                target.classList.remove('show', 'show2');
            }
        }
    });
});

// Observe all elements with 'hidden' and 'hidden2' classes
const hiddenElements = document.querySelectorAll('[class*="hidden"]');
hiddenElements.forEach((el) => observer.observe(el));
