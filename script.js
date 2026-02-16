document.addEventListener('DOMContentLoaded', () => {
    const greeting = document.getElementById('greeting');
    const actionBtn = document.getElementById('action-btn');
    const message = document.getElementById('message');

    // Set dynamic greeting based on time of day
    const hours = new Date().getHours();
    if (hours < 12) {
        greeting.textContent = 'Good Morning!';
    } else if (hours < 18) {
        greeting.textContent = 'Good Afternoon!';
    } else {
        greeting.textContent = 'Good Evening!';
    }

    // Button interaction
    actionBtn.addEventListener('click', () => {
        message.textContent = 'Thanks for clicking! Your project is ready.';
        message.classList.remove('hidden');
        
        // Add a small animation effect
        actionBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            actionBtn.style.transform = 'scale(1)';
        }, 100);
    });
});
