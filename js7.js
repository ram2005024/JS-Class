let jeansPrice=2499;
let jeansDiscountPercent=41/100;
let jeansPriceWithDiscount=jeansPrice-jeansPrice*jeansDiscountPercent;
let jeansCoupenDiscount=29;

//bag section
let bagPrice=15599;
let bagDiscountPercent=10/100;
let bagPriceWithDiscount=bagPrice-bagPrice*bagDiscountPercent;
let bagCoupenDiscount=272; 

//extra charges
let giftWrapCharge=25;
let convienenceFee=20;
// findng total amount
let totalAmount=jeansPriceWithDiscount-jeansCoupenDiscount+bagPriceWithDiscount-bagCoupenDiscount+giftWrapCharge+convienenceFee;
console.log(`The total Price of the items is ${totalAmount}`);
