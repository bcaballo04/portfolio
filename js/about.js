let cards = document.querySelectorAll('.info-card');
let modal = document.querySelector('.modal');
let modalContent = document.querySelector('.modal-content');


cards.forEach(function(card) {
    card.addEventListener('click', function(event) {

        let category = card.getAttribute('id');
        let content = ''; 

        switch (category) {
            case 'education':
                content = 'I currently attend the University of Michigan as a Computer Science Major. Previously, I attend the Bronx High School of Science in NYC!';
                break;
            case 'hobbies':
                content = 'Growing up and in high school, I have enjoyed playing basketball! I also enjoy listening to lots of hip hop/RNB music.';
                break;
            case 'interests':
                content = 'I am extremely interested in the intersections of CS-related technology and biology, especially when it comes to biotech devices. I am also generally interested in data science and analytics!';
                break;
        }

        modalContent.textContent = content;
        modal.style.display = 'block';
    });
});

modal.addEventListener('click', function() {
    modal.style.display = 'none';
});


let events = document.querySelectorAll('.event');

events.forEach(function(event) {
    event.addEventListener('click', function() {
        let year = event.getAttribute('data-year');
        let title = event.querySelector('h3').textContent;
        let description = event.querySelector('p').textContent;

        alert(`Year: ${year}\nTitle: ${title}\nDescription: ${description}`);
    });
});1