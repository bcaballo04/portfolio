let events = document.querySelectorAll('.event');

events.forEach(function(event) {
    event.addEventListener('click', function() {
        let year = event.getAttribute('data-year');
        alert('You clicked on the event for the year: ' + year);
    });
});