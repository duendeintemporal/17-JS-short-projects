const openModal = document.querySelector('#open-modal');
const modal = document.querySelector('.modal');
const modalContent = modal.querySelector('.modal-content');

openModal.addEventListener("click", function(){
    modal.classList.add('modal-open');
});
modalContent.addEventListener('click', function(){
    modal.classList.remove('modal-open');
});