// Welcome page functionality
document.addEventListener('DOMContentLoaded', function() {
    const primaryButton = document.querySelector('.primary-button');
    const secondaryButton = document.querySelector('.secondary-button');
    
    primaryButton.addEventListener('click', function() {
        // Add your "Get Started" functionality here
        console.log('Get Started clicked');
        alert('Welcome to HealthFees.org! This feature will be available soon.');
    });
    
    secondaryButton.addEventListener('click', function() {
        // Add your "Learn More" functionality here
        console.log('Learn More clicked');
        alert('Learn more about our healthcare cost transparency mission.');
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
