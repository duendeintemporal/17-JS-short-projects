const testimonials = [
    {
        author: {
            name: 'Alan Parker',
            image: 'author-01.jpg',
        },
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, repellendus? Impedit mollitia nesciunt itaque optio incidunt enim quae, molestiae, accusamus ratione illum eum sapiente tempore fugiat quam, expedita vel perferendis!',
        date: '23rd May',
    },
    {
        author: {
            name: 'Jone Kage',
            image: 'author-02.jpg',
        },
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, repellendus? Impedit mollitia nesciunt itaque optio incidunt enim quae, molestiae, accusamus ratione illum eum sapiente tempore fugiat quam, expedita vel perferendis!',
        date: '25th May',
    },
    {
        author: {
            name: 'Sharon Rox',
            image: 'author-03.jpg',
        },
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, repellendus? Impedit mollitia nesciunt itaque optio incidunt enim quae, molestiae, accusamus ratione illum eum sapiente tempore fugiat quam, expedita vel perferendis!',
        date: '02nd June',
    },
    {
        author: {
            name: 'Katerin Oslo',
            image: 'author-04.jpg',
        },
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, repellendus? Impedit mollitia nesciunt itaque optio incidunt enim quae, molestiae, accusamus ratione illum eum sapiente tempore fugiat quam, expedita vel perferendis!',
        date: '09th June',
    },
];

const makeCard = (testimonial)=>{
    return `<div class="testimonial-card">
    <img src="${testimonial.author.image}"/>
    <h2>${testimonial.author.name}</h2>
    <p>${testimonial.text}</p>
    <date>Writed on ${testimonial.date}</date>
    </div>`
};

let currentTestmonial = 0;

const previusCard = ()=>{
    if(currentTestmonial > 0){
        currentTestmonial -= 1;
        updateCard();
    }
};

const nextCard = ()=>{
    if(currentTestmonial < testimonials.length - 1){
        currentTestmonial += 1;
        updateCard();
    }
};

const updateCard = ()=>{
    let fillCard = makeCard(testimonials[currentTestmonial]);
        if(testimonials.length > 1){
            fillCard += `<nav><button onclick="previusCard()">Previus</button>
            <button onclick="nextCard()">Next</button>
            </nav>
            `
        }
    const container = document.querySelector('.testimonials-container');
   container.innerHTML=fillCard;
};

updateCard();