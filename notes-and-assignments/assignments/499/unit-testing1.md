Unit Testing Part 1
===================

Create a class called 'Input'. Drive the implementation of this class using tests via PHPUnit.

### Requirements

1. The constructor should take no arguments.
2. Only the constructor should have references to $_POST or $_GET.

### Test 1

Write a test to verify that a get($key) instance method returns data from either $_GET or $_POST for a given key.

### Test 2

Write a test to verify that an all() instance method returns an array of all input data.

### Test 3: 

```
Input::all()
```

Same as Test 2 but as a static method for a facade.