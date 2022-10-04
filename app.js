var resButton = document.querySelector('.btn-click');
var outputText = document.querySelector('.op-text');
var alertLine = document.querySelector('.alert-line');
var initialPrice = document.querySelector('.initial-price');
var quantity = document.querySelector('.nStocks');
var finalPrice = document.querySelector('.final-price');

var absolutePnL = 0, percentPnL = 0;


function clickHandler(){
    var pInitial = initialPrice.value;
    var pFinal = finalPrice.value;
    var qty = quantity.value;
    alertLine.innerHTML = "";
    outputText.innerHTML = "";

    if(pInitial<=0){
        alertLine.innerHTML = "!Error: Buying value can't be 0 or less";
    }
    else if(pFinal<0){
        alertLine.innerHTML = "!Error: Stock price can't be negative"
    }
    else if(qty<=0){
        alertLine.innerHTML = "!Error: Quantity can't be 0 or less"
    }
    else{
        var profit = pFinal - pInitial;
        if(profit<0){ //then it's a loss
            outputText.innerHTML = "Oops! you've lost " + (profit*qty*-1) + " Rs. i.e. " + ((profit/pInitial)*100*(-1)).toPrecision(4) + "% Loss!!";
        }
        else{
            outputText.innerHTML = "Yayy! you've made " + (profit*qty) + " Rs. i.e. " + ((profit/pInitial)*100).toPrecision(4) + "% Profit!!";
        }
    }
    
}

resButton.addEventListener("click", clickHandler);