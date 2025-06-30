        // Simple animations and interactions
        document.addEventListener('DOMContentLoaded', function() {
            // Service card hover effect
            const serviceCards = document.querySelectorAll('.service-card');
            serviceCards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    card.style.transform = 'translateY(-10px)';
                    card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
                });
                
                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'translateY(0)';
                    card.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
                });
            });
            
            // Team card hover effect
            const teamCards = document.querySelectorAll('.team-card');
            teamCards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    card.style.transform = 'translateY(-10px)';
                    card.style.background = 'rgba(255, 255, 255, 0.15)';
                });
                
                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'translateY(0)';
                    card.style.background = 'rgba(255, 255, 255, 0.1)';
                });
            });
            
            // Project card hover effect
            const projectCards = document.querySelectorAll('.project-card');
            projectCards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    card.style.transform = 'scale(1.03)';
                });
                
                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'scale(1)';
                });
            });
            
            // Estimator steps
            const steps = document.querySelectorAll('.step');
            steps.forEach(step => {
                step.addEventListener('click', () => {
                    steps.forEach(s => s.classList.remove('active'));
                    step.classList.add('active');
                });
            });
            
            // Button hover effects
            const buttons = document.querySelectorAll('.btn');
            buttons.forEach(button => {
                button.addEventListener('mouseenter', () => {
                    button.style.transform = 'translateY(-3px)';
                    button.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
                });
                
                button.addEventListener('mouseleave', () => {
                    button.style.transform = 'translateY(0)';
                    button.style.boxShadow = 'none';
                });
            });
        });