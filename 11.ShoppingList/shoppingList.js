const add_item_section = document.querySelector('.items-list');
const add_item_input = document.querySelector('#add-item-input');
const add_item_button = document.querySelector('#add-item-button');

let items = ['oranges', 'apples'];

const addItem = (item)=>{ 
    items = [...items, item];
        shoppingList(items);
}    

const eraseItem = (item)=>{
     this.item = item;
     items = items.filter( i => i != this.item);
     shoppingList(items);
     console.log('erase', items);
}

const shoppingList = (items)=>{
    add_item_section.innerHTML = ''
    items.forEach(element => {
        let div = document.createElement('div');
        let li = document.createElement('li');
        let span = document.createElement('span');

        div.classList.add('items');
        li.textContent = element;
        li.classList.add('items-value');
        span.textContent = 'remove';
        span.classList.add('items-remove');
        span.onclick = () => eraseItem(element);
        
        div.appendChild(li);
        div.appendChild(span);
        
        add_item_section.appendChild(div);
    });
    
}

add_item_button.addEventListener('click', ()=>{
    if(add_item_input.value != '') addItem(add_item_input.value); 
})

shoppingList(items);