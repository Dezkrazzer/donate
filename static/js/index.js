document.addEventListener('DOMContentLoaded', function () {
    // Add click animation to primary donation button
    const primaryDonation = document.getElementById('primary-donation');

    primaryDonation.addEventListener('click', function (e) {
        e.preventDefault();

        // Create ripple effect
        const ripple = document.createElement('span');
        ripple.className = 'absolute bg-white opacity-30 rounded-full transform -translate-x-1/2 -translate-y-1/2';
        ripple.style.width = '5px';
        ripple.style.height = '5px';
        ripple.style.left = e.clientX + 'px';
        ripple.style.top = e.clientY + 'px';
        ripple.style.animation = 'ripple 1s linear';

        document.body.appendChild(ripple);

        // Remove ripple after animation
        setTimeout(() => {
            ripple.remove();
            // In a real scenario, you would redirect to the donation page
            alert('Redirecting to primary donation method...');
        }, 1000);
    });

    // Add hover effect to all links
    const links = document.querySelectorAll('.link-card');
    links.forEach(link => {
        link.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-5px)';
        });

        link.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add style to document for ripple effect
    const style = document.createElement('style');
    style.textContent = `
                @keyframes ripple {
                    0% {
                        transform: scale(1);
                        opacity: 0.3;
                    }
                    100% {
                        transform: scale(20);
                        opacity: 0;
                    }
                }
            `;
    document.head.appendChild(style);
});