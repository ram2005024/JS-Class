let bagItems = [];
let counter = 0;

onload(); 
function onload(){
displayItems();
bagItems = JSON.parse(localStorage.getItem('bagItems')) ?? [];
showBagCount();
}
addToBag=(id)=>{
  bagItems.push(id);
  counter = bagItems.length;
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  showBagCount();
}
function showBagCount(){
 let countItems=document.querySelector('.countItems');
  if(bagItems.length>0){
    countItems.style.visibility='visible';
      countItems.innerText=bagItems.length;
    } 
    else {
        countItems.style.visibility='hidden';
  }

}


function displayItems(){
  let itemsElement=document.querySelector('.items-container');
  if(!itemsElement){
    return;
  }
let itemsArray = [
  {
        id: '001',
        image: '1.jpg',
        company: 'Carlton London',
        item_name: 'Rhodium-Plated CZ Floral Studs',
        original_price: 1045,
        current_price: 606,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.5,
            count: 1400,
        },
    },
    {
        id: '002',
        image: '2.jpg',
        company: 'CUKOO',
        item_name: 'Women Padded Halter Neck Swimming Dress',
        original_price: 2599,
        current_price: 1507,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.3,
            count: 24,
        },
    },
    {
        id: '003',
        image: '3.jpg',
        company: 'NUEVOSDAMAS',
        item_name: 'Women Red & White Printed A-Line Knee-Length Skirts',
        original_price: 1599,
        current_price: 495,
        discount_percentage: 69,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.1,
            count: 249,
        },
    },
    {
        id: '004',
        image: '4.jpg',
        company: 'ADIDAS',
        item_name: 'Indian Cricket ODI Jersey',
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '005',
        image: '5.jpg',
        company: 'Roadster',
        item_name: 'Pure Cotton T-shirt',
        original_price: 1399,
        current_price: 489,
        discount_percentage: 65,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            count: 3500,
        },
    },
    {
        id: '006',
        image: '6.jpg',
        company: 'Nike',
        item_name: 'Men ReactX Running Shoes',
        original_price: 14995,
        current_price: 14995,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 0.0,
            count: 0,
        },
    },
    {
        id: '007',
        image: '7.jpg',
        company: 'The Indian Garage Co',
        item_name: 'Men Slim Fit Regular Shorts',
        original_price: 1599,
        current_price: 639,
        discount_percentage: 60,
        rating: {
            stars: 4.2,
            count: 388,
        },
    },
    {
        id: '008',
        image: '8.jpg',
        company: 'Nivea',
        item_name: 'Men Fresh Deodrant 150ml',
        original_price: 285,
        current_price: 142,
        discount_percentage: 50,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            count: 5200,
        },
    }
];
itemsElement.innerHTML='';
itemsArray.forEach((items)=>{
itemsElement.innerHTML+=`
<div class="item-container">
  <div class="item-image">
    <img src="${items.image}" class="image-item" alt="item-image">
  </div>
  <div class="rating">
    <span class="star-rating"> ${items.rating.stars} ⭐</span>|
    <span class="user-reviews">${items.rating.count}</span>
  </div>
  <div class="item-name">${items.item_name}</div>
  <div class="item-company">${items.company}</div>
  <div class="item-price">
    <span class="price">Rs ${items.current_price}</span>
    <span class="original-price">Rs ${items.original_price}</span>
    <span class="discount">(${items.discount_percentage}% OFF)</span>
  </div>
  <div class="item-button">
    <button class="item-add-button" onclick="addToBag('${items.id}');">Add to Bag</button>
  </div>
</div>`;  
})
}
displayItems();
