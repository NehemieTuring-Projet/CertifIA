const modal = document.getElementById('certModal');
const modalIframe = document.getElementById('modalIframe');

function openModal(pdfUrl) {
    modalIframe.src = pdfUrl + '#toolbar=0&navpanes=0&scrollbar=0';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeModal() {
    modal.classList.remove('active');
    setTimeout(() => {
        modalIframe.src = '';
    }, 300);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Close modal on Escape key press
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Add simple scroll animations for cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.cert-card');
    
    // Initial state
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Staggered fade in
    setTimeout(() => {
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
                // Remove inline transition after animation so hover effect takes over
                setTimeout(() => {
                    card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
                }, 600);
            }, index * 150);
        });
    }, 100);
});
