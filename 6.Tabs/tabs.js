const navBar = document.querySelector('nav');
const linksSelectors = navBar.querySelectorAll('a');
const sectionElements = document.querySelectorAll('section');

linksSelectors.forEach( link =>{ 
    link.addEventListener('click', () => {
        removeActive();
        hiddeSections();
        link.parentElement.classList.add('active');
        const sectionElement = document.querySelector(link.hash);
        sectionElement.classList.remove('hidden');
        console.log('hi')
 });
});

const removeActive = ()=>{
    linksSelectors.forEach( link => link.parentElement.classList.remove('active'));
}

const hiddeSections = ()=>{
    sectionElements.forEach( section => section.classList.add('hidden'));
}