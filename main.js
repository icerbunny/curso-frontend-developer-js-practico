const menuEmail = document.querySelector('.navbar-email');
const desktoMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cardsContainer = document.querySelector('.cards-container');


const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail')

menuEmail.addEventListener('click', ToggleEventMenuEmail);
menuHamIcon.addEventListener('click', ToggleEventMobile);
menuCarritoIcon.addEventListener('click', ToggleEventCarrito);


function ToggleEventMenuEmail()
{
    desktoMenu.classList.toggle('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }

}

const isAsideClosed= !aside.classList.contains('inactive')
const isMobileMenuClosed= !mobileMenu.classList.contains('inactive')

function ToggleEventMobile()
{
    if(!isAsideClosed){
            mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}  

function ToggleEventCarrito()
{
  
    if(!isMobileMenuClosed){
            mobileMenu.classList.add('inactive');
    }
  
    aside.classList.toggle('inactive');
}
 

const productList = [];
   
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Cat',
    price: 234,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Car',
    price: 689,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Motocycle',
    price: 756,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

 
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Cat',
    price: 234,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Car',
    price: 689,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Motocycle',
    price: 756,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

 
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Cat',
    price: 234,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Car',
    price: 689,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Motocycle',
    price: 756,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});


function renderProducts(arr){


}


renderProducts(productList);
 
for(product of productList)
{
   const productCard= document.createElement('div');
   productCard.classList.add('product-card');

   const productImg = document.createElement('img');
   productImg.setAttribute('src', product.image);


   const productInfo =document.createElement('div');
   productInfo.classList.add('product-info');  

   const productInfoDiv = document.createElement('div');
   
   const productPrice=document.createElement('p');
   productPrice.innerText= '$' + product.price;
   const productName=document.createElement('p');
   productName.innerText = product.name;

   productInfoDiv.appendChild(productPrice);
   productInfoDiv.appendChild(productName);

   const productInfoFigure=document.createElement('figure');
   const productImgCart=document.createElement('img');
   productImg.setAttribute('src','./icons/bt_add_to_cart.svg');

   productInfoFigure.appendChild(productImgCart);

   productInfo.appendChild(productInfoDiv);
   productInfo.appendChild(productInfoFigure);

   productCard.appendChild(productImg);   
   productCard.appendChild(productInfo);

   cardsContainer.appendChild(productCard);

}