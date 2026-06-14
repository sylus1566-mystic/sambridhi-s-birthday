// ===================================
// CONFIGURATION
// ===================================

const CORRECT_PASSWORD = '2067-03-01';

// ===================================
// UTILITIES
// ===================================

function generateHearts(count = 15) {
    const container = document.getElementById('heartsContainer');
    if (!container) return;

    const createHeart = () => {
        const heart = document.createElement('div');
        heart.className = 'heart-fall';
        heart.textContent = '💕';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.setProperty('--duration', (4 + Math.random() * 3) + 's');
        
        container.appendChild(heart);
        
        setTimeout(() => heart.remove(), 9000);
    };

    // Initial hearts
    for (let i = 0; i < count; i++) {
        setTimeout(createHeart, i * 300);
    }

    // Keep generating hearts
    setInterval(createHeart, 1000);
}

function generateSparkles(count = 12) {
    const container = document.getElementById('sparklesContainer');
    if (!container) return;

    const sparkleEmojis = ['✨', '⭐', '💫'];
    
    for (let i = 0; i < count; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.textContent = sparkleEmojis[Math.floor(Math.random() * sparkleEmojis.length)];
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 4 + 's';
        
        container.appendChild(sparkle);
    }
}

// ===================================
// INDEX.HTML FUNCTIONALITY
// ===================================

function checkPassword() {
  const pass = document.getElementById("passwordInput").value;

  if (pass === "2067-03-01") {
    window.location.href = "gallery.html";
  } else {
    document.getElementById("errorMsg").innerText = "Try again 💕";
  }
}

function setupIndexPage() {
    const unlockBtn = document.getElementById('unlockBtn');
    const passwordInput = document.getElementById('passwordInput');

    if (!unlockBtn || !passwordInput) return;

    unlockBtn.addEventListener('click', checkPassword);
    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkPassword();
        }
    });
}

function celebrate() {
    const container = document.getElementById('heartsContainer');
    if (!container) return;

    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.textContent = '💕';
        heart.style.position = 'fixed';
        heart.style.left = '50%';
        heart.style.top = '50%';
        heart.style.fontSize = '2rem';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '2000';
        document.body.appendChild(heart);

        const angle = (i / 20) * Math.PI * 2;
        const velocity = 5;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;

        let x = window.innerWidth / 2;
        let y = window.innerHeight / 2;
        let life = 1;

        const animate = () => {
            x += vx;
            y += vy;
            life -= 0.02;
            heart.style.transform = `translate(${x - 20}px, ${y - 20}px) scale(${life})`;
            heart.style.opacity = life;

            if (life > 0) {
                requestAnimationFrame(animate);
            } else {
                heart.remove();
            }
        };

        animate();
    }
}

// ===================================
// INITIALIZATION
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    generateHearts(20);
    generateSparkles(15);
    setupIndexPage();
});

// Regenerate sparkles on resize
window.addEventListener('resize', () => {
    const sparklesContainer = document.getElementById('sparklesContainer');
    if (sparklesContainer) {
        sparklesContainer.innerHTML = '';
        generateSparkles(15);
    }
});

// ===================================
// SHAKE ANIMATION CSS
// ===================================

// Add shake animation dynamically if not already in CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
`;
document.head.appendChild(style);
