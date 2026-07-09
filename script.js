document.addEventListener("DOMContentLoaded", () => {
    // Select all 'Book Ticket' buttons
    const bookButtons = document.querySelectorAll('.btn-book');

    bookButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            // Prevent the default anchor link behavior
            event.preventDefault();
            
            // Toggle the 'booked' class to change appearance
            this.classList.toggle('booked');
            
            // Update the button text based on its state
            if (this.classList.contains('booked')) {
                this.textContent = 'Booked!';
            } else {
                this.textContent = 'Book Ticket';
            }
        });
    });
});
