### Calculator Class

Create a _Calculator_ reference type.

```js
var calculator = new Calculator();
calculator.add(1); // 1
calculator.add(4); // 5
calculator.clear(); // 0

calculator.multiply()
```

### Tip Calculator

```js
var tipCalculator = new TipCalculator({
	total: 100,
	pretax: true
});

tipCalculator.getTip(15);
```