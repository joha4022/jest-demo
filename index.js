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
            return element%2 === 0;
        });
        if(evenElement)
            return true;
        return false;
    }

    removeEvenNumbers() {
        return this._array.filter(number => number % 2 !== 0);
    }
}

module.exports = Queue;