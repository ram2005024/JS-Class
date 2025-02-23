 let mySelectedArrayItems;
 const conventionalFee=99;
 onload();
 function onload(){
  selectItem();
  bagPage();
  bagSummary();
 }
 function bagSummary(){ 
  // showBagCount();
let totalItems=mySelectedArrayItems.length;
  let totalMRP=0;
let discountOnMRP=0;
let totalAmount=0;
mySelectedArrayItems.forEach((item)=>{
  totalMRP+=item.original_price;
  discountOnMRP+=(item.original_price-item.current_price);
});
totalAmount+=totalMRP-discountOnMRP+99;
  let bagSummary=document.querySelector('.bag-summary');
  innerHtml=` <div class="bag-details-container">
            <div class="price-header">PRICE DETAILS (${totalItems} Items) </div>
            <div class="price-item">
              <span class="price-item-tag">Total MRP</span>
              <span class="price-item-value">Rs${totalMRP}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Discount on MRP</span>
              <span class="price-item-value priceDetail-base-discount">-Rs${discountOnMRP}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Convenience Fee</span>
              <span class="price-item-value">Rs ${conventionalFee}</span>
            </div>
            <hr>
            <div class="price-footer">
              <span class="price-item-tag">Total Amount</span>
              <span class="price-item-value">Rs ${totalAmount}</span>
            </div>
          </div>
          <button class="btn-place-order">
            <div class="css-xjhrni">PLACE ORDER</div>
          </button>`;
          bagSummary.innerHTML=innerHtml;}
 function removeItem(idNo){
  bagItems=bagItems.filter((id)=> id != idNo);
localStorage.setItem('bagItems', JSON.stringify(bagItems));
  selectItem();
  showBagCount();
  bagPage();
  bagSummary();
 }
 function bagPage(){
  let bagPage=document.querySelector('.bag-items-container');
  let innerHTML=``;
  mySelectedArrayItems.forEach((selectedItem)=>{
innerHTML+=generateInnerHtml(selectedItem);
                })
               bagPage.innerHTML=innerHTML;
        }
        function generateInnerHtml(itemToGenerate){
          return `
                  <div class="bag-item-container">
                  <div class="item-left-part">
                  <img class="bag-item-img" src="${itemToGenerate.image}">
                  </div>
                  <div class="item-right-part">
                  <div class="company">${itemToGenerate.company}</div>
                  <div class="item-name">${itemToGenerate.item_name}</div>
                  <div class="price-container">
                  <span class="current-price">Rs ${itemToGenerate.current_price}</span>
                  <span class="original-price">Rs ${itemToGenerate.original_price}</span>
                  <span class="discount-percentage">(${itemToGenerate.discount_percentage}% OFF)</span>
                  </div>
                  <div class="return-period">
                  <span class="return-period-days">${itemToGenerate.return_period} days</span> return available
                  </div>
                  <div class="delivery-details">
                  Delivery by
                  <span class="delivery-details-days">${itemToGenerate.delivery_date}</span>
                  </div>
        

                  <div class="remove-from-cart" onclick="removeItem(${itemToGenerate.id});">X</div>

                  

                  </div>
                      </div>
                  `;}
       
        function selectItem(){
        mySelectedArrayItems=bagItems.map((itemNo)=>{
          for(i=0; i<items.length; i++){
            if(itemNo===items[i].id){
        return items[i];
            }
          }
          return null;
        });}
