// JavaScript for pop-ups and celebration animation

// Ensure the DOM is fully loaded before executing any function
document.addEventListener("DOMContentLoaded", function() {

    // Show Pop-Up Modal for romantic content
    function showPopUp(type) {
        const modal = document.getElementById("popUpModal");
        const modalTitle = document.getElementById("modalTitle");
        const modalMessage = document.getElementById("modalMessage");

        if (type === 'love') {
            modalTitle.textContent = "My Dearest Zara 💖";
            modalMessage.textContent = "You mean the world to me, Zara. Our love story is my favorite, and every day I spend with you is a blessing. Thank you for being by my side, for understanding me, and for loving me. I can't wait to spend the rest of my life with you.";
        }

        modal.style.display = "block";
    }

    // Close Pop-Up Modal
    function closePopUp() {
        const modal = document.getElementById("popUpModal");
        modal.style.display = "none";
    }

    // Show proposal options
    document.getElementById('proposalButton').addEventListener('click', function() {
        document.getElementById('answerOptions').style.display = 'block';
    });

    // Handle "Yes" click for proposal
    document.getElementById('yesButton').addEventListener('click', function() {
        const celebrationMessage = document.getElementById('celebrationMessage');
        celebrationMessage.style.display = 'block';
    });

    // Handle "No" click for proposal
    document.getElementById('noButton').addEventListener('click', function() {
        const noButton = document.getElementById('noButton');
        noButton.style.transform = 'translateX(10px)';
        setTimeout(function() {
            noButton.style.transform = 'translateX(0)';
        }, 200);
    });
});