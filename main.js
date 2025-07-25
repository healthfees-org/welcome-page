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
    const ctaButton = document.querySelector('.cta-button');
    const featureCards = document.querySelectorAll('.feature-card');
    const heroeBadge = document.querySelector('.hero-badge');

    // CTA button enhanced interactions
    if (ctaButton) {
        ctaButton.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        ctaButton.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        ctaButton.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'translateY(-1px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-3px) scale(1.02)';
            }, 150);
            
            console.log('Accessing ACA Transparency Toolkit on Westlaw');
        });
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
    console.log('%c🏥 HealthFees.org - ACA Transparency Toolkit', 
                'color: #2563eb; font-size: 16px; font-weight: bold;');
    console.log('%cBuilt with modern web technologies for healthcare transparency compliance.', 
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
