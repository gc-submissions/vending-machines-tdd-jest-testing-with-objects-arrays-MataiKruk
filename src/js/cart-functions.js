calculateChange = (total, payment) => {
    return payment - total;
}

isSufficientPayment = (total, payment) => {
    if(payment >= total) {
        return true;
    } else {
        return false;
    }
}

calculateTotal = (itemsArray) => {
    let total = 0;
    for(item of itemsArray) {
        total += item.price;
    }
    return total;
}

addItem = (itemsArray, name, price) => {
    itemsArray.push({name, price});
}

removeItem = (itemsArray, index) => {
    itemsArray.splice(index, 1);
}

module.exports = {
    calculateChange,
    isSufficientPayment, 
    calculateTotal, 
    addItem, 
    removeItem
};