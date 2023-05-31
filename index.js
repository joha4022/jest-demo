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
}

module.exports = Queue;