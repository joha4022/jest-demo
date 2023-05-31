class Queue {
    constructor() {
        this._array = [];
    }

    enqueue(value) {
        this._array.push(value);
    }

    dequeue() {
        let value = this._array.shift();
        return value;
    }

    hasEvenNumbers() {
        var evenElement = this._array.find(element => {
            return element % 2 === 0;
        });
        if (evenElement)
            return true;
        return false;
    }

    removeEvenNumbers() {
        return this._array.filter(number => number % 2 !== 0);
    }
}

class Item {
    constructor(name, price, code) {
        this.name = name;
        this.price = price;
        this.code = code;
    }
};

class VendingMachine {
    constructor() {
        this.snacks = []
        this.customerFunds = 0
    }

    seeSelections() {
        // displays all available snacks
        return this.snacks;
    }

    stock(newSnacks = []) {
        // adds input array of snacks to exisitng snacks
        this.snacks = this.snacks.concat(newSnacks);
    }

    deposit(amount) {
        // updates existing customerFunds with the amount deposited
        this.customerFunds += amount;
    }

    giveChange() {
        // updates customerFunds to 0 and returns the remaining amount
        const currentFunds = this.customerFunds;
        this.customerFunds = 0;
        return currentFunds;
    }

    buy(snackName) {
        // updates inventory with bought snacks
        // updates customerFunds to reflect purchase
        // notifies customer if a snack is unavailable
        // notifies customer when a snack costs more than available customerFunds
        // clears out customerFunds by calling giveChange()
        let foundSnack = false;
        for (let i = 0; i < this.snacks.length; i++) {
            let item = this.snacks[i];
            if (item.name === snackName) {
                if (this.customerFunds - item.price < 0) {
                    return 'Not enough funds available';
                }
                foundSnack = true;
                this.customerFunds -= this.snacks[i].price;
                this.snacks.splice(i, 1);
                break;
            }
        }
        if (!foundSnack) {
            return `${snackName} is not available.`;
        }
        return this.giveChange();
    }
}

module.exports.Queue = Queue;
module.exports.Item = Item;
module.exports.VendingMachine = VendingMachine;
