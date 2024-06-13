const dataArray = [
    {
        title: 'Why is JavaScript cool?',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis doloremque debitis aspernatur iusto molestias facilis itaque, perspiciatis tempore unde commodi eius. Distinctio ipsa numquam magni dolorum pariatur vel, explicabo accusantium?',
    },
    {
        title: 'What is JavaScript?',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis doloremque debitis aspernatur iusto molestias facilis itaque, perspiciatis tempore unde commodi eius. Distinctio ipsa numquam magni dolorum pariatur vel, explicabo accusantium?',
    },
    {
        title: 'How do I learn JavaScript?',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis doloremque debitis aspernatur iusto molestias facilis itaque, perspiciatis tempore unde commodi eius. Distinctio ipsa numquam magni dolorum pariatur vel, explicabo accusantium?',
    },
    {
        title: 'What are the best things about JavaScript?',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis doloremque debitis aspernatur iusto molestias facilis itaque, perspiciatis tempore unde commodi eius. Distinctio ipsa numquam magni dolorum pariatur vel, explicabo accusantium?',
    }
];

const makeHTML = (data) =>{
    return `<details>
                <sumary>${data.title}</sumary>
                <p>${data.detail}</p>
            </details>`
};

const detailsConteiner = document.querySelector('.faq-container')

detailsConteiner.innerHTML=dataArray.map(data => makeHTML(data)).join('')