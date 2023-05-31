let Queue = require('./index.js');

// describe helps us to organize the test by grouping similar tests together
describe('queue test', () => {
    let queue;
    beforeEach(() => {
        queue = new Queue();
        queue.enqueue(10);
        queue.enqueue(9);
        queue.enqueue(7);
        queue.enqueue(400);
        queue.enqueue(13);
        queue.enqueue(8);
    })

    test('should "dequeue" itmes in a FIFO (first in first out) order', () => {
        expect(queue.dequeue()).toBe(10);
        expect(queue.dequeue()).toBe(9);
    })

    test('should be able to determine if any values contained in queue are even', () => {
        expect(queue.hasEvenNumbers()).toBe(true);
    })

    test('should remove all even numbers inside of an array', () => {
        let oddNumbers = queue.removeEvenNumbers();

        expect(oddNumbers).toEqual([9,7,13]);
    })
})

