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

    // Form submission handling
    const bookingForm = document.getElementById('booking-form');
    const formMessage = document.getElementById('form-message');

    if (bookingForm) {
        bookingForm.addEventListener('submit', function(event) {
            // Prevent actual form submission and page reload
            event.preventDefault();
            
            // Extract values
            const name = document.getElementById('name').value;
            const eventSelect = document.getElementById('event-select');
            const eventName = eventSelect.options[eventSelect.selectedIndex].text;
            const tickets = document.getElementById('ticket-count').value;
            
            // Show success message
            formMessage.textContent = `Thank you, ${name}! You have successfully booked ${tickets} ticket(s) for ${eventName}.`;
            formMessage.className = 'form-message success';
            
            // Clear the form
            bookingForm.reset();
            
            // Automatically hide message after 6 seconds
            setTimeout(() => {
                formMessage.classList.add('hidden');
            }, 6000);
        });
    }
});
