let Queue = require('./index');

test('should "dequeue" itmes in a FIFO (first in first out) order', () => {
    let queue = new Queue();

    queue.enqueue(10);
    queue.enqueue(9);
    queue.enqueue(7);
    expect(queue.dequeue()).toBe(10);
    expect(queue.dequeue()).toBe(9);
})