
let openBtn = document.querySelector('.open');

function createCart() {
    let cart = document.createElement('div');
    let heading = document.createElement('h2');
    let field = document.createElement('div');
    let closeBtn = document.createElement('button');


    heading.textContent = 'В нашей корзине';
    closeBtn.textContent = 'Закрыть';

    document.body.appendChild(cart);
    cart.appendChild(heading);
    cart.appendChild(field);
    cart.appendChild(closeBtn);


    cart.classList.add('cart');
    field.classList.add('cart-field');
    closeBtn.classList.add('close-btn');

}

createCart();


//continue
let cart = document.querySelector('.cart');
let field = document.querySelector('.cart-field');
let closeBtn = document.querySelector('.close-btn');

function openCart(){
    cart.style.display = 'block';
}

function closeCart(){
    cart.style.display = 'none';
}

openBtn.addEventListener('click' , openCart);
closeBtn.addEventListener('click', closeCart);



let buttons = document.querySelectorAll('button');
let products = document.querySelectorAll('.product');

// for(let i=0; i<8; i++){
//     buttons[i].addEventListener('click' , function(){
//         let item = products[i].cloneNode(true);
//         let btn = item.querySelector('button');
        
//         btn.remove();

//         field.appendChild(item);

//         products[i].remove();
//     })
// }

buttons.forEach(function(item,i){
  item.addEventListener('click' , function(){
        let item = products[i].cloneNode(true);
        let btn = item.querySelector('button');
        
        btn.remove();

        field.appendChild(item);

        products[i].remove();
    })
})