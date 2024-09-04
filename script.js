//your JS code here. If required.
// script.js

// Get modal elements
const modal = document.getElementById('modal');
const openModalButton = document.getElementById('openModal');
const closeModalButton = document.querySelector('.close-modal');

// Function to open the modal
function openModal() {
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none';
}

// Open modal when button is clicked
openModalButton.addEventListener('click', openModal);

// Close modal when close button is clicked
closeModalButton.addEventListener('click', closeModal);

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});
