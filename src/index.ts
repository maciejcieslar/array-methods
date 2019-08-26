import { map } from './map';
import { filter } from './filter';
import { forEach } from './for-each';
import { indexOf } from './index-of';
import { flat } from './flat';
import { flatMap } from './flat-map';
import { findIndex } from 'app/find-index';
import { join } from './join';
import { reverse } from './reverse';
import { slice } from 'app/slice';
import { push } from 'app/push';
import { unshift } from 'app/unshift';
import { shift } from './shift';
import { splice } from 'app/splice';
import { keys } from './keys';
import { values } from './values';
import { entries } from './entries';
import { logOperation } from './log-operation';

logOperation('forEach', [1, 2, 3, 4, 5], array => forEach(array, value => value));

logOperation('map', [1, 2, 3, 4, 5], array => map(array, value => value + 5));

logOperation('filter', [1, 2, 3, 4, 5], array => filter(array, value => value >= 2));

logOperation('indexOf', [1, 2, 3, 4, 5], array => indexOf(array, 5));

logOperation('flatMap', [1, 2, 3, 4, 5], array => flatMap(array, value => [value, value + 1]));

logOperation('flat', [1, 2, 3, [4, 5, [6, [7, [8, [9, [10]]]]]]], array => flat(array, 6));

logOperation('findIndex', [1, 2, 3, 4, 5, 6, 7], array => findIndex(array, value => value === 5));

logOperation('join', ['One', 'two', 'three'], array => join(array, ', '));

logOperation('slice', [1, 2, 3, 4, 5, 6, 7], array => slice(array, 3, 6));

logOperation('push', [1, 2, 3, 4, 5], array => push(array, 6, 7));

logOperation('unshift', [1, 2, 3], array => unshift(array, 4, 5));

logOperation('shift', [1, 2, 3, 4, 5], array => shift(array));

// [1, 2, 3, 4, 5].filter(number => number >= 3);
// // -> [3, 4, 5]

// [1, 2, 3].map(number => number * 5);
// // -> [5, 10, 15]

// console.log(join([1, 2, 3], ', '));

// console.log(entries([1, 2, 3]).next().value);

// console.log(concat([1, 2, 3], [4, 5, 6], 7, [8, 9, 10]));

// console.log(pop([1, 2, 3]));

// const arr = [1, 2, 3];

// console.log(shift(arr));

// console.log(arr);

// const months = ['Jan', 'March', 'April', 'June'];

// splice(months, 1, 0, 'Feb');

// console.log(months);

// splice(months, 4, 1, 'May');

// console.log(months);

// class OwnArray<T> extends Array<T> {
//   public constructor(...args: T[]) {
//     super(...args);
//   }

//   public static create<T>(array: T[]) {
//     return new OwnArray<T>(...array);
//   }

//   public map<N>(fn: (value: T, index: number, thisArg: OwnArray<T>) => N) {
//     const result = [];

//     for (let index = 0; index < this.length; index += 1) {
//       result[index] = fn(this[index], index, this);
//     }

//     return OwnArray.create<N>(result);
//   }
// }

// const a = new OwnArray(1, 2, 3);

// console.log(
//   a.concat([1, 2, 3]).map(value => {
//     return value + 5;
//   }),
// );

// const valuesBiggerThanTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => value + 5).filter(value => value >= 5);

// function normalizeTodo(todo: any) {
//   return todo;
// }

// function getTodosWithCategory(todos: any[], category: string) {
//   return todos.filter(todo => todo.category === category).map(todo => normalizeTodo(todo));
// }

// // Won't work!
// function getTodosWithCategory(todos: any[], category: string) {
//   return todos.filter(todo => todo.category === category).forEach((value) => console.log(value)).map(todo => normalizeTodo(todo));
// }

console.log([...Array(15)].fill(null));

[1, 2, 3, 4].push(5); // [1, 2, 3, 4, 5]

console.log([1, 2, 3].concat([4, 5], 6, [7, 8]));

console.log(['Brian', 'Matt', 'Kate'].join(', '));

console.log([1, 2, 3].reverse());

console.log([2, 3, 4].unshift(1));

console.log([1, 2, 3].shift());

console.log([1, 2, 3, 4, 5, 6, 7].slice(3, 6));

console.log([1, 2, 3].pop());

console.log([1, 2, 3].includes(3));

console.log([1, 2, 3, 4, 5].some(number => number === 5));

console.log([3, 2, 3].indexOf(3));

const arr = [1, 2, 3, 4, 5];

// arr.splice(0, 2, 3, 4, 5);

// arr; // -> [3, 4, 3, 4, 5]

console.log(arr.splice(0, 2, 3, 4, 5));
console.log(arr);
console.log(splice([1, 2, 3, 4, 5], 0, 2, 3, 4, 5));

const entriesGenerator = entries([1, 2, 3, 4, 5]);

console.log(entriesGenerator.next()); // { value: [0, 1], done: false }

console.log(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce((sum, number) => {
    return sum + number;
  }, 0),
);

console.log([1, 2, 3, [4, 5]].flat(1));
