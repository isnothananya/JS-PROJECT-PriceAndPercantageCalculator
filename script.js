let fullprice = document.getElementById('fill_FullPrice');
let discountPercent = document.getElementById('fill_DiscountPercent');
let discountPrice = document.getElementById('fill_DiscountPrice');
let discountResult = document.getElementById('discount-result');
let totalValue = document.getElementById('totalPrice');
let calculated = document.getElementById('Calculated');

function toDiscountPrice()
{
    let value = (fullprice.value / 100) * discountPercent.value
    let total = (fullprice.value - value)
    discountResult.innerHTML =  value.toFixed(2) + " บาท"
    totalValue.innerHTML =  total.toFixed(2) + " บาท"
}

function toDiscountPercent()
{
    let value = (discountPrice.value / fullprice.value) * 100
    let total = (fullprice.value - discountPrice.value)

    discountResult.innerHTML =  value.toFixed(2) + " %"
    totalValue.innerHTML =  total.toFixed(2) + " บาท"
    
}


