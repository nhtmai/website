document.addEventListener('DOMContentLoaded', () => {
    const words = document.querySelectorAll('.word');

    // Create pixel container
    const pixelContainer = document.createElement('div');
    pixelContainer.className = 'pixel-container';
    document.body.appendChild(pixelContainer);

    words.forEach(word => {
        // Split each word into letters
        const text = word.textContent;
        word.textContent = '';

        // Create spans for each letter
        text.split('').forEach(letter => {
            const letterSpan = document.createElement('span');
            letterSpan.className = 'letter';
            letterSpan.textContent = letter;
            word.appendChild(letterSpan);
        });

        // Add hover effects to each letter
        const letters = word.querySelectorAll('.letter');
        letters.forEach((letter) => {
            // Play animation when hovering over this specific letter
            letter.addEventListener('mouseenter', () => {
                // Create pixels
                const rect = letter.getBoundingClientRect();
                const pixels = [];
                const pixelCount = 30; // Fixed number of pixels per letter
                const pixelSize = Math.min(rect.width, rect.height) / 8; // Smaller pixels

                // Animate the letter
                gsap.to(letter, {
                    x: () => (Math.random() - 0.5) * 100,
                    y: () => (Math.random() - 0.5) * 100,
                    rotation: () => (Math.random() - 0.5) * 30,
                    duration: 0.15, // Faster letter movement
                    ease: "power2.out"
                });

                // Create pixels in a grid pattern
                const cols = 5;
                const rows = Math.ceil(pixelCount / cols);
                const cellWidth = rect.width / cols;
                const cellHeight = rect.height / rows;

                for (let i = 0; i < pixelCount; i++) {
                    const col = i % cols;
                    const row = Math.floor(i / cols);
                    const pixel = document.createElement('div');
                    pixel.className = 'pixel';
                    pixel.style.position = 'absolute';
                    // Add some random offset within the cell for more natural distribution
                    const randomX = Math.random() * (cellWidth - pixelSize);
                    const randomY = Math.random() * (cellHeight - pixelSize);
                    pixel.style.left = `${rect.left + (col * cellWidth) + randomX}px`;
                    pixel.style.top = `${rect.top + (row * cellHeight) + randomY}px`;
                    pixel.style.width = `${pixelSize}px`;
                    pixel.style.height = `${pixelSize}px`;
                    pixel.style.backgroundColor = '#000';
                    document.body.appendChild(pixel);
                    pixels.push(pixel);
                }

                // Animate pixels with more random movement
                pixels.forEach(pixel => {
                    // Create multiple keyframes for more chaotic movement
                    const keyframes = [];
                    const steps = 12; // More steps for smoother, slower pixel movement

                    for (let i = 0; i < steps; i++) {
                        keyframes.push({
                            x: (Math.random() - 0.5) * 1500,
                            y: (Math.random() - 0.5) * 1500,
                            rotation: (Math.random() - 0.5) * 720,
                            scale: 0.2 + Math.random() * 0.3,
                            opacity: 1 - (i / steps),
                            duration: 3 / steps, // Slower pixel animation (3 seconds total)
                            ease: "power1.inOut"
                        });
                    }

                    // Chain the keyframes together
                    const timeline = gsap.timeline();
                    keyframes.forEach(keyframe => {
                        timeline.to(pixel, keyframe);
                    });

                    timeline.eventCallback("onComplete", () => pixel.remove());
                });

                // Show original letter when mouse leaves
                letter.addEventListener('mouseleave', () => {
                    gsap.to(letter, {
                        x: 0,
                        y: 0,
                        rotation: 0,
                        duration: 0.15, // Faster letter return
                        ease: "power2.out"
                    });
                });
            });
        });
    });
});