// Modern healthcare transparency toolkit functionality
document.addEventListener('DOMContentLoaded', function() {
    // Smooth entrance animations with intersection observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.feature-card, .cta-section');
    animatedElements.forEach(el => observer.observe(el));

    // Enhanced button interactions
    const signupButton = document.querySelector('.signup-button');
    const emailInput = document.querySelector('.email-input');
    const featureCards = document.querySelectorAll('.feature-card');
    const heroeBadge = document.querySelector('.hero-badge');

    // Email signup functionality
    if (signupButton && emailInput) {
        signupButton.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });

        signupButton.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });

        signupButton.addEventListener('click', function(e) {
            e.preventDefault();
            const email = emailInput.value.trim();

            if (!email) {
                emailInput.focus();
                emailInput.style.borderColor = '#ef4444';
                emailInput.placeholder = 'Please enter your email address';
                setTimeout(() => {
                    emailInput.style.borderColor = '';
                    emailInput.placeholder = 'Enter your email address';
                }, 3000);
                return;
            }

            if (!isValidEmail(email)) {
                emailInput.focus();
                emailInput.style.borderColor = '#ef4444';
                const originalValue = emailInput.value;
                emailInput.value = '';
                emailInput.placeholder = 'Please enter a valid email address';
                setTimeout(() => {
                    emailInput.style.borderColor = '';
                    emailInput.value = originalValue;
                    emailInput.placeholder = 'Enter your email address';
                }, 3000);
                return;
            }

            // Add click animation
            this.style.transform = 'translateY(-1px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-3px) scale(1.02)';
            }, 150);

            // Simulate signup process
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Adding to waitlist...';
            this.disabled = true;

            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-check"></i> You\'re on the list!';
                this.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
                emailInput.value = '';
                emailInput.placeholder = 'Thank you for joining our waitlist!';

                setTimeout(() => {
                    this.innerHTML = '<i class="fas fa-bell"></i> Notify Me at Launch';
                    this.style.background = '';
                    this.disabled = false;
                    emailInput.placeholder = 'Enter your email address';
                }, 3000);
            }, 2000);

            console.log(`Email signup: ${email} added to HealthFees.org waitlist`);
        });

        // Enter key support for email input
        emailInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                signupButton.click();
            }
        });

        // Email validation helper
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
    }

    // Feature cards hover effects
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            const icon = this.querySelector('.feature-icon');
            if (icon) {
                icon.style.transform = 'scale(1.15) rotate(5deg)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            const icon = this.querySelector('.feature-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });

    // Hero badge interaction
    if (heroeBadge) {
        heroeBadge.addEventListener('click', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
            setTimeout(() => {
                this.style.transform = 'translateY(0) scale(1)';
            }, 200);
        });
    }

    // Parallax effect for background pattern
    const backgroundPattern = document.querySelector('.background-pattern');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (backgroundPattern) {
            backgroundPattern.style.transform = `translateY(${rate}px)`;
        }
    });

    // Logo icon rotation on hover
    const logoIcon = document.querySelector('.logo-icon');
    if (logoIcon) {
        logoIcon.addEventListener('mouseenter', function() {
            this.style.transform = 'rotate(360deg) scale(1.1)';
        });
        
        logoIcon.addEventListener('mouseleave', function() {
            this.style.transform = 'rotate(0deg) scale(1)';
        });
    }

    // Add smooth transitions to all interactive elements
    const style = document.createElement('style');
    style.textContent = `
        .feature-icon {
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        .logo-icon {
            transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        .cta-button {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        .feature-card {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        .hero-badge {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
    `;
    document.head.appendChild(style);

    // Add performance optimization for animations
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
        // Disable animations for users who prefer reduced motion
        document.documentElement.style.setProperty('--animation-duration', '0s');
    }

    // Accessibility improvements
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('using-keyboard');
        }
    });

    document.addEventListener('mousedown', function() {
        document.body.classList.remove('using-keyboard');
    });

    // Console welcome message for developers
    console.log('%c🏥 HealthFees.org - Healthcare Price Transparency Platform',
                'color: #2563eb; font-size: 16px; font-weight: bold;');
    console.log('%cBuilt with modern web technologies for healthcare pricing transparency and comparison.',
                'color: #14b8a6; font-size: 12px;');
});

// Performance monitoring
window.addEventListener('load', function() {
    // Simple performance tracking
    const perfData = performance.getEntriesByType('navigation')[0];
    if (perfData) {
        console.log(`Page loaded in ${Math.round(perfData.loadEventEnd - perfData.fetchStart)}ms`);
    }
});
