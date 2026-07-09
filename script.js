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

    // Select all 'Show Details' buttons
    const toggleButtons = document.querySelectorAll('.btn-toggle-details');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Find the corresponding event details div (next sibling)
            const details = this.nextElementSibling;
            
            // Toggle the 'hidden' class to show/hide details
            details.classList.toggle('hidden');
            
            // Update button text based on visibility state
            if (details.classList.contains('hidden')) {
                this.textContent = 'Show Details';
            } else {
                this.textContent = 'Hide Details';
            }
        });
    });
});
