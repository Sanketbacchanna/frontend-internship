document.addEventListener("DOMContentLoaded", () => {
    // Select all 'Book Ticket' buttons
    const bookButtons = document.querySelectorAll('.btn-book');

    bookButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            // Prevent the default anchor link behavior
            event.preventDefault();
            
            // Unselect all other buttons first
            bookButtons.forEach(btn => {
                if (btn !== this) {
                    btn.classList.remove('booked');
                    btn.textContent = 'Book Ticket';
                }
            });

            // Toggle the 'booked' class to change appearance
            this.classList.toggle('booked');
            
            // Update the button text based on its state
            if (this.classList.contains('booked')) {
                this.textContent = 'Selected!';
                
                // Smart UI Feature: Auto-select the event in the dropdown
                const eventName = this.parentNode.querySelector('h3').textContent;
                const selectBox = document.getElementById('event-select');
                if (selectBox) {
                    Array.from(selectBox.options).forEach(option => {
                        if (option.text === eventName) {
                            selectBox.value = option.value;
                        }
                    });
                }
                
                // Smart UI Feature: Smooth scroll to the booking section
                const bookingSection = document.getElementById('booking');
                if (bookingSection) {
                    bookingSection.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                this.textContent = 'Book Ticket';
                
                // Reset select box if deselected
                const selectBox = document.getElementById('event-select');
                if (selectBox) selectBox.value = "";
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
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const eventSelect = document.getElementById('event-select');
            const eventValue = eventSelect.value;
            const eventName = eventSelect.options[eventSelect.selectedIndex].text;
            const tickets = document.getElementById('ticket-count').value.trim();
            
            // Simple Front-End Validation
            if (!name || !email || !eventValue || !tickets) {
                formMessage.textContent = 'Error: Please fill out all required fields before submitting.';
                formMessage.className = 'form-message error';
                
                // Hide error message after 4 seconds
                setTimeout(() => {
                    formMessage.classList.add('hidden');
                }, 4000);
                
                return; // Stop form submission execution
            }

            // Basic email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                formMessage.textContent = 'Error: Please enter a valid email address.';
                formMessage.className = 'form-message error';
                setTimeout(() => formMessage.classList.add('hidden'), 4000);
                return;
            }
            
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
