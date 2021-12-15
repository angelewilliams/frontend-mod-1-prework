
## Array Methods Sheet
_Section3 Part B work_

Methods
* `pop` this method, you can remove the last item from the array, which changes the length since it is reducing it by one. To execute this, you can use the `arrayName.pop();` it will return with the element that was removed. Calling `pop` on an empty array will return "undefined"

* `push` this method adds another item to the end of the array, and returns the new length os the array since it is additive. You can add one item or multiple at one time. To use `push` you can do `arrayName.push('new item1', 'new item2', true, 4);` You can also use `push` to merge multiple arrays together by doing something like this: `arrayName.push(...otherArray);` In this example, the values from `otherArray` would be added to the end of `arrayName`

* `shift` This method removes the first item in an array and will return the content of that item. This method shifts the values of consecutive items in the array. If `shift` is called on an empty array it also returns "undefined"

* `unshift` adds additional (one or more) items to the beginning of an array, and will return the new length of the array. The syntax is `arrayName.unshift(element0);` OR  `arrayName.unshift(element0, element1, /* ... ,*/ elementN);`
