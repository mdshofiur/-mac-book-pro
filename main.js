function priceFixing(product,givenPrice) {
    const indiviualCost = document.getElementById(product + '-cost');
    let changeCost = givenPrice;
    indiviualCost.innerText = changeCost;

    // total cost 

    calculateTotal();
}

function getInputValue(product){
   const productInput = document.getElementById(product + '-cost');
   const productNumber = parseInt(productInput.innerText);
   return productNumber;
}


// calculateSection

function calculateTotal() {
    const totalMemory = getInputValue('extra-memory');
    const totalStorage = getInputValue('storage');
    const totalDelivery = getInputValue('delivery');
    const totalCost = totalMemory + totalStorage + totalDelivery+1299;

    document.getElementById('total-cost').innerText = totalCost;
    document.getElementById('finalCost').innerText = totalCost;

    return totalCost;

}

// memory

document.getElementById('default-memory').addEventListener('click', function() {
    priceFixing('extra-memory',0);
})
document.getElementById('memory-16').addEventListener('click', function() {
    priceFixing('extra-memory',180);
})

// storage

document.getElementById('storage-256').addEventListener('click', function() {
    priceFixing('storage',0);
})

document.getElementById('storage-512').addEventListener('click', function() {
    priceFixing('storage',100);
})

document.getElementById('storage-1tb').addEventListener('click', function() {
    priceFixing('storage',180);
})

// delivery

document.getElementById('delivery-25').addEventListener('click', function() {
    priceFixing('delivery',0);
})

document.getElementById('delivery-21').addEventListener('click', function() {
    priceFixing('delivery',20);
})



// promo section


const promo_code = document.getElementById('promo_code');
promo_code.addEventListener('click', function() {
    const finalCosts = document.getElementById('finalCost').innerText
    var finalCostTwo = parseInt(finalCosts);

    const promo_input = document.getElementById('promo_input');
    const promo_one = promo_input.value;

    if(promo_one == 'stevekaku'){
    promo_input.value = ''
      const  finalCostThree = finalCostTwo / 100;
      const finalCostFour = finalCostThree * 80;
      const FinalOutPut = Math.round(finalCostFour)
      document.getElementById('finalCost').innerText = FinalOutPut;
    }
    
})
