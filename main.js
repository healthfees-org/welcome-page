// Welcome page functionality
document.addEventListener('DOMContentLoaded', function() {
    const learnMoreLink = document.querySelector('.secondary-button');

    learnMoreLink.addEventListener('click', function() {
        console.log('Learn More link clicked - redirecting to ACA Toolkit');
    });
    
    // Add some interactive animations
    const title = document.querySelector('.title');
    title.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    title.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});
