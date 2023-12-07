formatCurrency = (amount) => {
    if(amount<0) {
        return `-$${(-amount).toFixed(2)}`;
    } else {
        return `$${amount.toFixed(2)}`;
    }
}


getCoins = (cents) => {
    const coins = {
        quarters: 0,
        dimes: 0,
        nickels: 0,
        pennies: 0
    }

    while((cents/25)>=1) {
        cents -= 25;
        coins.quarters++;
    }

    while((cents/10)>=1) {
        cents -= 10;
        coins.dimes++;
    }

    while((cents/5)>=1) {
        cents -= 5;
        coins.nickels++;
    }

    while((cents/1)>=1) {
        cents -= 1;
        coins.pennies++;
    }

    return coins;
}

module.exports = {
    formatCurrency,
    getCoins
};