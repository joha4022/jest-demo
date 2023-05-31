let { Queue, Item, VendingMachine } = require('./index');

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

        expect(oddNumbers).toEqual([9, 7, 13]);
    })
})


let snack1, snack2, vendingMachine;

describe('Vending Machine', () => {
  beforeEach(() => {
  //beforeEach hook runs before every test, creating new instances of Item and VendingMachine for you to use in your tests
    snack1 = new Item('Potato Chips', 1.5, 1);
    snack2 = new Item('Chocolate Bar', 2.5, 2);
    vendingMachine = new VendingMachine();
  })
  // YOUR TEST CASES GO HERE
  test('.seeSelections(): display all available snacks', () => {
    expect(vendingMachine.seeSelections()).toEqual([]);
    vendingMachine.stock(newSnacks = [snack1, snack2]);
    expect(vendingMachine.seeSelections()).toEqual([snack1, snack2]);

  })

  test('.stock: adds input array of snacks to existing snacks', () => {
    vendingMachine.stock(newSnacks = [snack1, snack2])
    expect(vendingMachine.snacks).toEqual([snack1, snack2]);
  })
  
  test('.deposit(): updates existing customerFunds with the amount deposited', () => {
    vendingMachine.deposit(20);
    expect(vendingMachine.customerFunds).toBe(20);
  })

  test('.giveChange(): updates customerFunds to 0 and returns the remaining amount', () => {
    vendingMachine.deposit(20);
    expect(vendingMachine.giveChange()).toBe(20);
    expect(vendingMachine.customerFunds).toBe(0);
  })

  test(`.buy(): updates inventory with bought snacks`, () => {
    vendingMachine.stock(newSnacks = [snack1, snack2]);
    vendingMachine.deposit(20);
    vendingMachine.buy('Potato Chips');
    expect(vendingMachine.snacks).toEqual([snack2]);
    expect(vendingMachine.customerFunds).toBe(0);
  })

  test(`.buy(): updates customerFunds to reflect purchase
            : clears out customerFund by calling giveChange()`, () => {
    vendingMachine.stock(newSnacks = [snack1, snack2]);
    vendingMachine.deposit(20);
    expect(vendingMachine.buy('Potato Chips')).toBe(18.5);
    expect(vendingMachine.customerFunds).toBe(0);
  })

  test(`.buy(): notifies customer if a snack is unavailable`, () => {
    vendingMachine.stock(newSnacks = [snack2]);
    vendingMachine.deposit(20);
    expect(vendingMachine.buy('Potato Chips')).toBe('Potato Chips is not available.');
  })

  test(`.buy(): notifies customer when a snack cost more than available customerFunds`, () => {
    vendingMachine.stock(newSnacks = [snack1, snack2]);
    vendingMachine.deposit(0.5);
    expect(vendingMachine.buy('Potato Chips')).toBe('Not enough funds available');
  })
});