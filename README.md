# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @SimRai32/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arrayOne, arrayTwo, result)`: Compares two arrays and tells you whether they are equal or not.
* `assertEqual(actual, expected)`: tells you whether two expressions are equal or not. Does not include arrays and objects.
* `assertObjectsEqual(actual, expected)`: Compares two objects and tells you if they are equal or not.
* `countLetters(string)`: Tells you how many there are of each letter in a string.
* `countOnly(allItems, itemsToCount)`: Give an array and any number of items to count and it will return an object with the count of each.
* `eqArrays(arrayOne, arrayTwo)`: returns true or false depending on whether the two arrays are equal.
* `eqObjects(objectOne, objectTwo)`: Compares two objects and returns true or false depending on whether the two objects are equal.
* `findKey(obj, callback)`: finds the key of the object by using a given callback.
* `findKeyByValue(listOfShows, showName)`: find the key of an object by using a given value.
* `flatten(array)`: Takes nested arrays and returns one array with the given values.
* `head(array)`: returns the first value of an array.
* `letterPositions(string)`: returns the indices of each letter that appears once in the string.
* `map(array, callback)`: returns an array that has been changed by the  callback.
* `middle(array)`: gives the middle value(s) of a given array.
* `tail(array)`: returns everything but the first value of an array.
* `takeUntil(array, callback)`: Returns an array of the values up until the callback becomes true.
* `without(arrayOne, arrayTwo)`: returns an array of arrayOne where all values that shared with arrayTwo are excluded.