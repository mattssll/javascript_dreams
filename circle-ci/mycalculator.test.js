const mycalculator = require('./mycalculator')

test('test sum function', sumTest);
function sumTest() {
    expect(mycalculator(3,3,'+')).toBe(6);
}
test('test division function', subTest);
function subTest() {
    expect(mycalculator(2,2,'-')).toBe(0);
}
test('test subtraction function', divTest);
function divTest() {
    expect(mycalculator(50,10,'/')).toBe(5);
}
test('test multiplication function', multTest);
function multTest() {
    expect(mycalculator(5,5,'*')).toBe(25);
}

// another way of writing it
//test('adds 1 + 2 to equal 3', () => {
    //expect(sum(1, 2)).toBe(3);
  //});